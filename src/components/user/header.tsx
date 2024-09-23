import { useNavigate } from "react-router-dom";
const Header = () => {
  const navigate = useNavigate()
  return (
    <>
      <div>
          <nav className="navbar navbar-expand-lg navbar-light">
            <div className="container d-flex justify-content-between align-items-center">
              <a className="navbar-brand" href="/">
                <img src="img/logo.png" alt="Logo" height={50} width={50} className="rounded-circle" />
              </a>
              <div className="d-flex justify-content-center flex-grow-1 ms-4">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link fw-bold" href="#">
                      Giới Thiệu
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold" href="#">
                      Sản Phẩm
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link fw-bold" href="#">
                      About
                    </a>
                  </li>
                </ul>
              </div>
              <form
                className="form-inline mx-auto d-flex flex-grow-1 me-2"
                style={{ maxWidth: 400 }}
              >
                <div className="input-group">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Tìm sản phẩm, thương hiệu bạn mong muốn..."
                    aria-label="Tìm kiếm sản phẩm"
                  />
                  <div className="input-group-append">
                    <button className="buy-btn btn btn-outline-secondary" type="button">
                    <i className="fas fa-search" />
                    </button>
                  </div>
                </div>
              </form>
              <div className="d-none d-lg-block d-flex align-items-center">
                <button
                  type="button"
                  className="btn btn-outline-dark mr-2 buy-btn me-2"
                  data-toggle="modal"
                  data-target="#loginModal"
                >
                  <i className="fas fa-shopping-cart" onClick={() => navigate("/shop")}/>
                </button>
                <button
                type="button"
                className="btn btn-outline-dark buy-btn"
                data-toggle="modal"
                data-target="#cartModal"
                onClick={() => navigate("/authen")}
              >
                Đăng Nhập
              </button>
              </div>
            </div>
          </nav>
      </div>
    </>
  );
};

export default Header;