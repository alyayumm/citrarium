import { useEffect, useState } from 'react';
import { contactData, navigation } from '../../data/site';
import { educationBasePath } from '../../data/organization';
import { handleInternalLink } from '../../lib/navigation';
import { LinkButton } from '../ui/Button';

type HeaderProps = {
  isAccessible: boolean;
  onToggleAccessible: () => void;
};

export function Header({ isAccessible, onToggleAccessible }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const logoSrc = `${import.meta.env.BASE_URL}logos/logo-citrarium.png?v=citrarium-20260804-logo`;

  useEffect(() => {
    function onScroll() {
      setIsScrolled(window.scrollY > 10);
    }

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-locked', isMenuOpen);
    return () => document.body.classList.remove('is-locked');
  }, [isMenuOpen]);

  const nav = (
    <nav className="site-nav" aria-label="Основная навигация">
      {navigation.map((item) => (
        <a
          key={item.href}
          href={item.href}
          onClick={(event) => {
            handleInternalLink(event, item.href);
            setIsMenuOpen(false);
          }}
        >
          {item.label}
        </a>
      ))}
    </nav>
  );

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="topbar">
        <span>Автошкола «Цитрариум»</span>
        <span className="topbar__optional">{contactData.city}</span>
        <span className="topbar__optional">{contactData.hours}</span>
        <a href={educationBasePath} onClick={(event) => handleInternalLink(event, educationBasePath)}>
          Сведения об образовательной организации
        </a>
      </div>
      <div className="header__inner">
        <a className="logo-link" href="/" aria-label="Автошкола Цитрариум, на главную" onClick={(event) => handleInternalLink(event, '/')}>
          <img src={logoSrc} alt="Цитрариум Автошкола" />
        </a>
        {nav}
        <div className="header__actions">
          <LinkButton className="header-documents-button" href={`${educationBasePath}/dokumenty`} icon="none">
            Документы
          </LinkButton>
          <button className="accessibility-toggle" type="button" aria-pressed={isAccessible} onClick={onToggleAccessible}>
            {isAccessible ? 'Обычная версия' : 'Версия для слабовидящих'}
          </button>
        </div>
        <div className="header__mobile-actions">
          <button className="icon-button" type="button" aria-pressed={isAccessible} aria-label="Версия для слабовидящих" onClick={onToggleAccessible}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12Z" />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
          <button className="icon-button" type="button" aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'} aria-expanded={isMenuOpen} onClick={() => setIsMenuOpen((value) => !value)}>
            <svg viewBox="0 0 24 24" aria-hidden="true">
              {isMenuOpen ? <path d="M5 5l14 14M19 5 5 19" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen ? (
        <div className="mobile-menu">
          {nav}
          <LinkButton className="header-documents-button" href={`${educationBasePath}/dokumenty`} icon="none" onClick={() => setIsMenuOpen(false)}>
            Документы
          </LinkButton>
        </div>
      ) : null}
    </header>
  );
}
