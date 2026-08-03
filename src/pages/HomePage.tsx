import { LeadForm } from '../components/forms/LeadForm';
import { Quiz } from '../components/home/Quiz';
import { CategoryVisual, HeroVisual, MapVisual, TheoryVisual } from '../components/home/Visuals';
import { LinkButton } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Container } from '../components/ui/Container';
import { benefits, branches, cars, faqItems, instructors, learningSteps, scheduleSlots, tariffs, trainingCategories } from '../data/drive';
import { handleInternalLink } from '../lib/navigation';
import { toPublicHref } from '../lib/router';

const heroBenefits = ['Теория онлайн', 'АКПП и МКПП', 'Гибкий график', 'Занятия рядом с домом', 'Поэтапная оплата'];
const marqueeItems = ['ТЕОРИЯ ОНЛАЙН', 'ГИБКИЙ ГРАФИК', 'АКПП И МКПП', 'РАССРОЧКА', 'СОПРОВОЖДЕНИЕ ДО ЭКЗАМЕНА'];
const indicators = [
  { value: '[X]', label: 'лет обучаем' },
  { value: '[X 000+]', label: 'выпускников' },
  { value: '[XX]', label: 'инструкторов' },
  { value: '[XX]', label: 'районов обучения' },
];

export function HomePage() {
  return (
    <main>
      <section className="hero">
        <Container className="hero__inner">
          <div className="hero__content">
            <h1>Уверенность за рулём начинается здесь</h1>
            <p>Современное обучение вождению, теория онлайн, занятия с выбранным инструктором и сопровождение до экзамена.</p>
            <div className="hero__actions">
              <LinkButton href="#programs">Подобрать программу</LinkButton>
              <LinkButton href="/prices" variant="secondary">Посмотреть тарифы</LinkButton>
            </div>
            <div className="hero__benefits" aria-label="Преимущества обучения">
              {heroBenefits.map((item) => <span key={item}>{item}</span>)}
            </div>
          </div>
          <HeroVisual />
        </Container>
      </section>

      <div className="marquee" aria-label="Ключевые условия">
        <div>{[...marqueeItems, ...marqueeItems].map((item, index) => <span key={`${item}-${index}`}>{item}</span>)}</div>
      </div>

      <section className="section section--compact">
        <Container>
          <div className="indicator-row">
            {indicators.map((item) => (
              <Card className="indicator-card" key={item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
                <small>данные требуют подтверждения</small>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" id="programs">
        <Container>
          <header className="section-heading">
            <h2>Направления обучения</h2>
            <p>Категории, восстановление навыков и дополнительные форматы. Стоимость и сроки оставлены плейсхолдерами до утверждения.</p>
          </header>
          <div className="category-grid">
            {trainingCategories.slice(0, 6).map((category) => (
              <Card className="category-card" key={category.id}>
                <CategoryVisual kind={category.visual} />
                <h3>{category.title}</h3>
                <p>{category.summary}</p>
                <dl>
                  <div><dt>Формат</dt><dd>{category.format}</dd></div>
                  <div><dt>Срок</dt><dd>{category.duration}</dd></div>
                  <div><dt>Стоимость</dt><dd>{category.priceLabel}</dd></div>
                </dl>
                <LinkButton href={`/programs/${category.slug}`} variant="secondary">Подробнее</LinkButton>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--muted" id="prices">
        <Container>
          <header className="section-heading">
            <h2>Тарифы без сюрпризов</h2>
            <p>Сетка подготовлена под реальные пакеты, рассрочку и дополнительные услуги. Числа не выдумываются.</p>
          </header>
          <div className="tariff-grid">
            {tariffs.map((tariff) => (
              <Card className={`tariff-card ${tariff.recommended ? 'tariff-card--recommended' : ''}`} key={tariff.id}>
                {tariff.recommended ? <span className="badge">Выбирают чаще</span> : null}
                <h3>{tariff.title}</h3>
                <strong>{tariff.priceLabel}</strong>
                <p>{tariff.paymentLabel}</p>
                <p>{tariff.installmentLabel}</p>
                <ul>{tariff.features.map((feature) => <li key={feature}>{feature}</li>)}</ul>
                <LinkButton href="#lead">Получить расчёт</LinkButton>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--dark" id="quiz">
        <Container className="quiz-layout">
          <header className="section-heading section-heading--dark">
            <h2>Подберите программу за пару минут</h2>
            <p>Квиз сохраняет ответы локально и уже готов к подключению CRM, телефонии и аналитики.</p>
          </header>
          <Quiz />
        </Container>
      </section>

      <section className="section">
        <Container>
          <header className="section-heading">
            <h2>Маршрут обучения</h2>
            <p>От заявки до экзамена: понятные этапы, поддержка менеджера и видимый прогресс.</p>
          </header>
          <div className="learning-path">
            {learningSteps.map((step, index) => (
              <article className="step-card" key={step}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <h3>{step}</h3>
              </article>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--split" id="online">
        <Container className="split-grid">
          <TheoryVisual />
          <div>
            <header className="section-heading">
              <h2>Теория онлайн</h2>
              <p>Будущий личный кабинет: записи занятий, тесты ПДД, материалы курса и контроль прогресса.</p>
            </header>
            <ul className="check-list">
              <li>доступ к материалам курса;</li>
              <li>тесты и повторение сложных тем;</li>
              <li>вопросы преподавателю;</li>
              <li>связка теории с практикой.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="section">
        <Container className="split-grid split-grid--reverse">
          <MapVisual />
          <div>
            <header className="section-heading">
              <h2>Практика рядом с вашим маршрутом</h2>
              <p>Филиалы, площадки и районы обучения размечены как структура. Реальные адреса нужно добавить после подтверждения.</p>
            </header>
            <ul className="check-list">
              <li>городские маршруты и парковка;</li>
              <li>АКПП и МКПП;</li>
              <li>подготовка к внутреннему и внешнему экзамену;</li>
              <li>дополнительный накат для уверенности.</li>
            </ul>
          </div>
        </Container>
      </section>

      <section className="section section--muted" id="instructors">
        <Container>
          <header className="section-heading">
            <h2>Инструкторы</h2>
            <p>Карточки готовы к реальным профилям: фото, стаж, категория, машина, район и расписание.</p>
          </header>
          <div className="instructor-grid">
            {instructors.map((instructor) => (
              <Card className="instructor-card" key={instructor.id}>
                <div className="portrait-placeholder" aria-hidden="true" />
                <h3>{instructor.label}</h3>
                <p>{instructor.description}</p>
                <dl>
                  <div><dt>Категория</dt><dd>{instructor.category}</dd></div>
                  <div><dt>Коробка</dt><dd>{instructor.transmission}</dd></div>
                  <div><dt>График</dt><dd>{instructor.schedule}</dd></div>
                </dl>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section" id="cars">
        <Container>
          <header className="section-heading">
            <h2>Автопарк</h2>
            <p>Единая система карточек под фото учебных автомобилей, коробку, категорию, инструктора и район.</p>
          </header>
          <div className="cars-grid">
            {cars.map((car) => (
              <Card className="car-card" key={car.id}>
                <CategoryVisual kind={car.category === 'A' ? 'bike' : 'car'} />
                <h3>{car.model}</h3>
                <p>{car.features}</p>
                <dl>
                  <div><dt>Коробка</dt><dd>{car.transmission}</dd></div>
                  <div><dt>Категория</dt><dd>{car.category}</dd></div>
                  <div><dt>Район</dt><dd>{car.area}</dd></div>
                </dl>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="section section--dark">
        <Container>
          <header className="section-heading section-heading--dark">
            <h2>Почему выбирают «Драйв»</h2>
            <p>Преимущества из ТЗ разложены короткими управляемыми карточками без неподтверждённых цифр.</p>
          </header>
          <div className="benefits-grid">{benefits.map((benefit) => <Card className="benefit-card" key={benefit}><h3>{benefit}</h3></Card>)}</div>
        </Container>
      </section>

      <section className="section" id="schedule">
        <Container>
          <header className="section-heading">
            <h2>Расписание</h2>
            <p>Демонстрационный вид для будущей интеграции с реальным расписанием занятий.</p>
          </header>
          <div className="schedule-table">
            <table>
              <thead>
                <tr><th>День</th><th>Время</th><th>Тип</th><th>Филиал</th><th>Инструктор</th><th>Места</th></tr>
              </thead>
              <tbody>
                {scheduleSlots.map((slot) => (
                  <tr key={`${slot.date}-${slot.time}-${slot.type}`}>
                    <td>{slot.date}</td><td>{slot.time}</td><td>{slot.type}</td><td>{slot.branch}</td><td>{slot.instructor}</td><td>{slot.seats}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Container>
      </section>

      <section className="section section--muted" id="branches">
        <Container className="branches-layout">
          <div>
            <header className="section-heading">
              <h2>Филиалы</h2>
              <p>Адреса и телефоны оставлены плейсхолдерами, чтобы не публиковать неподтверждённые данные.</p>
            </header>
            <div className="branch-list">{branches.map((branch) => <Card className="branch-card" key={branch.id}><h3>{branch.title}</h3><p>{branch.address}</p><span>{branch.metro}</span><span>{branch.hours}</span><span>{branch.categories}</span></Card>)}</div>
          </div>
          <MapVisual />
        </Container>
      </section>

      <section className="section" id="reviews">
        <Container>
          <header className="section-heading">
            <h2>Отзывы</h2>
            <p>Блок готов к подключению реальных источников: Яндекс Карты, VK, видео и рейтинги.</p>
          </header>
          <Card className="empty-review">
            <h3>Вымышленных отзывов нет</h3>
            <p>После подтверждения источников сюда можно добавить реальные тексты, ссылки и микроразметку Review.</p>
          </Card>
        </Container>
      </section>

      <section className="section section--muted" id="faq">
        <Container>
          <header className="section-heading">
            <h2>FAQ</h2>
            <p>Ответы на частые вопросы о сроках, теории, практике, инструкторах и документах.</p>
          </header>
          <div className="faq-list">{faqItems.map((item) => <details className="faq-item" key={item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>
        </Container>
      </section>

      <section className="final-cta" id="lead">
        <Container className="final-cta__inner">
          <div>
            <h2>Готовы начать обучение?</h2>
            <p>Оставьте заявку, и менеджер подберёт программу, график, инструктора и формат оплаты после подключения реальных каналов связи.</p>
            <div className="final-links">
              <a href={toPublicHref('/privacy')} onClick={(event) => handleInternalLink(event, '/privacy')}>Политика</a>
              <a href={toPublicHref('/consent')} onClick={(event) => handleInternalLink(event, '/consent')}>Согласие</a>
              <a href={toPublicHref('/cookies')} onClick={(event) => handleInternalLink(event, '/cookies')}>Cookies</a>
            </div>
          </div>
          <LeadForm sourcePage="home-final" />
        </Container>
      </section>
    </main>
  );
}
