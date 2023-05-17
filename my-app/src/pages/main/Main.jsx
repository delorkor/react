import { useState } from "react";
import { ListForm } from "../../containers/ListForm/ListForm";
import { InputForm } from "../../containers/InputForm/InputForm";
import styles from "./Main.module.scss";
import { ModalWindow } from "../../containers/modalWindow/modalWindow";
export const Main = () => {

const [data, valueFunction]= useState([])
const[modalActiv,modalActivFunction]=useState(false)
const [valueTitle , valueData]= useState('')
const [valueDescription, valueFunctionDescr]= useState('')
const [valueEdit, valueFunctionEdit]= useState('')

  return (
    <>
      <div>
      

        


<InputForm 
valueTitle={valueTitle}
valueData={valueData}
valueDescription={valueDescription}
 valueFunction={valueFunction}
 data={data}
 valueFunctionDescr={valueFunctionDescr}
 />
<div className={styles.Wrapper}>
 {

data.map(val=>{
 return  <ListForm
 valueEdit={valueEdit}
 valueFunctionEdit={valueFunctionEdit} 
 key={val.id}
  dataVal={val}
   valueFunction={valueFunction} 
   modalActivFunction={modalActivFunction}
     data={data}
     modalActiv={modalActiv}
     valueData={valueData}
     valueDescription={valueDescription}
     valueTitle={valueTitle}
      valueFunctionDescr={valueFunctionDescr}
     />
 }
  ) 
} 


</div >
      </div>

    </>
  );
};