'use client';

import { useState } from 'react';

const contactInfo = [
  { icon: '✉️', label: 'Email', value: 'mohammadsahadathossain381@gmail.com', href: 'mailto:mohammadsahadathossain381@gmail.com' },
  { icon: '💼', label: 'LinkedIn', value: 'Sahadat Hossain', href: 'https://www.linkedin.com/in/sahadat-hossain-350208209/' },
  { icon: '⚡', label: 'GitHub', value: 'sahadat772', href: 'https://github.com/sahadat772' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState('');

  const handleSubmit = async function(e) {
    e.preventDefault();
    setLoading(true);
    setStatus('');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setStatus('success');
        setForm({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    }
    setLoading(false);
  };

  const inputStyle = {
    width: '100%',
    padding: '12px 16px',
    borderRadius: '12px',
    background: '#111118',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    fontSize: '14px',
    outline: 'none',
    boxSizing: 'border-box',
  };

  return (
    <section id="contact" style={{ padding: '8rem 1rem' }}>
      <div style={{ maxWidth: '64rem', margin: '0 auto' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '4rem' }}>
          <span style={{ fontSize: '12px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--accent1)' }}>05. Contact</span>
          <div style={{ flex: 1, height: '1px', background: 'var(--border)' }} />
        </div>

        <div className="flex flex-col md:flex-row gap-16">

          <div style={{ flex: 1 }}>
            <h2 style={{ fontFamily: 'Syne, sans-serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 900, marginBottom: '1rem' }}>
              Get In
              <span style={{ background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', marginLeft: '12px' }}>Touch</span>
            </h2>
            <p style={{ fontSize: '1rem', color: 'var(--muted)', marginBottom: '2rem', lineHeight: 1.75 }}>
              I am currently open to internship and junior developer opportunities. Whether you have a project in mind or just want to say hi, my inbox is always open!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              {contactInfo.map(function(item) {
                return (
                  <a key={item.label} href={item.href} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', borderRadius: '1rem', background: '#111118', border: '1px solid var(--border)', textDecoration: 'none' }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: '#7c3aed20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.2rem', flexShrink: 0 }}>
                      {item.icon}
                    </div>
                    <div>
                      <div style={{ fontSize: '12px', color: 'var(--muted)', marginBottom: '2px' }}>{item.label}</div>
                      <div style={{ fontSize: '14px', fontWeight: 600, color: 'var(--text)' }}>{item.value}</div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          <div style={{ flex: 1 }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <label style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>Your Name</label>
                <input type="text" value={form.name} onChange={function(e) { setForm({ ...form, name: e.target.value }); }} placeholder="John Doe" required style={inputStyle} />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>Email Address</label>
                <input type="email" value={form.email} onChange={function(e) { setForm({ ...form, email: e.target.value }); }} placeholder="john@example.com" required style={inputStyle} />
              </div>
              <div>
                <label style={{ fontSize: '12px', color: 'var(--muted)', display: 'block', marginBottom: '8px' }}>Message</label>
                <textarea value={form.message} onChange={function(e) { setForm({ ...form, message: e.target.value }); }} placeholder="I would like to hire you..." required rows={5} style={{ ...inputStyle, resize: 'none' }} />
              </div>

              {status === 'success' && (
                <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#10b98120', border: '1px solid #10b98140', color: '#10b981', fontSize: '14px' }}>
                  Message sent successfully!
                </div>
              )}
              {status === 'error' && (
                <div style={{ padding: '12px 16px', borderRadius: '12px', background: '#ef444420', border: '1px solid #ef444440', color: '#ef4444', fontSize: '14px' }}>
                  Something went wrong. Please try again.
                </div>
              )}

              <button type="submit" disabled={loading}
                style={{ padding: '14px', borderRadius: '12px', fontWeight: 700, color: 'white', background: 'linear-gradient(135deg, #7c3aed, #06b6d4)', border: 'none', cursor: loading ? 'not-allowed' : 'pointer', fontSize: '15px', opacity: loading ? 0.7 : 1 }}>
                {loading ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
