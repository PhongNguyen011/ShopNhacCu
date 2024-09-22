const ProductdetalsPage = () => {
    
  return (
    <div className="container ProductDetals my-5 pt-5">
      <div className="row mt-5 justify-content-between align-items-center">
        <div className="col-12 col-lg-5">
          <img
            className="img-fluid"
            src="src/assets/img/fender-cd-60s.jpg"
            alt=""
          />
        </div>
        <div className="col-lg-6 col-md-12 col-12">
        <h1 className="py-4">Đàn Fender CD-60S</h1>
        <h2>5,600,000 VND</h2>
        <div className="input-group mb-3">
          <input type="number" />
          <button className="buy-btn ms-2">Mua</button>
        </div>
        <h4 className="mt-5 mb-5">Mô Tả Sản Phẩm</h4>
        <p>
          Fender CD-60S là cây đàn lý tưởng với giai điệu chuẩn và mức giá phải
          chăng, phù hợp cho dã ngoại, quán cà phê và phong cách cổ điển.
        </p>
      </div>
      </div>
    </div>
  );
};

export default ProductdetalsPage;
