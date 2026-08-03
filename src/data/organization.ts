import type { IconName } from '../types';

export type OfficialDocument = {
  id: string;
  title: string;
  description: string;
  href: string;
  status: 'pending' | 'absent' | 'available';
};

export type InfoField = {
  label: string;
  value: string;
  itemProp?: string;
};

export type InfoSection = {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  icon: IconName;
  itemProp: string;
  summary: string;
  fields?: InfoField[];
  notes?: string[];
  documents?: OfficialDocument[];
  table?: {
    caption: string;
    columns: string[];
    rows: string[][];
  };
};

export const organizationData = {
  fullName: '[Полное юридическое наименование автошколы «Драйв»]',
  shortName: 'Автошкола «Драйв»',
  createdAt: '[Дата создания организации]',
  address: '[Адрес образовательной организации]',
  workTime: '[Режим работы]',
  phone: '[Телефон для публикации]',
  email: '[Email для публикации]',
  website: '[Адрес официального сайта]',
  educationAddress: '[Адрес места осуществления образовательной деятельности]',
  director: '[ФИО руководителя]',
  directorRole: '[Должность руководителя]',
  accreditation: '[Сведения о государственной аккредитации / статус отсутствия]',
  license: '[Сведения о лицензии / ссылка на выписку из реестра лицензий]',
};

const pendingPdf = './documents/placeholder.pdf';

export const documents: OfficialDocument[] = [
  { id: 'charter', title: 'Устав образовательной организации', description: 'PDF будет загружен после предоставления документа.', href: pendingPdf, status: 'pending' },
  { id: 'license', title: 'Лицензия на осуществление образовательной деятельности', description: 'Ссылка на выписку из реестра лицензий будет добавлена после подтверждения.', href: pendingPdf, status: 'pending' },
  { id: 'program', title: 'Образовательная программа', description: 'Утверждённая программа обучения будет добавлена в раздел документов.', href: pendingPdf, status: 'pending' },
  { id: 'contract', title: 'Образец договора об оказании платных образовательных услуг', description: 'Шаблон договора требует юридического подтверждения.', href: pendingPdf, status: 'pending' },
  { id: 'price-order', title: 'Приказ о стоимости обучения', description: 'Не заполняется вымышленными ценами. Нужен утверждённый документ.', href: pendingPdf, status: 'pending' },
  { id: 'privacy', title: 'Политика обработки персональных данных', description: 'Финальная редакция будет добавлена перед публикацией.', href: pendingPdf, status: 'pending' },
];

const doc = (...ids: string[]) => documents.filter((item) => ids.includes(item.id));

export const educationSections: InfoSection[] = [
  {
    id: 'basic',
    slug: 'osnovnye-svedeniya',
    title: 'Основные сведения',
    shortTitle: 'Основные сведения',
    icon: 'building',
    itemProp: 'osnovSveden',
    summary: 'Общие сведения об образовательной организации, контакты, адреса и статус лицензии.',
    fields: [
      { label: 'Полное наименование организации', value: organizationData.fullName, itemProp: 'fullName' },
      { label: 'Сокращенное наименование', value: organizationData.shortName, itemProp: 'shortName' },
      { label: 'Дата создания', value: organizationData.createdAt, itemProp: 'regDate' },
      { label: 'Место нахождения', value: organizationData.address, itemProp: 'address' },
      { label: 'Режим работы', value: organizationData.workTime, itemProp: 'workTime' },
      { label: 'Контактный телефон', value: organizationData.phone, itemProp: 'telephone' },
      { label: 'Адрес электронной почты', value: organizationData.email, itemProp: 'email' },
      { label: 'Адрес официального сайта', value: organizationData.website, itemProp: 'site' },
      { label: 'Адрес места осуществления образовательной деятельности', value: organizationData.educationAddress },
      { label: 'Лицензия на осуществление образовательной деятельности', value: organizationData.license, itemProp: 'licenseDocLink' },
      { label: 'Государственная аккредитация', value: organizationData.accreditation, itemProp: 'accreditation' },
    ],
    documents: doc('license'),
  },
  {
    id: 'structure',
    slug: 'struktura-i-organy-upravleniya',
    title: 'Структура и органы управления',
    shortTitle: 'Структура',
    icon: 'structure',
    itemProp: 'structOrgUprav',
    summary: 'Сведения об органах управления, руководителе, контактах и месте нахождения.',
    fields: [
      { label: 'Единоличный исполнительный орган', value: `${organizationData.directorRole} ${organizationData.director}`, itemProp: 'name' },
      { label: 'Место нахождения', value: organizationData.address, itemProp: 'addressStr' },
      { label: 'Контактный телефон', value: organizationData.phone, itemProp: 'telephone' },
      { label: 'Адрес электронной почты', value: organizationData.email, itemProp: 'email' },
    ],
  },
  { id: 'documents', slug: 'dokumenty', title: 'Документы', shortTitle: 'Документы', icon: 'document', itemProp: 'document', summary: 'Устав, лицензия, локальные нормативные акты и документы платных образовательных услуг.', documents, notes: ['Все документы сейчас являются плейсхолдерами и должны быть заменены реальными PDF-файлами.'] },
  { id: 'education', slug: 'obrazovanie', title: 'Образование', shortTitle: 'Образование', icon: 'education', itemProp: 'education', summary: 'Реализуемые программы, формы обучения, сроки, язык обучения и численность обучающихся.', fields: [{ label: 'Виды реализуемых образовательных программ', value: '[Будет заполнено после утверждения программ]', itemProp: 'eduProgram' }, { label: 'Формы обучения', value: '[Очная / дистанционные технологии после подтверждения]', itemProp: 'eduForm' }, { label: 'Нормативные сроки обучения', value: '[Будет заполнено по учебным планам]', itemProp: 'learningTerm' }, { label: 'Язык обучения', value: '[Будет заполнено в соответствии с положением]', itemProp: 'language' }, { label: 'Численность обучающихся', value: '[Будет заполнено после подтверждения данных]', itemProp: 'number' }], documents: doc('program') },
  { id: 'management', slug: 'rukovodstvo', title: 'Руководство', shortTitle: 'Руководство', icon: 'person', itemProp: 'managers', summary: 'Сведения о руководителе образовательной организации.', fields: [{ label: 'Руководитель', value: `${organizationData.directorRole} ${organizationData.director}`, itemProp: 'fio' }, { label: 'Контактный телефон', value: organizationData.phone, itemProp: 'telephone' }, { label: 'Адрес электронной почты', value: organizationData.email, itemProp: 'email' }] },
  { id: 'teachers', slug: 'pedagogicheskiy-sostav', title: 'Педагогический состав', shortTitle: 'Педагогический состав', icon: 'certificate', itemProp: 'employees', summary: 'Карточки педагогических работников будут заполнены после подтверждения персональных данных.', table: { caption: 'Поля для карточек педагогических работников', columns: ['Сведения', 'Статус'], rows: [['ФИО', 'будет добавлено'], ['Должность', 'будет добавлено'], ['Уровень образования', 'будет добавлено'], ['Квалификация', 'будет добавлено'], ['Стаж работы', 'будет добавлено']] } },
  { id: 'facilities', slug: 'materialno-tehnicheskoe-obespechenie', title: 'Материально-техническое обеспечение', shortTitle: 'Материальная база', icon: 'table', itemProp: 'objects', summary: 'Учебные кабинеты, площадки, автомобили и электронные ресурсы после подтверждения.', fields: [{ label: 'Оборудованные учебные кабинеты', value: '[Будет заполнено]', itemProp: 'purposeCab' }, { label: 'Объекты для практических занятий', value: '[Будет заполнено]', itemProp: 'purposePrac' }, { label: 'Доступ к электронным образовательным ресурсам', value: '[Будет заполнено]', itemProp: 'erList' }] },
  { id: 'paid', slug: 'platnye-obrazovatelnye-uslugi', title: 'Платные образовательные услуги', shortTitle: 'Платные услуги', icon: 'card', itemProp: 'paid_edu', summary: 'Порядок оказания платных услуг, договор и приказ о стоимости обучения.', documents: doc('contract', 'price-order') },
  { id: 'finance', slug: 'finansovo-hozyaystvennaya-deyatelnost', title: 'Финансово-хозяйственная деятельность', shortTitle: 'Финансы', icon: 'finance', itemProp: 'budget', summary: 'Сведения о финансовом обеспечении образовательной деятельности.', fields: [{ label: 'Финансовое обеспечение', value: '[Будет заполнено после подтверждения]', itemProp: 'finVolume' }] },
  { id: 'vacant', slug: 'vakantnye-mesta', title: 'Вакантные места', shortTitle: 'Вакантные места', icon: 'target', itemProp: 'vacant', summary: 'Сведения о вакантных местах по образовательным программам.', fields: [{ label: 'Вакантные места', value: '[Будет заполнено после подтверждения данных]', itemProp: 'vacant' }] },
  { id: 'support', slug: 'stipendii-i-mery-podderzhki', title: 'Стипендии и меры поддержки', shortTitle: 'Поддержка', icon: 'support', itemProp: 'grants', summary: 'Сведения о стипендиях, мерах поддержки и общежитии.', fields: [{ label: 'Меры поддержки', value: '[Будет уточнено перед публикацией]', itemProp: 'grant' }] },
  { id: 'international', slug: 'mezhdunarodnoe-sotrudnichestvo', title: 'Международное сотрудничество', shortTitle: 'Международное сотрудничество', icon: 'globe', itemProp: 'inter', summary: 'Информация о международных договорах и международной аккредитации.', fields: [{ label: 'Международные договоры', value: '[Будет уточнено перед публикацией]', itemProp: 'internationalDog' }] },
  { id: 'catering', slug: 'organizatsiya-pitaniya', title: 'Организация питания', shortTitle: 'Питание', icon: 'clock', itemProp: 'catering', summary: 'Сведения об условиях питания обучающихся.', fields: [{ label: 'Питание обучающихся', value: '[Будет уточнено перед публикацией]', itemProp: 'meals' }] },
  { id: 'standards', slug: 'obrazovatelnye-standarty-i-trebovaniya', title: 'Образовательные стандарты', shortTitle: 'Стандарты', icon: 'shield', itemProp: 'eduStandarts', summary: 'Сведения о федеральных государственных образовательных стандартах и требованиях.', fields: [{ label: 'Стандарты и требования', value: '[Будет уточнено перед публикацией]', itemProp: 'eduFedDoc' }] },
  { id: 'accessible', slug: 'dostupnaya-sreda', title: 'Доступная среда', shortTitle: 'Доступная среда', icon: 'unlock', itemProp: 'ovz', summary: 'Сведения о специальных условиях для инвалидов и лиц с ОВЗ.', fields: [{ label: 'Специальные условия', value: '[Будет заполнено после подтверждения доступности объекта]', itemProp: 'ovz' }] },
];

export const educationBasePath = '/svedeniya-ob-obrazovatelnoy-organizatsii';
