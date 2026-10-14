import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from './gsapInit';

interface ScrollRevealOptions {
  /** CSS selector for child elements to animate */
  selector: string;
  /** Stagger delay between each child (seconds) */
  stagger?: number;
  /** Y offset to animate from (pixels) */
  yOffset?: number;
  /** Animation duration (seconds) */
  duration?: number;
  /** ScrollTrigger start position */
  start?: string;
  /** Whether to animate only once */
  once?: boolean;
}

/**
 * Hook that applies GSAP stagger-reveal animation to children
 * matching a CSS selector within a container ref.
 * Respects prefers-reduced-motion.
 */
export function useScrollReveal<T extends HTMLElement>(
  options: ScrollRevealOptions
) {
  const containerRef = useRef<T>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !containerRef.current) return;

    const items = containerRef.current.querySelectorAll(options.selector);
    if (items.length === 0) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        items,
        {
          y: options.yOffset ?? 40,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: options.duration ?? 0.7,
          stagger: options.stagger ?? 0.1,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: containerRef.current,
            start: options.start ?? 'top 85%',
            once: options.once ?? true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return containerRef;
}

/**
 * Hook that animates a number counting up from 0 to its target value
 * when the element scrolls into view.
 */
export function useCountUp(targetValue: number, suffix: string = '') {
  const elRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !elRef.current) {
      if (elRef.current) {
        elRef.current.textContent = `${targetValue}${suffix}`;
      }
      return;
    }

    const obj = { val: 0 };
    const ctx = gsap.context(() => {
      gsap.to(obj, {
        val: targetValue,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: elRef.current,
          start: 'top 85%',
          once: true,
        },
        onUpdate: () => {
          if (elRef.current) {
            // Format: if value > 999, keep decimal; else integer
            const formatted = obj.val >= 1000
              ? Math.round(obj.val).toLocaleString()
              : Number.isInteger(targetValue)
                ? Math.round(obj.val).toString()
                : obj.val.toFixed(1);
            elRef.current.textContent = `${formatted}${suffix}`;
          }
        },
      });
    });

    return () => ctx.revert();
  }, [targetValue, suffix]);

  return elRef;
}

/**
 * Simple fade-in on scroll for a single section container
 */
export function useSectionFadeIn<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !ref.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ref.current,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power3.out',
          clearProps: 'transform,opacity',
          scrollTrigger: {
            trigger: ref.current,
            start: 'top 88%',
            once: true,
          },
        }
      );
    }, ref);

    return () => ctx.revert();
  }, []);

  return ref;
}
