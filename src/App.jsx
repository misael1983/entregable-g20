
/*import { useState } from 'react'
import './App.css'
import QuoteBox from './components/QuoteBox'
import quotes from "./json/quotes.json"
import colors from "./json/colors.json"


function App() {
  
  
  const getRandomfromArray = arr => {
    const  indexRandom = Math.floor(arr.length * Math.random())
    return arr[indexRandom]
   }   
const [quoteRandom, setQuoteRandom] = useState(getRandomfromArray(quotes))
const [colorRandom, setColorRandom] = useState(getRandomfromArray(colors))


console.log(colorRandom);

const handleClick = () => {
  setQuoteRandom(getRandomFromArray(quotes))
  setColorRandom(getRandomfromArray(colors))
}
const objStyle ={
backgroundColor:colorRandom
}

return (
    <div className="App" style={objStyle}>
    <QuoteBox 
    quoteRandom={quoteRandom}
    handleClick={handleClick}
    colorRandom={colorRandom}
    />
    </div>
  )
}

export default App*/
import { useState } from "react"
import "./App.css"
import "./index.css"
import quotes from "./json/quotes.json"
import colors from "./json/colors.json"
import QuoteBox from "./components/QuoteBox"
 


function App() {

  //Variable que crea una funcion flecha que retorna una posicion random a partir de un array 
  const getRandomFromArray = (array) => {
    const indexRandom = Math.floor(array.length * Math.random())

    return array[indexRandom]
  }
  getRandomFromArray(quotes)
const [quoteRandom, setQuoteRandom] = useState(getRandomFromArray(quotes))
const [colorRandom, setColorRandom] = useState(getRandomFromArray(colors))
 const handleClick = () => {
  setQuoteRandom(getRandomFromArray(quotes))
  setColorRandom(getRandomFromArray(colors))
}
 const objStyle = {
   backgroundColor: colorRandom
 }
 return (
  <div className="App" style={objStyle}>
    <QuoteBox
      quoteRandom={quoteRandom}
      handleClick={handleClick}
      colorRandom={colorRandom}
    />
  
  </div>
)
}

export default App
