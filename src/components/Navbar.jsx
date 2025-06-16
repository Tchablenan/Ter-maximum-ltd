import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import shippingPlanes from '../assets/images/shippingPlanes.jpg';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const changeLanguage = (lang) => {
    i18n.changeLanguage(lang);
  };

  return (
    <nav className="bg-blue-900 text-white shadow fixed top-0 left-0 right-0 z-50">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        
        {/* Logo + Nom */}
        <a href="#" className="flex items-center space-x-3">
          <img src={shippingPlanes} alt="Logo Ter Maximum" className="h-10 w-10 object-contain" />
          <span className="text-lg font-bold tracking-wide">Ter Maximum Ltd</span>
        </a>

        {/* Menu pour grand écran */}
        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#" className="hover:underline">{t('navbar.home')}</a>
          <a href="#about" className="hover:underline">{t('navbar.about')}</a>
          <a href="#services" className="hover:underline">{t('navbar.services')}</a>
          <a href="#contact" className="hover:underline">{t('navbar.contact')}</a>

          {/* Boutons de langue */}
          <button onClick={() => changeLanguage('en')} className="ml-4 hover:underline">EN</button>
          <button onClick={() => changeLanguage('fr')} className="hover:underline">FR</button>
        </div>

        {/* Bouton menu hamburger (mobile) */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden focus:outline-none">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
              d={menuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'} />
          </svg>
        </button>
      </div>

      {/* Menu mobile */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-sm font-medium bg-blue-900">
          <a href="#" className="block hover:underline">{t('navbar.home')}</a>
          <a href="#about" className="block hover:underline">{t('navbar.about')}</a>
          <a href="#services" className="block hover:underline">{t('navbar.services')}</a>
          <a href="#contact" className="block hover:underline">{t('navbar.contact')}</a>
          <div className="flex space-x-4 pt-4">
            <button onClick={() => changeLanguage('en')} className="hover:underline">EN</button>
            <button onClick={() => changeLanguage('fr')} className="hover:underline">FR</button>
          </div>
        </div>
      )}
    </nav>
  );
}
