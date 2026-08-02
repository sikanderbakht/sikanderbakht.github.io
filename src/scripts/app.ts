/**
 * Client entry: smooth scroll (Lenis) + subtle GSAP scroll reveals and metric
 * count-ups. Per-page bits re-run on Astro view transitions. Everything
 * respects prefers-reduced-motion.
 */
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js-ready");

/* ---------- Smooth scroll (once) ---------- */
let lenis: Lenis | null = null;
function initSmoothScroll() {
  if (reduceMotion || lenis) return;
  lenis = new Lenis({
    duration: 1.05,
    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((time: number) => lenis!.raf(time * 1000));
  gsap.ticker.lagSmoothing(0);
}

function bindAnchors() {
  document.querySelectorAll<HTMLAnchorElement>('a[href^="/#"], a[href^="#"]').forEach((a) => {
    a.addEventListener("click", (e) => {
      const raw = a.getAttribute("href") || "";
      const id = raw.slice(raw.indexOf("#"));
      if (id.length < 2) return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      if (lenis) lenis.scrollTo(target as HTMLElement, { offset: -80 });
      else (target as HTMLElement).scrollIntoView({ behavior: "auto" });
    });
  });
}

/* ---------- Scroll reveals (per page) with sibling stagger ---------- */
function initReveals() {
  const els = gsap.utils.toArray<HTMLElement>(".reveal:not(.is-in)");
  if (reduceMotion) {
    els.forEach((el) => el.classList.add("is-in"));
    return;
  }
  const seen = new Map<Element, number>();
  els.forEach((el) => {
    const parent = el.parentElement;
    if (!parent) return;
    const i = seen.get(parent) ?? 0;
    seen.set(parent, i + 1);
    el.style.transitionDelay = `${Math.min(i, 6) * 70}ms`;
    ScrollTrigger.create({
      trigger: el,
      start: "top 88%",
      once: true,
      onEnter: () => el.classList.add("is-in"),
    });
  });
}

/* ---------- Metric count-ups (per page) ---------- */
function initCountups() {
  const els = gsap.utils.toArray<HTMLElement>("[data-countup]");
  els.forEach((el) => {
    if (el.dataset.counted) return;
    const raw = (el.textContent || "").trim();
    const m = raw.match(/^([\d.]+)(.*)$/s);
    if (!m || raw.includes("→")) return; // skip non-countable values
    el.dataset.counted = "1";
    if (reduceMotion) return;

    const target = parseFloat(m[1]);
    const decimals = (m[1].split(".")[1] || "").length;
    const suffix = m[2];
    const obj = { v: 0 };
    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          v: target,
          duration: 1.3,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = obj.v.toFixed(decimals) + suffix;
          },
        });
      },
    });
  });
}

/* ---------- Boot ---------- */
function initPage() {
  bindAnchors();
  initReveals();
  initCountups();
}

function boot() {
  initSmoothScroll();
  initPage();
}

if (document.readyState !== "loading") boot();
else document.addEventListener("DOMContentLoaded", boot);

document.addEventListener("astro:page-load", () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  initPage();
  ScrollTrigger.refresh();
});
