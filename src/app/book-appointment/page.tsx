import { PageClientBoundary } from '@/components/layout/page-client-boundary';
import { BookAppointmentContent } from '@/components/book-appointment/content';

export default function BookAppointmentPage() {
  return (
    <PageClientBoundary>
      <BookAppointmentContent />
    </PageClientBoundary>
  );
}