import axios from "axios";

export const fetchProfitLossData = async() => {
    try{
        const res = await axios.get(`http://localhost:8000/quickbooks/profit-and-loss`)
        console.log(res.data)
        return res.data
        
    }catch(error){
        console.log(error)
    }
}
