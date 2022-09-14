import background from './img/background.jpg'

function Header() {
  return (
    <>
      <div className="container">
        <img src={background} alt="background" className="background" />
        <header className="header">
          <div className="header-title">
            <a href="#">Feane</a>
          </div>
          <div className="header-menu">
            <ul id="header-item">
              <li>
                <a href="#" id="a-hover">
                  HOME
                </a>
              </li>
              <li>
                <a href="#" id="a-hover">
                  MENU
                </a>
              </li>
              <li>
                <a href="#" id="a-hover">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#" id="a-hover">
                  BOOK TABLE
                </a>
              </li>
            </ul>
            <ul id="header-item">
              <li>
                <a id="a-hover">
                  <i className="fa fa-user" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a id="a-hover">
                  <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <a id="a-hover">
                  <i className="fa fa-search" aria-hidden="true"></i>
                </a>
              </li>
              <li>
                <button id="order-btn">Order Oline</button>
              </li>
            </ul>
          </div>
        </header>
      </div>
    </>
  );
}

export default Header;