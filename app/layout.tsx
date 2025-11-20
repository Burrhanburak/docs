import { RootProvider } from 'fumadocs-ui/provider/next';
import './global.css';
import { Inter } from 'next/font/google';

import {
 StructuredData
} from "@/lib/structured-data";
const inter = Inter({
  subsets: ['latin'],
});

export const metadata = {
  title:
    "Moydus Docs – Web Design, SaaS Development, Automation & SEO Technical Documentation",
  description:
    "Explore Moydus Docs — the official technical documentation for Moydus. Learn everything about modern web development, SaaS architecture, automation workflows, UI/UX, SEO optimization, panel management, deployment strategies, and full-stack software engineering. Built for developers, startups, and businesses looking to scale with high-performance digital solutions.",
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <head>
       <StructuredData />   
      </head>
      <body className="flex flex-col min-h-screen">
        <RootProvider>{children}</RootProvider>
      </body>
    </html>
  );
}
