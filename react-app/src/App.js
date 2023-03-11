import { useState, useEffect } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [input, setInput] = useState("");
  const [converted, setConverted] = useState("");
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then(res => res.json())
      .then(json => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  const onChange = event => {
    setInput(() => event.target.value);
  };
  const onSelect = event => {
    const btc = coins.find(coin => coin.name === event.target.value);
    setConverted(prev => prev / btc);
  };
  return (
    <>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onSelect}>
          {coins.map(coin => (
            <option key={coin.id} value={coin.quotes.USD.price}>
              {coin.name} ({coin.symbol}): {coin.quotes.USD.price} USD
            </option>
          ))}
        </select>
      )}
      <hr />
      <div>
        <label htmlFor="coin">Coin</label>
        <input
          onChange={onChange}
          id="coin"
          type="number"
          value={input}
          placeholder="Input here..."
        />
        <strong> = {converted === "" ? null : converted} BTC</strong>
      </div>
    </>
  );
}

export default App;
