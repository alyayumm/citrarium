import type { UtmParams } from './utm';

export type Messenger = 'telegram' | 'whatsapp' | 'phone';

export type LeadPayload = {
  name?: string;
  phone: string;
  category?: string;
  tariff?: string;
  instructorId?: string;
  branchId?: string;
  preferredTime?: string;
  messenger?: Messenger;
  quizAnswers?: Record<string, string>;
  sourcePage: string;
} & UtmParams;

export async function submitLead(payload: LeadPayload) {
  const enriched = {
    ...payload,
    createdAt: new Date().toISOString(),
    crmStatus: 'local-demo',
  };

  const stored = JSON.parse(window.localStorage.getItem('driveLeads') || '[]') as unknown[];
  window.localStorage.setItem('driveLeads', JSON.stringify([enriched, ...stored].slice(0, 20)));

  await new Promise((resolve) => window.setTimeout(resolve, 450));
  return { ok: true, payload: enriched };
}
