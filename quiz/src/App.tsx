import React, { useEffect, useState } from 'react';
import { Difficulty, fetchQuestions, Question } from './Api';
import QuestionCard from './Components/QuestionCard/QuestionCard';
import './App.css';
function App() {
	const [loading, setloading] = useState<boolean>(false);
	const [showStartQuizButton, setshowStartQuizButton] = useState<boolean>(
		true
	);
	const [questions, setquestions] = useState<Question[]>([]);
	const [selectedQuestionIndex, setselectedQuestionIndex] = useState<number>(
		0
	);

	useEffect(() => {
		return () => {};
	}, []);
	const onStartQuizPressed = () => {
		setshowStartQuizButton(false);
		setloading(true);
		fetchQuestions(10, Difficulty.EASY)
			.then((res) => {
				setquestions(res);
				setloading(false);
			})
			.catch((e) => {
				setloading(false);
				console.log(e);
			});
	};
	const onNextPressed = () => {
		setselectedQuestionIndex((prev) =>
			prev !== questions.length ? prev + 1 : 0
		);
	};

	return (
		<div className='App'>
			{showStartQuizButton && (
				<div className='loading_container'>
					<button
						onClick={onStartQuizPressed}
						className='start_quiz_button'
					>
						start Quiz
					</button>
				</div>
			)}
			{loading && (
				<div className='loading_container'>
					<p className='loading_text'>loading..</p>
				</div>
			)}
			{questions.length && (
				<QuestionCard
					question={questions[selectedQuestionIndex].question}
					answers={questions[selectedQuestionIndex].answers}
					questionNr={selectedQuestionIndex + 1}
					correctAnswer={questions[selectedQuestionIndex].correct_answer}
					onNextPressed={onNextPressed}
					totalQuestions={questions.length}
				/>
			)}
		</div>
	);
}

export default App;
