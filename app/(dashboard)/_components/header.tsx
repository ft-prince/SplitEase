function Header() {
  return (
    <header className="bg-gray-900 text-white p-6" style={{ backgroundColor: '#282828' }}>
    <div className="container mx-auto flex items-center justify-between">
      {/* Brand Name */}
      <div className="flex items-center">
        <span className="text-lg font-semibold">SplitEase</span>
      </div>

      {/* Navigation Links */}
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Services
            </a>
          </li>
          {/* Add more navigation links as needed */}
        </ul>
      </nav>
    </div>
  </header>
  )
}
export default Header