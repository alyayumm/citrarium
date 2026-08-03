import { LeadForm } from '../components/forms/LeadForm';
import { CategoryVisual, MapVisual, TheoryVisual } from '../components/home/Visuals';
import { LinkButton } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { benefits, branches, cars, faqItems, instructors, legalPages, tariffs, trainingCategories, type TrainingCategory } from '../data/drive';
import { contactData } from '../data/site';

export function ProgramsPage() {
  return (
    <InnerShell title="Программы обучения" description="Категории, восстановление навыков и дополнительные форматы. Реальные сроки и стоимость ждут утверждения.">
      <div className="category-grid">
        {trainingCategories.map((category) => (
          <Card className="category-card" key={category.id}>
            <CategoryVisual kind={category.visual} />
            <h2>{category.title}</h2>
            <p>{category.summary}</p>
            <dl>
              <div>
                <dt>Формат</dt>
                <dd>{category.format}</dd>
              </div>
              <div>
                <dt>Срок</dt>
                <dd>{category.duration}</dd>
              </div>
              <div>
                <dt>Стоимость</dt>
                <dd>{category.priceLabel}</dd>
              </div>
            </dl>
            <LinkButton href={`/programs/${category.slug}`} variant="secondary">
              Подробнее
            </LinkButton>
          </Card>
        ))}
      </div>
    </InnerShell>
  );
}

export function ProgramDetailPage({ category }: { category: TrainingCategory }) {
  return (
    <InnerShell title={category.title} description={category.summary}>
      <div className="detail-layout">
        <Card className="detail-visual">
          <CategoryVisual kind={category.visual} />
          <dl>
            <div>
              <dt>Формат</dt>
              <dd>{category.format}</dd>
            </div>
            <div>
              <dt>Срок</dt>
              <dd>{category.duration}</dd>
            </div>
            <div>
              <dt>Стоимость</dt>
              <dd>{category.priceLabel}</dd>
            </div>
          </dl>
        </Card>
        <div className="page-stack">
          <Card className="content-card">
            <h2>Что входит</h2>
            <ul className="check-list">
              {category.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
              <li>Теория, практика, внутренний экзамен и сопровождение описываются по утверждённой программе.</li>
            </ul>
          </Card>
          <Card className="content-card">
            <h2>Документы и требования</h2>
            <p>Требования к документам, медицинской справке и возрасту нужно заполнить после юридической проверки программы.</p>
          </Card>
          <LeadForm title="Записаться на программу" sourcePage={`program-${category.slug}`} compact />
        </div>
      </div>
    </InnerShell>
  );
}

export function PricesPage() {
  return (
    <InnerShell title="Тарифы" description="Сравнение пакетов без вымышленных цен. После утверждения сумм достаточно обновить data-файл.">
      <div className="tariff-grid">
        {tariffs.map((tariff) => (
          <Card className={`tariff-card ${tariff.recommended ? 'tariff-card--recommended' : ''}`} key={tariff.id}>
            {tariff.recommended ? <span className="badge">Выбирают чаще</span> : null}
            <h2>{tariff.title}</h2>
            <strong>{tariff.priceLabel}</strong>
            <p>{tariff.paymentLabel}</p>
            <p>{tariff.installmentLabel}</p>
            <ul>
              {tariff.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <LinkButton href="/#lead">Получить расчёт</LinkButton>
          </Card>
        ))}
      </div>
      <Card className="content-card">
        <h2>Дополнительные услуги</h2>
        <p>Дополнительный накат, пересдачи, справки, сертификаты и индивидуальные занятия добавляются только после подтверждения условий и стоимости.</p>
      </Card>
    </InnerShell>
  );
}

export function OnlineLearningPage() {
  return (
    <InnerShell title="Онлайн-теория" description="Раздел под онлайн-занятия, записи, тесты ПДД, материалы и контроль прогресса.">
      <div className="split-grid">
        <TheoryVisual />
        <Card className="content-card">
          <h2>Личный кабинет</h2>
          <p>Визуальный блок показывает будущий интерфейс. Реальный кабинет, API и прогресс подключаются отдельно.</p>
          <ul className="check-list">
            <li>записи занятий;</li>
            <li>тесты ПДД;</li>
            <li>материалы курса;</li>
            <li>вопросы преподавателю;</li>
            <li>контроль прогресса.</li>
          </ul>
        </Card>
      </div>
    </InnerShell>
  );
}

export function InstructorsPage() {
  return (
    <InnerShell title="Инструкторы" description="Фильтры и карточки готовы к наполнению реальными профилями.">
      <div className="filter-row">
        {['Женщина', 'Мужчина', 'АКПП', 'МКПП', 'Район', 'Категория'].map((filter) => (
          <button type="button" key={filter}>{filter}</button>
        ))}
      </div>
      <div className="instructor-grid">
        {instructors.map((instructor) => (
          <Card className="instructor-card" key={instructor.id}>
            <div className="portrait-placeholder" />
            <h2>{instructor.label}</h2>
            <p>{instructor.description}</p>
            <dl>
              <div><dt>Категория</dt><dd>{instructor.category}</dd></div>
              <div><dt>Коробка</dt><dd>{instructor.transmission}</dd></div>
              <div><dt>Авто</dt><dd>{instructor.car}</dd></div>
              <div><dt>График</dt><dd>{instructor.schedule}</dd></div>
            </dl>
            <LeadForm title="Записаться" sourcePage="instructor" instructorId={instructor.id} compact />
          </Card>
        ))}
      </div>
    </InnerShell>
  );
}

export function CarsPage() {
  return (
    <InnerShell title="Автопарк" description="Карточки автомобилей готовы к реальным фото, моделям, коробке, категории, району и инструктору.">
      <div className="cars-grid">
        {cars.map((car) => (
          <Card className="car-card" key={car.id}>
            <CategoryVisual kind={car.category === 'A' ? 'bike' : 'car'} />
            <h2>{car.model}</h2>
            <p>{car.features}</p>
            <dl>
              <div><dt>Коробка</dt><dd>{car.transmission}</dd></div>
              <div><dt>Категория</dt><dd>{car.category}</dd></div>
              <div><dt>Инструктор</dt><dd>{car.instructor}</dd></div>
            </dl>
          </Card>
        ))}
      </div>
    </InnerShell>
  );
}

export function BranchesPage() {
  return (
    <InnerShell title="Филиалы" description="Список филиалов, карта, телефоны, категории и маршрут. Адреса не выдумываются.">
      <div className="branches-layout">
        <div className="branch-list">
          {branches.map((branch) => (
            <Card className="branch-card" key={branch.id}>
              <h2>{branch.title}</h2>
              <p>{branch.address}</p>
              <span>{branch.metro}</span>
              <span>{branch.hours}</span>
              <span>{branch.phone}</span>
              <span>{branch.categories}</span>
            </Card>
          ))}
        </div>
        <MapVisual />
      </div>
    </InnerShell>
  );
}

export function ReviewsPage() {
  return (
    <InnerShell title="Отзывы" description="Раздел подготовлен для реальных текстовых и видеоотзывов, рейтинга и ссылок на площадки.">
      <Card className="empty-review">
        <h2>Реальные отзывы ещё не подключены</h2>
        <p>Чтобы не вводить посетителей в заблуждение, сайт не содержит вымышленных имён, дат, оценок и текстов отзывов.</p>
        <p>После подтверждения источников сюда можно добавить Яндекс Карты, VK, видеоотзывы и микроразметку Review.</p>
      </Card>
    </InnerShell>
  );
}

export function AboutPage() {
  return (
    <InnerShell title="О школе" description="«Драйв» строится вокруг спокойного обучения, понятных условий и подготовки к реальному вождению.">
      <div className="page-grid page-grid--three">
        {benefits.slice(0, 6).map((benefit) => (
          <Card className="benefit-card benefit-card--light" key={benefit}>
            <h2>{benefit}</h2>
          </Card>
        ))}
      </div>
      <Card className="content-card">
        <h2>Данные для заполнения</h2>
        <p>История школы, лицензия, команда, реальные филиалы, реквизиты и фото добавляются после подтверждения. Текущая версия не придумывает факты.</p>
      </Card>
    </InnerShell>
  );
}

export function ContactsPage() {
  return (
    <InnerShell title="Контакты" description="Форма, филиалы, режим работы и каналы связи подготовлены к реальным данным.">
      <div className="contacts-layout">
        <Card className="contact-card">
          <h2>Свяжитесь с нами</h2>
          <p>{contactData.city}</p>
          <p>{contactData.phone}</p>
          <p>{contactData.email}</p>
          <p>{contactData.address}</p>
          <p>{contactData.hours}</p>
        </Card>
        <LeadForm title="Обратный звонок" sourcePage="contacts" />
      </div>
    </InnerShell>
  );
}

export function FaqPage() {
  return (
    <InnerShell title="FAQ" description="Ответы на частые вопросы о длительности, практике, онлайне, оплате, инструкторах и документах.">
      <div className="faq-list">
        {faqItems.map((item) => (
          <details className="faq-item" key={item.question}>
            <summary>{item.question}</summary>
            <p>{item.answer}</p>
          </details>
        ))}
      </div>
    </InnerShell>
  );
}

export function LegalPage({ kind }: { kind: keyof typeof legalPages }) {
  const page = legalPages[kind];
  return (
    <InnerShell title={page.title} description={page.description}>
      <div className="page-stack">
        {page.blocks.map((block) => (
          <Card className="content-card" key={block}>
            <p>{block}</p>
          </Card>
        ))}
      </div>
    </InnerShell>
  );
}

function InnerShell({ title, description, children }: { title: string; description: string; children: React.ReactNode }) {
  return (
    <main className="inner-page">
      <Container>
        <header className="page-hero">
          <h1>{title}</h1>
          <p>{description}</p>
        </header>
        {children}
      </Container>
    </main>
  );
}
