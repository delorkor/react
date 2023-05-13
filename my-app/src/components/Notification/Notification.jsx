import { useState } from "react";
import styles from "./Notification.module.scss";
import { Button } from "../Button/Button"

export const Notification=(props)=>{
   const [color, setColor] = useState("");
   
   const colorBlock = (event) => {
   
      event.preventDefault();
      
      
    return setColor(event.target.textContent) 
       document.querySelector('#block').classList.add(color);
    };

   
   return(
   <div id={styles.block} className={color} >
   <Button style ={styles.but_darkred} qwer={colorBlock}>darkred</Button> 
   <Button style ={styles.but_blue} qwer={colorBlock}>alert</Button>
   <Button style ={styles.but_delete} qwer={colorBlock}>delete</Button>
   <Button style ={styles.but_green} qwer={colorBlock}>ок</Button>
   </div>
   ) 


}