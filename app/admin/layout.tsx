import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Dashboard Prenotazioni',
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* The admin layout inherits root layout (Navbar/Footer).
          Hide them via CSS on this route if needed. */}
      {children}
    </>
  );
}
