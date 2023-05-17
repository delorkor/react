import { useState } from "react";
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";
import styles from "./InputForm.module.scss"



 
 export const InputForm=({valueFunction,valueTitle,valueData,valueDescription,valueFunctionDescr})=>{


const setText=(e)=>{
    e.preventDefault();
    valueFunction(prev=>[...prev ,{
    id:prev.length+1,
    title:valueTitle,
    description:valueDescription
    }]
  
    )
    valueData('');
    valueFunctionDescr('')
   
}

    return(<div className={styles.Input_form}>
<InputText placeholder="title" onChangeHandler={e=>{valueData(e.target.value)}} value={valueTitle}/>
<InputText placeholder="description" onChangeHandler={e=>{valueFunctionDescr(e.target.value)}} value={valueDescription}/>
<Button qwer={setText}>Submit</Button>



    </div>)
}