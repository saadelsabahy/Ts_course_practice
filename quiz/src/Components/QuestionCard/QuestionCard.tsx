import React from 'react';
import { selectedAnswerIndexType } from '../../App';
import './QuestionCard.css';
interface Props {
	question: string;
	answers: string[];
	callback?: () => void;
	correctAnswer: string;
	questionNr: number;
	totalQuestions: number;
	onNextPressed: () => void;
	onSelectAnswer: (answerIndex: selectedAnswerIndexType) => void;
	selectedAnswerIndex: selectedAnswerIndexType;
	correctAnswerIndex: selectedAnswerIndexType;
	inCorrectAnswers: string[];
}

const QuestionCard: React.FC<Props> = ({
	question,
	answers,
	callback,
	correctAnswer,
	questionNr,
	totalQuestions,
	onNextPressed,
	onSelectAnswer,
	selectedAnswerIndex,
	correctAnswerIndex,
	inCorrectAnswers,
}) => {
	return (
		<div className={'Question_Card_Container'}>
			<div className='question_container'>
				<p className='question_paragraph'>{`${questionNr} - ${question}`}</p>
			</div>

			<div className='answer_container'>
				{answers.map((answer, index) => (
					<button
						className={
							correctAnswerIndex === index &&
							typeof correctAnswerIndex === 'number'
								? 'answer_item_correct'
								: correctAnswerIndex !== index &&
								  typeof correctAnswerIndex === 'number'
								? 'answer_item_wrong'
								: selectedAnswerIndex === index
								? 'selected_answer'
								: 'answer_item'
						}
						key={index}
						onClick={() => onSelectAnswer(index)}
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
