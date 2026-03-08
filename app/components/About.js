'use client';

export default function About() {
  const cards = [
    { icon: '🎓', title: 'Education', value: 'Bachelor of Arts', sub: 'Graduate' },
    { icon: '💻', title: 'Focus', value: 'Full-Stack Dev', sub: 'MERN Stack' },
    { icon: '📍', title: 'Location', value: 'Bangladesh', sub: 'Remote Ready' },
    { icon: '🚀', title: 'Status', value: 'Open to Work', sub: 'Internship / Junior' },
  ];

  const socialLinks = [
    { label: 'GitHub', href: 'https://github.com/sahadat772', icon: '⚡' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahadat-hossain-350208209/', icon: '💼' },
    { label: 'Email', href: 'mailto:mohammadsahadathossain381@gmail.com', icon: '✉️' },
  ];

  return (
    <section id="about" style={{ padding: '8rem 1rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent1)' }}>01. About Me</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div className="flex flex-col md:flex-row gap-16 items-center">

          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '1.5rem' }}>
              Passionate about
              <span style={{ display: 'block', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                building things.
              </span>
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', color: 'var(--muted)', fontSize: '1rem', lineHeight: 1.75 }}>
              <p>I completed my <span style={{ color: 'var(--text)' }}>Bachelor of Arts</span> and discovered my true passion — building web applications that solve real problems.</p>
              <p>I love the process of creating something from scratch, researching new technologies, and finding elegant solutions to complex challenges.</p>
              <p>I believe in <span style={{ color: 'var(--accent2)' }}>working smart</span>, maintaining a calm mindset under pressure, and delivering quality work consistently.</p>
              <p>Currently looking for an <span style={{ color: 'var(--accent3)' }}>internship or junior developer</span> position where I can contribute, grow, and make an impact.</p>
            </div>

            <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem', flexWrap: 'wrap' }}>
              {socialLinks.map(function(link) {
                return (
                  <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: 500, border: '1px solid var(--border)', color: 'var(--muted)', textDecoration: 'none' }}>
                    <span>{link.icon}</span>
                    {link.label}
                  </a>
                );
              })}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', minWidth: '300px' }}>
            {cards.map(function(card, i) {
              return (
                <div key={i} style={{ padding: '1.25rem', borderRadius: '1rem', background: '#111118', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>{card.icon}</div>
                  <div style={{ fontSize: '11px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '4px' }}>{card.title}</div>
                  <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--text)' }}>{card.value}</div>
                  <div style={{ fontSize: '12px', marginTop: '4px', color: 'var(--accent2)' }}>{card.sub}</div>
                </div>
              );
            })}
            <div style={{ gridColumn: '1 / -1', padding: '1.25rem', borderRadius: '1rem', background: '#7c3aed10', border: '1px solid #7c3aed40' }}>
              <div style={{ fontSize: '2rem', color: 'var(--accent1)', marginBottom: '8px' }}>&ldquo;</div>
              <p style={{ fontSize: '14px', fontStyle: 'italic', lineHeight: 1.75, color: 'var(--muted)' }}>A cool mind solves more problems than a hot head ever could.</p>
              <p style={{ fontSize: '12px', marginTop: '12px', fontWeight: 700, color: 'var(--accent1)' }}>— Sahadat Hossain</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
