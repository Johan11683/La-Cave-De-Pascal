export const metadata = {
  title: 'La Cave de Pascal',
  description: 'Caviste — vins, spiritueux, conseils.',
};

import '@/styles/globals.scss';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}