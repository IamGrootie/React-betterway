import { useNavigate } from "react-router-dom";
export default function  OrderSummary () {
  const navigate = useNavigate();
  return (
    <div> 
      <h1>Order confirmed</h1>
      <button onClick={()=>navigate('/')}>Return</button>  
    </div>
  )
}
