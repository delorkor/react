import { useState } from "react";
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";
import styles from "./InputForm.module.scss"



export const InputForm=({ValueFunction})=>{

const [ValueTitle , ValueData]= useState('')
const [ValueDescription, ValueFunctionDescr]= useState('')
const setText=(e)=>{
    e.preventDefault();
    ValueFunction(prev=>[...prev ,{
    id:prev.length+1,
    title:ValueTitle,
    description:ValueDescription
    }]
  
    )
    // ValueData('');
    // ValueFunctionDescr('')
    // console.log(data)
}

    return(<div className={styles.Input_form}>
<InputText placeholder="title" onChangeHandler={e=>{ValueData(e.target.value)}} value={ValueTitle}/>
<InputText placeholder="description" onChangeHandler={e=>{ValueFunctionDescr(e.target.value)}} value={ValueDescription}/>
<Button qwer={setText}>Submit</Button>



    </div>)
}