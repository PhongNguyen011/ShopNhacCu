
interface CartItem {
  id: number;
  name: string;
  price: number;
  quantity: number;
  total: number;
}
const ShopPage = () => {
  const carts: CartItem[] = [
    {
      id: 1,
      name: "Product A",
      price: 1000,
      quantity: 10,
      total: 10000,
    },
    {
      id: 2,
      name: "Product B",
      price: 1000,
      quantity: 10,
      total: 10000,
    },
  ];
  const calculateTotalSum = (): number => {
    return carts.reduce((sum, item) => sum + item.total, 0);
  };

  const totalSum = calculateTotalSum();
  return (
    <>
      <div>
        <div className="container mt-5 card shadow-lg mt-5 mb-5"
        >
          <h1 className="text-center mt-5 mb-5">Giỏ Hàng</h1>
          <table className="table table-bordered">
            <thead>
              <tr className="text-center">
                <th>Hình Ảnh</th>
                <th>Tên Sản Phẩm</th>
                <th>Giá</th>
                <th>Số Lượng</th>
                <th>Tổng</th>
                <th>Hành Động</th>
              </tr>
            </thead>
            <tbody id="cart">
              {carts.map((items) => {
                return (
                  <>
                    <tr>
                      <td>
                        <img src="https://via.placeholder.com/60" alt="" />
                      </td>
                      <td>{items.name}</td>
                      <td>{items.price} VND</td>
                      <td>{items.quantity}</td>
                      <td>{items.total}</td>
                      <td>
                        <button className="btn btn-danger"><i className="fa-solid fa-trash"></i></button>
                      </td>
                    </tr>
                  </>
                );
              })}
            </tbody>
          </table>
          <h2>
            Tổng Tiền: <span id="total">{totalSum}</span> VNĐ
          </h2>
          <button id="checkout" className="buy-btn mt-3 mb-3">
            Thanh Toán
          </button>
        </div>
      </div>
    </>
  );
};
export default ShopPage;