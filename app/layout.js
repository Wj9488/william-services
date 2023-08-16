import './globals.css'
// import Nav from '@/components/Nav'

export const metadata = {
  title: {
    default: "william.services",
    template: "%s | william.services"
  },
  keywords: [
    "william.services",
    "william services",
    "Will Jones",
    "Will Jones portfolio",
    "Will Jones Dev",
    "web design",
    "website-design",
    "Exeter website design",
    "London website design",
    "front end development uk"
  ],
  description: 'I help businesses level up their websites. Get the website that your business deserves.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#f5EBE0] dark:bg-[#22223b] transition-colors duration-500 dark:text-[#f5EBE0] text-[#22223b] overflow-x-hidden">
        {/* <Nav /> */}
        {children}
      </body>
    </html>
  )
}
