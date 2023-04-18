import { useState } from "react"

function SumOne() {
  // let sum = 0
  const [sum, setSum] = useState(0)

  function handleSum() {
    // sum = sum + 1
    // setSum(sum + 1)
    setSum((prev) => {
      const result = prev + 1
      return result
    })
  }


  return (
    <div>
      <p>{sum}</p>
      <button onClick={handleSum}>soma 1 ao total</button>
    </div>
  )
}

export default SumOne