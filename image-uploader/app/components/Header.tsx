import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-gray-800 text-white p-4">
      <nav className="container mx-auto">
        <Link href="/" className="text-2xl font-bold">
          Image Processor
        </Link>
      </nav>
    </header>
  )
}

