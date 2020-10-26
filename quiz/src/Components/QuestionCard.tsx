import React from 'react'

interface Props {
   question: string;
   answers: string[];
   callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
   userAnswer: any;
   questionNr: number;
   totalQuestions: number;
}

const QuestionCard:React.FC<Props> = ({}) => {
   return (
      <div>
         card
      </div>
   )
}

export default QuestionCard
