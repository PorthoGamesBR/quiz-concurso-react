import quiz from "../data/Quizdata"
import { useState } from "react"
import './quiz.css'
import Question from "./questions/Question"

const Quiz = () => {
    const [activeQuestion, setActiveQuestion] = useState(0)
    const [selectedAnswer, setSelectedAnswer] = useState('')
    const [showResult, setShowResult] = useState(false)
    const [showCorrection, setShowCorrection] = useState(false)
    const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null)
    const [result, setResult] = useState({
      score: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
    })
  
    const { questions, topic, perQuestionScore, totalQuestions } = quiz
    const { correctAnswer } = questions[activeQuestion]
  
    const onClickNext = () => {
      setSelectedAnswerIndex(null)
      setResult((prev) =>
        selectedAnswer
          ? {
              ...prev,
              score: prev.score + perQuestionScore,
              correctAnswers: prev.correctAnswers + 1,
            }
          : { ...prev, wrongAnswers: prev.wrongAnswers + 1 }
      )
      if (activeQuestion !== questions.length - 1) {
        setActiveQuestion((prev) => prev + 1)
      } else {
        setActiveQuestion(0)
        setShowResult(true)
      }
    }
  
    const onAnswerSelected = (answer, index) => {
      setSelectedAnswerIndex(index)
      if (answer === correctAnswer) {
        setSelectedAnswer(true)
      } else {
        setSelectedAnswer(false)
      }
    }
  
    const addLeadingZero = (number) => (number > 9 ? number : `0${number}`)
  
    return (
      <div className="quiz-container">
        {!showResult ? (
          <div>

            <div> 
                {topic}
            </div>

            <div>
              <span className="active-question-no">
                {addLeadingZero(activeQuestion + 1)}
              </span>
              <span className="total-question">
                /{addLeadingZero(totalQuestions)}
              </span>
            </div>

            <Question
            questionData={questions[activeQuestion]}
            onAnswerSelected={onAnswerSelected}
            selectedAnswerIndex={selectedAnswerIndex}
            onClickNext={onClickNext}
            />

          </div>
        ) : (
          <div className="result">
            <h3>Result</h3>
            <p>
              Total Question: <span>{totalQuestions}</span>
            </p>
            <p>
              Total Score:<span> {result.score}</span>
            </p>
            <p>
              Correct Answers:<span> {result.correctAnswers}</span>
            </p>
            <p>
              Wrong Answers:<span> {result.wrongAnswers}</span>
            </p>
                        
            {!showCorrection ? <button onClick={() => setShowCorrection(!showCorrection)}>Show Correction</button> 
            : (
                <div>
                    <h1>Correction</h1>
                    <Question
                questionData={questions[0]}
                onAnswerSelected={onAnswerSelected}
                answerData={{rightAnswer:'stringify()', wrongAnswer:'parse()'}}
                />
                </div>
            )}

          </div>
        )}
      </div>
    )
  }
  
  export default Quiz