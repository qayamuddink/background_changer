 import {useState} from "react"

// function App() {
//   const [counter, setCounter] = useState(15)
//   // let counter = 15 ;

//   const addValue = () =>{
//     //counter = counter + 1 ;
//          //setCounter(counter + 1) //16
//     setCounter(prevCounter => prevCounter +1) 
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1)
//     setCounter(prevCounter => prevCounter + 1)
//   }

//   const removeValue = () =>{
//     setCounter(counter - 1)
//     setCounter(counter -1)
//   }

//   return (
//     <>
//      <button onClick={addValue}>add value{counter}</button> <br />
     
//      <button onClick={removeValue}>remove value {counter}</button>
//     </>
//   )
// }

// new project - background changer


function App() {


    const [color , setColor] = useState("olive")

    



    return (

        <>
       
        <div className="w-full h-screen duration-200"
            style ={{backgroundColor: color}} 
            >
                <div className="fixed flex flex-wrap justify-center
                bottom-12 inset-x-0 px-2 ">
                    <div className="flex flex-wrap justify-center 
                    gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
                        <button 
                         onClick={() => setColor("red")} 
                        className="outline-none px-4 py-1 rounded-full 
                        text-white shadow-lg" style={{backgroundColor : "red"}}>Red</button>

                        <button
                        onClick={() => setColor("green")}
                        className="outline-none px-4 py-1 rounded-full 
                        text-white shadow-lg" style={{backgroundColor : "green"}}>Green</button>

                        <button
                        onClick={() => setColor("blue")} 
                        className="outline-none px-4 py-1 rounded-full 
                        text-white shadow-lg" style={{backgroundColor : "blue"}}>Blue</button>
                        
                        <button
                        onClick={() => setColor("olive")} 
                        className="outline-none px-4 py-1 rounded-full 
                        text-white shadow-lg" style={{backgroundColor : "Olive"}}>Olive</button>

                        <button
                        onClick={() => setColor("grey")} 
                        className="outline-none px-4 py-1 rounded-full 
                        text-white shadow-lg" style={{backgroundColor : "Grey"}}>Grey</button>

                        <button
                        onClick={() => setColor("yellow")} 
                        className="outline-none px-4 py-1 rounded-full 
                        text-white shadow-lg" style={{backgroundColor : "Yellow"}}>Yellow</button>

                        <button
                        onClick={() => setColor("pink")} 
                        className="outline-none px-4 py-1 rounded-full 
                        text-white shadow-lg" style={{backgroundColor : "pink"}}>Pink</button>

                        <button
                        onClick={() => setColor("lavender")} 
                        className="outline-none px-4 py-1 rounded-full 
                        text-white shadow-lg" style={{backgroundColor : "lavender"}}>Lavender</button>

                        {/* <button
                        onClick={() => setColor("blue")} 
                        className="outline-none px-4 py-1 rounded-full 
                        text-white shadow-lg" style={{backgroundColor : "White"}}>White</button> */}

                        <button onClick={() => setColor("black")}
                        className="outline-none px-4 py-1 rounded-full text-white shadow-lg" 
                        style={{backgroundColor : "black"}}>Black</button>

                    </div>
                </div>
        </div>
        </>
    )
    
}


export default App
