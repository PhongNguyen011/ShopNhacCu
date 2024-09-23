import { useContext } from "react";
import { MainContext } from "../../context/mainprovider";

const ProductPage = () => {
  const { data } = useContext(MainContext);
  console.log(data);

  return (
    <>
      <div className="container">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-3 gy-4">
          {data?.products.map((items, index) => {
            return (
              <>
                <div className="col" key={index}>
                  <div className="card">
                    <img
                      className="card-img-top"
                      src={items.image}
                      alt={items.name}
                    />
                    <div className="card-body">
                      <h4 className="card-title">{items.name}</h4>
                      <p className="card-text">{items.price} VND</p>
                      <button className="buy-btn" type="button">Mua</button>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default ProductPage;
