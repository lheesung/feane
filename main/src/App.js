import './css/style.css'
import './css/header.css'
import './css/slider.css'
import './css/products.css'
import Header from './components/Header'
import Slider from './components/Slider'
import Products from './components/Products'

function App() {
  return (
    <>
      <Header>헤더바</Header>
      <Slider>메인 슬라이더</Slider>
      <Products>제품</Products>
    </>
  );
}

export default App;