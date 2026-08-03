import { LinkButton } from '../components/ui/Button';
import { Container } from '../components/ui/Container';

export function NotFoundPage() {
  return (
    <main className="inner-page">
      <Container>
        <header className="page-hero">
          <h1>Страница не найдена</h1>
          <p>Проверьте адрес страницы или вернитесь на главную автошколы «Драйв».</p>
          <LinkButton href="/">На главную</LinkButton>
        </header>
      </Container>
    </main>
  );
}
