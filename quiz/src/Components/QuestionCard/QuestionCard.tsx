import React from 'react';
import './QuestionCard.css';
interface Props {
	question: string;
	answers: string[];
	callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
	userAnswer: any;
	questionNr: number;
	totalQuestions: number;
}

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNr,
	totalQuestions,
}) => {
	return (
		<div className={'Question_Card_Container'}>
			<div className='question_container'>
				<p className='question_paragraph'>{`${questionNr} - ${question}`}</p>
			</div>

			<div className='answer_container'>
				{answers.map((answer, index) => (
					<button className='answer_item' key={index}>
						<p className='answer'>{`${index + 1}. ${answer}`}</p>
					</button>
				))}
			</div>

			<div className='controllers_container'>
				<p>{`${questionNr} / ${totalQuestions}`}</p>
				<button className='next_button'>next</button>
			</div>
		</div>
	);
};

export default QuestionCard;
