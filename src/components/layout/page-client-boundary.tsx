"use client";

import type { ReactNode } from 'react';

// This component ensures that any page content using client-side hooks (like useLanguage)
// is correctly rendered within the client-side React tree, even if the page itself
// is a Server Component.
export function PageClientBoundary({ children }: { children: ReactNode }) {
  return <>{children}</>;
}