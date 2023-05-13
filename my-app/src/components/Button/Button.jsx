// export const Button = ({children, onClickHandler}) => {

export const Button = (props) => {
    return (
      <button id={props.id} type={props.type} onClick={props.qwer} className={props.style}>
        {props.children} 
      </button>
    );
  };