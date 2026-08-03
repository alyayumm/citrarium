import { useMemo, useState } from 'react';
import { submitLead } from '../../lib/crm';
import { getUtmParams } from '../../lib/utm';
import { formatPhone, isPhoneValid } from '../../lib/validation';
import { Button } from '../ui/Button';

type QuizAnswerMap = Record<string, string>;

const steps = [
  {
    id: 'category',
    title: 'Какая категория нужна?',
    options: ['Категория B', 'Категория A', 'A+B', 'Восстановление навыков', 'Пока не знаю'],
  },
  {
    id: 'transmission',
    title: 'Коробка передач',
    options: ['АКПП', 'МКПП', 'Не важно'],
  },
  {
    id: 'experience',
    title: 'Ваш опыт',
    options: ['С нуля', 'Был перерыв', 'Есть базовый опыт', 'Нужно подготовиться к экзамену'],
  },
  {
    id: 'priority',
    title: 'Что важнее?',
    options: ['Дешевле', 'Быстрее', 'Больше практики', 'VIP', 'Женщина-инструктор', 'Мужчина-инструктор', 'Рядом с домом'],
  },
  {
    id: 'area',
    title: 'Район занятий',
    options: ['Центр', 'Север', 'Юг', 'Восток', 'Запад', 'Онлайн теория + практика рядом'],
  },
  {
    id: 'time',
    title: 'Удобное время',
    options: ['Утро', 'День', 'Вечер', 'Выходные', 'Гибкий график'],
  },
  {
    id: 'contact',
    title: 'Куда отправить подбор?',
    options: ['Звонок', 'Telegram', 'WhatsApp'],
  },
];

export function Quiz() {
  const [active, setActive] = useState(0);
  const [answers, setAnswers] = useState<QuizAnswerMap>({});
  const [phone, setPhone] = useState('');
  const [name, setName] = useState('');
  const [consent, setConsent] = useState(false);
  const [error, setError] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');
  const step = steps[active];
  const progress = useMemo(() => Math.round(((active + 1) / steps.length) * 100), [active]);
  const isLast = active === steps.length - 1;

  function selectAnswer(value: string) {
    setAnswers((current) => ({ ...current, [step.id]: value }));
    setError('');
  }

  function next() {
    if (!answers[step.id]) {
      setError('Выберите вариант, чтобы продолжить');
      return;
    }

    setActive((current) => Math.min(current + 1, steps.length - 1));
  }

  async function submit() {
    if (!answers[step.id]) {
      setError('Выберите способ связи');
      return;
    }

    if (!isPhoneValid(phone)) {
      setError('Введите корректный телефон');
      return;
    }

    if (!consent) {
      setError('Нужно согласие на обработку данных');
      return;
    }

    setStatus('loading');
    await submitLead({
      name: name.trim() || undefined,
      phone,
      messenger: answers.contact === 'Telegram' ? 'telegram' : answers.contact === 'WhatsApp' ? 'whatsapp' : 'phone',
      quizAnswers: answers,
      sourcePage: 'quiz',
      ...getUtmParams(),
    });
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className="quiz-card quiz-card--success" role="status">
        <h3>Персональный тариф подготовлен</h3>
        <p>Демо-заявка сохранена локально. После подключения CRM менеджер получит ответы квиза и UTM-метки.</p>
      </div>
    );
  }

  return (
    <div className="quiz-card">
      <div className="quiz-progress">
        <span>
          Шаг {active + 1} из {steps.length}
        </span>
        <div>
          <i style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="quiz-step">
        <h3>{step.title}</h3>
        <div className="quiz-options">
          {step.options.map((option) => (
            <button
              className={`option-button ${answers[step.id] === option ? 'option-button--selected' : ''}`}
              type="button"
              key={option}
              onClick={() => selectAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      {isLast ? (
        <div className="quiz-contact-fields">
          <label className="field">
            <span>Имя</span>
            <input value={name} onChange={(event) => setName(event.target.value)} placeholder="Как к вам обращаться" />
          </label>
          <label className="field">
            <span>Телефон *</span>
            <input value={phone} onChange={(event) => setPhone(formatPhone(event.target.value))} placeholder="+7 (___) ___-__-__" inputMode="tel" />
          </label>
          <label className="checkbox-field">
            <input type="checkbox" checked={consent} onChange={(event) => setConsent(event.target.checked)} />
            <span>Согласен на обработку персональных данных</span>
          </label>
        </div>
      ) : null}

      {error ? <p className="form-error">{error}</p> : null}

      <div className="quiz-nav">
        <Button type="button" variant="secondary" disabled={active === 0} onClick={() => setActive((current) => Math.max(0, current - 1))}>
          Назад
        </Button>
        {isLast ? (
          <Button type="button" onClick={submit} disabled={status === 'loading'}>
            {status === 'loading' ? 'Отправляем...' : 'Получить персональный тариф'}
          </Button>
        ) : (
          <Button type="button" onClick={next}>
            Далее
          </Button>
        )}
      </div>
    </div>
  );
}
