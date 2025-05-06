import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes, NavLink } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import GetProducts from "./components/GetProducts";
import AddProducts from "./components/AddProducts";
import Payment from "./components/Payment";
import NotFound from "./components/NotFound";
import Home from "./components/Home";
import "./App.css";
import Chatbot from "./components/Chatbot";

function App() {
  // Store the full user object
  const [user, setUser] = useState(null);

  // Load user from localStorage on app start
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Function to set user after login
  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  // Function to logout
  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <div className="App">
      <BrowserRouter>
        {/* Top auth nav */}
        <nav className="nav1">
          {user ? (
            <>
              <span className="link">Hello, {user.username}!</span>
              <button onClick={handleLogout} className="btn btn-outline-danger">
                Log Out
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/signin"
                className={({ isActive }) =>
                  isActive ? "link active-link" : "link"
                }
              >
                Sign In
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive ? "link active-link" : "link"
                }
              >
                Sign Up
              </NavLink>
            </>
          )}
        </nav>

        {/* Header */}
        <header className="App-header">
          <h2 className="text-light">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "link2 active-link" : "link2"
              }
            >
              <i className="bi bi-house"></i>
            </NavLink>
            Lee Luxury Homes
          </h2>
        </header>

        {/* Main nav */}
        <nav className="p-4">
          <NavLink
            to="/buyhouse"
            className={({ isActive }) =>
              isActive ? "Link active-link" : "Link"
            }
          >
            Buy House
          </NavLink>
          <NavLink
            to="/addproduct"
            className={({ isActive }) =>
              isActive ? "Link active-link" : "Link"
            }
          >
            Sell House
          </NavLink>
          <NavLink
            to="/leehomeschatbot"
            className={({ isActive }) =>
              isActive ? "Link active-link" : "Link"
            }
          >
            <i class="bi bi-robot"></i>
          </NavLink>
        </nav>

        {/* Page Routes */}
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin onLogin={handleLogin} />} />
          <Route path="/buyhouse" element={<GetProducts />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/" element={<Home />} />
          <Route path="/leehomeschatbot" element={<Chatbot />} />
        </Routes>
      </BrowserRouter>

      {/* Footer */}
      <div className="row bg-dark justify-content-center text-light p-5">
        <div className="col-md-6">
          <h2>About us</h2>
          <p>
            This website was built by billionaire tycoon, Lee Kinyua, to ease
            the process of buying penthouses in alignment with current
            technological advancements. LEE HOUSES is not a real-estate company
            but an internet service provider that connects sellers to buyers.
          </p>
        </div>
        <div className="col-md-6">
          <h2>Social Media</h2>
          <p>Follow us on:</p>
          <a href="#" target="_blank" className="text-light m-1 fs-4">
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com/0.lee0/?next=%2F"
            target="_blank"
            className="text-light m-1 fs-4"
          >
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="#" target="_blank" className="text-light m-1 fs-4">
            <i className="bi bi-twitter"></i>
          </a>
          <a
            href="https://wa.me/+254794927995"
            target="_blank"
            className="text-light m-1 fs-4"
          >
            <i className="bi bi-whatsapp"></i>
          </a>
        </div>
      </div>

      {/* Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
      />
    </div>
  );
}

export default App;
