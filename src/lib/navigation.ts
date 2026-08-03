import { navigateTo } from './router';

export function handleInternalLink(event: React.MouseEvent<HTMLAnchorElement>, href: string) {
  if (!href.startsWith('/')) return;
  event.preventDefault();

  const [path, hash] = href.split('#');
  navigateTo(path || '/');

  if (hash) {
    window.setTimeout(() => {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }, 80);
  }
}
