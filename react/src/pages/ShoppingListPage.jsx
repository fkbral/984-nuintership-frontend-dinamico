import { ShoppingListItem } from "../components/ShoppingListItem"

function ShoppingListPage() {
  const shoppingList = ["banana", "aveia", "açaí"]

  function handlePrintShoppingList() {
    const items = shoppingList.join(',')
    const message = `Você precisa comprar ${items}`
    toast.success(message)
    // alert(message)
  }

  return (
    <div className="App">
     <h2>{'Lista de Compras'.toUpperCase()}</h2>
     <ul>
     {/* {shoppingList.map(item => <li><p>{item}</p></li>)} */}
     {shoppingList.map(item => <ShoppingListItem key={item} item={item} />)}
     </ul>

     <button onClick={handlePrintShoppingList}>Imprimir Lista</button>
    </div>
  )
}

export default ShoppingListPage