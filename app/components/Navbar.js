'use client';

import { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');
  const [isMobile, setIsMobile] = useState(false);

  useEffect(function () {
    function onScroll() {
      setScrolled(window.scrollY > 50);
      // Scroll spy
      for (let i = links.length - 1; i >= 0; i--) {
        const el = document.getElementById(links[i].toLowerCase());
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(links[i]);
          return;
        }
      }
      setActive('');
    }
    function onResize() { setIsMobile(window.innerWidth < 768); }
    onResize();
    window.addEventListener('scroll', onScroll);
    window.addEventListener('resize', onResize);
    return function () {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  function handleClick(e, link) {
    e.preventDefault();
    setMenuOpen(false);
    const el = document.getElementById(link.toLowerCase());
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  return (
    <nav style={{
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50,
      padding: scrolled ? '0.75rem 1rem' : '2rem 1rem',
      transition: 'padding 0.3s ease',
    }}>
      {/* Main bar */}
      <div style={{
        maxWidth: '64rem', margin: '0 auto',
        padding: '0.75rem 1.5rem',
        borderRadius: '16px',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        background: scrolled ? 'rgba(17,17,24,0.85)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        border: scrolled ? '1px solid #1e1e2e' : '1px solid transparent',
        transition: 'all 0.3s ease',
        boxShadow: scrolled ? '0 4px 32px rgba(0,0,0,0.3)' : 'none',
      }}>

        {/* Logo */}
        <a href="#" onClick={function (e) { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          style={{ fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: '1.25rem', textDecoration: 'none' }}>
          <span style={{ color: 'white' }}>SH</span>
          <span style={{ color: 'var(--accent1)', fontSize: '1.5rem' }}>.</span>
        </a>

        {/* Desktop links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            {links.map(function (link) {
              const isActive = active === link;
              return (
                <a key={link} href={'#' + link.toLowerCase()} onClick={function (e) { handleClick(e, link); }}
                  style={{
                    fontSize: '14px', fontWeight: 600, textDecoration: 'none',
                    color: isActive ? 'var(--accent2)' : 'var(--muted)',
                    transition: 'color 0.2s',
                    position: 'relative',
                    paddingBottom: '2px',
                  }}
                  onMouseEnter={function (e) { if (!isActive) e.currentTarget.style.color = 'white'; }}
                  onMouseLeave={function (e) { if (!isActive) e.currentTarget.style.color = 'var(--muted)'; }}>
                  {link}
                  {isActive && (
                    <span style={{ position: 'absolute', bottom: '-4px', left: 0, right: 0, height: '2px', background: 'var(--gradient)', borderRadius: '99px' }} />
                  )}
                </a>
              );
            })}
          </div>
        )}

        {/* Desktop CTA */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="/resume.pdf" download
              style={{ padding: '9px 22px', borderRadius: '10px', border: '1px solid var(--accent1)', color: 'var(--accent1)', fontSize: '14px', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={function (e) { e.currentTarget.style.background = 'var(--accent1)'; e.currentTarget.style.color = 'white'; }}
              onMouseLeave={function (e) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--accent1)'; }}>
              Resume
            </a>
            <a href="#contact" onClick={function (e) { handleClick(e, 'Contact'); }}
              style={{ padding: '9px 22px', borderRadius: '10px', background: 'var(--gradient)', color: 'white', fontSize: '14px', fontWeight: 700, textDecoration: 'none', transition: 'all 0.2s' }}
              onMouseEnter={function (e) { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
              onMouseLeave={function (e) { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = 'translateY(0)'; }}>
              Hire Me
            </a>
          </div>
        )}

        {/* Mobile hamburger */}
        {isMobile && (
          <button onClick={function () { setMenuOpen(function (o) { return !o; }); }}
            style={{ display: 'flex', flexDirection: 'column', gap: '5px', padding: '8px', background: 'none', border: 'none', cursor: 'pointer' }}>
            <span style={{ display: 'block', height: '2px', width: '22px', background: menuOpen ? 'var(--accent2)' : 'white', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }} />
            <span style={{ display: 'block', height: '2px', width: '22px', background: menuOpen ? 'transparent' : 'white', borderRadius: '2px', transition: 'all 0.2s', opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: 'block', height: '2px', width: '22px', background: menuOpen ? 'var(--accent2)' : 'white', borderRadius: '2px', transition: 'all 0.2s', transform: menuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }} />
          </button>
        )}
      </div>

      {/* Mobile dropdown */}
      {isMobile && menuOpen && (
        <div style={{
          maxWidth: '64rem', margin: '8px auto 0',
          padding: '1rem',
          borderRadius: '16px',
          background: 'rgba(17,17,24,0.95)',
          backdropFilter: 'blur(20px)',
          border: '1px solid #1e1e2e',
          display: 'flex', flexDirection: 'column', gap: '4px',
          animation: 'fadeInDown 0.2s ease',
        }}>
          {links.map(function (link) {
            const isActive = active === link;
            return (
              <a key={link} href={'#' + link.toLowerCase()} onClick={function (e) { handleClick(e, link); }}
                style={{
                  padding: '10px 14px', borderRadius: '10px',
                  fontSize: '14px', fontWeight: 600,
                  color: isActive ? 'var(--accent2)' : 'var(--muted)',
                  textDecoration: 'none',
                  background: isActive ? 'rgba(139,92,246,0.1)' : 'transparent',
                  transition: 'all 0.15s',
                }}>
                {link}
              </a>
            );
          })}
          <div style={{ borderTop: '1px solid #1e1e2e', paddingTop: '0.75rem', marginTop: '0.25rem', display: 'flex', gap: '8px' }}>
            <a href="/resume.pdf" download
              style={{ flex: 1, padding: '10px', borderRadius: '10px', border: '1px solid var(--accent1)', color: 'var(--accent1)', fontSize: '14px', fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>
              Resume
            </a>
            <a href="#contact" onClick={function (e) { handleClick(e, 'Contact'); }}
              style={{ flex: 1, padding: '10px', borderRadius: '10px', background: 'var(--gradient)', color: 'white', fontSize: '14px', fontWeight: 700, textDecoration: 'none', textAlign: 'center' }}>
              Hire Me
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}