import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { handleInternalLink } from '../../lib/navigation';
import { toPublicHref } from '../../lib/router';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
    icon?: ButtonIcon;
  }
>;

type LinkButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: ButtonVariant;
    icon?: ButtonIcon;
  }
>;

type ButtonIcon = 'arrow' | 'document' | 'none';

export function Button({ children, className = '', variant = 'primary', icon = 'arrow', ...props }: ButtonProps) {
  return (
    <button className={`button button--${variant} ${className}`} {...props}>
      <span>{children}</span>
      <ButtonIconSlot icon={icon} />
    </button>
  );
}

export function LinkButton({ children, className = '', variant = 'primary', href = '#', onClick, icon = 'arrow', ...props }: LinkButtonProps) {
  function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    onClick?.(event);
    if (event.defaultPrevented) return;

    if (href.startsWith('/')) {
      handleInternalLink(event, href);
      return;
    }

    if (href.startsWith('#')) {
      event.preventDefault();
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  return (
    <a className={`button button--${variant} ${className}`} href={toPublicHref(href)} onClick={handleClick} {...props}>
      <span>{children}</span>
      <ButtonIconSlot icon={icon} />
    </a>
  );
}

function ButtonIconSlot({ icon }: { icon: ButtonIcon }) {
  if (icon === 'none') return null;

  return (
    <span className="button__icon" aria-hidden="true">
      {icon === 'document' ? <DocumentIcon /> : <ArrowIcon />}
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false">
      <path d="M7 3.5h6.5L17 7v13.5H7z" />
      <path d="M13.5 3.5V7H17" />
      <path d="M9.2 11h5.6M9.2 14.3h5.6" />
    </svg>
  );
}
