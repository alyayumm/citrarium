import type { IconName } from '../types';

export type OfficialDocument = {
  id: string;
  title: string;
  description: string;
  href: string;
  status: 'available';
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
const fieldIfPresent = (field: InfoField): InfoField[] => (field.value.trim() ? [field] : []);

export const documents: OfficialDocument[] = [
  { id: 'charter', title: 'Устав ООО «Цитрариум»', description: 'Новая редакция устава организации, осуществляющей обучение. Санкт-Петербург, 2026 год.', href: documentPath('charter-citrarium-autoschool-2026.pdf'), status: 'available' },
  { id: 'license', title: 'Выписка из реестра лицензий от 07.08.2026', description: 'Лицензия действующая, регистрационный номер Л035-01271-78/00693445.', href: documentPath('license-registry-extract-2026-08-07.pdf'), status: 'available' },
  { id: 'egrul', title: 'Выписка из ЕГРЮЛ от 31.07.2026', description: 'Сведения о юридическом лице по состоянию на 31 июля 2026 года.', href: documentPath('egrul-2026-07-31.pdf'), status: 'available' },
  { id: 'self-inspection-report', title: 'Отчет о результатах самообследования', description: 'Отчет о результатах самообследования деятельности ООО ВНОЦ «Цитрариум» за 2025 год.', href: documentPath('self-inspection-report-citrarium-2025.pdf'), status: 'available' },
  { id: 'self-inspection-procedure', title: 'Положение о порядке проведения самообследования', description: 'Локальный акт о порядке проведения самообследования автошколы.', href: documentPath('self-inspection-procedure-citrarium.pdf'), status: 'available' },
  { id: 'official-website-policy', title: 'Положение об официальном сайте', description: 'Порядок организации, ведения, проверки и обновления официального сайта.', href: documentPath('official-website-policy-citrarium.pdf'), status: 'available' },
  { id: 'admission-rules', title: 'Положение о правилах приема', description: 'Правила приема обучающихся и оформления образовательных отношений.', href: documentPath('admission-rules-citrarium.pdf'), status: 'available' },
  { id: 'student-internal-rules', title: 'Положение о правилах внутреннего распорядка обучающихся', description: 'Локальный акт о внутреннем распорядке обучающихся автошколы.', href: documentPath('student-internal-rules-citrarium.pdf'), status: 'available' },
  { id: 'labor-internal-rules', title: 'Положение о правилах внутреннего трудового распорядка', description: 'Локальный акт о трудовом распорядке работников автошколы.', href: documentPath('labor-internal-rules-citrarium.pdf'), status: 'available' },
  { id: 'lesson-mode', title: 'Положение о режиме занятий обучающихся', description: 'Режим организации образовательного процесса и занятий обучающихся.', href: documentPath('lesson-mode-policy-citrarium.pdf'), status: 'available' },
  { id: 'education-language', title: 'Положение о языке образования', description: 'Порядок использования языка образования в автошколе.', href: documentPath('education-language-policy.pdf'), status: 'available' },
  { id: 'education-relations-procedure', title: 'Положение о порядке оформления образовательных отношений', description: 'Порядок возникновения, приостановления и прекращения отношений с обучающимися.', href: documentPath('education-relations-procedure.pdf'), status: 'available' },
  { id: 'transfer-expulsion-restoration', title: 'Положение о переводе, отчислении и восстановлении', description: 'Порядок и основания перевода, отчисления и восстановления обучающихся.', href: documentPath('transfer-expulsion-restoration-policy.pdf'), status: 'available' },
  { id: 'current-control', title: 'Положение о текущем контроле и промежуточной аттестации', description: 'Формы, периодичность и порядок текущего контроля успеваемости.', href: documentPath('current-control-intermediate-attestation.pdf'), status: 'available' },
  { id: 'final-attestation', title: 'Положение об итоговой аттестации', description: 'Порядок организации и проведения итоговой аттестации обучающихся.', href: documentPath('final-attestation-policy-citrarium.pdf'), status: 'available' },
  { id: 'assessment-conditions-control', title: 'Положение о контроле условий оценки результатов обучения', description: 'Контроль соблюдения условий проведения мероприятий оценки результатов обучения.', href: documentPath('learning-assessment-conditions-control.pdf'), status: 'available' },
  { id: 'class-volume-ratio', title: 'Положение о соотношении объема занятий', description: 'Порядок определения объема занятий при взаимодействии с педагогическим работником.', href: documentPath('class-volume-ratio-procedure.pdf'), status: 'available' },
  { id: 'learning-resources', title: 'Положение о пользовании учебными пособиями и электронными ресурсами', description: 'Порядок использования учебных пособий и электронных образовательных ресурсов.', href: documentPath('learning-resources-use-procedure.pdf'), status: 'available' },
  { id: 'electronic-education-environment', title: 'Положение об электронной информационно-образовательной среде', description: 'Условия функционирования электронной информационно-образовательной среды.', href: documentPath('electronic-education-environment-policy.pdf'), status: 'available' },
  { id: 'distance-learning', title: 'Положение об электронном обучении и дистанционных технологиях', description: 'Организация образовательного процесса с применением электронного обучения.', href: documentPath('distance-learning-policy.pdf'), status: 'available' },
  { id: 'online-learner-identification', title: 'Положение об идентификации личности обучающегося', description: 'Идентификация обучающихся при использовании электронного обучения.', href: documentPath('online-learner-identification-policy.pdf'), status: 'available' },
  { id: 'teacher-ethics', title: 'Положение о нормах профессиональной этики педагогических работников', description: 'Нормы профессиональной этики педагогических работников автошколы.', href: documentPath('teacher-professional-ethics.pdf'), status: 'available' },
  { id: 'paid-services-procedure', title: 'Положение о порядке оказания платных образовательных услуг', description: 'Порядок оказания платных образовательных услуг автошколы.', href: documentPath('paid-education-services-procedure.pdf'), status: 'available' },
  { id: 'contract', title: 'Образец договора об оказании платных образовательных услуг', description: 'Образец договора об оказании платных образовательных услуг автошколы.', href: documentPath('paid-education-contract-sample.pdf'), status: 'available' },
  { id: 'price-order', title: 'Приказ о стоимости обучения', description: 'Приказ об установлении стоимости платных образовательных услуг.', href: documentPath('tuition-price-order.pdf'), status: 'available' },
  { id: 'accessibility-passport', title: 'Паспорт доступности', description: 'Паспорт доступности для инвалидов объекта и предоставляемых услуг в сфере образования.', href: documentPath('accessibility-passport.pdf'), status: 'available' },
  { id: 'ovz-education', title: 'Положение об обучении лиц с ОВЗ', description: 'Порядок обучения лиц с ограниченными возможностями здоровья.', href: documentPath('ovz-education-policy.pdf'), status: 'available' },
  { id: 'ovz-responsible-order', title: 'Приказ о назначении ответственного за сопровождение инвалидов и лиц с ОВЗ', description: 'Приказ о назначении ответственного за сопровождение инвалидов и лиц с ОВЗ.', href: documentPath('ovz-support-responsible-order.pdf'), status: 'available' },
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
    documents: doc('charter', 'license', 'egrul', 'self-inspection-report', 'official-website-policy'),
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
    documents: doc('egrul', 'charter', 'labor-internal-rules'),
  },
  { id: 'documents', slug: 'dokumenty', title: 'Документы', shortTitle: 'Документы', icon: 'document', itemProp: 'document', summary: 'Устав, лицензия, выписка ЕГРЮЛ, локальные нормативные акты и документы платных образовательных услуг.', documents },
  { id: 'education', slug: 'obrazovanie', title: 'Образование', shortTitle: 'Образование', icon: 'education', itemProp: 'education', summary: 'Реализуемые программы, формы обучения, сроки, язык обучения и численность обучающихся.', fields: [{ label: 'Лицензируемые виды образовательной деятельности', value: organizationData.licensePrograms, itemProp: 'eduProgram' }, { label: 'Формы обучения', value: 'Сведения не представлены в переданных документах.', itemProp: 'eduForm' }, { label: 'Нормативные сроки обучения', value: 'Сведения не представлены в переданных документах.', itemProp: 'learningTerm' }, { label: 'Язык обучения', value: 'Русский язык.', itemProp: 'language' }, { label: 'Численность обучающихся', value: 'Сведения не представлены в переданных документах.', itemProp: 'number' }], documents: doc('license', 'lesson-mode', 'education-language', 'education-relations-procedure', 'transfer-expulsion-restoration', 'current-control', 'final-attestation', 'assessment-conditions-control', 'class-volume-ratio', 'learning-resources', 'electronic-education-environment', 'distance-learning', 'online-learner-identification', 'self-inspection-procedure', 'admission-rules') },
  { id: 'management', slug: 'rukovodstvo', title: 'Руководство', shortTitle: 'Руководство', icon: 'person', itemProp: 'managers', summary: 'Сведения о руководителе образовательной организации.', fields: [{ label: 'Руководитель', value: `${organizationData.directorRole} ${organizationData.director}`, itemProp: 'fio' }, ...fieldIfPresent({ label: 'Контактный телефон', value: organizationData.phone, itemProp: 'telephone' }), ...fieldIfPresent({ label: 'Адрес электронной почты', value: organizationData.email, itemProp: 'email' })], documents: doc('egrul') },
  { id: 'teachers', slug: 'pedagogicheskiy-sostav', title: 'Педагогический состав', shortTitle: 'Педагогический состав', icon: 'certificate', itemProp: 'employees', summary: 'Сведения о педагогических работниках образовательной организации.', table: { caption: 'Сведения о педагогическом составе', columns: ['Сведения', 'Информация'], rows: [['Педагогические работники', 'Сведения не представлены в переданных документах.'], ['Локальный акт', 'Положение о нормах профессиональной этики педагогических работников размещено в реестре документов.']] }, documents: doc('teacher-ethics') },
  { id: 'facilities', slug: 'materialno-tehnicheskoe-obespechenie', title: 'Материально-техническое обеспечение', shortTitle: 'Материальная база', icon: 'table', itemProp: 'objects', summary: 'Учебные кабинеты, площадки, автомобили и электронные образовательные ресурсы.', fields: [{ label: 'Оборудованные учебные кабинеты', value: 'Сведения не представлены в переданных документах.', itemProp: 'purposeCab' }, { label: 'Объекты для практических занятий', value: 'Сведения не представлены в переданных документах.', itemProp: 'purposePrac' }, { label: 'Доступ к электронным образовательным ресурсам', value: 'Порядок пользования учебными пособиями и электронными образовательными ресурсами размещен в реестре документов.', itemProp: 'erList' }], documents: doc('learning-resources', 'electronic-education-environment', 'distance-learning') },
  { id: 'paid', slug: 'platnye-obrazovatelnye-uslugi', title: 'Платные образовательные услуги', shortTitle: 'Платные услуги', icon: 'card', itemProp: 'paid_edu', summary: 'Порядок оказания платных услуг, договор и приказ о стоимости обучения.', documents: doc('paid-services-procedure', 'contract', 'price-order') },
  { id: 'finance', slug: 'finansovo-hozyaystvennaya-deyatelnost', title: 'Финансово-хозяйственная деятельность', shortTitle: 'Финансы', icon: 'finance', itemProp: 'budget', summary: 'Сведения о финансовом обеспечении образовательной деятельности.', fields: [{ label: 'Финансовое обеспечение', value: 'Сведения не представлены в переданных документах.', itemProp: 'finVolume' }] },
  { id: 'vacant', slug: 'vakantnye-mesta', title: 'Вакантные места', shortTitle: 'Вакантные места', icon: 'target', itemProp: 'vacant', summary: 'Сведения о вакантных местах по образовательным программам.', fields: [{ label: 'Вакантные места', value: 'Сведения не представлены в переданных документах.', itemProp: 'vacant' }] },
  { id: 'support', slug: 'stipendii-i-mery-podderzhki', title: 'Стипендии и меры поддержки', shortTitle: 'Поддержка', icon: 'support', itemProp: 'grants', summary: 'Сведения о стипендиях, мерах поддержки и общежитии.', fields: [{ label: 'Меры поддержки', value: 'Сведения не представлены в переданных документах.', itemProp: 'grant' }], documents: doc('ovz-education', 'ovz-responsible-order') },
  { id: 'international', slug: 'mezhdunarodnoe-sotrudnichestvo', title: 'Международное сотрудничество', shortTitle: 'Международное сотрудничество', icon: 'globe', itemProp: 'inter', summary: 'Информация о международных договорах и международной аккредитации.', fields: [{ label: 'Международные договоры', value: 'Международные договоры и международная аккредитация отсутствуют.', itemProp: 'internationalDog' }] },
  { id: 'catering', slug: 'organizatsiya-pitaniya', title: 'Организация питания', shortTitle: 'Питание', icon: 'clock', itemProp: 'catering', summary: 'Сведения об условиях питания обучающихся.', fields: [{ label: 'Питание обучающихся', value: 'Сведения не представлены в переданных документах.', itemProp: 'meals' }] },
  { id: 'standards', slug: 'obrazovatelnye-standarty-i-trebovaniya', title: 'Образовательные стандарты', shortTitle: 'Стандарты', icon: 'shield', itemProp: 'eduStandarts', summary: 'Сведения о федеральных государственных образовательных стандартах и требованиях.', fields: [{ label: 'Стандарты и требования', value: 'Локальные положения о контроле и аттестации размещены в реестре документов.', itemProp: 'eduFedDoc' }], documents: doc('assessment-conditions-control', 'current-control', 'final-attestation') },
  { id: 'accessible', slug: 'dostupnaya-sreda', title: 'Доступная среда', shortTitle: 'Доступная среда', icon: 'unlock', itemProp: 'ovz', summary: 'Сведения о специальных условиях для инвалидов и лиц с ОВЗ.', fields: [{ label: 'Специальные условия', value: 'Паспорт доступности и документы по обучению лиц с ОВЗ размещены в реестре документов.', itemProp: 'ovz' }], documents: doc('accessibility-passport', 'ovz-education', 'ovz-responsible-order') },
];

export const educationBasePath = '/svedeniya-ob-obrazovatelnoy-organizatsii';
