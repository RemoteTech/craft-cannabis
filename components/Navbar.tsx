"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const linkStyle = (path: string) => ({
    marginRight: '1rem',
    fontWeight: pathname === path ? 'bold' : 'normal',
    textDecoration: pathname === path ? 'underline' : 'none',
  });

  return (
    <nav style={{ padding: '1rem', background: '#f0f0f0' }}>
      <Link href="/" style={linkStyle("/")}>Home</Link>
      <Link href="/about" style={linkStyle("/about")}>About</Link>
      <Link href="/contact" style={linkStyle("/contact")}>Contact</Link>
    </nav>
  );
}