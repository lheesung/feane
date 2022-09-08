import './css/style.css'
import './css/header.css'
import './css/slider.css'
import './css/products.css'
import background from './img/background.jpg'
import product1 from './img/product1.jpg'
import product2 from './img/product2.jpg'

function App() {
  return (
    <>
      <Header>헤더바</Header>
      <Slider>메인 슬라이더</Slider>
      <Products>제품</Products>
    </>
  );
}

function Header(){
  return(
    <>
      <div className='container'>
        <img src={background} alt="background" className='background' />
        <header className='header'>
          <div className='header-title'><a href="#">Feane</a></div>
          <div className='header-menu'>
            <ul id='header-item'>
              <li><a href="#" id='a-hover'>HOME</a></li>
              <li><a href="#" id='a-hover'>MENU</a></li>
              <li><a href="#" id='a-hover'>ABOUT</a></li>
              <li><a href="#" id='a-hover'>BOOK TABLE</a></li>
            </ul>
            <ul id='header-item'>
              <li><a id='a-hover'><i className="fa fa-user" aria-hidden="true"></i></a></li>
              <li><a id='a-hover'><i className="fa fa-shopping-cart" aria-hidden="true"></i></a></li>
              <li><a id='a-hover'><i className="fa fa-search" aria-hidden="true"></i></a></li>
              <li><button id='order-btn'>Order Oline</button></li>
            </ul>
          </div>
        </header>
      </div>
    </>
    )
}
function Slider(){
  return(
    <>
      <div className='slider'>
        <h1>Fast Food Restaurant</h1>
        <p>Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.</p>
        <button id='order-btn'>Order Now</button>
      </div>
    </>
  )
}
function Products(){
  return(
    <>
      <div>
        <div className='box'>
          <img scr={product1} alt='product' id='product-box'/>
          <h1>Tasty Thursdays</h1>
          <h2>20%</h2><h3>off</h3>
          <button id='order-btn'>Order Now</button>
        </div>
      </div>
    </>
  )
}

export default App;