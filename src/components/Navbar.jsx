import { NavLink } from "react-router-dom";
import { useState } from "react";


function Navbar() {

  const [isOpen, setIsOpen] = useState(false);


  return (

    <nav className="bg-white shadow-md px-6 md:px-8 py-4 sticky top-0 z-10">


      <div className="flex justify-between items-center">


        {/* Logo */}

        <h1 className="text-xl md:text-2xl font-bold text-purple-600">
          MyWebsite
        </h1>



        {/* Desktop Menu */}

        <div className="hidden md:flex gap-8 font-medium">


          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-purple-600 font-bold"
                : "hover:text-purple-600 transition"
            }
          >
            Home
          </NavLink>



          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "text-purple-600 font-bold"
                : "hover:text-purple-600 transition"
            }
          >
            About
          </NavLink>



          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "text-purple-600 font-bold"
                : "hover:text-purple-600 transition"
            }
          >
            Contact
          </NavLink>


        </div>



        {/* Mobile Button */}

        <button
          className="md:hidden text-2xl text-purple-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>


      </div>




      {/* Mobile Menu */}

      {
        isOpen && (

          <div className="md:hidden flex flex-col gap-4 mt-5 font-medium">


            <NavLink
              to="/"
              end
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-bold"
                  : "hover:text-purple-600"
              }
            >
              Home
            </NavLink>



            <NavLink
              to="/about"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-bold"
                  : "hover:text-purple-600"
              }
            >
              About
            </NavLink>



            <NavLink
              to="/contact"
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "text-purple-600 font-bold"
                  : "hover:text-purple-600"
              }
            >
              Contact
            </NavLink>


          </div>

        )

      }


    </nav>

  )

}


export default Navbar;