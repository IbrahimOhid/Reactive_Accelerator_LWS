import { MdNotificationsActive } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";



const Home = () => {
  return (
    <div>
      <nav className="bg-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            {/* Left Section - Logo/Brand */}
            <div className="flex items-center">
              <a href="#" className="flex items-center group">
                <div className="bg-blue-600 group-hover:bg-blue-700 p-2 rounded-lg transition-colors duration-300">
                  <i className="fas fa-cube text-white text-xl" />
                </div>
                <span className="ml-3 text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                  FaceLook
                </span>
              </a>
            </div>
            {/* Right Section - Actions */}
            <div className="flex items-center space-x-3">
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200 relative flex items-center gap-2">
                <IoMdHome /> <span>Home</span>
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
                <IoSettings />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 rounded-full hover:bg-gray-100 transition-colors duration-200 relative">
                <MdNotificationsActive />
                <span className="absolute top-0 right-0 h-2.5 w-2.5 rounded-full bg-red-500 border-2 border-white" />
              </button>
              <div className="hidden md:block h-6 w-px bg-gray-200" />
              <div className="dropdown relative">
                <button className="flex items-center space-x-2 focus:outline-none group">
                  <div className="relative">
                    <div className="h-9 w-9 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden avatar-ring">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="User"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full bg-green-500 border-2 border-white" />
                  </div>
                  <div className="hidden lg:flex flex-col items-start">
                    <span className="text-sm font-medium text-gray-700 group-hover:text-blue-600 transition-colors duration-200">
                      John Doe
                    </span>
                  </div>
                  <i className="fas fa-chevron-down text-xs text-gray-500 hidden lg:inline transition-transform duration-200 group-hover:text-blue-600" />
                </button>
                <div className="dropdown-menu absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-1 z-50 opacity-0 invisible transition-all duration-300 transform -translate-y-2 border border-gray-100">
                  <div className="px-4 py-3 border-b border-gray-100">
                    <div className="flex items-center">
                      <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 overflow-hidden mr-3">
                        <img
                          src="https://randomuser.me/api/portraits/men/32.jpg"
                          alt="User"
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">John Doe</p>
                        <p className="text-sm text-gray-500">
                          john@example.com
                        </p>
                      </div>
                    </div>
                  </div>
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <i className="fas fa-user-circle text-gray-400 mr-3 w-5 text-center" />
                    My Profile
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <i className="fas fa-cog text-gray-400 mr-3 w-5 text-center" />
                    Account Settings
                  </a>
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <i className="fas fa-envelope text-gray-400 mr-3 w-5 text-center" />
                    Messages
                    <span className="ml-auto bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      3
                    </span>
                  </a>
                  <div className="border-t border-gray-100 my-1" />
                  <a
                    href="#"
                    className="block px-4 py-2.5 text-gray-700 hover:bg-blue-50 hover:text-blue-600 flex items-center transition-colors duration-200"
                  >
                    <i className="fas fa-sign-out-alt text-gray-400 mr-3 w-5 text-center" />
                    Sign out
                  </a>
                </div>
              </div>
              <button
                id="mobile-menu-button"
                className="md:hidden p-2 text-gray-600 hover:text-blue-600 rounded-lg hover:bg-gray-100 transition-colors duration-200"
              >
                <i className="fas fa-bars text-xl" />
                <span className="sr-only">Menu</span>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          id="mobile-menu"
          className="mobile-menu md:hidden bg-white border-t border-gray-200"
        >
          <div className="px-2 pt-2 pb-4 space-y-1">
            <a
              href="#"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
            >
              <i className="fas fa-home text-blue-500 mr-3 w-5 text-center" />
              Home
            </a>
            <div className="group">
              <button className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                <div className="flex items-center">
                  <i className="fas fa-briefcase text-blue-500 mr-3 w-5 text-center" />
                  Products
                </div>
                <i className="fas fa-chevron-down text-xs transition-transform duration-200 group-focus:rotate-180" />
              </button>
              <div className="pl-4 mt-1 space-y-1 hidden group-focus:block">
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-laptop text-blue-400 mr-3 w-5 text-center" />
                  Software
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-server text-blue-400 mr-3 w-5 text-center" />
                  Services
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-mobile-screen text-blue-400 mr-3 w-5 text-center" />
                  Apps
                </a>
              </div>
            </div>
            <a
              href="#"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
            >
              <i className="fas fa-building text-blue-500 mr-3 w-5 text-center" />
              Company
            </a>
            <div className="group">
              <button className="w-full flex justify-between items-center px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-colors duration-200">
                <div className="flex items-center">
                  <i className="fas fa-file-alt text-blue-500 mr-3 w-5 text-center" />
                  Resources
                </div>
                <i className="fas fa-chevron-down text-xs transition-transform duration-200 group-focus:rotate-180" />
              </button>
              <div className="pl-4 mt-1 space-y-1 hidden group-focus:block">
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-book text-blue-400 mr-3 w-5 text-center" />
                  Documentation
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-video text-blue-400 mr-3 w-5 text-center" />
                  Tutorials
                </a>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-sm text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
                >
                  <i className="fas fa-blog text-blue-400 mr-3 w-5 text-center" />
                  Blog
                </a>
              </div>
            </div>
            <a
              href="#"
              className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
            >
              <i className="fas fa-envelope text-blue-500 mr-3 w-5 text-center" />
              Contact
              <span className="ml-2 bg-blue-600 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                New
              </span>
            </a>
            <div className="border-t border-gray-200 pt-2 mt-2">
              <a
                href="#"
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
              >
                <i className="fas fa-user-circle text-blue-500 mr-3 w-5 text-center" />
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
              >
                <i className="fas fa-cog text-blue-500 mr-3 w-5 text-center" />
                Settings
              </a>
              <a
                href="#"
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-blue-50 flex items-center transition-colors duration-200"
              >
                <i className="fas fa-sign-out-alt text-blue-500 mr-3 w-5 text-center" />
                Sign Out
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;
