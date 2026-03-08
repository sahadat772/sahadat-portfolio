export default function Footer() {
  const links = [
    { label: 'GitHub', href: 'https://github.com/sahadat772' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sahadat-hossain-350208209/' },
    { label: 'Email', href: 'mailto:mohammadsahadathossain381@gmail.com' },
  ];

  return (
    <footer style={{ padding: '2rem 1rem', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ fontFamily: 'Syne, sans-serif', fontWeight: 900, fontSize: '1.5rem' }}>
          <span style={{ color: 'white' }}>SH</span>
          <span style={{ color: 'var(--accent1)' }}>.</span>
        </div>
        <p style={{ fontSize: '13px', color: 'var(--muted)' }}>
          Designed and built by <span style={{ color: 'var(--accent1)', fontWeight: 600 }}>Sahadat Hossain</span>
        </p>
        <div style={{ display: 'flex', gap: '1.5rem' }}>
          {links.map(function(link) {
            return (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer"
                style={{ fontSize: '13px', color: 'var(--muted)', textDecoration: 'none' }}>
                {link.label}
              </a>
            );
          })}
        </div>
        <p style={{ fontSize: '12px', color: '', }}>2024 — Built with Next.js and Tailwind CSS</p>
      </div>
    </footer>
  );
}
