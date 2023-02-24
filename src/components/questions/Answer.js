import styles from "./Answer.module.css"

function Answer({selected, answer, onSelected, index}) {

    return (
        <li
        onClick={() => onSelected(answer, index)}
        key={answer}
        className={ `
        ${styles.answer_button} 
        ${selected ? styles.selected_answer : null}`            
        }>
            {answer}
        </li>
    )
}

export default Answer