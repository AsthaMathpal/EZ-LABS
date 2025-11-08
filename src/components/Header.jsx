function Header() {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        <h1 className="text-2xl font-bold">EZ Labs</h1>
        <nav>
          <ul className="flex gap-6">
            <li><a href="#hero" className="hover:text-blue-400">Home</a></li>
            <li><a href="#features" className="hover:text-blue-400">Features</a></li>
            <li><a href="#contact" className="hover:text-blue-400">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
