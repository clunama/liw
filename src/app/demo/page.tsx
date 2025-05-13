import { ChatInterface } from '@/components/demo/chat-interface';
import { PageClientBoundary } from '@/components/layout/page-client-boundary';

export default function DemoPage() {
  return (
    <PageClientBoundary>
      <ChatInterface />
    </PageClientBoundary>
  );
}