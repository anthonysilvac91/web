import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms and Conditions | CoreMetrics Media',
  description: 'Terms of Service and Conditions of use for CoreMetrics Media.',
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
