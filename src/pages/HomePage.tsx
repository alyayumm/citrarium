import { BrandIcon } from '../components/ui/BrandIcon';
import { LinkButton } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { documents, educationBasePath, educationSections, organizationData, type InfoSection } from '../data/organization';
import { contactData } from '../data/site';
import { handleInternalLink } from '../lib/navigation';
import { toPublicHref } from '../lib/router';
import type { IconName } from '../types';

type QuickLink = {
  title: string;
  text: string;
  href: string;
  icon: IconName;
  asset: BrandAssetName;
};

type SectionGroup = {
  title: string;
  description: string;
  slugs: string[];
};

type BrandAssetName =
  | 'documentCheck'
  | 'folderDocs'
  | 'educationCap'
  | 'shield'
  | 'documentsHero'
  | 'sectionsFolders'
  | 'secureDocuments'
  | 'documentsDark'
  | 'educationDark'
  | 'accessibilityDark';

type ProcessStep = {
  title: string;
  text: string;
  icon: IconName;
  asset: BrandAssetName;
};

const brandAssetVersion = '20260804-user-assets';

const brandAssetSrc: Record<BrandAssetName, string> = {
  documentCheck: `${import.meta.env.BASE_URL}brand-assets/icon-document-check.png?v=${brandAssetVersion}`,
  folderDocs: `${import.meta.env.BASE_URL}brand-assets/icon-folder-docs.png?v=${brandAssetVersion}`,
  educationCap: `${import.meta.env.BASE_URL}brand-assets/icon-education-cap.png?v=${brandAssetVersion}`,
  shield: `${import.meta.env.BASE_URL}brand-assets/icon-shield.png?v=${brandAssetVersion}`,
  documentsHero: `${import.meta.env.BASE_URL}brand-assets/citrarium-documents-hero.webp?v=${brandAssetVersion}`,
  sectionsFolders: `${import.meta.env.BASE_URL}brand-assets/citrarium-sections-folders.webp?v=${brandAssetVersion}`,
  secureDocuments: `${import.meta.env.BASE_URL}brand-assets/citrarium-secure-documents.webp?v=${brandAssetVersion}`,
  documentsDark: `${import.meta.env.BASE_URL}brand-assets/citrarium-icon-documents-dark.webp?v=${brandAssetVersion}`,
  educationDark: `${import.meta.env.BASE_URL}brand-assets/citrarium-icon-education-dark.webp?v=${brandAssetVersion}`,
  accessibilityDark: `${import.meta.env.BASE_URL}brand-assets/citrarium-icon-accessibility-dark.webp?v=${brandAssetVersion}`,
};

const heroLinks: QuickLink[] = [
  { title: 'Официальные сведения', text: 'обязательные подразделы сайта', href: educationBasePath, icon: 'certificate', asset: 'documentCheck' },
  { title: 'Документы', text: 'PDF и локальные акты', href: `${educationBasePath}/dokumenty`, icon: 'document', asset: 'folderDocs' },
  { title: 'Доступность', text: 'версия для слабовидящих', href: `${educationBasePath}/dostupnaya-sreda`, icon: 'unlock', asset: 'shield' },
];

const quickLinks: QuickLink[] = [
  { title: 'Основные сведения', text: 'наименование, адреса, режим работы, лицензия', href: `${educationBasePath}/osnovnye-svedeniya`, icon: 'building', asset: 'documentCheck' },
  { title: 'Документы', text: 'устав, лицензия, программа, договоры', href: `${educationBasePath}/dokumenty`, icon: 'document', asset: 'folderDocs' },
  { title: 'Образование', text: 'программы, сроки, формы и язык обучения', href: `${educationBasePath}/obrazovanie`, icon: 'education', asset: 'educationCap' },
  { title: 'Педагогический состав', text: 'карточки сотрудников после подтверждения', href: `${educationBasePath}/pedagogicheskiy-sostav`, icon: 'shield', asset: 'shield' },
];

const sectionGroups: SectionGroup[] = [
  {
    title: 'Организация',
    description: 'Базовые сведения, структура управления и руководство автошколы.',
    slugs: ['osnovnye-svedeniya', 'struktura-i-organy-upravleniya', 'rukovodstvo'],
  },
  {
    title: 'Образовательный процесс',
    description: 'Программы, стандарты, педагогический состав и условия обучения.',
    slugs: ['obrazovanie', 'pedagogicheskiy-sostav', 'obrazovatelnye-standarty-i-trebovaniya'],
  },
  {
    title: 'Документы и услуги',
    description: 'Локальные акты, платные услуги, финансы и вакантные места.',
    slugs: ['dokumenty', 'platnye-obrazovatelnye-uslugi', 'finansovo-hozyaystvennaya-deyatelnost', 'vakantnye-mesta'],
  },
  {
    title: 'Условия и доступность',
    description: 'Материальная база, поддержка, питание, доступная среда и сотрудничество.',
    slugs: ['materialno-tehnicheskoe-obespechenie', 'stipendii-i-mery-podderzhki', 'organizatsiya-pitaniya', 'dostupnaya-sreda', 'mezhdunarodnoe-sotrudnichestvo'],
  },
];

const processSteps: ProcessStep[] = [
  { title: 'Откройте раздел', text: 'Выберите нужный подраздел в каталоге официальных сведений.', icon: 'search', asset: 'folderDocs' },
  { title: 'Проверьте статус', text: 'У каждого документа видно, готов ли PDF к публикации.', icon: 'shield', asset: 'documentCheck' },
  { title: 'Скачайте файл', text: 'После загрузки реальных PDF ссылки будут работать как архив документов.', icon: 'download', asset: 'shield' },
];

const statusLabels = {
  available: 'PDF доступен',
  pending: 'PDF будет добавлен',
  absent: 'Документ отсутствует',
};

function sectionsBySlug(slugs: string[]) {
  return slugs
    .map((slug) => educationSections.find((section) => section.slug === slug))
    .filter((section): section is InfoSection => Boolean(section));
}

export function HomePage() {
  const contactLine = [contactData.phone, contactData.email].filter(Boolean).join(' · ') || 'Телефон и email будут добавлены после подтверждения';

  return (
    <main>
      <section className="official-hero">
        <Container className="official-hero__inner">
          <div className="official-hero__copy">
            <p className="official-kicker official-kicker--with-icon">
              <BrandIcon name="shield" />
              Официальный сайт автошколы
            </p>
            <h1>Сведения и документы автошколы «Цитрариум»</h1>
            <p>
              Собрали структуру сайта под обязательные сведения об образовательной организации:
              разделы, документы, статусы публикации и быстрый доступ без вымышленных данных.
            </p>
            <div className="official-hero__actions">
              <LinkButton href={educationBasePath}>Открыть сведения</LinkButton>
              <LinkButton href={`${educationBasePath}/dokumenty`} variant="secondary">Все документы</LinkButton>
            </div>
            <div className="official-hero__icon-row">
              {heroLinks.map((item) => (
                <a key={item.href} href={item.href} onClick={(event) => handleInternalLink(event, item.href)}>
                  <span className="registry-link__icon">
                    <BrandIcon name={item.icon} />
                  </span>
                  <span>
                    <strong>{item.title}</strong>
                    <em>{item.text}</em>
                  </span>
                </a>
              ))}
            </div>
          </div>
          <OfficialRouteVisual />
        </Container>
      </section>

      <section className="quick-access-section">
        <Container className="quick-access">
          <div className="quick-access__intro">
            <h2>Быстрый доступ</h2>
            <p>Самые частые разделы вынесены на первый экран, чтобы не искать документы внутри длинной страницы.</p>
            <img className="quick-access__image" src={brandAssetSrc.sectionsFolders} alt="" loading="lazy" decoding="async" />
          </div>
          <nav className="quick-access__nav" aria-label="Быстрый доступ к разделам">
            {quickLinks.map((item) => (
              <a key={item.href} href={item.href} onClick={(event) => handleInternalLink(event, item.href)}>
                <span className="registry-link__icon">
                  <BrandIcon name={item.icon} />
                </span>
                <span>
                  <strong>{item.title}</strong>
                  <em>{item.text}</em>
                </span>
              </a>
            ))}
          </nav>
        </Container>
      </section>

      <section className="section" id="svedeniya">
        <Container className="official-summary-layout">
          <header className="section-heading">
            <p className="official-kicker">Карточка организации</p>
            <h2>Данные без фантазий</h2>
            <p>Поля подготовлены под публикацию официальных сведений. Сейчас неподтвержденные данные оставлены как плейсхолдеры.</p>
          </header>
          <Card className="organization-panel">
            <dl className="official-data-list official-data-list--featured">
              <div>
                <span className="official-data-list__icon"><BrandIcon name="building" /></span>
                <dt>Полное наименование</dt>
                <dd>{organizationData.fullName}</dd>
              </div>
              <div>
                <span className="official-data-list__icon"><BrandIcon name="certificate" /></span>
                <dt>Сокращенное наименование</dt>
                <dd>{organizationData.shortName}</dd>
              </div>
              <div>
                <span className="official-data-list__icon"><BrandIcon name="map" /></span>
                <dt>Адрес</dt>
                <dd>{organizationData.address}</dd>
              </div>
              <div>
                <span className="official-data-list__icon"><BrandIcon name="phone" /></span>
                <dt>Контакты</dt>
                <dd>{contactLine}</dd>
              </div>
            </dl>
          </Card>
        </Container>
      </section>

      <section className="section section--muted" id="documents">
        <Container>
          <header className="section-heading">
            <p className="official-kicker">Структура</p>
            <h2>Официальный раздел по ТЗ</h2>
            <p>Разделы сгруппированы так, чтобы посетитель быстро нашел сведения об организации, обучении, документах и доступной среде.</p>
          </header>
          <div className="section-group-stack">
            {sectionGroups.map((group) => (
              <article className="section-group-panel" key={group.title}>
                <div className="section-group-panel__head">
                  <div className="section-group-panel__title">
                    <div>
                      <h3>{group.title}</h3>
                      <p>{group.description}</p>
                    </div>
                  </div>
                </div>
                <div className="section-group-panel__links">
                  {sectionsBySlug(group.slugs).map((section) => (
                    <a key={section.slug} href={`${educationBasePath}/${section.slug}`} onClick={(event) => handleInternalLink(event, `${educationBasePath}/${section.slug}`)}>
                      <BrandIcon name={section.icon} />
                      {section.shortTitle}
                    </a>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="document-status-layout">
          <header className="section-heading document-status-copy">
            <p className="official-kicker">Документы</p>
            <h2>Статусы публикации видны сразу</h2>
            <p>PDF из переданного архива загружены в реестр. Для оставшихся позиций сайт отдельно показывает статус ожидания файла.</p>
            <div className="document-stats" aria-label="Статусы документов">
              <span><strong>{documents.length}</strong> документов в структуре</span>
              <span><strong>{documents.filter((item) => item.status === 'pending').length}</strong> ожидают PDF</span>
            </div>
          </header>
          <div className="document-flow">
            {documents.slice(0, 6).map((document) => (
              <article className="document-flow__item" key={document.id}>
                <div className="document-flow__body">
                  <h3>{document.title}</h3>
                  <p>{document.description}</p>
                </div>
                <span className={`document-status document-status--${document.status}`}>{statusLabels[document.status]}</span>
                <a className="document-flow__action" href={toPublicHref(document.href)} target="_blank" rel="noreferrer">
                  Открыть
                </a>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--muted">
        <Container>
          <header className="section-heading section-heading--center">
            <p className="official-kicker">Порядок работы</p>
            <h2>Как пользоваться разделом</h2>
          </header>
          <div className="process-rail">
            {processSteps.map((step, index) => (
              <article className="process-step" key={step.title}>
                <span className="process-step__number">{String(index + 1).padStart(2, '0')}</span>
                <span className="process-step__icon">
                  <BrandIcon name={step.icon} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="final-cta" id="contacts">
        <Container className="final-cta__inner">
          <div>
            <h2>Нужны реальные документы для публикации</h2>
            <p>Чтобы закрыть официальный раздел полностью, нужно заменить плейсхолдеры на подтвержденные реквизиты, лицензии, локальные акты и PDF-файлы.</p>
            <div className="final-links">
              <a href={educationBasePath} onClick={(event) => handleInternalLink(event, educationBasePath)}>Все сведения</a>
              <a href={`${educationBasePath}/dokumenty`} onClick={(event) => handleInternalLink(event, `${educationBasePath}/dokumenty`)}>Документы</a>
              <a href="/privacy" onClick={(event) => handleInternalLink(event, '/privacy')}>Политика</a>
            </div>
          </div>
          <Card className="contact-panel">
            <img className="contact-panel__image" src={brandAssetSrc.secureDocuments} alt="" loading="lazy" decoding="async" />
            <span className="brand-icon-shell brand-icon-shell--large">
              <BrandIcon name="mail" />
            </span>
            <h3>Контактные данные</h3>
            {contactData.phone ? <p>{contactData.phone}</p> : null}
            {contactData.email ? <p>{contactData.email}</p> : null}
            {contactData.address ? <p>{contactData.address}</p> : null}
            <p>{contactData.hours}</p>
            <p>Каналы связи будут добавлены после подтверждения.</p>
          </Card>
        </Container>
      </section>
    </main>
  );
}

function OfficialRouteVisual() {
  const heroSrc = brandAssetSrc.documentsHero;

  return (
    <div className="portal-visual portal-visual--document" aria-hidden="true">
      <img className="document-hero-visual__wide" src={heroSrc} alt="" decoding="async" fetchPriority="high" />
    </div>
  );
}
