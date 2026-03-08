'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

const roles = [
  'MERN Full-Stack Developer',
  'Next.js Developer',
  'React Developer',
  'MongoDB Expert',
];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = roles[roleIndex];
    if (typing) {
      if (displayed.length < current.length) {
        const t = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), 2000);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => {
          setRoleIndex((roleIndex + 1) % roles.length);
          setTyping(true);
        }, 0);
        return () => clearTimeout(t);
      }
    }
  }, [displayed, typing, roleIndex]);

  return (
    <section id="hero" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '6rem 1rem 4rem' }}>

      <div style={{ maxWidth: '64rem', margin: '0 auto', width: '100%' }}>
        <div className="flex flex-col md:flex-row items-center gap-12">

          <div style={{ flex: 1 }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '9999px', fontSize: '12px', fontWeight: 500, marginBottom: '2rem', background: '#7c3aed15', border: '1px solid #7c3aed40', color: 'var(--accent1)' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80' }} />
              Available for opportunities
            </div>

            <h1 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(3rem, 8vw, 5rem)', fontWeight: 900, lineHeight: 1, marginBottom: '1rem' }}>
              Sahadat
              <br />
              <span style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Hossain
              </span>
            </h1>

            <div style={{ fontSize: '1.25rem', fontWeight: 500, marginBottom: '1.5rem', height: '2rem', color: 'var(--accent2)' }}>
              {displayed}
              <span style={{ animation: 'pulse 1s infinite' }}>|</span>
            </div>

            <p style={{ fontSize: '1rem', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '32rem', color: 'var(--muted)' }}>
              I love building real-world web applications that solve actual problems.
              I believe in working smart, staying calm under pressure, and constantly learning new technologies.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3rem' }}>
              <a href="#projects" style={{ padding: '0.875rem 1.75rem', borderRadius: '0.75rem', fontWeight: 700, color: 'white', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', textDecoration: 'none' }}>
                View My Work
              </a>
              <a href="#contact" style={{ padding: '0.875rem 1.75rem', borderRadius: '0.75rem', fontWeight: 700, color: 'var(--text)', border: '1px solid var(--border)', textDecoration: 'none' }}>
                Contact Me
              </a>
            </div>

            <div style={{ display: 'flex', gap: '2rem' }}>
              {[
                { value: '1+', label: 'Projects Built' },
                { value: '10+', label: 'Technologies' },
                { value: '100%', label: 'Dedication' },
              ].map(function (stat) {
                return (
                  <div key={stat.label}>
                    <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 900, color: 'var(--accent1)' }}>
                      {stat.value}
                    </div>
                    <div style={{ fontSize: '0.75rem', marginTop: '4px', color: 'var(--muted)' }}>
                      {stat.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div style={{ position: 'relative' }}>
            <div style={{ width: '280px', height: '280px', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, borderRadius: '24px', background: 'linear-gradient(135deg, #7c3aed, #06b6d4, #f59e0b)', padding: '3px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '22px', background: 'var(--bg)' }} />
              </div>
              <div style={{ position: 'absolute', inset: '3px', borderRadius: '22px', overflow: 'hidden' }}>
                <Image
                  src="/avatar.jpg"
                  alt="Sahadat Hossain"
                  width={280}
                  height={280}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  priority
                />
              </div>
              <div style={{ position: 'absolute', right: '-24px', top: '32px', padding: '8px 16px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, background: '#7c3aed', color: '#fff' }}>
                Next.js 16 ✨
              </div>
              <div style={{ position: 'absolute', left: '-24px', bottom: '40px', padding: '8px 16px', borderRadius: '12px', fontSize: '12px', fontWeight: 700, background: '#06b6d4', color: '#fff' }}>
                MongoDB 🍃
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}