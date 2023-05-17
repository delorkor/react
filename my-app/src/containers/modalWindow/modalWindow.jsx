import { Button } from "../../components/Button/Button"
import { InputText } from "../../components/InputText/InputText"
import styles from "./modalWindow.module.scss"
export const ModalWindow=({valueEdit,modalActivFunction,modalActiv,dataVal,valueData,valueDescription,valueTitle,valueFunctionDescr})=>{

const listUpdate=(e)=>{
    e.preventDefault();
  console.log(dataVal)
//   console.log(dataVal.title)
valueEdit.title=valueTitle
valueEdit.description=valueDescription
    
      valueData('')
    valueFunctionDescr('')
  modalActivFunction(false)

 


}


    return(
        <div className={(modalActiv)?styles.modalWindow_activ:styles.modalWindow}>
            <div className={styles.modal}>
<InputText value={valueTitle} onChangeHandler={e=>{valueData(e.target.value)}}/>
<InputText value={valueDescription} onChangeHandler={e=>{valueFunctionDescr(e.target.value)}}/>
<Button qwer={listUpdate}>update</Button>
</div>
        </div>
    )
}