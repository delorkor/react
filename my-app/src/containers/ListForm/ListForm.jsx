
import { InputText } from "../../components/InputText/InputText";
import { Button } from "../../components/Button/Button";
import styles from "./ListForm.module.scss"
export const ListForm =({dataVal,ValueFunction,data})=>{
// console.log(title,description);
const delValue=(e)=>{
console.log(e.target.id)
let delValueData=data.filter(item=>item.id!=e.target.id)
ValueFunction('')
ValueFunction(delValueData)
}
    return (
<div className={styles.list_Form}>

<h2>Title:{dataVal.title}</h2>
<h2>Description:{dataVal.description}</h2>
<div className={styles.buttons}>
<Button style={styles.but}>Edit</Button>
<Button id={dataVal.id} qwer={delValue} style={styles.but}>Delete</Button>
</div>
</div>
    );

}