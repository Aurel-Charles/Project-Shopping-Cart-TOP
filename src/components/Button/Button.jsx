import style from "./Button.module.css"

export default function Button({label, onClick, disabled=false , variant=null, isActive=false} ) {
    return (
        <button className={`${style.button} ${style[variant]} ${isActive ? style.active : ''}`}  onClick={onClick} disabled={disabled}>{label}</button>
    )
}