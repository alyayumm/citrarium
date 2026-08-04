import { useEffect, useState } from 'react';
import { contactData, navigation } from '../../data/site';
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
  const normalizedPhone = contactData.phone.replace(/\D/g, '');
  const hasPhoneLink = normalizedPhone.length >= 10;

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
        <a key={item.href} href={item.href} onClick={(event) => handleInternalLink(event, item.href)}>
          {item.label}
        </a>
      ))}
    </nav>
  );

  return (
    <header className={`header ${isScrolled ? 'header--scrolled' : ''}`}>
      <div className="topbar">
        <span>Официальный сайт автошколы «Цитрариум»</span>
        <span className="topbar__optional">{contactData.city}</span>
        <span className="topbar__optional">{contactData.hours}</span>
        {hasPhoneLink ? <a href={`tel:${normalizedPhone}`}>{contactData.phone}</a> : <span>{contactData.phone}</span>}
        <a href="/svedeniya-ob-obrazovatelnoy-organizatsii" onClick={(event) => handleInternalLink(event, '/svedeniya-ob-obrazovatelnoy-organizatsii')}>
          Сведения об образовательной организации
        </a>
      </div>
      <div className="header__inner">
        <a className="logo-link" href="/" aria-label="Автошкола Цитрариум, на главную" onClick={(event) => handleInternalLink(event, '/')}>
          <img src={logoSrc} alt="Цитрариум Автошкола" />
        </a>
        {nav}
        <div className="header__actions">
          {hasPhoneLink ? <a className="header__phone" href={`tel:${normalizedPhone}`}>{contactData.phone}</a> : null}
          <LinkButton href="/svedeniya-ob-obrazovatelnoy-organizatsii/dokumenty">Документы</LinkButton>
          <button className="accessibility-toggle" type="button" aria-pressed={isAccessible} onClick={onToggleAccessible}>
            {isAccessible ? 'Обычная версия' : 'Версия для слабовидящих'}
          </button>
        </div>
        <div className="header__mobile-actions">
          {hasPhoneLink ? (
            <a className="icon-button" href={`tel:${normalizedPhone}`} aria-label="Позвонить">
              <svg viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.2 4.8 10 8.6 8.2 10a9.6 9.6 0 0 0 5.8 5.8l1.4-1.8 3.8 1.8v3.1c0 .7-.6 1.2-1.3 1.1C10.1 19.4 4.6 13.9 4 6.1c-.1-.7.4-1.3 1.1-1.3h3.1Z" />
              </svg>
            </a>
          ) : null}
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
          <LinkButton href="/svedeniya-ob-obrazovatelnoy-organizatsii/dokumenty" onClick={() => setIsMenuOpen(false)}>Документы</LinkButton>
        </div>
      ) : null}
    </header>
  );
}
