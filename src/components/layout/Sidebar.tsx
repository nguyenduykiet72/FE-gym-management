import { Link } from "react-router-dom";
import {
  HomeIcon,
  UsersIcon,
  CalendarIcon,
  CurrencyDollarIcon,
  CogIcon,
  QrCodeIcon,
  XMarkIcon,
  GlobeAltIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  userRole: "admin" | "trainer" | "member" | null;
}

const Sidebar = ({ isOpen, setIsOpen, userRole }: SidebarProps) => {
  const navigation = [
    { name: "Dashboard", href: "/dashboard", icon: HomeIcon, roles: ["admin", "trainer", "member"] },
    { name: "Members", href: "/members", icon: UsersIcon, roles: ["admin", "trainer"] },
    { name: "Trainers", href: "/trainers", icon: UsersIcon, roles: ["admin"] },
    { name: "Schedules", href: "/schedules", icon: CalendarIcon, roles: ["admin", "trainer", "member"] },
    { name: "Packages", href: "/packages", icon: CurrencyDollarIcon, roles: ["admin", "member"] },
    { name: "Equipment", href: "/equipment", icon: CogIcon, roles: ["admin", "trainer"] },
    { name: "QR Check-In", href: "/checkin", icon: QrCodeIcon, roles: ["admin", "trainer"] },
  ];

  const filteredNavigation = navigation.filter((item) => (userRole ? item.roles.includes(userRole) : false));

  return (
    <>
      {/* Mobile sidebar backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-gray-600 bg-opacity-75 md:hidden" onClick={() => setIsOpen(false)} />
      )}

      {/* Sidebar */}
      <div
        className={`
        fixed inset-y-0 left-0 z-50 w-64 bg-dark text-white transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-auto md:h-screen
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
      `}
      >
        <div className="flex items-center justify-between h-16 px-4 border-b border-gray-700">
          <Link to="/dashboard">
            <h1 className="text-xl font-bold">FitHub Pro</h1>
          </Link>
          <button className="md:hidden text-white" onClick={() => setIsOpen(false)}>
            <XMarkIcon className="h-6 w-6" />
          </button>
        </div>

        <nav className="mt-5 px-2 space-y-1">
          <Link
            to="/"
            className="group flex items-center px-3 py-2 text-base font-medium rounded-md hover:bg-gray-700 hover:text-white transition-colors"
          >
            <GlobeAltIcon className="mr-3 h-6 w-6 text-gray-300 group-hover:text-white" aria-hidden="true" />
            Public Home
          </Link>

          {filteredNavigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className="group flex items-center px-3 py-2 text-base font-medium rounded-md hover:bg-gray-700 hover:text-white transition-colors"
            >
              <item.icon className="mr-3 h-6 w-6 text-gray-300 group-hover:text-white" aria-hidden="true" />
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-0 w-full p-4 border-t border-gray-700">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img
                className="h-10 w-10 rounded-full bg-gray-300"
                src="https://via.placeholder.com/40"
                alt="User avatar"
              />
            </div>
            <div className="ml-3">
              <p className="text-sm font-medium text-white">John Doe</p>
              <p className="text-xs font-medium text-gray-300 capitalize">{userRole || "Guest"}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
