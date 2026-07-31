/**
 * Client entry: smooth scroll (Lenis) + GSAP scroll reveals, count-ups,
 * magnetic buttons + custom cursor. Persistent bits (Lenis, cursor) init once;
 * per-page bits re-run on Astro view transitions. Everything respects
 * prefers-reduced-motion and coarse pointers.
 */
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const coarsePointer = window.matchMedia("(hover: none), (pointer: coarse)").matches;

document.documentElement.classList.remove("no-js");
document.documentElement.classList.add("js-ready");

/* ---------- Smooth scroll (once) ---------- */
let lenis: Lenis | null = null;
function initSmoothScroll() {
  if (reduceMotion || lenis) return;
  lenis = new Lenis({
    duration: 1.1,
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
  // stagger elements that share a parent
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
    // skip non-countable values (e.g. "40→2 min")
    if (!m || raw.includes("→")) return;
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
          duration: 1.4,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = obj.v.toFixed(decimals) + suffix;
          },
        });
      },
    });
  });
}

/* ---------- Magnetic buttons (per page) ---------- */
function initMagnetic() {
  if (reduceMotion || coarsePointer) return;
  gsap.utils.toArray<HTMLElement>(".btn, [data-magnetic]").forEach((el) => {
    if (el.dataset.magneticBound) return;
    el.dataset.magneticBound = "1";
    const xTo = gsap.quickTo(el, "x", { duration: 0.5, ease: "power3" });
    const yTo = gsap.quickTo(el, "y", { duration: 0.5, ease: "power3" });
    el.addEventListener("pointermove", (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * 0.3);
      yTo((e.clientY - (r.top + r.height / 2)) * 0.3);
    });
    el.addEventListener("pointerleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

/* ---------- Custom cursor ---------- */
let cursorReady = false;
function initCursor() {
  if (reduceMotion || coarsePointer) return;
  const dot = document.querySelector<HTMLElement>(".cursor-dot");
  const ring = document.querySelector<HTMLElement>(".cursor-ring");
  if (!dot || !ring) return;

  if (!cursorReady) {
    const dotX = gsap.quickTo(dot, "x", { duration: 0.15, ease: "power3" });
    const dotY = gsap.quickTo(dot, "y", { duration: 0.15, ease: "power3" });
    const ringX = gsap.quickTo(ring, "x", { duration: 0.4, ease: "power3" });
    const ringY = gsap.quickTo(ring, "y", { duration: 0.4, ease: "power3" });
    window.addEventListener("pointermove", (e) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    });
    cursorReady = true;
  }

  // (re)bind hover growth to interactive elements on the current page
  document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
    if ((el as HTMLElement).dataset.cursorBound) return;
    (el as HTMLElement).dataset.cursorBound = "1";
    el.addEventListener("pointerenter", () => ring.classList.add("is-hover"));
    el.addEventListener("pointerleave", () => ring.classList.remove("is-hover"));
  });
}

/* ---------- Boot ---------- */
function initPage() {
  bindAnchors();
  initReveals();
  initCountups();
  initMagnetic();
  initCursor();
}

function boot() {
  initSmoothScroll();
  initPage();
}

if (document.readyState !== "loading") boot();
else document.addEventListener("DOMContentLoaded", boot);

// After a view transition the DOM is fresh: clear stale triggers, re-init.
document.addEventListener("astro:page-load", () => {
  ScrollTrigger.getAll().forEach((t) => t.kill());
  initPage();
  ScrollTrigger.refresh();
});
