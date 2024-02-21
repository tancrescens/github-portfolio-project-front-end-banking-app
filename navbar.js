function NavBar() {
  function onClick(e) {
    if (e.currentTarget.id == "homeIcon") {
      document.querySelector(".active").classList.remove("active");
      document.getElementById("homeBtn").classList.add("active");
      return;
    }
    document.querySelector(".active").classList.remove("active");
    e.target.classList.add("active");
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a
          onClick={(e) => {
            onClick(e);
          }}
          className="navbar-brand"
          href="#"
          id="homeIcon"
        >
          BadBank
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                onClick={(e) => {
                  onClick(e);
                }}
                className="nav-link"
                href="#/CreateAccount/"
              >
                Create Account
              </a>
            </li>
            {/* <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li> */}
            <li className="nav-item">
              <a
                onClick={(e) => {
                  onClick(e);
                }}
                className="nav-link"
                href="#/deposit/"
              >
                Deposit
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={(e) => {
                  onClick(e);
                }}
                className="nav-link"
                href="#/withdraw/"
              >
                Withdraw
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={(e) => {
                  onClick(e);
                }}
                className="nav-link"
                href="#/alldata/"
              >
                AllData
              </a>
            </li>
            <li className="nav-item">
              <a
                onClick={(e) => {
                  onClick(e);
                }}
                className="nav-link active"
                href="#"
                id="homeBtn"
              >
                Home
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
