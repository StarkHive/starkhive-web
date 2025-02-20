import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterLink = ({ href, children }: { href: string; children: React.ReactNode }) => (
  <li>
    <Link 
      href={href} 
      className="text-[#94A3B8] hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#001219] rounded"
    >
      {children}
    </Link>
  </li>
);

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#001219] py-8 md:py-16" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8 md:mb-12">
          <div>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-[#001219] rounded"
              aria-label="StarkHive Home"
            >
              <Image src="/assets/images/logo.jpeg" alt="logo" height={120} width={120} className="h-8 w-8" />
              <span className="text-white text-xl font-semibold">StarkHive</span>
            </Link>
            <p className="text-[#94A3B8] text-base">
              The decentralized marketplace for Web3 talent and opportunities.
            </p>
          </div>

          <nav aria-labelledby="platform-navigation">
            <h2 id="platform-navigation" className="text-white text-lg font-semibold mb-4">Platform</h2>
            <ul className="space-y-3">
              <FooterLink href="/jobs">Browse Jobs</FooterLink>
              <FooterLink href="/talent">Find Talent</FooterLink>
              <FooterLink href="/how-it-works">How it Works</FooterLink>
              <FooterLink href="/about">About Us</FooterLink>
            </ul>
          </nav>

          <nav aria-labelledby="resources-navigation">
            <h2 id="resources-navigation" className="text-white text-lg font-semibold mb-4">Resources</h2>
            <ul className="space-y-3">
              <FooterLink href="/documentation">Documentation</FooterLink>
              <FooterLink href="/blog">Blog</FooterLink>
              <FooterLink href="/faq">FAQ</FooterLink>
              <FooterLink href="/support">Support</FooterLink>
            </ul>
          </nav>

          <nav aria-labelledby="legal-navigation">
            <h2 id="legal-navigation" className="text-white text-lg font-semibold mb-4">Legal</h2>
            <ul className="space-y-3">
              <FooterLink href="/privacy">Privacy Policy</FooterLink>
              <FooterLink href="/terms">Terms of Service</FooterLink>
              <FooterLink href="/cookies">Cookie Policy</FooterLink>
            </ul>
          </nav>
        </div>

        <div className="border-t border-[#1E293B] pt-6 md:pt-8">
          <p className="text-[#94A3B8] text-sm md:text-center">
            © {currentYear} StarkHive. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;