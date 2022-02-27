import React from "react";

function Navbar(props) {
  const logout = function () {
    window.localStorage.removeItem("user");
    window.location.href = "login";
  };

  let activeClass = props.active;

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href=".">
            Tweet Logo
          </a>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a id="tweets" className={`nav-link ${activeClass === 1?"active":""}`} aria-current="page" href="/">
                  Tweets
                </a>
              </li>
              <li className="nav-item">
                <a id="all-users" className={`nav-link ${activeClass === 2?"active":""}`} href="users">
                  All Users
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#1" onClick={logout}>
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
