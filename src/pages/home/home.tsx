const HomePage = () => {
  return (
    <>
      <div>
        <div>
          <div className="hot-banner">
            <div
              id="carouselExample"
              className="carousel slide"
              data-bs-ride="carousel"
              data-bs-interval={2000}
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img
                    src="img/anhlayout1.png"
                    className="d-block w-100"
                    alt="A"
                  />
                  <div className="carousel-caption">
                    <p className="fw-semibold">Giảm 15%</p>
                    <h1 className="fw-bold">Yamaha U1H</h1>
                    <a href="#" className="buy-btn mt-3">
                      Mua Ngay
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="img/anhlayout2.png"
                    className="d-block w-100"
                    alt="B"
                  />
                  <div className="carousel-caption">
                    <p className="fw-semibold">Sale hot lên đến 40%</p>
                    <h1 className="fw-bold">Kawai K300</h1>
                    <a href="#" className="buy-btn mt-3">
                      Mua Ngay
                    </a>
                  </div>
                </div>
                <div className="carousel-item">
                  <img
                    src="img/anhlayout3.png"
                    className="d-block w-100"
                    alt="C"
                  />
                  <div className="carousel-caption">
                    <p className="fw-semibold">Ưu đãi lớn</p>
                    <h1 className="fw-bold">Steinway &amp; Sons</h1>
                    <a href="#" className="buy-btn mt-3">
                      Mua Ngay
                    </a>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExample"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                />
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
          <div className="container">
            <h2 className="mt-4 mb-4 text-center">Sản phẩm nổi bật</h2>
            <div className="row" id="product-list">
              <div className="col-md-4 mb-4">
                <div className="product-card text-center p-3 border rounded">
                  <img
                    src="img/YamahaU1H.png"
                    alt="Yamaha U1H"
                    className="img-fluid mb-3"
                  />
                  <h5 className="product-name">Yamaha U1H</h5>
                  <p className="price">Giá: 37.000.000 VNĐ</p>
                  <button className="buy-btn">Mua ngay</button>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="product-card text-center p-3 border rounded">
                  <img
                    src="img/GuitarCordobaStage.png"
                    alt="Guitar Cordoba Stage"
                    className="img-fluid mb-3"
                  />
                  <h5 className="product-name">Guitar Cordoba Stage</h5>
                  <p className="price">Giá: 18,500,000 VNĐ</p>
                  <button className="buy-btn">Mua ngay</button>
                </div>
              </div>
              <div className="col-md-4 mb-4">
                <div className="product-card text-center p-3 border rounded">
                  <img
                    src="img/TrongPearlDMP925SPC.png"
                    alt="Trống Pearl DMP925SP/C"
                    className="img-fluid mb-3"
                  />
                  <h5 className="product-name">Trống Pearl DMP925SP/C</h5>
                  <p className="price">Giá: 20,700,000 VNĐ</p>
                  <button className="buy-btn">Mua ngay</button>
                </div>
              </div>
              <div className="col-md-4 mb-4 additional-product">
                <div className="product-card text-center p-3 border rounded">
                  <img
                    src="img/KapokMV18 44.png"
                    alt="KapokMV18 44"
                    className="img-fluid mb-3"
                  />
                  <h5 className="product-name">Kapo kMV18 4/4</h5>
                  <p className="price">Giá: 37.000.000 VNĐ</p>
                  <button className="buy-btn">Mua ngay</button>
                </div>
              </div>
              <div className="col-md-4 mb-4 additional-product">
                <div className="product-card text-center p-3 border rounded">
                  <img
                    src="img/FenderPlayerStratPLSTOPPFTBS.png"
                    alt="Fender Player Strat PLS TOP PF TBS"
                    className="img-fluid mb-3"
                  />
                  <h5 className="product-name">
                    Fender Player Strat PLS TOP PF TBS
                  </h5>
                  <p className="price">Giá: 18,500,000 VNĐ</p>
                  <button className="buy-btn">Mua ngay</button>
                </div>
              </div>
              <div className="col-md-4 mb-4 additional-product">
                <div className="product-card text-center p-3 border rounded">
                  <img
                    src="img/OrganCasioSA-80.png"
                    alt="Organ Casio SA-80"
                    className="img-fluid mb-3"
                  />
                  <h5 className="product-name">Organ Casio SA-80</h5>
                  <p className="price">Giá: 20,700,000 VNĐ</p>
                  <button className="buy-btn">Mua ngay</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default HomePage;
