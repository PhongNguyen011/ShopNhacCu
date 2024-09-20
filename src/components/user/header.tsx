const Header = () => {
    return (
      <>
        <>
          <div>
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container">
                <a className="navbar-brand" href="#">
                  <img src="img/tam.png" alt="" className="img-fluid" />
                </a>
                <form className="form-inline my-2 my-lg-0 mx-auto">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Tìm sản phẩm, thương hiệu bạn mong muốn..."
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                      >
                        <i className="fas fa-search" />
                      </button>
                    </div>
                  </div>
                </form>
                <div className="d-none d-lg-block d-flex align-items-center">
                  <button
                    type="button"
                    className="btn btn-outline-dark mr-2"
                    data-toggle="modal"
                    data-target="#loginModal"
                  >
                    Đăng Nhập
                  </button>
                  <button
                    type="button"
                    className="btn btn-outline-dark"
                    data-toggle="modal"
                    data-target="#cartModal"
                  >
                    <i className="fas fa-shopping-cart" /> Giỏ Hàng
                  </button>
                </div>
              </div>
            </nav>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark text-center">
              {" "}
              <div className="container">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-toggle="collapse"
                  data-target="#navbarNav"
                  aria-controls="navbarNav"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >

                  <span className="navbar-toggler-icon" />
                </button>
                <div
                  className="collapse navbar-collapse justify-content-center"
                  id="navbarNav"
                >
                  
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Trang Chủ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Organ / Keyboard
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Guitar
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Trống - Bộ Gõ
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Kèn - Sáo - Violin
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Phụ kiện
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">
                        Phòng thu
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </>
      </>
    );
}
export default Header