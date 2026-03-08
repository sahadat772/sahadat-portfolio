'use client';

import { useState, useEffect } from 'react';

const links = ['About', 'Skills', 'Projects', 'Experience', 'Contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getHref = (link) => {
    return '#' + link.toLowerCase();
  };

  return (
    <nav className={scrolled ? 'fixed top-0 left-0 right-0 z-50 py-3' : 'fixed top-0 left-0 right-0 z-50 py-6'}>
      <div className={scrolled ? 'mx-4 md:mx-auto md:max-w-5xl rounded-2xl px-6 py-3 flex items-center justify-between bg-[#111118] border border-[#1e1e2e]' : 'mx-4 md:mx-auto md:max-w-5xl rounded-2xl px-6 py-3 flex items-center justify-between'}>

        <a href="#" style={{ fontFamily: 'Syne, sans-serif', fontWeight: 'bold', fontSize: '1.25rem' }}>
          <span style={{ color: 'white' }}>SH</span>
          <span style={{ color: 'var(--accent1)' }}>.</span>
        </a>

        <div style={{ display: 'none' }} className="md:flex items-center gap-8">
          {links.map(function(link) {
            return (
              <a
                key={link}
                href={getHref(link)}
                className="text-sm font-medium"
                style={{ color: active === link ? 'var(--accent2)' : 'var(--muted)' }}
                onMouseEnter={function() { setActive(link); }}
                onMouseLeave={function() { setActive(''); }}
              >
                {link}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex items-center gap-3 px-3 ">
          <a href="/resume.pdf" 
             download
             style={{borderColor: 'var(--accent1)', color: 'var(--accent1)', padding: '10px 24px', borderRadius: '12px', border: '1px solid', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block'}}
          >
            Resume
          </a>


          <a
            href="#contact"
            className="text-sm font-semibold px-5 py-2.5 rounded text-white"
            style={{ background: 'var(--gradient)', color: 'white', padding: '10px 24px', borderRadius: '12px', fontSize: '14px', fontWeight: 700, textDecoration: 'none', display: 'inline-block'}}
          >
            Hire Me
          </a>
        </div>

        <button
          onClick={function() { setMenuOpen(!menuOpen); }}
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
          <span className="block h-0.5 w-6 bg-white" />
        </button>
      </div>

      {menuOpen && (
        <div className="mx-4 mt-2 rounded-2xl p-6 flex flex-col gap-4" style={{ background: '#111118', border: '1px solid var(--border)' }}>
          {links.map(function(link) {
            return (
              <a
                key={link}
                href={getHref(link)}
                onClick={function() { setMenuOpen(false); }}
                className="text-sm font-medium py-2"
                style={{ color: 'var(--muted)' }}
              >
                {link}
              </a>
            );
          })}
        </div>
      )}
    </nav>
  );
}