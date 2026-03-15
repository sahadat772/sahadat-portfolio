'use client';

const timeline = [
  {
    year: '2024 — Present',
    title: 'Self-Taught Full-Stack Developer',
    company: 'Independent',
    color: '#7c3aed',
    description: 'Learned MERN stack development through online resources, built multiple production-ready projects deployed on Vercel with real users.',
    skills: ['Next.js', 'React', 'MongoDB', 'NextAuth.js', 'Tailwind CSS'],
  },
  {
    year: '2025',
    title: 'Built Get Me a Chai',
    company: 'Personal Project • Live on Vercel',
    color: '#7c3aed',
    description: 'Designed and developed a full-stack creator support platform for Bangladesh — a local alternative to Buy Me a Coffee. Features bKash/Nagad payments, admin panel, Cloudinary uploads, and email notifications.',
    skills: ['Full-Stack', 'NextAuth', 'Payments', 'Cloudinary', 'Nodemailer'],
    link: 'https://getmeachai-kappa.vercel.app/',
  },
  {
    year: '2025',
    title: 'Built Chakri Khujhi',
    company: 'Personal Project • Live on Vercel',
    color: '#0891b2',
    description: 'Built a complete job board platform for Bangladesh with role-based dashboards for job seekers and companies, resume/logo uploads, applicant management, and email notifications.',
    skills: ['Job Board', 'Role-Based Auth', 'File Upload', 'Dashboard', 'REST API'],
    link: 'https://chakri-khuji.vercel.app/',
  },
  {
    year: '2024',
    title: 'Built SecureNexus Dashboard',
    company: 'Personal Project • Live on Vercel',
    color: '#10b981',
    description: 'Developed a cybersecurity analytics dashboard with real-time threat monitoring, vulnerability tracking, and security event logs. Features Google OAuth and role-based access control.',
    skills: ['Dashboard', 'Google OAuth', 'Recharts', 'Security UI', 'Next.js'],
    link: 'https://securenexus-final.vercel.app/',
  },
  {
    year: '2020 — 2024',
    title: 'Bachelor of Arts',
    company: 'University',
    color: '#f59e0b',
    description: 'Completed Bachelor of Arts degree while discovering a passion for web development and technology.',
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
          {/* Timeline line */}
          <div style={{ position: 'absolute', left: '20px', top: 0, bottom: 0, width: '2px', background: 'linear-gradient(to bottom, #7c3aed, #0891b2, #10b981, #f59e0b, transparent)' }} />

          {timeline.map(function (item, i) {
            return (
              <div key={i} style={{ display: 'flex', gap: '2rem', marginBottom: '2rem', paddingLeft: '1rem', animation: 'fadeInUp 0.5s ease both', animationDelay: (i * 0.1) + 's' }}>

                {/* Dot */}
                <div style={{ flexShrink: 0, paddingTop: '6px' }}>
                  <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: item.color, border: '3px solid #0a0a0f', position: 'relative', zIndex: 1, boxShadow: '0 0 12px ' + item.color + '60' }} />
                </div>

                {/* Card */}
                <div style={{ flex: 1, padding: '1.5rem', borderRadius: '16px', background: '#111118', border: '1px solid var(--border)', transition: 'border-color 0.2s, transform 0.2s' }}
                  onMouseEnter={function (e) { e.currentTarget.style.borderColor = item.color + '60'; e.currentTarget.style.transform = 'translateX(4px)'; }}
                  onMouseLeave={function (e) { e.currentTarget.style.borderColor = 'var(--border)'; e.currentTarget.style.transform = 'translateX(0)'; }}>

                  {/* Top bar */}
                  <div style={{ height: '2px', background: item.color, borderRadius: '99px', marginBottom: '1rem', width: '40px' }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '8px', marginBottom: '6px' }}>
                    <div>
                      <div style={{ fontSize: '12px', color: item.color, fontWeight: 700, marginBottom: '4px', fontFamily: 'monospace' }}>{item.year}</div>
                      <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.1rem', fontWeight: 800, color: 'white', marginBottom: '2px' }}>{item.title}</h3>
                      <div style={{ fontSize: '13px', color: 'var(--muted)' }}>{item.company}</div>
                    </div>
                    {item.link && (
                      <a href={item.link} target="_blank" rel="noopener noreferrer"
                        style={{ padding: '5px 12px', borderRadius: '8px', fontSize: '12px', fontWeight: 700, background: item.color + '20', color: item.color, border: '1px solid ' + item.color + '40', textDecoration: 'none', flexShrink: 0, transition: 'all 0.2s' }}
                        onMouseEnter={function (e) { e.currentTarget.style.background = item.color + '30'; }}
                        onMouseLeave={function (e) { e.currentTarget.style.background = item.color + '20'; }}>
                        Live →
                      </a>
                    )}
                  </div>

                  <p style={{ fontSize: '14px', lineHeight: 1.8, color: 'var(--muted)', margin: '0.75rem 0 1rem' }}>{item.description}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {item.skills.map(function (skill) {
                      return (
                        <span key={skill} style={{ padding: '3px 10px', borderRadius: '6px', fontSize: '11px', fontWeight: 600, background: item.color + '15', color: item.color, border: '1px solid ' + item.color + '25' }}>
                          {skill}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div style={{ padding: '2.5rem 2rem', borderRadius: '20px', background: 'linear-gradient(135deg, #7c3aed15, #06b6d415)', border: '1px solid #7c3aed30', textAlign: 'center', marginTop: '2rem' }}>
          <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🚀</div>
          <h3 style={{ fontFamily: 'Syne, sans-serif', fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem', color: 'white' }}>Looking for My Next Opportunity</h3>
          <p style={{ fontSize: '14px', color: 'var(--muted)', marginBottom: '1.5rem', lineHeight: 1.75 }}>
            I am actively seeking internship or junior developer positions<br />where I can contribute, learn, and grow.
          </p>
          <a href="#contact"
            style={{ display: 'inline-block', padding: '12px 36px', borderRadius: '12px', fontWeight: 700, color: 'white', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', textDecoration: 'none', transition: 'all 0.2s' }}
            onMouseEnter={function (e) { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 24px #7c3aed40'; }}
            onMouseLeave={function (e) { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = 'none'; }}>
            Let&aposs Talk →
          </a>
        </div>

      </div>
    </section>
  );
}
