import { contactData, footerNavigation, sectionNavigation } from '../../data/site';
import { organizationData } from '../../data/organization';
import { handleInternalLink } from '../../lib/navigation';
import { Container } from '../ui/Container';

export function Footer() {
  const logoSrc = `${import.meta.env.BASE_URL}logos/logo-citrarium.png?v=citrarium-20260804-logo`;

  return (
    <footer className="footer">
      <Container className="footer__inner">
        <div className="footer__brand">
          <span className="footer__logo">
            <img src={logoSrc} alt="Цитрариум Автошкола" />
          </span>
          <p>Официальный сайт автошколы «Цитрариум» со сведениями об образовательной организации.</p>
          <p>{organizationData.fullName}</p>
        </div>
        <div className="footer__col">
          <h2>Меню</h2>
          {footerNavigation.slice(0, 8).map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => handleInternalLink(event, item.href)}>{item.label}</a>
          ))}
        </div>
        <div className="footer__col">
          <h2>Документы</h2>
          <a href="/privacy" onClick={(event) => handleInternalLink(event, '/privacy')}>Политика конфиденциальности</a>
          <a href="/consent" onClick={(event) => handleInternalLink(event, '/consent')}>Согласие на обработку данных</a>
          <a href="/cookies" onClick={(event) => handleInternalLink(event, '/cookies')}>Cookies</a>
          {sectionNavigation.slice(0, 4).map((item) => (
            <a key={item.href} href={item.href} onClick={(event) => handleInternalLink(event, item.href)}>{item.label}</a>
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
        <span>© Автошкола «Цитрариум», 2026</span>
        <span>Лицензия и реквизиты будут добавлены после подтверждения</span>
      </Container>
    </footer>
  );
}
