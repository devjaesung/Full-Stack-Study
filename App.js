import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]); //초기값을 빈 배열로 줘서 undefiend되지 않게 처리
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers?limit=10")
    .then(response => response.json())
    .then((json) => {
      setCoins(json);
      setLoading(false);
    });
  },[]) //useEffect 두번째 인자에 []빈 배열을 넣으면 한 번만 실행됨

  //money
  const [money, setMoney] = useState(0);
  const onChange = (event) => {
    setMoney(event.target.value);
  }
  //coinValue
  const [coinValue, setCoinValue] = useState(0);
  const changeCoin = (event) => {
    setCoinValue(event.target.value);
    console.log(event.target.value);
  }

  return <div>
    <h1>The Coins! ({coins.length})</h1>
    {loading ? <strong>Loading...</strong> : null}
    <form>
      <label htmlFor="money">How much do you have? $</label>
      <input type="number" placeholder='Input your money' id="money" value={money} onChange={onChange}></input>
    </form>
    
    <select onChange={changeCoin}>
      {coins.map((coin,index) => 
      <option key={index} value={coin.quotes.USD.price}>
        {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
      </option>)}
    </select>
    <h3>You can buy {Math.floor(money/coinValue)}</h3>

  </div>;
}

export default App;
