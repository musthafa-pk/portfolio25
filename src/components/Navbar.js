import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-gray-800">MM</Link>
        <div className="flex space-x-4">
          <Link href="/" className="text-gray-800 hover:text-blue-600">Home</Link>
          <Link href="/about" className="text-gray-800 hover:text-blue-600">About</Link>
          <Link href="/projects" className="text-gray-800 hover:text-blue-600">Projects</Link>
          <Link href="/contact" className="text-gray-800 hover:text-blue-600">Contact</Link>
        </div>
      </div>
    </nav>
  )
}