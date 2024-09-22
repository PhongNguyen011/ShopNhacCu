const HomePage = () => {
    return <>
<div>
  <div className="container">
    <h2 className="mt-4 text-center">Sản phẩm nổi bật</h2> 
    <div className="row"> 
      <div className="col-md-4 mb-4"> 
        <div className="product-card text-center p-3 border rounded"> 
          <img src="src/assets/img/fender-cd-60s.jpg" alt="Sản phẩm 1" className="img-fluid mb-3" /> 
          <h5>Fender-CD-60S</h5> 
          <p className="price">Giá: 5.600.000 VNĐ</p> 
          <button className="buy-btn">Mua ngay</button> 
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="product-card text-center p-3 border rounded">
          <img src="img/zalo.png" alt="Sản phẩm 2" className="img-fluid mb-3" />
          <h5 className="product-name">Tên sản phẩm 2</h5>
          <p className="price">Giá: 1.500.000 VNĐ</p>
          <button className="buy-btn">Mua ngay</button>
        </div>
      </div>
      <div className="col-md-4 mb-4">
        <div className="product-card text-center p-3 border rounded">
          <img src="img/facebook.png" alt="Sản phẩm 3" className="img-fluid mb-3" />
          <h5 className="product-name">Tên sản phẩm 3</h5>
          <p className="price">Giá: 2.000.000 VNĐ</p>
          <button className="buy-btn">Mua ngay</button>
        </div>
      </div>
    </div>
  </div>
 </div>

    </>
}
export default HomePage