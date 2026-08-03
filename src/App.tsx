import { useEffect, useMemo, useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { Card } from './components/ui/Card';
import { Container } from './components/ui/Container';
import { organizationSchema } from './data/site';
import { educationBasePath, educationSections } from './data/organization';
import { applyMeta } from './lib/seo';
import { getCurrentPath } from './lib/router';
import { HomePage } from './pages/HomePage';
import { EducationInfoPage } from './pages/EducationInfoPage';
import { NotFoundPage } from './pages/NotFoundPage';

function resolveSectionSlug(path: string) {
  if (path === educationBasePath) return undefined;
  const prefix = `${educationBasePath}/`;
  if (!path.startsWith(prefix)) return null;
  const slug = path.slice(prefix.length);
  return educationSections.some((section) => section.slug === slug) ? slug : null;
}

function LegalPage({ kind }: { kind: 'privacy' | 'consent' | 'cookies' }) {
  const titles = {
    privacy: 'Политика конфиденциальности',
    consent: 'Согласие на обработку данных',
    cookies: 'Cookies',
  };

  return (
    <main className="inner-page">
      <Container className="page-hero">
        <p className="official-kicker">Документ</p>
        <h1>{titles[kind]}</h1>
        <p>Текст будет заменен на финальную юридическую редакцию после подтверждения данных автошколы.</p>
      </Container>
      <Container>
        <Card className="legal-placeholder">
          <h2>Требуется финальный текст</h2>
          <p>
            Сейчас страница работает как техническая заглушка для структуры сайта. Не добавляем вымышленные реквизиты,
            адреса, контакты или юридические формулировки без подтверждения.
          </p>
        </Card>
      </Container>
    </main>
  );
}

export function App() {
  const [path, setPath] = useState(getCurrentPath);
  const [isAccessible, setIsAccessible] = useState(false);

  useEffect(() => {
    function onPopState() {
      setPath(getCurrentPath());
    }

    window.addEventListener('popstate', onPopState);
    return () => window.removeEventListener('popstate', onPopState);
  }, []);

  useEffect(() => {
    applyMeta(path);
    document.documentElement.classList.toggle('accessible-mode', isAccessible);
  }, [path, isAccessible]);

  const page = useMemo(() => {
    if (path === '/') return <HomePage />;
    if (path === '/privacy') return <LegalPage kind="privacy" />;
    if (path === '/consent') return <LegalPage kind="consent" />;
    if (path === '/cookies') return <LegalPage kind="cookies" />;

    const sectionSlug = resolveSectionSlug(path);
    if (sectionSlug !== null) return <EducationInfoPage activeSlug={sectionSlug} />;

    return <NotFoundPage />;
  }, [path]);

  return (
    <>
      <a className="skip-link" href="#main">
        Перейти к содержанию
      </a>
      <Header isAccessible={isAccessible} onToggleAccessible={() => setIsAccessible((value) => !value)} />
      <div id="main">{page}</div>
      <Footer />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema),
        }}
      />
    </>
  );
}
