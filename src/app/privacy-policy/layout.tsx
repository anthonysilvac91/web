import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CoreMetrics Media',
  description: 'Privacy Policy and Data Protection guidelines for CoreMetrics Media.',
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
