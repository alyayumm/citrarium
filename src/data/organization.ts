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
  fullName: 'Общество с ограниченной ответственностью Всерегиональный научно-образовательный центр «Цитрариум»',
  shortName: 'ООО ВНОЦ «Цитрариум»',
  createdAt: '28.08.2020',
  address: '196066, г. Санкт-Петербург, пр-кт Московский, д. 183-185, литер А, помещ. 579-Н, р.м. №1',
  workTime: 'Ежедневно с 9:00 до 21:00',
  phone: '',
  email: '',
  website: 'https://alyayumm.github.io/citrarium/',
  educationAddress: 'Адреса мест осуществления образовательной деятельности в выписке из реестра лицензий от 07.08.2026 не указаны',
  director: 'Ушаков Дмитрий Юрьевич',
  directorRole: 'Генеральный директор',
  accreditation: 'Государственная аккредитация не указана в предоставленных документах',
  license: 'Лицензия действующая: Л035-01271-78/00693445 от 27.09.2023, лицензирующий орган — Комитет по образованию',
  ogrn: '1207800107569',
  inn: '7810901849',
  kpp: '781001001',
  registrationAuthority: 'Межрайонная инспекция Федеральной налоговой службы №15 по Санкт-Петербургу',
  legalForm: 'Общество с ограниченной ответственностью',
  authorizedCapital: '15 000 ₽',
  owner: 'Ушаков Дмитрий Юрьевич, доля 100%',
  primaryOkved: '85.42.1 — деятельность школ подготовки водителей автотранспортных средств',
  licenseStatus: 'Действующая',
  licenseNumber: 'Л035-01271-78/00693445',
  licenseDate: '27.09.2023',
  licenseDecision: '№720-п/23 от 27.09.2023',
  licenseAuthority: 'Комитет по образованию',
  licensePrograms: 'Профессиональное обучение; дополнительное образование; дополнительное профессиональное образование',
  extractDate: '07.08.2026',
};

const documentPath = (fileName: string) => `/documents/${fileName}`;
const pendingPdf = documentPath('placeholder.pdf');
const fieldIfPresent = (field: InfoField): InfoField[] => (field.value.trim() ? [field] : []);

export const documents: OfficialDocument[] = [
  { id: 'charter', title: 'Устав ООО ВНОЦ «Цитрариум»', description: 'Новая редакция устава, утверждена 21 октября 2024 года.', href: documentPath('ustav-citrarium-2024.pdf'), status: 'available' },
  { id: 'egrul', title: 'Выписка из ЕГРЮЛ от 31.07.2026', description: 'Сведения о юридическом лице по состоянию на 31 июля 2026 года.', href: documentPath('egrul-2026-07-31.pdf'), status: 'available' },
  { id: 'license', title: 'Выписка из реестра лицензий от 07.08.2026', description: 'Лицензия действующая, регистрационный номер Л035-01271-78/00693445.', href: documentPath('license-registry-extract-2026-08-07.pdf'), status: 'available' },
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
      { label: 'Организационно-правовая форма', value: organizationData.legalForm },
      { label: 'ОГРН', value: organizationData.ogrn },
      { label: 'ИНН', value: organizationData.inn },
      { label: 'КПП', value: organizationData.kpp },
      { label: 'Дата регистрации', value: organizationData.createdAt, itemProp: 'regDate' },
      { label: 'Регистрирующий орган', value: organizationData.registrationAuthority },
      { label: 'Место нахождения', value: organizationData.address, itemProp: 'address' },
      { label: 'Режим работы', value: organizationData.workTime, itemProp: 'workTime' },
      ...fieldIfPresent({ label: 'Контактный телефон', value: organizationData.phone, itemProp: 'telephone' }),
      ...fieldIfPresent({ label: 'Адрес электронной почты', value: organizationData.email, itemProp: 'email' }),
      { label: 'Адрес официального сайта', value: organizationData.website, itemProp: 'site' },
      { label: 'Адрес места осуществления образовательной деятельности', value: organizationData.educationAddress },
      { label: 'Основной вид деятельности', value: organizationData.primaryOkved },
      { label: 'Статус лицензии', value: organizationData.licenseStatus },
      { label: 'Регистрационный номер лицензии', value: organizationData.licenseNumber },
      { label: 'Дата предоставления лицензии', value: organizationData.licenseDate },
      { label: 'Решение о предоставлении лицензии', value: organizationData.licenseDecision },
      { label: 'Лицензирующий орган', value: organizationData.licenseAuthority },
      { label: 'Лицензия на осуществление образовательной деятельности', value: organizationData.license, itemProp: 'licenseDocLink' },
      { label: 'Государственная аккредитация', value: organizationData.accreditation, itemProp: 'accreditation' },
    ],
    documents: doc('egrul', 'license'),
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
      { label: 'Единственный участник', value: organizationData.owner },
      { label: 'Уставный капитал', value: organizationData.authorizedCapital },
      { label: 'Место нахождения', value: organizationData.address, itemProp: 'addressStr' },
      ...fieldIfPresent({ label: 'Контактный телефон', value: organizationData.phone, itemProp: 'telephone' }),
      ...fieldIfPresent({ label: 'Адрес электронной почты', value: organizationData.email, itemProp: 'email' }),
    ],
    documents: doc('egrul', 'charter'),
  },
  { id: 'documents', slug: 'dokumenty', title: 'Документы', shortTitle: 'Документы', icon: 'document', itemProp: 'document', summary: 'Устав, лицензия, выписка ЕГРЮЛ, локальные нормативные акты и документы платных образовательных услуг.', documents, notes: ['ЕГРЮЛ, устав и выписка из реестра лицензий загружены. Остальные PDF будут добавлены после предоставления утвержденных документов.'] },
  { id: 'education', slug: 'obrazovanie', title: 'Образование', shortTitle: 'Образование', icon: 'education', itemProp: 'education', summary: 'Реализуемые программы, формы обучения, сроки, язык обучения и численность обучающихся.', fields: [{ label: 'Лицензируемые виды образовательной деятельности', value: organizationData.licensePrograms, itemProp: 'eduProgram' }, { label: 'Формы обучения', value: '[Будет заполнено после утверждения программ]', itemProp: 'eduForm' }, { label: 'Нормативные сроки обучения', value: '[Будет заполнено по учебным планам]', itemProp: 'learningTerm' }, { label: 'Язык обучения', value: '[Будет заполнено в соответствии с положением]', itemProp: 'language' }, { label: 'Численность обучающихся', value: '[Будет заполнено после подтверждения данных]', itemProp: 'number' }], documents: doc('program', 'license') },
  { id: 'management', slug: 'rukovodstvo', title: 'Руководство', shortTitle: 'Руководство', icon: 'person', itemProp: 'managers', summary: 'Сведения о руководителе образовательной организации.', fields: [{ label: 'Руководитель', value: `${organizationData.directorRole} ${organizationData.director}`, itemProp: 'fio' }, ...fieldIfPresent({ label: 'Контактный телефон', value: organizationData.phone, itemProp: 'telephone' }), ...fieldIfPresent({ label: 'Адрес электронной почты', value: organizationData.email, itemProp: 'email' })], documents: doc('egrul') },
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
