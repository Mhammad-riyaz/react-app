import data from "./data"
import Card from "./Card"
import Nav from "./Nav"
export default function App(){

  const cards = data.map(function(item){
    return <Card key = {item.country}  {...item} ></Card>
  })

  return(
    <div>
      <Nav />
      {cards}
    </div>
  )
}