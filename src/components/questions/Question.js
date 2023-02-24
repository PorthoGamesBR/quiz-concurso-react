import Answer from "./Answer"
import styles from "./Question.module.css"

function Question({questionData, onAnswerSelected, selectedAnswerIndex, onClickNext}) {

    const {question, choices} = questionData

    return (
        <div>
            <h2>{question}</h2>

            <ul className={styles.answer_list}>

              {choices.map((answer, index) => (
                <Answer 
                onSelected={onAnswerSelected}
                answer={answer}
                selected={selectedAnswerIndex === index}
                index={index}
                />
              ))}

            </ul>

            <div className={styles.flex_right}>
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}>
                    Next
              </button>
            </div>

        </div>
    )

}

export default Question