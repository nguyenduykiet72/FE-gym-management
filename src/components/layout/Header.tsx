import { useState } from "react";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-dark text-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and brand name */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-primary"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <span className="ml-2 text-xl font-bold">FitHub Pro</span>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-white hover:text-primary transition-colors">
              Trang chủ
            </Link>
            <Link to="/about" className="text-white hover:text-primary transition-colors">
              Giới thiệu
            </Link>
            <Link to="/classes" className="text-white hover:text-primary transition-colors">
              Lớp học
            </Link>
            <Link to="/trainers" className="text-white hover:text-primary transition-colors">
              Huấn luyện viên
            </Link>
            <Link to="/pricing" className="text-white hover:text-primary transition-colors">
              Bảng giá
            </Link>
            <Link to="/contact" className="text-white hover:text-primary transition-colors">
              Liên hệ
            </Link>
            <Link to="/login" className="btn btn-primary">
              Đăng nhập
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
              onClick={toggleMobileMenu}
            >
              <span className="sr-only">Mở menu</span>
              {mobileMenuOpen ? (
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">
              Trang chủ
            </Link>
            <Link to="/about" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">
              Giới thiệu
            </Link>
            <Link to="/classes" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">
              Lớp học
            </Link>
            <Link to="/trainers" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">
              Huấn luyện viên
            </Link>
            <Link to="/pricing" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">
              Bảng giá
            </Link>
            <Link to="/contact" className="block px-3 py-2 rounded-md text-white hover:bg-gray-700">
              Liên hệ
            </Link>
            <Link to="/login" className="block px-3 py-2 rounded-md bg-primary text-white">
              Đăng nhập
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
