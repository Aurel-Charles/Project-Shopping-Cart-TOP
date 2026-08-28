import style from "./Button.module.css"

export default function Button({label, onClick, disabled=false , variant} ) {
    return (
        <button className={`${style.button} ${style[variant]}`}  onClick={onClick} disabled={disabled}>{label}</button>
    )
}