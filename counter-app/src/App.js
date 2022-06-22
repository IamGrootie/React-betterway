import React from "react"



export default function App() {

    const [count, setCount] = React.useState(0)

    function addition() {
        setCount(prevCount => prevCount + 1)
    }

    function subtract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
        <div className="counter">
          <div className="counter--count">
                <h1>Your count number is: {count}</h1>
          </div>
          <div className="counter--main">
            <button 
              className="counter--buttons counter--subtration" 
              onClick={subtract}
            >–
            </button>
            
            <button 
              className="counter--buttons counter--addition" 
              onClick={addition}
            >+
            </button>
          </div>
            <button
              className="counter--reset"
              onClick={() => setCount(0)}
            >reset
            </button>
        </div>
    )
}