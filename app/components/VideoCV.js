'use client';

import { useState } from 'react';

const VIDEO_URL = 'https://www.loom.com/embed/84b6cf3401ed4bc08671800f9bfd4090';

const highlights = [
    { icon: '⚡', text: '2+ Years Experience' },
    { icon: '🚀', text: 'Full-Stack Developer' },
    { icon: '🇧🇩', text: 'Based in Bangladesh' },
    { icon: '✅', text: 'Available for Hire' },
];

export default function VideoCV() {
    const [playing, setPlaying] = useState(false);

    return (
        <section id="videocv" style={{ padding: '5rem 1rem', borderTop: '1px solid var(--border)' }}>
            <div style={{ maxWidth: '64rem', margin: '0 auto' }}>

                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent1)' }}>01.5 Video CV</span>
                    <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
                </div>

                <div style={{ display: 'grid', gap: '3rem', alignItems: 'center' }} className="md:grid-cols-2">

                    {/* Left */}
                    <div style={{ animation: 'fadeInLeft 0.6s ease' }}>
                        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', fontWeight: 900, lineHeight: 1.2, marginBottom: '1rem' }}>
                            Meet Me in{' '}
                            <span style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>90 Seconds</span>
                        </h2>
                        <p style={{ fontSize: '15px', color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
                            Skip the boring resume. Watch me introduce myself, walk through my projects,
                            and explain why I&apos;d be a great fit for your team — in under 2 minutes.
                        </p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem', marginBottom: '2rem' }}>
                            {highlights.map(function (h) {
                                return (
                                    <div key={h.text} style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 14px', borderRadius: '10px', background: '#111118', border: '1px solid var(--border)' }}>
                                        <span style={{ fontSize: '1.1rem' }}>{h.icon}</span>
                                        <span style={{ fontSize: '13px', fontWeight: 600, color: 'var(--muted)' }}>{h.text}</span>
                                    </div>
                                );
                            })}
                        </div>

                        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                            <a href="#contact"
                                style={{ padding: '12px 28px', borderRadius: '12px', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', color: 'white', fontSize: '14px', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
                                onMouseEnter={function (e) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px #7c3aed40'; }}
                                onMouseLeave={function (e) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                                Hire Me →
                            </a>
                            <a href="/resume.pdf" download
                                style={{ padding: '12px 24px', borderRadius: '12px', border: '1px solid var(--border)', color: 'var(--muted)', fontSize: '14px', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
                                onMouseEnter={function (e) { e.currentTarget.style.borderColor = '#7c3aed'; e.currentTarget.style.color = '#7c3aed'; }}
                                onMouseLeave={function (e) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}>
                                📄 Resume
                            </a>
                        </div>
                    </div>

                    {/* Right - Video */}
                    <div style={{ animation: 'fadeInRight 0.6s ease' }}>
                        <div style={{ position: 'relative', borderRadius: '20px', overflow: 'hidden', border: '1px solid var(--border)', background: '#111118', aspectRatio: '16/9', boxShadow: '0 24px 60px rgba(124,58,237,0.15)' }}>
                            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #7c3aed, #06b6d4)', zIndex: 2 }} />

                            {playing ? (
                                <iframe
                                    src={VIDEO_URL + '?autoplay=1'}
                                    title="Video CV - Sahadat Hossain"
                                    allowFullScreen
                                    style={{ width: '100%', height: '100%', border: 'none', position: 'absolute', inset: 0 }}
                                />
                            ) : (
                                <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, #0d0d18, #1a0a2e)', position: 'relative', minHeight: '240px', cursor: 'pointer' }}
                                    onClick={function () { setPlaying(true); }}>
                                    <div style={{ position: 'absolute', top: '20%', left: '15%', width: '120px', height: '120px', borderRadius: '50%', background: '#7c3aed20', filter: 'blur(40px)', animation: 'float 4s ease-in-out infinite' }} />
                                    <div style={{ position: 'absolute', bottom: '20%', right: '15%', width: '100px', height: '100px', borderRadius: '50%', background: '#06b6d420', filter: 'blur(30px)', animation: 'float 5s ease-in-out infinite reverse' }} />

                                    {/* Play button */}
                                    <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', marginBottom: '1rem', position: 'relative', zIndex: 1, boxShadow: '0 0 40px #7c3aed50', transition: 'transform 0.2s' }}
                                        onMouseEnter={function (e) { e.currentTarget.style.transform = 'scale(1.1)'; }}
                                        onMouseLeave={function (e) { e.currentTarget.style.transform = 'scale(1)'; }}>
                                        ▶
                                    </div>

                                    <p style={{ fontSize: '14px', fontWeight: 700, color: 'white', marginBottom: '4px', position: 'relative', zIndex: 1 }}>Watch My Video CV</p>
                                    <p style={{ fontSize: '12px', color: '#ffffff70', position: 'relative', zIndex: 1 }}>~90 seconds • Loom</p>

                                    <div style={{ position: 'absolute', bottom: '16px', right: '16px', padding: '4px 10px', borderRadius: '6px', background: 'rgba(0,0,0,0.7)', fontSize: '12px', fontWeight: 700, color: 'white' }}>
                                        1:30
                                    </div>
                                </div>
                            )}
                        </div>
                        <p style={{ fontSize: '12px', color: 'var(--muted)', textAlign: 'center', marginTop: '0.75rem' }}>
                            🎬 Click to play • No sign-in required
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}