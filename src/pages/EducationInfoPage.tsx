import { useMemo, useState } from 'react';
import { BrandIcon } from '../components/ui/BrandIcon';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { educationBasePath, educationSections, InfoSection, organizationData } from '../data/organization';
import { handleInternalLink } from '../lib/navigation';
import { toPublicHref } from '../lib/router';

type EducationInfoPageProps = {
  activeSlug?: string;
};

export function EducationInfoPage({ activeSlug }: EducationInfoPageProps) {
  const [query, setQuery] = useState('');
  const activeSection = educationSections.find((section) => section.slug === activeSlug);
  const sectionsToRender = activeSection ? [activeSection] : educationSections;

  const visibleSections = useMemo(() => {
    const normalized = query.trim().toLowerCase();
    if (!normalized) return sectionsToRender;

    return sectionsToRender.filter((section) => {
      const text = [
        section.title,
        section.summary,
        ...(section.fields?.flatMap((field) => [field.label, field.value]) ?? []),
        ...(section.notes ?? []),
        ...(section.documents?.flatMap((document) => [document.title, document.description]) ?? []),
      ]
        .join(' ')
        .toLowerCase();

      return text.includes(normalized);
    });
  }, [query, sectionsToRender]);

  return (
    <main className="inner-page education-page">
      <Container>
        <nav className="breadcrumbs" aria-label="Хлебные крошки">
          <a href="/" onClick={(event) => handleInternalLink(event, '/')}>
            Главная
          </a>
          <span>/</span>
          <a href={educationBasePath} onClick={(event) => handleInternalLink(event, educationBasePath)}>
            Сведения об образовательной организации
          </a>
          {activeSection ? (
            <>
              <span>/</span>
              <span>{activeSection.shortTitle}</span>
            </>
          ) : null}
        </nav>

        <header className="page-hero official-page-hero">
          <p className="official-kicker">Официальная информация</p>
          <h1>{activeSection ? activeSection.title : 'Сведения об образовательной организации'}</h1>
          <p>
            {activeSection
              ? activeSection.summary
              : 'Раздел представлен как набор страниц с общим механизмом навигации, поиском по тексту и ссылками на документы.'}
          </p>
          <div className="page-actions">
            <button type="button" onClick={() => window.print()}>
              Печать страницы
            </button>
            <a href={`${educationBasePath}/dokumenty`} onClick={(event) => handleInternalLink(event, `${educationBasePath}/dokumenty`)}>
              Все документы
            </a>
          </div>
        </header>

        <div className="education-page-body">
          <div className="education-rubricator-panel" aria-label="Навигация по сведениям">
            <label className="search-field education-rubricator-panel__search">
              <span>Поиск по текущему разделу</span>
              <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder="Введите запрос" />
            </label>
            <nav className="education-rubricator-panel__links">
              <a
                className={!activeSection ? 'is-active' : ''}
                href={educationBasePath}
                onClick={(event) => handleInternalLink(event, educationBasePath)}
              >
                Все сведения
              </a>
              {educationSections.map((section) => (
                <a
                  key={section.slug}
                  className={section.slug === activeSlug ? 'is-active' : ''}
                  href={`${educationBasePath}/${section.slug}`}
                  onClick={(event) => handleInternalLink(event, `${educationBasePath}/${section.slug}`)}
                >
                  {section.shortTitle}
                </a>
              ))}
            </nav>
          </div>

          <div className="education-content">
            {!activeSection ? <OrganizationLead /> : null}
            {visibleSections.length > 0 ? (
              visibleSections.map((section) => <InfoSectionBlock key={section.slug} section={section} />)
            ) : (
              <Card className="content-card">
                <h2>По запросу ничего не найдено</h2>
                <p>Попробуйте изменить формулировку или откройте общий список сведений.</p>
              </Card>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
}

function OrganizationLead() {
  return (
    <Card className="content-card organization-lead" as="section">
      <div className="content-card__head">
        <span className="brand-icon-shell">
          <BrandIcon name="building" />
        </span>
        <h2>Карточка организации</h2>
      </div>
      <dl className="official-data-list">
        <div>
          <span className="official-data-list__icon">
            <BrandIcon name="certificate" />
          </span>
          <dt>Полное наименование</dt>
          <dd>{organizationData.fullName}</dd>
        </div>
        <div>
          <span className="official-data-list__icon">
            <BrandIcon name="document" />
          </span>
          <dt>Сокращенное наименование</dt>
          <dd>{organizationData.shortName}</dd>
        </div>
        <div>
          <span className="official-data-list__icon">
            <BrandIcon name="map" />
          </span>
          <dt>Адрес</dt>
          <dd>{organizationData.address}</dd>
        </div>
        {organizationData.phone ? (
          <div>
            <span className="official-data-list__icon">
              <BrandIcon name="phone" />
            </span>
            <dt>Телефон</dt>
            <dd>{organizationData.phone}</dd>
          </div>
        ) : null}
      </dl>
    </Card>
  );
}

function InfoSectionBlock({ section }: { section: InfoSection }) {
  return (
    <section className="official-info-section" id={section.slug} itemScope itemProp={section.itemProp}>
      <header>
        <div className="official-info-section__top">
          <span className="brand-icon-shell brand-icon-shell--large">
            <BrandIcon name={section.icon} />
          </span>
          <div>
            <span className="official-info-section__label">{section.shortTitle}</span>
            <h2>{section.title}</h2>
          </div>
        </div>
        <p>{section.summary}</p>
      </header>

      {section.fields ? (
        <Card className="content-card">
          <dl className="official-data-list">
            {section.fields.map((field) => (
              <div key={`${section.slug}-${field.label}`}>
                <dt>{field.label}</dt>
                <dd itemProp={field.itemProp}>{field.value}</dd>
              </div>
            ))}
          </dl>
        </Card>
      ) : null}

      {section.notes ? (
        <Card className="content-card">
          <div className="content-card__head">
            <span className="brand-icon-shell">
              <BrandIcon name="shield" />
            </span>
            <h3>Дополнительная информация</h3>
          </div>
          <ul className="requirement-list">
            {section.notes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </Card>
      ) : null}

      {section.table ? (
        <Card className="content-card table-card">
          <div className="content-card__head">
            <span className="brand-icon-shell">
              <BrandIcon name="table" />
            </span>
            <h3>{section.table.caption}</h3>
          </div>
          <div className="responsive-table">
            <table>
              <thead>
                <tr>
                  {section.table.columns.map((column) => (
                    <th key={column}>{column}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {section.table.rows.map((row) => (
                  <tr key={row.join('-')}>
                    {row.map((cell) => (
                      <td key={cell}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
      ) : null}

      {section.documents ? (
        <div className="document-grid official-document-grid">
          {section.documents.map((document) => (
            <Card className="document-card official-document-card" key={document.id}>
              <div className="document-card__top">
                <span className="brand-icon-shell">
                  <BrandIcon name="document" />
                </span>
                <span className={`document-status document-status--${document.status}`}>
                  {document.status === 'available' ? 'PDF' : document.status === 'absent' ? 'Отсутствует' : 'PDF будет добавлен'}
                </span>
              </div>
              <h3>{document.title}</h3>
              <p>{document.description}</p>
              <div className="document-card__actions">
                <a href={toPublicHref(document.href)} target="_blank" rel="noreferrer">
                  <BrandIcon name="search" />
                  Открыть PDF
                </a>
                <a href={toPublicHref(document.href)} download>
                  <BrandIcon name="download" />
                  Скачать
                </a>
              </div>
            </Card>
          ))}
        </div>
      ) : null}
    </section>
  );
}
