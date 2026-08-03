import type { Meta, NavItem } from '../types';
import { trainingCategories } from './drive';
import { educationBasePath, educationSections, organizationData } from './organization';

export const brand = {
  name: 'Драйв',
  descriptor: 'Автошкола',
  tagline: 'Автошкола нового поколения: понятное обучение, современная теория и спокойная практика до уверенности за рулем.',
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
  { label: 'Курсы', href: '/programs' },
  { label: 'Тарифы', href: '/prices' },
  { label: 'Онлайн-теория', href: '/online-learning' },
  { label: 'Инструкторы', href: '/instructors' },
  { label: 'Автопарк', href: '/cars' },
  { label: 'Филиалы', href: '/branches' },
  { label: 'Контакты', href: '/contacts' },
];

export const footerNavigation: NavItem[] = [
  { label: 'Главная', href: '/' },
  ...navigation,
  { label: 'Отзывы', href: '/reviews' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Сведения об образовательной организации', href: educationBasePath },
];

export const sectionNavigation: NavItem[] = educationSections.map((section) => ({
  label: section.shortTitle,
  href: `${educationBasePath}/${section.slug}`,
}));

export const metaByPath: Record<string, Meta> = {
  '/': {
    title: 'Автошкола Драйв — обучение вождению, теория онлайн и практика',
    description: 'Современная автошкола Драйв: категории A, B, A+B, восстановление навыков, онлайн-теория, практика, инструкторы, автопарк и заявка на обучение.',
  },
  '/programs': {
    title: 'Программы обучения — автошкола Драйв',
    description: 'Категории A, B, A+B, восстановление навыков и дополнительные форматы обучения в автошколе Драйв.',
  },
  '/prices': {
    title: 'Тарифы и стоимость обучения — автошкола Драйв',
    description: 'Страница тарифов автошколы Драйв подготовлена под реальные цены, рассрочку, пакетные условия и честные плейсхолдеры до утверждения.',
  },
  '/online-learning': {
    title: 'Онлайн-теория — автошкола Драйв',
    description: 'Онлайн-теория, записи занятий, тесты ПДД, материалы курса и контроль прогресса в автошколе Драйв.',
  },
  '/instructors': {
    title: 'Инструкторы — автошкола Драйв',
    description: 'Карточки инструкторов автошколы Драйв с фильтрами по категории, коробке, району и графику после подтверждения данных.',
  },
  '/cars': {
    title: 'Автопарк — автошкола Драйв',
    description: 'Учебные автомобили и техника автошколы Драйв: категория, коробка, инструктор и район занятий после подтверждения автопарка.',
  },
  '/branches': {
    title: 'Филиалы — автошкола Драйв',
    description: 'Филиалы, адреса, график работы, категории обучения и карта автошколы Драйв после подтверждения данных.',
  },
  '/reviews': {
    title: 'Отзывы — автошкола Драйв',
    description: 'Раздел отзывов автошколы Драйв без вымышленных отзывов, готовый к подключению реальных источников.',
  },
  '/about': {
    title: 'О школе — автошкола Драйв',
    description: 'Информация об автошколе Драйв, принципах обучения, команде и документах после подтверждения фактов.',
  },
  '/contacts': {
    title: 'Контакты — автошкола Драйв',
    description: 'Контакты автошколы Драйв, форма обратного звонка, филиалы и каналы связи после подтверждения.',
  },
  '/faq': {
    title: 'FAQ — автошкола Драйв',
    description: 'Ответы на частые вопросы об обучении, теории, практике, оплате, инструкторах и документах автошколы Драйв.',
  },
  '/privacy': {
    title: 'Политика конфиденциальности — автошкола Драйв',
    description: 'Структура политики конфиденциальности для сайта автошколы Драйв. Требует финального юридического текста.',
  },
  '/consent': {
    title: 'Согласие на обработку данных — автошкола Драйв',
    description: 'Страница согласия на обработку персональных данных для форм сайта автошколы Драйв.',
  },
  '/cookies': {
    title: 'Cookies — автошкола Драйв',
    description: 'Информация о cookies и аналитике сайта автошколы Драйв после подключения реальных сервисов.',
  },
  [educationBasePath]: {
    title: 'Сведения об образовательной организации — автошкола Драйв',
    description: 'Официальный раздел автошколы Драйв с основными сведениями, документами, образованием, руководством и обязательными подразделами.',
  },
};

for (const section of educationSections) {
  metaByPath[`${educationBasePath}/${section.slug}`] = {
    title: `${section.title} — автошкола Драйв`,
    description: section.summary,
  };
}

for (const category of trainingCategories) {
  metaByPath[`/programs/${category.slug}`] = {
    title: `${category.title} — автошкола Драйв`,
    description: `${category.summary} Формат: ${category.format}.`,
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
