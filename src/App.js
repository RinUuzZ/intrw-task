import './App.css';
import goldImage from '../src/assetss/goldimage.png'

function App() {
  return (
    <div className="main">
        <div className="navBar">
           <div className="first-image">
            <img src={goldImage} alt="" />
           </div>
              <div className="date-and-time">
                <h5 className='time'>11.24 AM</h5>
                <h6 className='day'>Monday</h6>
                <h5 className='date'>27 MAY 2023</h5>
              </div>
        </div>
        <div className="second-div">
          <div className="spotRate">
            <h2>SPOT RATE</h2>
          </div>
          <div className="cwbs">
            <h2>Commodity</h2>
            <h2>Weight</h2>
            <h2>Buy </h2><sub>AED</sub>
            <h2>Sell </h2><sub>SED</sub>
          </div>
        </div>

          <div className="gd-slvr-box">
            <div className="main-box">
              <div className="gold">
              <h2>GOLD</h2>
              </div>
              <div className="buy-sell">
                <div className="buy">
                  <div className="box">$</div>
                  <div className="text">BUY</div>
                  <div className="oz">oz</div>
                </div>
                <div className="sell">
                <div className="box">$</div>
                  <div className="text">BUY</div>
                  <div className="oz">oz</div>
                </div>
              </div>

                  <div className="rates">
                    <div className="red">
                      <h2>1800.13</h2>
                    </div>
                    <div className="green">
                      <h2>1800.13</h2>
                    </div>
                  </div>

                  <div className="high-low">
                    <div className="low">
                      <h4>Low</h4>
                      <h3> 1813.06</h3>
                    </div>
                    <div className="high">
                      <h4>High</h4>
                      <h3>1813.06</h3>
                    </div>
                  </div>

                    <div className="silver">
              <h2>SILVER</h2>
              </div>
              <div className="buy-selll">
                <div className="buy">
                  <div className="box">$</div>
                  <div className="text">BUY</div>
                  <div className="oz">oz</div>
                </div>
                <div className="sell">
                <div className="box">$</div>
                  <div className="text">BUY</div>
                  <div className="oz">oz</div>
              </div>
                    </div>

                    <div className="rates">
                    <div className="red">
                      <h2>1800.13</h2>
                    </div>
                    <div className="green">
                      <h2>1800.13</h2>
                    </div>
                  </div>

                  <div className="high-low">
                    <div className="low">
                      <h4>Low</h4>
                      <h3> 1813.06</h3>
                    </div>
                    <div className="high">
                      <h4>High</h4>
                      <h3>1813.06</h3>
                    </div>
                  </div>

            </div>

            <div className="boxes">
              <div className="first-box">
                <h1>GOLD</h1>
                <h1>1GM</h1>
                <h1>217.04</h1>
                <h1>217.04</h1>
              </div>
                <div className="second-box">
                  <h1>GOLD </h1><h2>TEN TOLA </h2>
                  <h1 className='ttb'>TTB</h1>
                  <h1>25,330</h1>
                  <h1>25,330</h1>
                </div>
                   <div className="third-box">
                    <h1>GOLD</h1> <h2>995</h2>
                    <h1>1KG</h1>
                    <h1>2,17,331</h1>
                    <h1>2,17,331</h1>
                   </div>
                      <div className="fourth-box">
                        <h1>GOLD</h1><h2>9999</h2>
                        <h1>1KG</h1>
                        <h1>2,17,331</h1>
                        <h1>2,17,331</h1>
                      </div>
                         <div className="fifth-box">
                              <h1>SILVER</h1>
                              <h1>1KG</h1>
                              <h1>2,17,331</h1>
                              <h1>2,17,331</h1>
                          </div>              
            </div>

          </div>

          <div className="line-head">
            <div className="heads">
            <h1 className="buyyers">BUYERS</h1>
            <h1 className="mesurs">-0.270%</h1>
            <h1 className="sellers">SELLERS</h1>
            </div>
          </div>

          <div className="line">
            <div className="green-line"></div>
            <div className="red-line"></div>
          </div>

          <div className="botom">
            <div className="frst-prc">62%</div>
            <div className="scnd-prct">38%</div>
          </div>

          <div className="updates">
            <div className="update-text">
              <h1>Updates</h1>
            </div>
            <div className="main-text">
              <h1>st Gold News, Gold rate, Gold price in India, Go Know the latest Gold News, Gold rate, Gold price </h1>
            </div>
          </div>

    </div>

    

  );
}

export default App;
