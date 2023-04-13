import './App.css'

function App() {
  const shoppingList = ["banana", "aveia", "açaí"]

  return (
    <div className="App">
     <h2>{'Lista de Compras'.toUpperCase()}</h2>
     <ul>
     {/* {shoppingList.map(item => <li><p>{item}</p></li>)} */}
     {shoppingList.map(item => <ShoppingListItem key={item} item={item} />)}
     </ul>
    </div>
  )
}

function ShoppingListItem(props) {
  return <li><p>{props.item}</p></li>
}

export { App }
