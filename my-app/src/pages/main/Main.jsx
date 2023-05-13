import { useState } from "react";
import { ListForm } from "../../containers/ListForm/ListForm";
import { InputForm } from "../../containers/InputForm/InputForm";
import styles from "./Main.module.scss";
export const Main = () => {

const [data, ValueFunction]= useState([])


 

  return (
    <>
      <div>
       
<InputForm 
 ValueFunction={ValueFunction}
 data={data}
 />
<div className={styles.Wrapper}>
 {

data.map(val=>{
 return <ListForm key={val.id} dataVal={val} ValueFunction={ValueFunction}  data={data} />
 }
  ) 
} 


</div >
      </div>

    </>
  );
};