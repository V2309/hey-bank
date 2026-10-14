import React, { useEffect, useRef } from 'react';
import {
  MatteBlackVisaCard,
  SilverMastercard,
  DeepBlueVisaCard,
  FrostedGlassCard
} from './FloatingBankCards';
import { MainPhoneMockup } from './MainPhoneMockup';
import { CardsPhoneMockup } from './CardsPhoneMockup';
import { AnalyticsPhoneMockup } from './AnalyticsPhoneMockup';
import { gsap, ScrollTrigger } from '../../utils/gsapInit';

export const ProductShowcaseStage: React.FC = () => {
  const stageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced || !stageRef.current) return;

    const ctx = gsap.context(() => {
      // 1. Initial 3D Orientations
      gsap.set('.showcase-main-phone', {
        transformPerspective: 1400,
        rotateY: -5,
        rotateX: 6,
        rotateZ: -1,
        transformOrigin: 'center center',
      });

      gsap.set('.showcase-cards-phone', {
        transformPerspective: 1400,
        rotateX: 24,
        rotateY: 16,
        rotateZ: -12,
        transformOrigin: 'center center',
      });

      gsap.set('.showcase-analytics-phone', {
        transformPerspective: 1400,
        rotateX: 16,
        rotateY: -10,
        rotateZ: 16,
        transformOrigin: 'center center',
      });

      gsap.set('.showcase-card-black', {
        transformPerspective: 1200,
        rotateZ: -15,
        rotateY: 10,
        rotateX: 12,
      });

      gsap.set('.showcase-card-silver', {
        transformPerspective: 1200,
        rotateZ: -7,
        rotateY: 8,
        rotateX: 14,
      });

      gsap.set('.showcase-card-blue', {
        transformPerspective: 1200,
        rotateZ: -14,
        rotateY: -10,
        rotateX: 18,
      });

      gsap.set('.showcase-card-glass', {
        transformPerspective: 1200,
        rotateZ: -10,
        rotateY: -6,
        rotateX: 14,
      });

      // 2. ScrollTrigger Stagger Entrance
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: stageRef.current,
          start: 'top 82%',
          once: true,
        },
      });

      tl.fromTo(
        '.showcase-main-phone',
        { opacity: 0, scale: 0.9, y: 50 },
        { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }
      )
        .fromTo(
          ['.showcase-card-black', '.showcase-card-silver'],
          { opacity: 0, x: -40, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' },
          '-=0.5'
        )
        .fromTo(
          ['.showcase-cards-phone', '.showcase-analytics-phone', '.showcase-card-blue', '.showcase-card-glass'],
          { opacity: 0, x: 40, scale: 0.9 },
          { opacity: 1, x: 0, scale: 1, duration: 0.7, stagger: 0.1, ease: 'power3.out' },
          '-=0.6'
        );

      // 3. Gentle, Super Smooth GSAP Floating Loop (Yoyo Sine)
      gsap.to('.showcase-main-phone', {
        y: '-=10',
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.8,
      });

      gsap.to('.showcase-cards-phone', {
        y: '-=8',
        duration: 2.8,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1,
      });

      gsap.to('.showcase-analytics-phone', {
        y: '-=10',
        duration: 3.4,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.2,
      });

      gsap.to('.showcase-card-black', {
        y: '-=12',
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 0.9,
      });

      gsap.to('.showcase-card-silver', {
        y: '-=8',
        duration: 2.6,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.1,
      });

      gsap.to('.showcase-card-blue', {
        y: '-=10',
        duration: 3.2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.3,
      });

      gsap.to('.showcase-card-glass', {
        y: '-=12',
        duration: 2.9,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1.4,
      });
    }, stageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={stageRef}
      className="relative mt-4 sm:mt-6 rounded-[24px] sm:rounded-[32px] overflow-hidden min-h-[580px] sm:min-h-[660px] lg:min-h-[720px] select-none flex items-center justify-center"
    >
      {/* Seamless Studio Floor Depth & Warm Ambient Lighting */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 inset-x-0 h-[28%] sm:h-[26%] bg-gradient-to-t from-white/60 via-white/30 to-transparent border-t border-black/[0.04]" />
        <div className="absolute top-[20%] left-[25%] w-[380px] h-[380px] bg-rose-200/30 rounded-full blur-2xl" />
        <div className="absolute top-[25%] right-[20%] w-[420px] h-[420px] bg-indigo-200/30 rounded-full blur-2xl" />
        <div className="absolute bottom-[20%] left-[10%] w-[300px] h-[300px] bg-amber-100/35 rounded-full blur-2xl" />
      </div>

      {/* Realistic Ambient Occlusion Ground Shadows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        <div className="absolute bottom-[10%] sm:bottom-[12%] left-[20%] sm:left-[26%] w-[260px] sm:w-[320px] h-10 bg-black/20 rounded-[100%] blur-xl transform rotate-[-4deg]" />
        <div className="absolute bottom-[20%] sm:bottom-[22%] right-[10%] sm:right-[16%] w-[240px] sm:w-[300px] h-9 bg-black/15 rounded-[100%] blur-xl transform rotate-[-12deg]" />
        <div className="absolute bottom-[6%] sm:bottom-[8%] right-[14%] sm:right-[22%] w-[220px] sm:w-[280px] h-10 bg-black/20 rounded-[100%] blur-xl transform rotate-[14deg]" />
        <div className="absolute bottom-[16%] sm:bottom-[18%] left-[6%] sm:left-[10%] w-[160px] h-7 bg-black/15 rounded-[100%] blur-lg transform rotate-[-6deg]" />
        <div className="absolute bottom-[10%] sm:bottom-[12%] right-[4%] sm:right-[8%] w-[150px] h-7 bg-black/10 rounded-[100%] blur-lg transform rotate-[-10deg]" />
      </div>

      {/* 3D Floating Items Composition Canvas */}
      <div className="relative z-20 w-full max-w-6xl h-[560px] sm:h-[640px] lg:h-[700px] mx-auto">
        {/* Floating Bank Cards */}
        <MatteBlackVisaCard />
        <SilverMastercard />
        <DeepBlueVisaCard />
        <FrostedGlassCard />

        {/* Floating 3D Phone Mockups */}
        <MainPhoneMockup />
        <CardsPhoneMockup />
        <AnalyticsPhoneMockup />
      </div>
    </div>
  );
};
