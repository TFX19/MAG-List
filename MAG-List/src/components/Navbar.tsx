import React from "react";
import {
  FaFilm,
  FaPlayCircle,
  FaGamepad,
  FaBook,
  FaBell,
  FaThList,
  FaUserCircle,
  FaSearch,
} from "react-icons/fa";

const CNavbar: React.FC = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          {/* Brand */}
          <a className="navbar-brand" href="#">
            Navbar
          </a>

          {/* Search Form */}
          <form className="d-flex ms-3 position-relative">
            <input
              className="form-control"
              type="search"
              placeholder="Search"
              aria-label="Search"
              style={{ paddingRight: "40px" }}
            />
            <button
              className="btn position-absolute"
              type="submit"
              style={{
                right: "10px",
                top: "50%",
                transform: "translateY(-50%)",
                border: "none",
                background: "transparent",
              }}
            >
              <FaSearch />
            </button>
          </form>

          {/* Hamburger Menu Button */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Collapsible Menu */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            {/* Central Navigation (Filmes, Jogos, etc.) */}
            <div className="mx-auto">
              <ul className="navbar-nav d-flex justify-content-center mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <a className="nav-link active" aria-current="page" href="#">
                    <FaFilm size={24} />
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    <FaPlayCircle size={24} />
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    <FaGamepad size={24} />
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    <FaBook size={24} />
                  </a>
                </li>
              </ul>
            </div>

            {/* Right Side (User, Notifications, etc.) */}
            <div className="ms-auto">
              <ul className="navbar-nav d-flex justify-content-end mb-2 mb-lg-0">
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    <FaBell size={24} />
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    <FaThList size={24} />
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link" href="#">
                    <FaUserCircle size={30} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default CNavbar;
