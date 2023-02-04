import React, { useState ,useEffect, useContext} from 'react'
import { Link } from 'react-router-dom';
import './css/main.css'
import { userContext } from '../App';
function Main() {
  const mycontext = useContext(userContext);
  const [data, setData] = useState([]);
  const [searchData, setSearchData] = useState("");
  const api = `https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR`;
  async function getData() {
    let response = await fetch(api);
    let data = await response.json();
    data.coins.forEach((e) => {
      e.isfav = false;
    });

    mycontext.setCentralData(data.coins);
    setData(data.coins);
  }
  useEffect(() => {
    getData();
  },[]);

  function setInput(e) {
    setSearchData(e.target.value);
  }
  function addFav(e) {
    let id = e.id;

    let sdata = {};
    let udata = data.filter((e) => {
      if (e.id === id) {
        sdata = e;
        sdata.isfav = !sdata.isfav;
      }
      return e.id !== id;
    });

    if (sdata.isfav) {
      udata.unshift(sdata);
      setData(udata);
    } else {
      let firstFalseIndex = -1;
      for (let i = 0; i < udata.length; i++) {
        if (!udata[i].isfav) {
          firstFalseIndex = i;
          break;
        }
      }
      udata.splice(firstFalseIndex, 0, sdata);
      setData(udata);
    }
  }

  return (
    <div id="container" width="100%" overFlowX="scroll">
      <h2 style={{ textAlign: "center" }}>ALL Cryptocurrencies</h2>
      <input
        style={{ marginBottom: "10px" }}
        placeholder="Search Crypto"
        onChange={setInput}
        value={searchData}
      ></input>
      <table
        style={{
          overFlow: "auto",
          borderCollapse: "collapse",
          width: "100%",
          padding: "20px",
        }}
      >
        <thead>
          <tr>
            <th style={{ textAlign: "center", height: "30px" }}>Rank</th>
            <th>Name</th>
            <th>Symbol</th>
            <th>Market Cap</th>
            <th>Price</th>
            <th>volume</th>

            <th>PriceChange1d</th>
            <th>PriceChange1w</th>
            <th>PriceChange1w</th>

            <th>Fav</th>
          </tr>
        </thead>
        <tbody>
          {data
            .filter((e) => {
              return e.name.toLowerCase().includes(searchData.toLowerCase());
            })
            .map((e, index) => {
              return (
                <tr key={e.id}>
                  <td>{e.rank}</td>
                  <td title={`price  :${e.price}`}>
                    <img
                      style={{ width: "13px", height: "14px" }}
                      src={e.icon}
                      alt="imagetag"
                    ></img>
                    {e.name}
                  </td>
                  <td>
                    <Link to={`/details/${e.id}`}>{e.symbol}</Link>
                  </td>
                  <td>{e.marketCap}</td>
                  <td>{e.price.toFixed(2)}</td>
                  <td>{e.volume.toFixed(2)}</td>
                  <td>{e.priceChange1h.toFixed(2)}</td>
                  <td>{e.priceChange1d.toFixed(2)}</td>
                  <td>{e.priceChange1w}</td>

                  <td>
                    <button
                      style={
                        e.isfav
                          ? { backgroundColor: "yellow" , borderRadius:"15px 15px 15px 15px"}
                          : { backgroundColor: "grey" , borderRadius:"15px 15px 15px 15px"}
                      }
                      onClick={() => {
                        addFav(e);
                      }}
                    >
                      add fav
                    </button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Main;