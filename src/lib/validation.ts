export type FieldErrors<T extends string> = Partial<Record<T, string>>;

export function normalizePhone(value: string) {
  return value.replace(/\D/g, '');
}

export function formatPhone(value: string) {
  const digits = normalizePhone(value).slice(0, 11);
  if (!digits) return '';

  const normalized = digits.startsWith('8') ? `7${digits.slice(1)}` : digits;
  const parts = [
    normalized.slice(0, 1),
    normalized.slice(1, 4),
    normalized.slice(4, 7),
    normalized.slice(7, 9),
    normalized.slice(9, 11),
  ].filter(Boolean);

  if (parts.length <= 1) return `+${parts[0]}`;
  if (parts.length === 2) return `+${parts[0]} (${parts[1]}`;
  if (parts.length === 3) return `+${parts[0]} (${parts[1]}) ${parts[2]}`;
  if (parts.length === 4) return `+${parts[0]} (${parts[1]}) ${parts[2]}-${parts[3]}`;
  return `+${parts[0]} (${parts[1]}) ${parts[2]}-${parts[3]}-${parts[4]}`;
}

export function isPhoneValid(value: string) {
  const digits = normalizePhone(value);
  return digits.length >= 10 && digits.length <= 11;
}
