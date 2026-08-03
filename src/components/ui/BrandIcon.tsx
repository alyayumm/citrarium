import type { ReactNode } from 'react';
import type { IconName } from '../../types';

type BrandIconProps = {
  name: IconName;
  className?: string;
};

export function BrandIcon({ name, className = '' }: BrandIconProps) {
  return (
    <svg className={`brand-icon ${className}`} viewBox="0 0 24 24" aria-hidden="true" focusable="false">
      {iconPaths[name]}
    </svg>
  );
}

const iconPaths: Record<IconName, ReactNode> = {
  building: (
    <>
      <path d="M5 21V5.8A1.8 1.8 0 0 1 6.8 4h10.4A1.8 1.8 0 0 1 19 5.8V21" />
      <path d="M8 8h2M14 8h2M8 12h2M14 12h2M8 16h2M14 16h2M3 21h18" />
      <path className="brand-icon__accent" d="M10 21v-3.2h4V21" />
    </>
  ),
  calendar: (
    <>
      <path d="M6 4v3M18 4v3M4 9h16M5.8 6h12.4A1.8 1.8 0 0 1 20 7.8v10.4a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 18.2V7.8A1.8 1.8 0 0 1 5.8 6Z" />
      <path className="brand-icon__accent" d="M8 13h.01M12 13h.01M16 13h.01M8 17h.01M12 17h.01" />
    </>
  ),
  card: (
    <>
      <path d="M4 7.5A2.5 2.5 0 0 1 6.5 5h11A2.5 2.5 0 0 1 20 7.5v9a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 16.5v-9Z" />
      <path d="M4 10h16" />
      <path className="brand-icon__accent" d="M7.5 15h4" />
    </>
  ),
  certificate: (
    <>
      <path d="M6 4h12v9.5A6 6 0 0 1 12 20a6 6 0 0 1-6-6.5V4Z" />
      <path className="brand-icon__accent" d="m9.5 12 1.8 1.8 3.4-4" />
    </>
  ),
  clock: (
    <>
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z" />
      <path d="M12 7v5l3.2 2" />
      <path className="brand-icon__accent" d="M18.6 17.8 20 19.2" />
    </>
  ),
  document: (
    <>
      <path d="M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Z" />
      <path d="M14 3v5h4M8.5 12h7M8.5 16h5" />
      <path className="brand-icon__accent" d="M8.5 8h2.5" />
    </>
  ),
  download: (
    <>
      <path d="M12 4v10M8 10l4 4 4-4M5 19h14" />
      <path className="brand-icon__accent" d="M7 20h10" />
    </>
  ),
  education: (
    <>
      <path d="m3 9 9-4 9 4-9 4-9-4Z" />
      <path d="M6.5 11.2V16c1.8 2 3.6 3 5.5 3s3.7-1 5.5-3v-4.8" />
      <path className="brand-icon__accent" d="M20 10.5v5" />
    </>
  ),
  finance: (
    <>
      <path d="M4 7.5h13.5A2.5 2.5 0 0 1 20 10v7.5A2.5 2.5 0 0 1 17.5 20h-11A2.5 2.5 0 0 1 4 17.5v-10Z" />
      <path d="M4 8.5 15.8 4v4" />
      <path className="brand-icon__accent" d="M15 14h2" />
    </>
  ),
  globe: (
    <>
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM3.6 12h16.8" />
      <path d="M12 3c2.2 2.4 3.2 5.4 3.2 9s-1 6.6-3.2 9c-2.2-2.4-3.2-5.4-3.2-9S9.8 5.4 12 3Z" />
      <path className="brand-icon__accent" d="M5.8 6.3a12 12 0 0 0 12.4 0" />
    </>
  ),
  grid: (
    <>
      <path d="M4 5.8A1.8 1.8 0 0 1 5.8 4h4.4A1.8 1.8 0 0 1 12 5.8v4.4a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 10.2V5.8ZM14 5.8A1.8 1.8 0 0 1 15.8 4h2.4A1.8 1.8 0 0 1 20 5.8v4.4a1.8 1.8 0 0 1-1.8 1.8h-2.4a1.8 1.8 0 0 1-1.8-1.8V5.8ZM4 15.8A1.8 1.8 0 0 1 5.8 14h2.4a1.8 1.8 0 0 1 1.8 1.8v2.4A1.8 1.8 0 0 1 8.2 20H5.8A1.8 1.8 0 0 1 4 18.2v-2.4ZM12 15.8a1.8 1.8 0 0 1 1.8-1.8h4.4a1.8 1.8 0 0 1 1.8 1.8v2.4a1.8 1.8 0 0 1-1.8 1.8h-4.4a1.8 1.8 0 0 1-1.8-1.8v-2.4Z" />
      <path className="brand-icon__accent" d="M8 8h.01M17 17h.01" />
    </>
  ),
  mail: (
    <>
      <path d="M5.8 6h12.4A1.8 1.8 0 0 1 20 7.8v8.4a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 16.2V7.8A1.8 1.8 0 0 1 5.8 6Z" />
      <path d="m5 8 7 5 7-5" />
      <path className="brand-icon__accent" d="m6 17 4-4" />
    </>
  ),
  map: (
    <>
      <path d="M12 21s6-5.2 6-11a6 6 0 0 0-12 0c0 5.8 6 11 6 11Z" />
      <path d="M12 12.2a2.2 2.2 0 1 0 0-4.4 2.2 2.2 0 0 0 0 4.4Z" />
      <path className="brand-icon__accent" d="M9.5 19.5h5" />
    </>
  ),
  person: (
    <>
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4.8 20c1.2-3.4 3.6-5 7.2-5s6 1.6 7.2 5" />
      <path className="brand-icon__accent" d="M16.5 14.8c1.8.6 3 1.7 3.7 3.2" />
    </>
  ),
  phone: (
    <>
      <path d="M8.2 4.8 10 8.6 8.2 10a9.6 9.6 0 0 0 5.8 5.8l1.4-1.8 3.8 1.8v3.1c0 .7-.6 1.2-1.3 1.1C10.1 19.4 4.6 13.9 4 6.1c-.1-.7.4-1.3 1.1-1.3h3.1Z" />
      <path className="brand-icon__accent" d="M15 5.5c1.7.5 3 1.8 3.5 3.5" />
    </>
  ),
  search: (
    <>
      <path d="M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15ZM16 16l4 4" />
      <path className="brand-icon__accent" d="M7.5 10.5a3 3 0 0 1 3-3" />
    </>
  ),
  shield: (
    <>
      <path d="M12 21c4.2-1.8 7-5.4 7-10.8V5.5L12 3 5 5.5v4.7C5 15.6 7.8 19.2 12 21Z" />
      <path className="brand-icon__accent" d="m9.2 11.5 2 2 3.8-4" />
    </>
  ),
  structure: (
    <>
      <path d="M12 4v5M7 14H5a2 2 0 0 0-2 2v4h8v-4a2 2 0 0 0-2-2H7ZM17 14h-2a2 2 0 0 0-2 2v4h8v-4a2 2 0 0 0-2-2h-2Z" />
      <path d="M7 14v-3h10v3" />
      <path className="brand-icon__accent" d="M9.5 4h5v5h-5z" />
    </>
  ),
  support: (
    <>
      <path d="M6 12v-1a6 6 0 0 1 12 0v1M5 12h3v6H5a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2ZM19 12h-3v6h3a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2Z" />
      <path className="brand-icon__accent" d="M15 19c-.8 1-1.8 1.5-3 1.5" />
    </>
  ),
  table: (
    <>
      <path d="M5.8 5h12.4A1.8 1.8 0 0 1 20 6.8v10.4a1.8 1.8 0 0 1-1.8 1.8H5.8A1.8 1.8 0 0 1 4 17.2V6.8A1.8 1.8 0 0 1 5.8 5Z" />
      <path d="M4 10h16M9 5v14M15 5v14" />
      <path className="brand-icon__accent" d="M6.8 7.5h.01M11.8 12.5h.01M17.2 16.5h.01" />
    </>
  ),
  target: (
    <>
      <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18ZM12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Z" />
      <path className="brand-icon__accent" d="M12 13.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z" />
    </>
  ),
  unlock: (
    <>
      <path d="M7 11h11v8.5A1.5 1.5 0 0 1 16.5 21h-8A1.5 1.5 0 0 1 7 19.5V11Z" />
      <path d="M10 11V7.5A4.5 4.5 0 0 1 18.5 5" />
      <path className="brand-icon__accent" d="M12.5 15v2" />
    </>
  ),
};
