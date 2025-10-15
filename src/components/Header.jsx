import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-blue-500 text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Brand */}
        <Link to='/' className="text-2xl md:text-3xl font-extrabold tracking-wide">
          Jarurat Care
        </Link>

        {/* Navigation Links */}
        <nav className="space-x-6 text-lg">
          <Link
            to="/"
            className="hover:underline hover:text-yellow-300 transition"
          >
            Home
          </Link>
          <Link
            to="/patients"
            className="hover:underline hover:text-yellow-300 transition"
          >
            Patients
          </Link>
          <Link
            to="/about"
            className="hover:underline hover:text-yellow-300 transition"
          >
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
