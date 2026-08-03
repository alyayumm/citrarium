import type { AnchorHTMLAttributes, ButtonHTMLAttributes, PropsWithChildren } from 'react';
import { handleInternalLink } from '../../lib/navigation';
import { toPublicHref } from '../../lib/router';

type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'dark';

type ButtonProps = PropsWithChildren<
  ButtonHTMLAttributes<HTMLButtonElement> & {
    variant?: ButtonVariant;
  }
>;

type LinkButtonProps = PropsWithChildren<
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    variant?: ButtonVariant;
  }
>;

export function Button({ children, className = '', variant = 'primary', ...props }: ButtonProps) {
  return (
    <button className={`button button--${variant} ${className}`} {...props}>
      <span>{children}</span>
      <span className="button__icon" aria-hidden="true">
        <ArrowIcon />
      </span>
    </button>
  );
}

export function LinkButton({ children, className = '', variant = 'primary', href = '#', onClick, ...props }: LinkButtonProps) {
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
      <span className="button__icon" aria-hidden="true">
        <ArrowIcon />
      </span>
    </a>
  );
}

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" focusable="false">
      <path d="M5 12h13M13 6l6 6-6 6" />
    </svg>
  );
}
