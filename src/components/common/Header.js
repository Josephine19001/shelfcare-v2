'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import useTranslations from '@/hooks/useTranslations';
import { useLanguage } from '@/context/LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';

const Header = () => {
  const { lang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const t = useTranslations(lang, 'header');

  return (
    <header className="border-b-[0.5px] sticky top-0 bg-white z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        <Link href="/" className="text-2xl  font-extrabold text-primary">
          ShelfCare
        </Link>
        <nav className="hidden md:flex space-x-6">
          <Link
            href="/price-list"
            className={`nav-link ${
              pathname === '/price-list' ? 'nav-link-active' : ''
            }`}
          >
            {t.price_list}
          </Link>
          <Link
            href="/measurement-guide"
            className={`nav-link ${
              pathname === '/measurement-guide' ? 'nav-link-active' : ''
            }`}
          >
            {t.measurement_guide}
          </Link>
        </nav>
        <div className="hidden md:flex items-center space-x-4">
          <LanguageSwitcher currentLang={lang} />
          <button className="btn-primary">{t.order_now}</button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-primary focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16m-7 6h7'}
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div>
          <nav className="md:hidden bg-white border-t border-gray-200">
            <Link
              href="/price-list"
              className={`block px-4 py-2 text-primary nav-link ${
                pathname === '/price-list' ? 'nav-link-active' : ''
              }`}
            >
              {t.price_list}
            </Link>
            <Link
              href="/measurement-guide"
              className={`block px-4 py-2 text-primary nav-link ${
                pathname === '/measurement-guide' ? 'nav-link-active' : ''
              }`}
            >
              {t.measurement_guide}
            </Link>
          </nav>
          <div className="md:hidden p-2 mt-2">
            <button className="btn-primary mb-2">{t.order_now}</button>
            <LanguageSwitcher currentLang={lang} />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;