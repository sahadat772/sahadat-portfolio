'use client';

const projects = [
  {
    title: 'Get Me a Chai',
    description: 'A full-stack creator support platform for Bangladesh — the local alternative to Buy Me a Coffee. Creators receive support via bKash and Nagad with a complete dashboard, admin panel, and email notifications.',
    tech: ['Next.js 16', 'MongoDB', 'NextAuth.js', 'Cloudinary', 'Nodemailer', 'Tailwind CSS'],
    live: 'https://getmeachai-kappa.vercel.app/',
    github: 'https://github.com/sahadat772/getmeachai',
    color: '#7c3aed',
    emoji: '☕',
    featured: true,
  },
  {
    title: 'Chakri Khujhi',
    description: 'A full-stack job board platform built for Bangladesh. Job seekers can browse, search, and apply for jobs while companies can post listings and manage applicants — all with role-based dashboards and cloud image uploads.',
    tech: ['Next.js 16', 'MongoDB', 'NextAuth.js', 'Cloudinary', 'Tailwind CSS', 'Nodemailer'],
    live: 'https://chakri-khuji.vercel.app/',
    github: 'https://github.com/sahadat772/chakri-khuji',
    color: '#0891b2',
    emoji: '💼',
    featured: true,
  },
  {
    title: 'SecureNexus',
    description: 'A cybersecurity analytics dashboard with real-time threat monitoring, vulnerability tracking, and security event logs. Features Google OAuth, role-based access control, and a fully responsive dark UI.',
    tech: ['Next.js', 'MongoDB', 'NextAuth.js', 'Recharts', 'Tailwind CSS'],
    live: 'https://securenexus-final.vercel.app/',
    github: 'https://github.com/sahadat772/securenexus-final',
    color: '#10b981',
    emoji: '🛡️',
    featured: false,
  },
];

export default function Projects() {
  return (
    <section id="projects" style={{ padding: '8rem 1rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent1)' }}>03. Projects</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>
          Things I Have
          <span style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginLeft: '12px' }}>Built</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '4rem' }}>Real-world projects that solve actual problems.</p>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {projects.map(function (project, i) {
            return (
              <div key={project.title}
                style={{ padding: '2rem', borderRadius: '1.5rem', background: '#111118', border: '1px solid var(--border)', position: 'relative', overflow: 'hidden', transition: 'border-color 0.2s, transform 0.2s', animation: 'fadeInUp 0.5s ease both', animationDelay: (i * 0.15) + 's' }}
                onMouseEnter={function (e) { e.currentTarget.style.borderColor = project.color + '60'; e.currentTarget.style.transform = 'translateY(-3px)'; }}
                onMouseLeave={function (e) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateY(0)'; }}>

                {/* Top color bar */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, ' + project.color + ', #06b6d4)' }} />

                <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>

                  {/* Icon */}
                  <div style={{ width: '72px', height: '72px', borderRadius: '16px', background: project.color + '20', border: '1px solid ' + project.color + '40', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.2rem', flexShrink: 0 }}>
                    {project.emoji}
                  </div>

                  <div style={{ flex: 1, minWidth: '240px' }}>
                    {/* Title + badge */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                      <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.4rem', fontWeight: 800, color: 'white' }}>{project.title}</h3>
                      {project.featured && (
                        <span style={{ padding: '3px 10px', borderRadius: '99px', fontSize: '11px', fontWeight: 700, background: project.color + '20', color: project.color, border: '1px solid ' + project.color + '40' }}>
                          ⭐ Featured
                        </span>
                      )}
                    </div>

                    <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--muted)', marginBottom: '1.25rem' }}>{project.description}</p>

                    {/* Tech stack */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '1.5rem' }}>
                      {project.tech.map(function (t) {
                        return (
                          <span key={t} style={{ padding: '4px 10px', borderRadius: '7px', fontSize: '12px', fontWeight: 600, background: project.color + '15', color: project.color, border: '1px solid ' + project.color + '30' }}>
                            {t}
                          </span>
                        );
                      })}
                    </div>

                    {/* Links */}
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                      <a href={project.live} target="_blank" rel="noopener noreferrer"
                        style={{ padding: '9px 22px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, color: 'white', background: 'linear-gradient(135deg, ' + project.color + ', #06b6d4)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
                        onMouseEnter={function (e) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 6px 20px ' + project.color + '40'; }}
                        onMouseLeave={function (e) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
                        🔗 Live Demo
                      </a>
                      <a href={project.github} target="_blank" rel="noopener noreferrer"
                        style={{ padding: '9px 22px', borderRadius: '10px', fontSize: '13px', fontWeight: 700, color: 'var(--muted)', border: '1px solid var(--border)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '6px', transition: 'all 0.2s' }}
                        onMouseEnter={function (e) { e.currentTarget.style.borderColor = project.color; e.currentTarget.style.color = project.color; }}
                        onMouseLeave={function (e) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.color = 'var(--muted)'; }}>
                        GitHub →
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
