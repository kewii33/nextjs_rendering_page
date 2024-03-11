import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Nav from '@/components/Nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: '렌더링 테스트 페이지',
  description: '4가지 렌더링 패턴 테스트 페이지입니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex justify-center items-center flex-col mt-7">
          <Nav />
          <div className="bg-white p-4 w-96 h-auto rounded-b-xl">
            <p>고양이에 대해 알아봅시다🐾</p>
            <div className="p-2 border-t-[3px] mt-2">{children}</div>
          </div>
        </div>
      </body>
    </html>
  );
}
