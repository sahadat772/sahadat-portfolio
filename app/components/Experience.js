'use client';

const timeline = [
  {
    year: '2024 — Present',
    title: 'Self-Taught Full-Stack Developer',
    company: 'Independent',
    color: '#7c3aed',
    description: 'Learned MERN stack development through online resources, built real-world projects, and developed a production-ready platform deployed on Vercel.',
    skills: ['Next.js', 'React', 'MongoDB', 'NextAuth.js', 'Tailwind CSS'],
  },
  {
    year: '2024',
    title: 'Built Get Me a Chai',
    company: 'Personal Project',
    color: '#06b6d4',
    description: 'Designed and developed a full-stack creator support platform for Bangladesh with authentication, payments, admin panel, and email notifications.',
    skills: ['Full-Stack', 'Auth', 'Payments', 'Admin Panel', 'Email'],
  },
  {
    year: '2020 — 2024',
    title: 'Bachelor of Arts',
    company: 'University',
    color: '#f59e0b',
    description: 'Completed Bachelor of Arts degree while discovering passion for web development and technology.',
    skills: ['Research', 'Problem Solving', 'Communication'],
  },
];

export default function Experience() {
  return (
    <section id="experience" style={{ padding: '8rem 1rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent1)' }}>04. Experience</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>
          My
          <span style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginLeft: '12px' }}>Journey</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '4rem' }}>My path from learning to building real-world applications.</p>

        <div style={{ position: 'relative' }}>
          <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #7c3aed, #06b6d4, transparent)' }} />

          {timeline.map(function(item, i) {
            return (
              <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '2.5rem', paddingLeft: '1rem' }}>
                <div style={{ flexShrink: 0, paddingTop: '4px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: item.color, border: '3px solid var(--bg)', position: 'relative', zIndex: 1 }} />
                </div>
                <div style={{ flex: 1, padding: '1.5rem', borderRadius: '1rem', background: '#111118', border: '1px solid var(--border)' }}>
                  <div style={{ fontSize: '12px', color: item.color, fontWeight: 700, marginBottom: '6px', fontFamily: 'monospace' }}>{item.year}</div>
                  <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 800, color: 'var(--text)', marginBottom: '4px' }}>{item.title}</h3>
                  <div style={{ fontSize: '13px', color: 'var(--muted)', marginBottom: '0.75rem' }}>{item.company}</div>
                  <p style={{ fontSize: '14px', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '1rem' }}>{item.description}</p>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.skills.map(function(skill) {
                      return (
                        <span key={skill} style={{ padding: '4px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 600, background: item.color + '20', color: item.color }}>{skill}</span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ padding: '2rem', borderRadius: '1rem', background: 'linear-gradient(135deg, #7c3aed15, #06b6d415)', border: '1px solid #7c3aed30', textAlign: 'center', marginTop: '2rem' }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🚀</div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: 'var(--text)' }}>Looking for My Next Opportunity</h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '1.5rem' }}>I am actively seeking internship or junior developer positions where I can contribute and grow.</p>
          <a href="#contact" style={{ display: 'inline-block', padding: '12px 32px', borderRadius: '12px', fontWeight: 700, color: 'white', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', textDecoration: 'none' }}>
            Let us Talk
          </a>
        </div>

      </div>
    </section>
  );
}
