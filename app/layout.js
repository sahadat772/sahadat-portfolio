import './globals.css';

export const metadata = {
  title: 'Sahadat Hossain — MERN Full-Stack Developer',
  description: 'Full-Stack Developer specializing in Next.js, React, Node.js and MongoDB. Available for internship and junior developer positions.',
  keywords: ['Full-Stack Developer', 'Next.js', 'React', 'MongoDB', 'Bangladesh'],
  openGraph: {
    title: 'Sahadat Hossain — MERN Full-Stack Developer',
    description: 'Building real-world web applications with modern technologies.',
    url: 'https://sahadat-portfolio.vercel.app',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        <div className="orb orb-1" />
        <div className="orb orb-2" />
        <div className="orb orb-3" />
        <div className="relative z-10">
          {children}
        </div>
      </body>
    </html>
  );
}
