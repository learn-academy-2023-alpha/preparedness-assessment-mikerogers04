import React, { useState } from "react"
import { Button, Input, Label} from "reactstrap"
import ModalComponent from "./components/ModalComponent"
import "./App.css"

const App = () => {
  //Set useState variable and set method for modal
  const [modal, setModal] = useState(false)

  //Set useState variable for user input from input box. Default is set to empty string
  const [userInput, setUserInput] = useState("")

  //Function to toggle the modal on when "Click Me" button is pressed
  const toggle = () => setModal(!modal)

  //Function to handle capturing the characters the user inputs
  const handleChange = (e) => {
    //Updating useState to the user input, using dot notation to extract input
    setUserInput(e.target.value)
  }

  //Function to handle reset button
  const reset = () => {
    setUserInput("")
  }

  return (
    <>
    <div className="background-image">
      <h1>Preparedness Assessment</h1>
      <div className="form">
          <div className="input-label">
            <Label for="name">Enter your name</Label>
          </div>
          <div className="input">
            {/* Passing attributes of onChange to trigger handleChange function and value to store the user input */}
            <Input type="text" onChange={handleChange} value={userInput}/>
          </div>
          <div className="buttons" style={{color: "white"}}>
            <Button className="button1" style={{ backgroundColor: "#0dcaf0"}} onClick={toggle}>Click Me</Button>
            <Button className="button2" style={{ backgroundColor: "#0dcaf0"}} onClick={reset}>Reset</Button>
          </div>
          <ModalComponent modal={modal} toggle={toggle} userInput={userInput}/>
      </div>
    </div>
    </>
  )
}

export default App
