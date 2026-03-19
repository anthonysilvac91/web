import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookies Policy | CoreMetrics Media',
  description: 'Information about how CoreMetrics Media uses cookies and tracking technologies.',
};

export default function CookiesLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
