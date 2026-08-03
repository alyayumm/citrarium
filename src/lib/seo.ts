import type { Meta } from '../types';
import { metaByPath } from '../data/site';

export function applyMeta(path: string): Meta {
  const meta = metaByPath[path] ?? {
    title: 'Страница не найдена — автошкола Цитрариум',
    description: 'Проверьте адрес страницы или вернитесь на главную сайта автошколы «Цитрариум».',
  };

  document.title = meta.title;

  const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
  if (description) description.content = meta.description;

  const ogTitle = document.querySelector<HTMLMetaElement>('meta[property="og:title"]');
  if (ogTitle) ogTitle.content = meta.title;

  const ogDescription = document.querySelector<HTMLMetaElement>('meta[property="og:description"]');
  if (ogDescription) ogDescription.content = meta.description;

  const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (canonical) canonical.href = window.location.origin + path;

  return meta;
}

export function makeSlug(value: string): string {
  return value
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^\u0400-\u04ffa-z0-9-]/g, '')
    .replace(/-+/g, '-');
}
