import { BrandIcon } from '../components/ui/BrandIcon';
import { LinkButton } from '../components/ui/Button';
import { Container } from '../components/ui/Container';
import { documents, educationBasePath, organizationData, type OfficialDocument } from '../data/organization';
import { contactData } from '../data/site';
import { handleInternalLink } from '../lib/navigation';
import { toPublicHref } from '../lib/router';
import type { IconName } from '../types';

type BrandAssetName = 'documentsHero' | 'sectionsFolders' | 'secureDocuments' | 'educationDark' | 'documentsDark' | 'accessibilityDark';

type FeatureItem = {
  title: string;
  text: string;
  icon: IconName;
};

type TariffPlan = {
  title: string;
  subtitle: string;
  price: string;
  details: string[];
  note: string;
  featured?: boolean;
};

type ProcessStep = {
  title: string;
  text: string;
  icon: IconName;
};

const brandAssetVersion = '20260804-user-assets';

const brandAssetSrc: Record<BrandAssetName, string> = {
  documentsHero: `${import.meta.env.BASE_URL}brand-assets/citrarium-documents-hero.webp?v=${brandAssetVersion}`,
  sectionsFolders: `${import.meta.env.BASE_URL}brand-assets/citrarium-sections-folders.webp?v=${brandAssetVersion}`,
  secureDocuments: `${import.meta.env.BASE_URL}brand-assets/citrarium-secure-documents.webp?v=${brandAssetVersion}`,
  educationDark: `${import.meta.env.BASE_URL}brand-assets/citrarium-icon-education-dark.webp?v=${brandAssetVersion}`,
  documentsDark: `${import.meta.env.BASE_URL}brand-assets/citrarium-icon-documents-dark.webp?v=${brandAssetVersion}`,
  accessibilityDark: `${import.meta.env.BASE_URL}brand-assets/citrarium-icon-accessibility-dark.webp?v=${brandAssetVersion}`,
};

const learningFormats: FeatureItem[] = [
  {
    title: 'Категория B',
    text: 'Обучение на механической и автоматической коробке передач: онлайн-теория или занятия в классе.',
    icon: 'card',
  },
  {
    title: 'Категория A',
    text: 'Отдельная программа для мотоцикла с онлайн- и классическим форматом обучения.',
    icon: 'target',
  },
  {
    title: 'Категория A+B',
    text: 'Комбинированные программы для тех, кто планирует получить сразу несколько категорий.',
    icon: 'grid',
  },
];

const advantages: FeatureItem[] = [
  {
    title: 'Открытые документы',
    text: 'Лицензия, устав, договор, приказ о стоимости и локальные акты доступны в официальном разделе сайта.',
    icon: 'document',
  },
  {
    title: 'Понятные тарифы',
    text: 'Стоимость вынесена на главную и дополнительно подтверждается приказом о платных образовательных услугах.',
    icon: 'finance',
  },
  {
    title: 'Форматы под задачу',
    text: 'Можно выбрать онлайн-теорию, классическое обучение, обычный или VIP-пакет.',
    icon: 'education',
  },
  {
    title: 'Санкт-Петербург',
    text: 'Автошкола работает в Санкт-Петербурге ежедневно с 9:00 до 21:00.',
    icon: 'map',
  },
];

const tariffPlans: TariffPlan[] = [
  {
    title: 'B онлайн',
    subtitle: 'Теория в дистанционном формате',
    price: 'от 60 000 ₽',
    details: ['МКПП: 60 000 ₽ / 65 500 ₽', 'АКПП: 62 000 ₽ / 70 990 ₽', 'VIP: от 82 000 ₽'],
    note: 'Пакеты «Меньше» и «Больше» по приказу о стоимости.',
    featured: true,
  },
  {
    title: 'B класс',
    subtitle: 'Теория в учебном классе',
    price: 'от 62 000 ₽',
    details: ['МКПП: 62 000 ₽ / 70 990 ₽', 'АКПП: 64 000 ₽ / 76 500 ₽', 'VIP: от 84 000 ₽'],
    note: 'Очный формат обучения для категории B.',
  },
  {
    title: 'A+B',
    subtitle: 'Комбинированная программа',
    price: 'от 86 000 ₽',
    details: ['Онлайн: от 86 000 ₽', 'Класс: от 88 000 ₽', 'VIP: от 108 000 ₽'],
    note: 'Для одновременного обучения по двум категориям.',
  },
  {
    title: 'A',
    subtitle: 'Программа для мотоцикла',
    price: 'от 29 500 ₽',
    details: ['Онлайн: 29 500 ₽', 'Класс: 34 990 ₽', 'ПВ: от 13 000 ₽'],
    note: 'Отдельный тарифный блок категории A.',
  },
];

const processSteps: ProcessStep[] = [
  {
    title: 'Выберите категорию',
    text: 'Сравните формат обучения и тариф: B, A, A+B, онлайн, класс или VIP.',
    icon: 'search',
  },
  {
    title: 'Заключите договор',
    text: 'Ознакомьтесь с образцом договора и условиями платных образовательных услуг.',
    icon: 'document',
  },
  {
    title: 'Пройдите теорию',
    text: 'Изучайте программу в выбранном формате: дистанционно или в классе.',
    icon: 'education',
  },
  {
    title: 'Отработайте практику',
    text: 'Практические занятия проходят в рамках выбранной программы обучения.',
    icon: 'target',
  },
  {
    title: 'Сдайте аттестацию',
    text: 'Порядок текущего контроля, промежуточной и итоговой аттестации размещен в документах.',
    icon: 'certificate',
  },
  {
    title: 'Готовьтесь к экзамену',
    text: 'После завершения обучения автошкола оформляет необходимые образовательные документы.',
    icon: 'shield',
  },
];

const documentIds = ['license', 'charter', 'price-order', 'contract'];

function getDocumentById(id: string): OfficialDocument | undefined {
  return documents.find((document) => document.id === id);
}

export function HomePage() {
  const keyDocuments = documentIds.map(getDocumentById).filter((document): document is OfficialDocument => Boolean(document));
  const contactLine = [contactData.city, contactData.hours].filter(Boolean).join(' · ');

  return (
    <main className="school-home">
      <section className="home-hero">
        <Container className="home-hero__inner">
          <div className="home-hero__copy">
            <p className="home-pill">
              <BrandIcon name="map" />
              {contactLine}
            </p>
            <h1>Автошкола «Цитрариум»: обучение вождению в Санкт-Петербурге</h1>
            <p>
              Категории B, A и A+B, онлайн-теория или обучение в классе. Тарифы, лицензия и документы размещены открыто,
              чтобы перед записью было понятно, за что вы платите и на каких условиях проходит обучение.
            </p>
            <div className="home-hero__actions">
              <LinkButton href="#tariffs">Выбрать тариф</LinkButton>
              <LinkButton href={educationBasePath} variant="secondary" icon="document">
                Официальные сведения
              </LinkButton>
            </div>
            <dl className="home-hero__facts" aria-label="Краткие сведения">
              <div>
                <dt>Лицензия</dt>
                <dd>{organizationData.licenseStatus}</dd>
              </div>
              <div>
                <dt>Форматы</dt>
                <dd>онлайн и класс</dd>
              </div>
              <div>
                <dt>Тарифы</dt>
                <dd>по приказу</dd>
              </div>
            </dl>
          </div>
          <div className="home-hero__visual" aria-hidden="true">
            <img src={brandAssetSrc.documentsHero} alt="" decoding="async" fetchPriority="high" />
          </div>
        </Container>
      </section>

      <section className="home-section" id="categories">
        <Container>
          <div className="home-section__head">
            <h2>Категории и форматы обучения</h2>
            <p>На главной собраны основные направления, а юридические сведения вынесены в отдельный официальный раздел.</p>
          </div>
          <div className="format-grid">
            {learningFormats.map((item) => (
              <article className="format-item" key={item.title}>
                <span className="format-item__icon">
                  <BrandIcon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="home-section home-section--surface" id="tariffs">
        <Container>
          <div className="tariffs-layout">
            <div className="home-section__head tariffs-layout__intro">
              <h2>Тарифы</h2>
              <p>
                Цены указаны по приказу об установлении стоимости обучения. Подробные варианты практического вождения и
                оплаты открываются в документе.
              </p>
              {getDocumentById('price-order') ? (
                <a
                  className="home-text-link"
                  href={toPublicHref(getDocumentById('price-order')!.href)}
                  target="_blank"
                  rel="noreferrer"
                >
                  Открыть приказ о стоимости
                </a>
              ) : null}
            </div>
            <div className="tariff-grid" aria-label="Тарифы автошколы">
              {tariffPlans.map((plan) => (
                <article className={`tariff-card ${plan.featured ? 'tariff-card--featured' : ''}`} key={plan.title}>
                  <div className="tariff-card__top">
                    <span>{plan.subtitle}</span>
                    {plan.featured ? <em>популярный формат</em> : null}
                  </div>
                  <h3>{plan.title}</h3>
                  <strong>{plan.price}</strong>
                  <ul>
                    {plan.details.map((detail) => (
                      <li key={detail}>{detail}</li>
                    ))}
                  </ul>
                  <p>{plan.note}</p>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section">
        <Container className="home-split">
          <div className="home-split__media" aria-hidden="true">
            <img src={brandAssetSrc.sectionsFolders} alt="" loading="lazy" decoding="async" />
          </div>
          <div className="home-split__content">
            <div className="home-section__head">
              <h2>Почему удобно учиться у нас</h2>
              <p>Акцент на понятной структуре обучения, открытых документах и спокойной навигации по условиям.</p>
            </div>
            <div className="benefit-list">
              {advantages.map((item) => (
                <article className="benefit-item" key={item.title}>
                  <BrandIcon name={item.icon} />
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="home-section home-section--surface" id="process">
        <Container>
          <div className="home-section__head home-section__head--wide">
            <h2>Как проходит обучение</h2>
            <p>Структура как у обычной автошколы: выбор программы, договор, теория, практика, аттестация и подготовка документов.</p>
          </div>
          <div className="process-list">
            {processSteps.map((step, index) => (
              <article className="process-list__item" key={step.title}>
                <span className="process-list__number">{index + 1}</span>
                <BrandIcon name={step.icon} />
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="home-section" id="documents">
        <Container className="documents-preview">
          <div className="documents-preview__copy">
            <div className="home-section__head">
              <h2>Документы автошколы</h2>
              <p>Лицензия, устав, договор и стоимость обучения доступны на сайте в PDF.</p>
            </div>
            <LinkButton href={`${educationBasePath}/dokumenty`} variant="secondary" icon="document">
              Все документы
            </LinkButton>
          </div>
          <div className="documents-preview__list" aria-label="Ключевые документы">
            {keyDocuments.map((document) => (
              <a key={document.id} href={toPublicHref(document.href)} target="_blank" rel="noreferrer">
                <span>
                  <BrandIcon name="document" />
                </span>
                <strong>{document.title}</strong>
                <em>PDF</em>
              </a>
            ))}
          </div>
        </Container>
      </section>

      <section className="home-section home-section--dark" id="contacts">
        <Container className="contact-cta">
          <div>
            <p className="home-pill home-pill--dark">
              <BrandIcon name="clock" />
              {contactLine}
            </p>
            <h2>Выберите тариф и проверьте документы перед записью</h2>
            <p>
              На сайте собраны стоимость обучения, лицензия, устав, договор и сведения об образовательной организации.
              Это помогает спокойно сравнить варианты и перейти к обучению без лишних вопросов.
            </p>
            <div className="home-hero__actions">
              <LinkButton href="#tariffs">К тарифам</LinkButton>
              <LinkButton href={`${educationBasePath}/dokumenty`} variant="dark" icon="document">
                Документы
              </LinkButton>
            </div>
          </div>
          <div className="contact-cta__image" aria-hidden="true">
            <img src={brandAssetSrc.secureDocuments} alt="" loading="lazy" decoding="async" />
          </div>
        </Container>
      </section>
    </main>
  );
}
