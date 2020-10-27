import { type } from 'os';
import React,{useEffect} from 'react';
import { Difficulty, fetchQuestions } from './Api';
import QuestionCard from './Components/QuestionCard';

function App() {
  useEffect(() => {
  fetchQuestions(10,Difficulty.EASY).then(res=>console.log(res)
  ).catch(e=>console.log(e)
  )

    return () => {
      
    }
  }, [])
  return (
    <div className="App">
      {/* <QuestionCard/> */}
    </div>
  );
}

export default App;
