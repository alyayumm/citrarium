import { contactData, footerNavigation, sectionNavigation } from '../../data/site';
import { organizationData } from '../../data/organization';
import { handleInternalLink } from '../../lib/navigation';
import { toPublicHref } from '../../lib/router';
import { Container } from '../ui/Container';

export function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}logos/logo-white.png`;

  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <img src={logoSrc} alt="Драйв Автошкола" />
          </span>
          <p>Автошкола нового поколения: понятное обучение, современная теория и практика до уверенности за рулем.</p>
          <p>{organizationData.fullName}</p>
        </div>
        <div className="footer__col">
          <h2>Меню</h2>
          {footerNavigation.slice(0, 8).map((item) => (
            <a key={item.href} href={toPublicHref(item.href)} onClick={(event) => handleInternalLink(event, item.href)}>{item.label}</a>
          ))}
        </div>
        <div className="footer__col">
          <h2>Документы</h2>
          <a href={toPublicHref('/privacy')} onClick={(event) => handleInternalLink(event, '/privacy')}>Политика конфиденциальности</a>
          <a href={toPublicHref('/consent')} onClick={(event) => handleInternalLink(event, '/consent')}>Согласие на обработку данных</a>
          <a href={toPublicHref('/cookies')} onClick={(event) => handleInternalLink(event, '/cookies')}>Cookies</a>
          {sectionNavigation.slice(0, 4).map((item) => (
            <a key={item.href} href={toPublicHref(item.href)} onClick={(event) => handleInternalLink(event, item.href)}>{item.label}</a>
          ))}
        </div>
        <div className="footer__col">
          <h2>Контакты</h2>
          <p>{contactData.phone}</p>
          <p>{contactData.email}</p>
          <p>{contactData.address}</p>
          <p>{contactData.hours}</p>
          <p>Каналы связи будут добавлены после подтверждения.</p>
        </div>
      </Container>
      <Container className="footer__bottom">
        <span>© Автошкола «Драйв», 2026</span>
        <span>Лицензия и реквизиты будут добавлены после подтверждения</span>
      </Container>
    </footer>
  );
}
