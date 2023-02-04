import React, { useState ,useEffect} from 'react'

function Main() {
    const [data,setData] = useState([]);
    const [searchData,setSearchData] = useState([]);
    const api = `https://api.coinstats.app/public/v1/coins?skip=0&limit=100&currency=INR`
    async function getData(){
        let response = await fetch(api);
        let data = await response.json();
        setData(data.coins);
        console.log(data);
    }
    useEffect(()=>{
        getData()
    },[])

    function addFav(id){
        let sdata ={};
           let udata = data.filter((e)=>{
            if(e.id===id){
                sdata=e;
            }
            return (e.id!=id)
           })
        udata.unshift(sdata)
           setData(udata)
    }

  return (
    
    <div style ={{textAlign:"center",overflow:"auto",padding:"20px"}}>
       
        <h2 style={{textAlign:"center"}}>ALL Cryptocurrencies</h2>
        <input style={{marginBottom:"10px"}} placeholder='Search Crypto'></input>
        <table  style={{overFlow:"auto", borderCollapse: "collapse",width:"100%",padding:"20px" }}>
        <thead>
        <tr>
        <th style={{textAlign:"center",height:"30px" }}>Rank</th>
        <th style={{textAlign:"center"}}>Name</th>
        <th style={{textAlign:"center" }}>Symbol</th>
        <th style={{ textAlign:"center"}}>Market Cap</th>
        <th style={{ textAlign:"center"}}>Price</th>
        <th style={{textAlign:"center" }} >priceChange1h</th>
        <th style={{ textAlign:"center"}} >priceChange1h</th>
        <th style={{textAlign:"center" }}>priceChange1d</th>
        <th style={{ textAlign:"center"}}>priceChange1w</th>
        <th style={{textAlign:"center" }}>priceChange1w</th>
        <th style={{ textAlign:"center"}}>priceChange1w</th>
        </tr>
        </thead>
        <tbody>
          {
            data.map((e,index)=>{
                return <tr key ={e.id}>
                    <td  style={{textAlign:"center",height:"60px", padding:"5px"}}>{e.rank}</td>
                    <td style={{ textAlign:"center", padding:"5px" }}><img style ={{width:"13px", height:"14px"}}src = {e.icon} alt ="image"></img>{e.name}</td>
                    <td style={{ textAlign:"center", padding:"5px" }}>{e.symbol}</td>
                    <td style={{ textAlign:"center" , padding:"5px"}}>{e.marketCap}</td>
                    <td style={{ textAlign:"center", padding:"5px"}} >{+e.price.toFixed(2)}</td>
                    <td  style={{ textAlign:"center", padding:"5px" }}>{+e.price.toFixed(2)}</td>
                    <td  style={{ textAlign:"center", padding:"5px" }}>{+e.price.toFixed(2)}</td>
                    <td style={{ textAlign:"center" , padding:"5px"}}>{+e.price.toFixed(2)}</td>
                    <td style={{ textAlign:"center", padding:"5px" }}>{e.priceChange1h}</td>
                    <td style={{ textAlign:"center" , padding:"5px"}}>{e.priceChange1d}</td>
                    <td style={{ textAlign:"center" , padding:"5px"}}>{e.priceChange1w}</td>
                    <td><button onClick={()=>{addFav(e.id)}}>add fav</button></td>
                </tr>
            })
          }
        </tbody>
       
        </table>
        
    </div>
  
  )
}

export default Main