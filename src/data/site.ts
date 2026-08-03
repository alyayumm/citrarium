import type { Meta, NavItem } from '../types';
import { educationBasePath, educationSections, organizationData } from './organization';

export const brand = {
  name: 'Цитрариум',
  descriptor: 'Автошкола',
  tagline: 'Официальный сайт автошколы «Цитрариум» со сведениями об образовательной организации, документами и обязательными подразделами.',
};

export const contactData = {
  city: '[город]',
  hours: '[режим работы]',
  phone: '[телефон]',
  email: '[email]',
  address: '[адрес]',
  telegram: 'Telegram',
  telegramUrl: '',
  whatsapp: 'WhatsApp',
  whatsappUrl: '',
  vkUrl: '',
};

export const navigation: NavItem[] = [
  { label: 'Сведения', href: educationBasePath },
  { label: 'Документы', href: `${educationBasePath}/dokumenty` },
  { label: 'Образование', href: `${educationBasePath}/obrazovanie` },
  { label: 'Руководство', href: `${educationBasePath}/rukovodstvo` },
  { label: 'Доступная среда', href: `${educationBasePath}/dostupnaya-sreda` },
];

export const footerNavigation: NavItem[] = [
  { label: 'Главная', href: '/' },
  ...navigation,
  { label: 'Политика конфиденциальности', href: '/privacy' },
  { label: 'Согласие на обработку данных', href: '/consent' },
];

export const sectionNavigation: NavItem[] = educationSections.map((section) => ({
  label: section.shortTitle,
  href: `${educationBasePath}/${section.slug}`,
}));

export const metaByPath: Record<string, Meta> = {
  '/': {
    title: 'Автошкола Цитрариум — сведения об образовательной организации',
    description: 'Официальный сайт автошколы «Цитрариум»: сведения об образовательной организации, обязательные подразделы и документы.',
  },
  '/privacy': {
    title: 'Политика конфиденциальности — автошкола Цитрариум',
    description: 'Страница политики конфиденциальности для официального сайта автошколы «Цитрариум».',
  },
  '/consent': {
    title: 'Согласие на обработку данных — автошкола Цитрариум',
    description: 'Страница согласия на обработку персональных данных для форм сайта автошколы «Цитрариум».',
  },
  '/cookies': {
    title: 'Cookies — автошкола Цитрариум',
    description: 'Информация о cookies и аналитике сайта автошколы «Цитрариум».',
  },
  [educationBasePath]: {
    title: 'Сведения об образовательной организации — автошкола Цитрариум',
    description: 'Официальный раздел автошколы «Цитрариум» с основными сведениями, документами, образованием, руководством и обязательными подразделами.',
  },
};

for (const section of educationSections) {
  metaByPath[`${educationBasePath}/${section.slug}`] = {
    title: `${section.title} — автошкола Цитрариум`,
    description: section.summary,
  };
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['DrivingSchool', 'LocalBusiness'],
  name: `Автошкола ${brand.name}`,
  legalName: organizationData.fullName,
  description: brand.tagline,
  telephone: contactData.phone,
  email: contactData.email,
  address: contactData.address,
  url: organizationData.website,
};
