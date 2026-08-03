import { useState } from 'react';
import { trainingCategories } from '../../data/drive';
import type { LeadPayload, Messenger } from '../../lib/crm';
import { submitLead } from '../../lib/crm';
import { getUtmParams } from '../../lib/utm';
import { formatPhone, isPhoneValid } from '../../lib/validation';
import { Button } from '../ui/Button';

type LeadFormProps = {
  title?: string;
  sourcePage: string;
  tariff?: string;
  instructorId?: string;
  branchId?: string;
  compact?: boolean;
};

type FormState = {
  name: string;
  phone: string;
  category: string;
  messenger: Messenger;
  consent: boolean;
};

const initialState: FormState = {
  name: '',
  phone: '',
  category: 'category-b',
  messenger: 'phone',
  consent: false,
};

export function LeadForm({ title = 'Оставить заявку', sourcePage, tariff, instructorId, branchId, compact = false }: LeadFormProps) {
  const [state, setState] = useState(initialState);
  const [errors, setErrors] = useState<Partial<Record<keyof FormState, string>>>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success'>('idle');

  function update<Key extends keyof FormState>(key: Key, value: FormState[Key]) {
    setState((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Record<keyof FormState, string>> = {};

    if (!isPhoneValid(state.phone)) nextErrors.phone = 'Введите корректный телефон';
    if (!state.consent) nextErrors.consent = 'Нужно согласие на обработку данных';

    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      return;
    }

    const payload: LeadPayload = {
      name: state.name.trim() || undefined,
      phone: state.phone,
      category: state.category,
      messenger: state.messenger,
      tariff,
      instructorId,
      branchId,
      sourcePage,
      ...getUtmParams(),
    };

    setStatus('loading');
    await submitLead(payload);
    setStatus('success');
  }

  if (status === 'success') {
    return (
      <div className={`lead-form lead-form--success ${compact ? 'lead-form--compact' : ''}`} role="status">
        <h3>Заявка сохранена</h3>
        <p>Это локальная демо-отправка. После подключения CRM payload уже готов к передаче.</p>
        <Button type="button" variant="secondary" onClick={() => setStatus('idle')}>
          Отправить ещё одну
        </Button>
      </div>
    );
  }

  return (
    <form className={`lead-form ${compact ? 'lead-form--compact' : ''}`} onSubmit={onSubmit} noValidate>
      <h3>{title}</h3>
      <label className="field">
        <span>Имя</span>
        <input value={state.name} onChange={(event) => update('name', event.target.value)} placeholder="Как к вам обращаться" autoComplete="name" />
      </label>
      <label className="field">
        <span>Телефон *</span>
        <input
          value={state.phone}
          onChange={(event) => update('phone', formatPhone(event.target.value))}
          placeholder="+7 (___) ___-__-__"
          autoComplete="tel"
          inputMode="tel"
          aria-invalid={Boolean(errors.phone)}
        />
        {errors.phone ? <em>{errors.phone}</em> : null}
      </label>
      <label className="field">
        <span>Категория</span>
        <select value={state.category} onChange={(event) => update('category', event.target.value)}>
          {trainingCategories.map((category) => (
            <option value={category.id} key={category.id}>
              {category.title}
            </option>
          ))}
        </select>
      </label>
      <fieldset className="messenger-field">
        <legend>Способ связи</legend>
        {(['phone', 'telegram', 'whatsapp'] as Messenger[]).map((item) => (
          <button
            type="button"
            className={state.messenger === item ? 'is-active' : ''}
            key={item}
            onClick={() => update('messenger', item)}
            aria-pressed={state.messenger === item}
          >
            {item === 'phone' ? 'Звонок' : item === 'telegram' ? 'Telegram' : 'WhatsApp'}
          </button>
        ))}
      </fieldset>
      <label className="checkbox-field">
        <input type="checkbox" checked={state.consent} onChange={(event) => update('consent', event.target.checked)} />
        <span>Согласен на обработку персональных данных</span>
      </label>
      {errors.consent ? <em className="form-error">{errors.consent}</em> : null}
      <Button type="submit" disabled={status === 'loading'}>
        {status === 'loading' ? 'Отправляем...' : 'Записаться на консультацию'}
      </Button>
    </form>
  );
}
