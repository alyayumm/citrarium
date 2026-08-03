function normalizeBasePath(value: string): string {
  if (!value || value === '/' || value === './') return '';
  return `/${value.replace(/^\/+|\/+$/g, '')}`;
}

function inferBasePath(): string {
  const configuredBase = normalizeBasePath(import.meta.env.BASE_URL);
  if (configuredBase) return configuredBase;

  const pathname = window.location.pathname;
  if (pathname === '/' || pathname === '/index.html') return '';
  if (pathname.endsWith('/')) return pathname.replace(/\/$/, '');

  return '';
}

const appBasePath = inferBasePath();

export function toPublicPath(path: string): string {
  const normalizedPath = path === '/' ? '/' : `/${path.replace(/^\/+/, '')}`;
  if (!appBasePath) return normalizedPath;
  return normalizedPath === '/' ? `${appBasePath}/` : `${appBasePath}${normalizedPath}`;
}

export function toPublicHref(href: string): string {
  if (!href.startsWith('/')) return href;

  const [, path = '/', suffix = ''] = href.match(/^([^?#]*)(.*)$/) ?? [];
  return `${toPublicPath(path || '/')}${suffix}`;
}

function stripBasePath(pathname: string): string {
  const withoutIndex = pathname.endsWith('/index.html') ? pathname.slice(0, -'/index.html'.length) || '/' : pathname;
  if (appBasePath && (withoutIndex === appBasePath || withoutIndex.startsWith(`${appBasePath}/`))) {
    return withoutIndex.slice(appBasePath.length) || '/';
  }

  return withoutIndex || '/';
}

export function getCurrentPath(): string {
  const redirect = sessionStorage.getItem('redirect');
  if (redirect) {
    sessionStorage.removeItem('redirect');
    const url = new URL(redirect, window.location.origin);
    const nextPath = stripBasePath(url.pathname);
    history.replaceState({}, '', `${toPublicPath(nextPath)}${url.search}${url.hash}`);
    return nextPath;
  }

  return stripBasePath(window.location.pathname);
}

export function navigateTo(path: string): void {
  history.pushState({}, '', toPublicPath(path));
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
