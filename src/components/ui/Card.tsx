import type { PropsWithChildren } from 'react';

type CardProps = PropsWithChildren<{
  className?: string;
  as?: 'article' | 'div' | 'li' | 'section';
}>;

export function Card({ children, className = '', as: Component = 'article' }: CardProps) {
  return <Component className={`card ${className}`}>{children}</Component>;
}
