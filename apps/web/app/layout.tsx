import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import "@workspace/ui/globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Component Demo App",
  description: "A demo app showcasing component-based development with Next.js and shadcn/ui",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="border-b">
          <div className="container mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-bold">
                Creative Dashboard
              </Link>
              <div className="space-x-4">
                <Link href="/item1" className="text-gray-600 hover:text-gray-900">
                  Item 1
                </Link>
                <Link href="/item2" className="text-gray-600 hover:text-gray-900">
                  Item 2
                </Link>
                <Link href="/item3" className="text-gray-600 hover:text-gray-900">
                  Item 3
                </Link>
                <Link href="/item4" className="text-gray-600 hover:text-gray-900">
                  Item 4
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
