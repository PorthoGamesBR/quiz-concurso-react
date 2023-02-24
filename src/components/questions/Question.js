import Answer from "./Answer"
import styles from "./Question.module.css"

function Question({questionData, onAnswerSelected, selectedAnswerIndex, onClickNext, answerData}) {

    const {question, choices} = questionData
    const {rightAnswer, wrongAnswer} = answerData || {}

    const CustomClass = (index, answer) => {
      if (rightAnswer != null) {
        if (rightAnswer === answer)
        return "right_answer"
        if (wrongAnswer === answer)
        return "wrong_answer"
      } else
      {
        if (selectedAnswerIndex === index)
        return "selected_answer" 
      }       
    }


    return (
        <div>
            <h2>{question}</h2>

            <ul className={styles.answer_list}>

              {choices.map((answer, index) => (
                <Answer 
                onSelected={onAnswerSelected}
                answer={answer}
                customStyle={CustomClass(index, answer)}
                selectable={rightAnswer === null}
                index={index}
                />
              ))}

            </ul>
            
            {!rightAnswer && 
            <div className={styles.flex_right}>
              <button
                onClick={onClickNext}
                disabled={selectedAnswerIndex === null}>
                    Next
              </button>
            </div>
            }
            

        </div>
    )

}

export default Question