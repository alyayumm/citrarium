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

  const legalContent = {
    privacy: {
      heading: 'Обработка персональных данных',
      body: 'Персональные данные обрабатываются автошколой «Цитрариум» для ответа на обращения, сопровождения образовательных отношений и исполнения требований законодательства Российской Федерации.',
    },
    consent: {
      heading: 'Согласие пользователя',
      body: 'Направляя обращение в автошколу «Цитрариум», пользователь подтверждает согласие на обработку переданных персональных данных в целях рассмотрения обращения и обратной связи.',
    },
    cookies: {
      heading: 'Использование cookies',
      body: 'Сайт может использовать технические cookies, необходимые для корректной работы страниц, навигации и доступности интерфейса.',
    },
  };

  return (
    <main className="inner-page">
      <Container className="page-hero">
        <p className="official-kicker">Документ</p>
        <h1>{titles[kind]}</h1>
        <p>Информация для пользователей официального сайта автошколы «Цитрариум».</p>
      </Container>
      <Container>
        <Card className="legal-info-card">
          <h2>{legalContent[kind].heading}</h2>
          <p>{legalContent[kind].body}</p>
          <p>{organizationSchema.legalName}</p>
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
