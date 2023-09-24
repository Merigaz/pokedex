
interface ButtonsProps {
    typeButton?: "button" | "submit" | "reset" | undefined
    handleClickButton: React.MouseEventHandler<HTMLElement>
    buttonClassName: string
    textButton?: string

}
function ButtonCustom ({typeButton,handleClickButton,buttonClassName,textButton}:ButtonsProps) {

    return ( 
    <>
    <button type={typeButton} onClick={handleClickButton} className={buttonClassName} >{textButton}
        
    </button>
    </>
    
    );
}

export default ButtonCustom ;