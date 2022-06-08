import React, {useState} from 'react'
import './Input.css'

export default function Input({section, maxInputs}) {

    const [numberOfInputs, setNumberOfInputs] = useState([])

    const addNewInput = () => {
        if(numberOfInputs.length < maxInputs && numberOfInputs.length > 0){
            let prevState = numberOfInputs
            setNumberOfInputs(
                [...prevState, prevState[prevState.length + 1]+1]
            )
        }
        else{
            setNumberOfInputs([1])
        }
    }

  return (
    <div>
        <div>
            <label htmlFor={section}> {section}: </label>
            <br />
            {
                numberOfInputs.length > 0 &&
                numberOfInputs.map(el =>{
                    return(
                        <input type="text" id={section} key={el}/>
                    )
                })
            }
            <input key="x" type="text" id={section}/>
            {
                maxInputs > 0 && <button onClick={addNewInput}>+</button>
            }
            
        </div>
    </div>
  )
}
