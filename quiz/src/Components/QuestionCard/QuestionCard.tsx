import React from 'react';
import './QuestionCard.css';
interface Props {
	question: string;
	answers: string[];
	callback?: () => void;
	correctAnswer: string;
	questionNr: number;
	totalQuestions: number;
	onNextPressed: () => void;
}

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	correctAnswer,
	questionNr,
	totalQuestions,
	onNextPressed,
}) => {
	const onAnswerClick = (answer: string) => {
		console.log(answer);
	};

	return (
		<div className={'Question_Card_Container'}>
			<div className='question_container'>
				<p className='question_paragraph'>{`${questionNr} - ${question}`}</p>
			</div>

			<div className='answer_container'>
				{answers.map((answer, index) => (
					<button
						className='answer_item'
						key={index}
						onClick={() => onAnswerClick(answer)}
					>
						<p className='answer'>{`${index + 1}. ${answer}`}</p>
					</button>
				))}
			</div>

			<div className='controllers_container'>
				<p>{`${questionNr} / ${totalQuestions}`}</p>
				{questionNr !== totalQuestions && (
					<button className='next_button' onClick={onNextPressed}>
						next
					</button>
				)}
			</div>
		</div>
	);
};

export default QuestionCard;
