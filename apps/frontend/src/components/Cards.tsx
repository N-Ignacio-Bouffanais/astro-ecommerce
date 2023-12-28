import Card from "./Card.tsx"
import axios from "../libs/axios"

type Data={
  id:string
  product: string
}

const Cards = () => {
  const getCards = async () => {
    const res = await axios.get(`all_cards`)
    const data = await res.data
    console.log(data)
    return data
  }


  return (
    <>
      <div>
        
      </div>
    </>
  );
}

export default Cards