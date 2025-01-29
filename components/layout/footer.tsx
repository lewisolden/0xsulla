import { Link } from "wouter";

export default function Footer() {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <h3 className="text-2xl font-bold mb-4">Sulla</h3>
          <p>Democratizing cryptocurrency education for everyone.</p>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Quick Links</h4>
          <nav className="space-y-2">
            <Link href="/" className="block hover:text-blue-200">Home</Link>
            <Link href="/about" className="block hover:text-blue-200">About</Link>
            <Link href="/curriculum" className="block hover:text-blue-200">Curriculum</Link>
            <Link href="/modules/module1" className="block hover:text-blue-200">Start Learning</Link>
          </nav>
        </div>

        <div>
          <h4 className="font-semibold mb-3">Connect</h4>
          <div className="flex space-x-4">
            <a 
              href="https://twitter.com/sulla_crypto" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-200"
            >
              Twitter
            </a>
            <a 
              href="https://linkedin.com/company/sulla" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-blue-200"
            >
              LinkedIn
            </a>
            <a 
              href="mailto:contact@sulla.com" 
              className="hover:text-blue-200"
            >
              Email
            </a>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 border-t border-blue-700 pt-4">
        <p>&copy; 2024 Sulla. All Rights Reserved.</p>
      </div>
    </footer>
  );
}