import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  metadataBase: new URL("https://changegreendriveClean.com"),
  title: "Change Green, Drive Clean - Sustainable Transportation Solutions",
  description:
    "Leading the future of sustainable transportation with innovative green solutions for a cleaner environment.",
  keywords: "green transportation, electric vehicles, sustainable mobility, clean energy, eco-friendly transport",
  authors: [{ name: "Change Green Drive Clean" }],
  openGraph: {
    title: "Change Green, Drive Clean - Sustainable Transportation Solutions",
    description:
      "Leading the future of sustainable transportation with innovative green solutions for a cleaner environment.",
    url: "https://changegreendriveClean.com",
    siteName: "Change Green Drive Clean",
    images: [
      {
        url: "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1200&h=630&fit=crop",
        width: 1200,
        height: 630,
        alt: "Change Green Drive Clean - Electric Vehicle Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Change Green, Drive Clean - Sustainable Transportation Solutions",
    description:
      "Leading the future of sustainable transportation with innovative green solutions for a cleaner environment.",
    images: ["https://images.unsplash.com/photo-1593941707882-a5bac6861d75?w=1200&h=630&fit=crop"],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
