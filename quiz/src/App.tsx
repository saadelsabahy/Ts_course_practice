import React, { useEffect, useState } from 'react';
import { Difficulty, fetchQuestions, Question } from './Api';
import QuestionCard from './Components/QuestionCard/QuestionCard';
import './App.css';
export type selectedAnswerIndexType = number | undefined;
function App() {
	const [loading, setloading] = useState<boolean>(false);
	const [showStartQuizButton, setshowStartQuizButton] = useState<boolean>(
		true
	);
	const [questions, setquestions] = useState<Question[]>([]);
	const [selectedQuestionIndex, setselectedQuestionIndex] = useState<number>(
		0
	);
	const [selectedAnswerIndex, setselectedAnswerIndex] = useState<
		selectedAnswerIndexType
	>(undefined);
	const [correctAnswerIndex, setcorrectAnswerIndex] = useState<
		selectedAnswerIndexType
	>(undefined);
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
	console.log(questions);

	const onNextPressed = () => {
		const correctAnswerIndex = questions[
			selectedQuestionIndex
		].answers.findIndex(
			(item) => item === questions[selectedQuestionIndex].correct_answer
		);
		setcorrectAnswerIndex(correctAnswerIndex);
		setTimeout(() => {
			setcorrectAnswerIndex(undefined);
			setselectedAnswerIndex(undefined);
			setselectedQuestionIndex((prev) =>
				prev !== questions.length ? prev + 1 : 0
			);
		}, 700);
	};
	const onSelectAnswer = (selectedIndex: selectedAnswerIndexType) => {
		setselectedAnswerIndex(selectedIndex);
		if (selectedQuestionIndex + 1 == questions.length) {
			const correctAnswerIndex = questions[
				selectedQuestionIndex
			].answers.findIndex(
				(item) => item === questions[selectedQuestionIndex].correct_answer
			);
			setcorrectAnswerIndex(correctAnswerIndex);
			setTimeout(() => {
				setquestions([]);
				setcorrectAnswerIndex(undefined);
				setselectedAnswerIndex(undefined);
				window.location.reload();
			}, 500);
			/* 	setcorrectAnswerIndex(undefined);
			setselectedAnswerIndex(undefined); */
		}
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
					onSelectAnswer={onSelectAnswer}
					selectedAnswerIndex={selectedAnswerIndex}
					correctAnswerIndex={correctAnswerIndex}
					inCorrectAnswers={
						questions[selectedQuestionIndex].incorrect_answers
					}
				/>
			)}
		</div>
	);
}

export default App;
