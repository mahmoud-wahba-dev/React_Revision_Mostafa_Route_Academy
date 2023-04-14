import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="contact">Contact</Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="about">About</Link>
              </li>


            </ul>

          </div>
        </div>
      </nav>
      {/* <nav classNameName="navbar navbar-expand-lg navbar-light bg-light">
                <div classNameName="container-fluid">
                    <Link classNameName="navbar-brand" to="#">Navbar</Link>
                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>
                    <div classNameName="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul classNameName="navbar-nav me-auto mb-2 mb-lg-0">
                            <li classNameName="nav-item">
                                <Link classNameName="nav-link active" aria-current="page" to="#">Home</Link>
                            </li>
                            <li classNameName="nav-item">
                                <Link classNameName="nav-link" to="#">Link</Link>
                            </li>
                            <li classNameName="nav-item dropdown">
                                <Link classNameName="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Dropdown
                                </Link>

                            </li>
                            <li classNameName="nav-item">
                                <Link classNameName="nav-link disabled" to="#" tabindex="-1" aria-disabled="true">Disabled</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav> */}

    </>
  )
}