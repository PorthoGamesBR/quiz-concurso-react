import styles from "./Answer.module.css"

function Answer({customStyle, answer, onSelected, index, selectable}) {

    return (
        <li
        onClick={selectable ? () => {return false;} : () => onSelected(answer, index)}
        key={answer}
        className={`
        ${styles.answer_button} ${styles[customStyle]}            
        `}
        >
            {answer}
        </li>
    )
}

export default Answer