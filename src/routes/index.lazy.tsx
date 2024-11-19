import { createLazyFileRoute } from '@tanstack/react-router';

export const Route = createLazyFileRoute('/')({
  component: Index,
});

function Index() {
  // TODO 홈 페이지 구현하기

  return (
    <div className="p-2">
      <h3>Welcome Home!</h3>
    </div>
  );
}
