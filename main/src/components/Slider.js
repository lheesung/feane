let delay = 0;

for(let i=0; i<10; i++){//let i=0; i<3; i++) {
  if(i===3) {
    i=0;
  }
  delay+=5000; //milli sec
  setTimeout(() => {
    for(let j=-30; j<=40; j++) {
        document.getElementById(`slider${i}`).style.right = `${j}%`;
        document.getElementById(`slider${i}`).style.transitionTimingFunction = "ease-out";
        document.getElementById(`slider${i}`).style.transitionDuration = "0.5s";
    }
    for(let j=60; j>=-100; j--) {
      console.log("옆으로 간다");
   
      document.getElementById(`slider${Math.abs(i-2)}`).style.left = `${j}%`;
      document.getElementById(`slider${i}`).style.transitionTimingFunction = "ease-out";
      document.getElementById(`slider${i}`).style.transitionDuration = "0.4s";
  }
  }, delay);
  delay=0;
}

function Slider() {
  return (
    <>
      <div id="slider0" className="slider">
        <h1>Fast Food Restaurant</h1>
        <p>
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
          ad mollitia laboruwefwefm quam quisquam esse error unde. Tempora ex
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus libero ipsam.
        </p>
        <button id="order-btn">Order Now</button>
      </div>
      <div id="slider1" className="slider">
        <h1>Fast Food Restaurant</h1>
        <p>
          Doloremque, itaque apeqwefqwefqweferiam facilis rerum, commodi, temporibus sapiente
          ad mollitia laborum quam quisquam esse error unde. Tempora ex
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus libero ipsam.
        </p>
        <button id="order-btn">Order Now</button>
      </div>
      <div id="slider2" className="slider">
        <h1>Fast Food Restaurant</h1>
        <p>
          Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente
          ad mollitia laborum quam quisquam esse error unde. Tempora ex
          doloremque, labore, sunt repellat dolore, iste magni quos nihil
          ducimus liberoqwefqwefqwefqwef ipsam.
        </p>
        <button id="order-btn">Order Now</button>
      </div>
    </>
  );
}

export default Slider;