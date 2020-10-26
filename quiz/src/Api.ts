import { shuffleArray } from './utils/index';

export type Question = {
   category: string;
   correct_answer: string;
   difficulty: string;
   incorrect_answers: string[];
   question: string;
   type: string;
 };
export enum Difficulty {
   EASY = "easy",
   MEDIUM = "medium",
   HARD = "hard",
 }
 interface returnedData{
   response_code:number,
   results:Question[]
 }
 export type QuestionsState = Question & { answers: string[] };
export const fetchQuestions= async(amount:number,difficulty:Difficulty):Promise<QuestionsState[]> => {
   const BASE_URL=`https://opentdb.com/api.php?amount=${amount}&difficulty=${difficulty}&type=multiple`;
   const data:returnedData=await(await fetch(BASE_URL)).json()
   return data?.results.map((question: Question)=>({
      ...question,
      answers: shuffleArray<string>([...question.incorrect_answers, question.correct_answer])
   }))
}