import type { Metadata } from "next";
// import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const workSans = localFont({
  src:[
    {
      path: '../assets/fonts/WorkSans-Black.ttf',
      weight: '900',
      style: 'normal'
    },    {
      path: '../assets/fonts/WorkSans-Bold.ttf',
      weight: '800',
      style: 'normal'
    },    {
      path: '../assets/fonts/WorkSans-SemiBold.ttf',
      weight: '700',
      style: 'normal'
    },    {
      path: '../assets/fonts/WorkSans-Medium.ttf',
      weight: '600',
      style: 'normal'
    },    {
      path: '../assets/fonts/WorkSans-Regular.ttf',
      weight: '500',
      style: 'normal'
    },    {
      path: '../assets/fonts/WorkSans-Thin.ttf',
      weight: '400',
      style: 'normal'
    },    {
      path: '../assets/fonts/WorkSans-ExtraLight.ttf',
      weight: '200',
      style: 'normal'
    },
  ],
  variable: '--font-work-sans'
})

export const metadata: Metadata = {
  title: "Startup",
  description: "Pitch Vote and Grow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
// function localFont(option: any, arg1: { src: { path: string; weight: string; style: string; }[]; }) {
//   throw new Error("Function not implemented.");
// }

