
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import GetProducts from "./components/GetProducts";
import AddProducts from "./components/AddProducts";
import Payment from "./components/Payment";
import NotFound from "./components/NotFound";
import pic1 from "./Images/mansion1.jpg";
import pic2 from "./Images/mansion2.jpg";
import pic3 from "./Images/mansion5.jpg";
import pic4 from './Images/mansion6.jpg'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav className="row">
          <div className="col-md-6 lee">
            <h2 className="text-light">
              <i class="bi bi-house"></i>Lee Luxury Homes
            </h2>
          </div>
          <div className="navdiv col-md-6">
            <Link to="/signin" className="link">
              Sign In
            </Link>
            <Link to="/signup" className="link">
              Sign Up
            </Link>
          </div>
        </nav>

        <header className="App-header"></header>
        <section className="row">
          <div
            id="carouselExampleCaptions"
            className="carousel slide"
            data-bs-ride="carousel"
          >
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide-to="3"
                aria-label="Slide 4"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={pic1} className=" w-100" alt="Penthouse 1" />
              </div>
              <div className="carousel-item">
                <img src={pic2} className=" w-100" alt="Penthouse 2" />
              </div>
              <div className="carousel-item">
                <img src={pic3} className=" w-100" alt="Penthouse 3" />
              </div>
              <div className="carousel-item">
                <img src={pic4} className=" w-100" alt="Penthouse 3" />
              </div>
            </div>
            <button
              className="carousel-control-prev bg-dark"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next bg-dark"
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </section>

        <nav>
          <Link to="/" className="Link">
           Buy House
          </Link>
          <Link to="/addproduct" className="Link">
            sell house
          </Link>
        </nav>

        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/" element={<GetProducts />} />
          <Route path="/addproduct" element={<AddProducts />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <div className="row bg-dark mt-4 justify-content-center text-light p-4">
        <div className="col-md-6">
          <h2>About us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
            impedit labore quas. Eligendi nesciunt officiis qui, dolorem maxime
            beatae quo architecto praesentium ad, fuga harum delectus commodi
            quasi maiores quibusdam?
          </p>
        </div>
        <div className="col-md-6">
          <h2>social media</h2>
          <p>follow us on</p>
          <a href="https://www.instagram.com/0.lee0/" target="_blank">
            <i className="bi bi-instagram"></i>
          </a>
        </div>
      </div>
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons/font/bootstrap-icons.css"
      />
    </div>
  );
}

export default App;
