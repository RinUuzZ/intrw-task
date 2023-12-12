import './App.css';

function App() {
  return (
    <div className="main">
      <div className="navbar">
        <div className="img"></div>
        <div className="date">
          <h2>11.24 <span>Am</span></h2>
          <h4>Monday</h4>
          <h5>27 MAY 2023</h5>
        </div>
      </div>

      <div className="container">
        <h6>SPOT RATE</h6>
      </div>
      <div className="head">
        <div className="h-six">
          <h6>Commodity</h6>
          <h6>Weight</h6>
          <h6>Buy <sub>AED</sub></h6>
          <h6>Sell <sub>AED</sub></h6>
        </div>
      </div>

      <div className="box">
        <h3 className='gold'>GOLD</h3>
        <div className="buy-sell">
          <div className="buy"><p>$</p><h3>BUYoz</h3></div>
          <div className="sell"><p>$</p><h3>SELLoz</h3></div>
        </div>

        <div className="dets">
          <div className="red">1800.13</div>
          <div className="green">1800.13</div>
        </div>

        <div className="low-high">
          <div className="low">Low</div>
          <div className="nmbrs">1813.06</div>
          <div className="high">High</div>
          <div className="nmbrs-1">1813.06</div>
        </div>

        <h3 className='gold'>SILVER</h3>
        <div className="buy-sell">
          <div className="buy"><p>$</p><h3>BUYoz</h3></div>
          <div className="sell"><p>$</p><h3>SELLoz</h3></div>
        </div>

        <div className="dets">
          <div className="red">1800.13</div>
          <div className="green">1800.13</div>
        </div>

        <div className="low-high">
          <div className="low">Low</div>
          <div className="nmbrs">1813.06</div>
          <div className="high">High</div>
          <div className="nmbrs-1">1813.06</div>
        </div>

      </div>

      <div className="deatail-section">
          <div className="contents">
            <h1>GOLD</h1>
            <h1>1GM</h1>
            <h1>217.04</h1>
            <h1>217.04</h1>

          </div>
          <div className="contents-1">
          <h1>GOLD TEN TOLA</h1>
            <h1>TTB</h1>
            <h1>25,330</h1>
            <h1>25,330</h1>
          </div>
          <div className="contents-2">
          <h1>GOLD 995</h1>
            <h1>1KG</h1>
            <h1>2,17,331</h1>
            <h1>2,17,331</h1>
          </div>
          <div className="contents-3">
          <h1>GOLD 9999</h1>
            <h1>1KG</h1>
            <h1>2,17,331</h1>
            <h1>2,17,331</h1>
          </div>
          <div className="contents-4">
          <h1>SILVER</h1>
            <h1>1KG</h1>
            <h1>2,17,331</h1>
            <h1>2,17,331</h1>
          </div>

      </div>

           <div className="bottom">Updates</div>
            <div className="bottom-last">
            st Gold News, Gold rate, Gold price in India, Go Know the latest Gold News, Gold rate, Gold price
              </div>
           


    </div>

    

  );
}

export default App;
