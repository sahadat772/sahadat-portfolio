'use client';

const skillGroups = [
  {
    category: 'Frontend',
    color: '#7c3aed',
    skills: [
      { name: 'Next.js', level: 85 },
      { name: 'React.js', level: 85 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'JavaScript', level: 80 },
      { name: 'HTML & CSS', level: 95 },
    ],
  },
  {
    category: 'Backend',
    color: '#06b6d4',
    skills: [
      { name: 'Node.js', level: 75 },
      { name: 'Express.js', level: 75 },
      { name: 'Next.js API', level: 85 },
      { name: 'REST API', level: 80 },
      { name: 'Nodemailer', level: 70 },
    ],
  },
  {
    category: 'Database & Tools',
    color: '#f59e0b',
    skills: [
      { name: 'MongoDB', level: 80 },
      { name: 'Mongoose', level: 80 },
      { name: 'Git & GitHub', level: 75 },
      { name: 'Vercel', level: 85 },
      { name: 'Cloudinary', level: 70 },
    ],
  },
];

const tools = [
  'Next.js', 'React', 'Node.js', 'Express', 'MongoDB', 'Mongoose',
  'Tailwind CSS', 'NextAuth.js', 'Cloudinary', 'Nodemailer',
  'Git', 'GitHub', 'Vercel', 'REST API', 'JWT', 'bcrypt',
];

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '8rem 1rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent1)' }}>02. Skills</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>
          My Tech
          <span style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginLeft: '12px' }}>Arsenal</span>
        </h2>
        <p style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '4rem' }}>Technologies I work with to build full-stack applications.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" style={{ marginBottom: '2rem' }}>
          {skillGroups.map(function(group) {
            return (
              <div key={group.category} style={{ padding: '1.5rem', borderRadius: '1rem', background: '#111118', border: '1px solid var(--border)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '1.5rem' }}>
                  <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: group.color }} />
                  <h3 style={{ fontWeight: 700, fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: group.color }}>{group.category}</h3>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {group.skills.map(function(skill) {
                    return (
                      <div key={skill.name}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                          <span style={{ fontSize: '14px', fontWeight: 500, color: 'var(--text)' }}>{skill.name}</span>
                          <span style={{ fontSize: '12px', fontFamily: 'monospace', color: group.color }}>{skill.level}%</span>
                        </div>
                        <div style={{ height: '6px', borderRadius: '9999px', background: 'var(--border)' }}>
                          <div style={{ width: skill.level + '%', height: '100%', borderRadius: '9999px', background: group.color }} />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        <div style={{ padding: '1.5rem', borderRadius: '1rem', background: '#111118', border: '1px solid var(--border)' }}>
          <p style={{ fontSize: '12px', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '1rem' }}>All Technologies</p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
            {tools.map(function(tool, i) {
              return (
                <span key={tool} style={{
                  padding: '8px 16px', borderRadius: '12px', fontSize: '14px', fontWeight: 500,
                  background: i % 3 === 0 ? '#7c3aed15' : i % 3 === 1 ? '#06b6d415' : '#f59e0b15',
                  border: '1px solid ' + (i % 3 === 0 ? '#7c3aed40' : i % 3 === 1 ? '#06b6d440' : '#f59e0b40'),
                  color: i % 3 === 0 ? '#7c3aed' : i % 3 === 1 ? '#06b6d4' : '#f59e0b',
                }}>
                  {tool}
                </span>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
