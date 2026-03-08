'use client';

const projects = [
  {
    title: 'Get Me a Chai',
    description: 'A full-stack creator support platform for Bangladesh — the local alternative to Buy Me a Coffee. Creators receive support via bKash and Nagad with a complete dashboard, admin panel, and email notifications.',
    tech: ['Next.js 16', 'MongoDB', 'NextAuth.js', 'Cloudinary', 'Nodemailer', 'Tailwind CSS'],
    live: 'https://getme-achai-vert.vercel.app',
    github: 'https://github.com/sahadat772/getmeachai',
    color: '#7c3aed',
    emoji: '☕',
    featured: true,
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

        {projects.map(function(project) {
          return (
            <div key={project.title} style={{ padding: '2rem', borderRadius: '1.5rem', background: '#111118', border: '1px solid var(--border)', marginBottom: '2rem', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '3px', background: 'linear-gradient(90deg, #7c3aed, #06b6d4)' }} />

              <div className="flex flex-col md:flex-row gap-8">
                <div style={{ width: '80px', height: '80px', borderRadius: '1rem', background: project.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '2.5rem', flexShrink: 0 }}>
                  {project.emoji}
                </div>

                <div style={{ flex: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.5rem', fontWeight: 800, color: 'var(--text)' }}>{project.title}</h3>
                    {project.featured && (
                      <span style={{ padding: '4px 12px', borderRadius: '9999px', fontSize: '11px', fontWeight: 700, background: '#7c3aed20', color: '#7c3aed', border: '1px solid #7c3aed40' }}>Featured</span>
                    )}
                  </div>

                  <p style={{ fontSize: '15px', lineHeight: 1.75, color: 'var(--muted)', marginBottom: '1.5rem' }}>{project.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '1.5rem' }}>
                    {project.tech.map(function(t) {
                      return (
                        <span key={t} style={{ padding: '4px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 500, background: 'var(--border)', color: 'var(--muted)' }}>{t}</span>
                      );
                    })}
                  </div>

                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <a href={project.live} target="_blank" rel="noopener noreferrer"
                      style={{ padding: '10px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, color: 'white', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', textDecoration: 'none' }}>
                      Live Demo
                    </a>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      style={{ padding: '10px 24px', borderRadius: '10px', fontSize: '14px', fontWeight: 700, color: 'var(--text)', border: '1px solid var(--border)', textDecoration: 'none' }}>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    </section>
  );
}
