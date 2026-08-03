import type { TrainingCategory } from '../../data/drive';

type CategoryVisualProps = {
  kind: TrainingCategory['visual'];
};

export function HeroVisual() {
  return (
    <div className="hero-visual" aria-hidden="true">
      <div className="hero-road">
        <svg viewBox="0 0 680 440">
          <path className="road road--wide" d="M36 334C164 218 238 378 344 242c88-112 188-70 294-178" />
          <path className="road road--dash" d="M36 334C164 218 238 378 344 242c88-112 188-70 294-178" />
          <g className="hero-car" transform="translate(250 150)">
            <rect x="44" y="52" width="210" height="86" rx="34" />
            <path d="M82 52c20-34 118-34 138 0M86 138c22 28 114 28 132 0" />
            <path d="M56 80H24M56 112H24M274 80h34M274 112h34" />
            <circle cx="92" cy="150" r="16" />
            <circle cx="206" cy="150" r="16" />
          </g>
        </svg>
      </div>
      <div className="floating-panel floating-panel--one">
        <strong>Теория онлайн</strong>
        <span>записи, тесты, контроль прогресса</span>
      </div>
      <div className="floating-panel floating-panel--two">
        <strong>Практика</strong>
        <span>маршруты, парковка, экзамен</span>
      </div>
    </div>
  );
}

export function CategoryVisual({ kind }: CategoryVisualProps) {
  if (kind === 'bike') {
    return (
      <svg className="category-art" viewBox="0 0 220 120" aria-hidden="true">
        <circle cx="64" cy="84" r="24" />
        <circle cx="158" cy="84" r="24" />
        <path d="M65 84h34l24-38 36 38M96 84l-18-36h34M120 45h22l12-14M86 48h-18" />
      </svg>
    );
  }

  if (kind === 'truck') {
    return (
      <svg className="category-art" viewBox="0 0 220 120" aria-hidden="true">
        <path d="M28 42h112v42H28zM140 56h30l20 20v8h-50z" />
        <circle cx="64" cy="90" r="12" />
        <circle cx="160" cy="90" r="12" />
      </svg>
    );
  }

  if (kind === 'gift') {
    return (
      <svg className="category-art" viewBox="0 0 220 120" aria-hidden="true">
        <path d="M48 52h124v54H48zM42 36h136v18H42zM110 36v70M75 36c-16-10-10-28 9-22 14 4 26 22 26 22M145 36c16-10 10-28-9-22-14 4-26 22-26 22" />
      </svg>
    );
  }

  return (
    <svg className="category-art" viewBox="0 0 220 120" aria-hidden="true">
      <path d="M38 74c8-24 22-38 42-42h60c20 4 34 18 42 42" />
      <path d="M28 74h164v24H28zM58 74l18-30h68l18 30" />
      <circle cx="66" cy="100" r="13" />
      <circle cx="154" cy="100" r="13" />
      <path className="accent-stroke" d="M82 56h56" />
    </svg>
  );
}

export function TheoryVisual() {
  return (
    <div className="interface-visual" aria-hidden="true">
      <div className="interface-visual__bar" />
      <div className="interface-visual__grid">
        <span />
        <span />
        <span />
        <span />
      </div>
      <div className="interface-visual__progress">
        <i />
      </div>
    </div>
  );
}

export function MapVisual() {
  return (
    <div className="map-visual" aria-hidden="true">
      <svg viewBox="0 0 520 320">
        <path d="M28 260c74-58 112-8 172-70 64-66 126-36 184-104 30-36 60-44 104-30" />
        <path d="M60 78h136M302 248h154M252 34v110M144 188v94" />
        <circle cx="204" cy="184" r="12" />
        <circle cx="382" cy="88" r="12" />
        <circle cx="92" cy="238" r="12" />
      </svg>
    </div>
  );
}
