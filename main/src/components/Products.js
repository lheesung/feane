import product1 from './img/product1.jpg'
import product2 from './img/product2.jpg'

function Products() {
  return (
    <>
      <div className='product-box'>
        <div className="box">
          <img scr={product1} alt="product" id="product-img" />
          <div className='product'>
            <h1>Tasty Thursdays</h1>
            <h2>20%</h2>
            <h3>off</h3>
          </div>
          <button id="order-btn">Order Now</button>
        </div>
      </div>
    </>
  );
}

export default Products;