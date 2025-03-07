import React, { useEffect, useState } from 'react';
import ProfitLossTable from './components/ProfitLossTable';
import { fetchProfitLossData } from './api/profitLoss';

function App() {
  const [data,setData] = useState([])
  useEffect(()=>{
    console.log("111111111")
    const fetchData = async() => {
      console.log("22222222222")
      const res = await fetchProfitLossData()
      setData(res)
    }

    fetchData()
  },[])
  console.log(data)
  return (
    <>
      {data&& data.length!==0&&
        <div className="bg-gray-100 p-6">
          <ProfitLossTable data={data} />
        </div>
      }
    </>
  );
}

export default App;