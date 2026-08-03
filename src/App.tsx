import { useEffect, useMemo, useState } from 'react';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { organizationSchema } from './data/site';
import { educationBasePath, educationSections } from './data/organization';
import { trainingCategories } from './data/drive';
import { applyMeta } from './lib/seo';
import { getCurrentPath } from './lib/router';
import { HomePage } from './pages/HomePage';
import { EducationInfoPage } from './pages/EducationInfoPage';
import { NotFoundPage } from './pages/NotFoundPage';
import {
  AboutPage,
  BranchesPage,
  CarsPage,
  ContactsPage,
  FaqPage,
  InstructorsPage,
  LegalPage,
  OnlineLearningPage,
  PricesPage,
  ProgramDetailPage,
  ProgramsPage,
  ReviewsPage,
} from './pages/MarketingPages';

function resolveSectionSlug(path: string) {
  if (path === educationBasePath) return undefined;
  const prefix = `${educationBasePath}/`;
  if (!path.startsWith(prefix)) return null;
  const slug = path.slice(prefix.length);
  return educationSections.some((section) => section.slug === slug) ? slug : null;
}

function resolveProgram(path: string) {
  const prefix = '/programs/';
  if (!path.startsWith(prefix)) return null;
  const slug = path.slice(prefix.length);
  return trainingCategories.find((category) => category.slug === slug || category.id === slug) ?? null;
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
    if (path === '/programs') return <ProgramsPage />;
    if (path === '/prices') return <PricesPage />;
    if (path === '/online-learning') return <OnlineLearningPage />;
    if (path === '/instructors') return <InstructorsPage />;
    if (path === '/cars') return <CarsPage />;
    if (path === '/branches') return <BranchesPage />;
    if (path === '/reviews') return <ReviewsPage />;
    if (path === '/about') return <AboutPage />;
    if (path === '/contacts') return <ContactsPage />;
    if (path === '/faq') return <FaqPage />;
    if (path === '/privacy') return <LegalPage kind="privacy" />;
    if (path === '/consent') return <LegalPage kind="consent" />;
    if (path === '/cookies') return <LegalPage kind="cookies" />;

    const program = resolveProgram(path);
    if (program) return <ProgramDetailPage category={program} />;

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
