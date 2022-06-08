import React, {useState} from 'react'
import ExperienceInput from '../ExperienceInput/ExperienceInput'
import ContactInput from '../ContactInput/ContactInput'
import EducationInput from '../EducationInput/EducationInput'
import SkillsInput from '../SkillsInput/SkillsInput'
import './InputController.css'

export default function InputController({section, maxInputs, type}) {

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
                        <SkillsInput/>
                    )
                })
            }
            
            {
                numberOfInputs.length < maxInputs-1 && <button onClick={addNewInput}>+</button>
            }
            
        </div>
    </div>
  )
}
