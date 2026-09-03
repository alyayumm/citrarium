import type { Meta, NavItem } from '../types';
import { educationBasePath, educationSections, organizationData } from './organization';

export const brand = {
  name: 'Цитрариум',
  descriptor: 'Автошкола',
  tagline:
    'Автошкола «Цитрариум» в Санкт-Петербурге: обучение вождению, тарифы, документы и официальные сведения об образовательной организации.',
};

export const contactData = {
  city: 'Санкт-Петербург',
  hours: 'Ежедневно с 9:00 до 21:00',
  phone: organizationData.phone,
  email: organizationData.email,
  address: organizationData.address,
  telegram: 'Telegram',
  telegramUrl: '',
  whatsapp: 'WhatsApp',
  whatsappUrl: '',
  vkUrl: '',
};

export const navigation: NavItem[] = [
  { label: 'Услуги', href: '/#services' },
  { label: 'Тарифы', href: '/#tariffs' },
  { label: 'Обучение', href: '/#process' },
  { label: 'Документы', href: `${educationBasePath}/dokumenty` },
  { label: 'Сведения', href: educationBasePath },
];

export const footerNavigation: NavItem[] = [
  { label: 'Главная', href: '/' },
  { label: 'Услуги', href: '/#services' },
  { label: 'Тарифы', href: '/#tariffs' },
  { label: 'Как проходит обучение', href: '/#process' },
  { label: 'Документы', href: `${educationBasePath}/dokumenty` },
  { label: 'Сведения об образовательной организации', href: educationBasePath },
  { label: 'Политика конфиденциальности', href: '/privacy' },
  { label: 'Согласие на обработку данных', href: '/consent' },
];

export const sectionNavigation: NavItem[] = educationSections.map((section) => ({
  label: section.shortTitle,
  href: `${educationBasePath}/${section.slug}`,
}));

export const metaByPath: Record<string, Meta> = {
  '/': {
    title: 'Автошкола Цитрариум — обучение вождению в Санкт-Петербурге',
    description:
      'Автошкола «Цитрариум»: категории B, A и A+B, тарифы, онлайн- и классическое обучение, документы и официальные сведения.',
  },
  '/privacy': {
    title: 'Политика конфиденциальности — автошкола Цитрариум',
    description: 'Страница политики конфиденциальности для сайта автошколы «Цитрариум».',
  },
  '/consent': {
    title: 'Согласие на обработку данных — автошкола Цитрариум',
    description: 'Страница согласия на обработку персональных данных для форм сайта автошколы «Цитрариум».',
  },
  '/cookies': {
    title: 'Cookies — автошкола Цитрариум',
    description: 'Информация о cookies и технической работе сайта автошколы «Цитрариум».',
  },
  [educationBasePath]: {
    title: 'Сведения об образовательной организации — автошкола Цитрариум',
    description:
      'Официальный раздел автошколы «Цитрариум» с основными сведениями, документами, образованием, руководством и обязательными подразделами.',
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
  telephone: contactData.phone || undefined,
  email: contactData.email || undefined,
  address: contactData.address || undefined,
  url: organizationData.website || undefined,
};
