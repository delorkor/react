
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";
import { ModalWindow } from "../modalWindow/modalWindow";
import styles from "./ListForm.module.scss"
export const ListForm =({dataVal,valueFunction,data,modalActivFunction,modalActiv,valueFunctionEdit,
valueFunctionDescr,valueTitle,valueDescription,valueData,valueEdit
})=>{
// console.log(title,description);
const delValue=(e)=>{
console.log(e.target.id)

let delValueData=data.filter(item=>item.id!=e.target.id)
valueFunction('')
valueFunction(delValueData)
}

const modalActivEdit=(e)=>{
e.preventDefault()
modalActivFunction(!modalActiv)
console.log(dataVal)
valueFunctionEdit(dataVal)
}

    return (
<div className={styles.list_Form}>
<ModalWindow 
valueEdit={valueEdit}
modalActivFunction={modalActivFunction}
 modalActiv={modalActiv} 
 valueData={valueData}
     valueDescription={valueDescription}
     valueTitle={valueTitle}
      valueFunctionDescr={valueFunctionDescr}
      dataVal={dataVal}
 />
      
<h2>Title:{dataVal.title}</h2>
<h2>Description:{dataVal.description}</h2>
<div className={styles.buttons}>
<Button qwer={modalActivEdit} style={styles.but}>Edit</Button>
<Button id={dataVal.id} qwer={delValue} style={styles.but}>Delete</Button>
</div>
</div>
    );

}