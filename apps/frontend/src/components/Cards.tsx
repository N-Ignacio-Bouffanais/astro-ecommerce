import Card from "./Card.astro"
import axios from "../libs/axios"
import { For, Match, Switch, createResource } from "solid-js"

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
  const [data] = createResource(getCards);


  return (
    <>
      <div>
        <Switch>
          <Match when={data.loading}>
            <p>Loading...</p>
          </Match>
          <Match when={data.error}>
            <p>Error: {data.error?.message}</p>
          </Match>
          <Match when={data != null}>
            <For each={data()}>{(card: Data) => <Card product={card.product}/>}</For>
          </Match>
        </Switch>
      </div>
    </>
  );
}

export default Cards