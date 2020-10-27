import { type } from 'os';
import React, { useEffect } from 'react';
import { Difficulty, fetchQuestions } from './Api';
import QuestionCard from './Components/QuestionCard/QuestionCard';

function App() {
	useEffect(() => {
		fetchQuestions(10, Difficulty.EASY)
			.then((res) => console.log(res))
			.catch((e) => console.log(e));

		return () => {};
	}, []);
	return (
		<div className='App'>
			<QuestionCard
				question={
					'what is your name what is your name  what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name what is your name '
				}
				answers={['saad', 'saad', 'saad', 'saad', 'saad']}
				questionNr={1}
				userAnswer={['saad']}
				callback={() => console.log('cb of card')}
				totalQuestions={5}
			/>
		</div>
	);
}

export default App;
