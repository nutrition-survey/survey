import React,{useState} from 'react'
import { Line } from 'react-chartjs-2';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookie = new Cookies
const Section2 = () => {

    let sectionScore = 0

    const[response, setResponse] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: ''

    })
    const question = ["1. 您是否有食物過敏(例如:雞蛋、花生、海鮮)嗎? " ,"2. 您是否有環境過敏(例如:花粉、麈蟎)嗎?" ,"3. 您是否患有濕疹?" , "4. 您是否患有鼻敏感或哮喘?", "5. 您是否經常皮膚紅腫痕癢"]
    const choices = ["沒有", "輕微不適", "中度不適", "嚴重不適"]


const section2 = question.map((question, index) => {
  const questionKey = `question${index + 1}`;

  return (
    <div style={{"marginTop": "20px"}}>
      <h3>{question}</h3>
      {choices.map((choice, choiceIndex) => (
        <div style={{"maegin":"10px"}}>
          
          <input
            type="radio"
            value={choice}
            name={questionKey}
            onChange={(e) =>
              setResponse((prevResponse) => ({
                ...prevResponse,
                [questionKey]: e.target.value,
              }))
            }
          style={{"marginRight":"5px"}} />

        <label htmlFor={choice} key={choiceIndex}>
            {choice}
          </label>
        </div>
      ))}
    </div>
  );
});

  return (
    <div style={{"margin" : "20px"}}>

        <h1 style={{"textAlign":"center"}}>Allergy</h1>
      {section2}

      <center><Link to="/sec3" style={{"padding" :"5px","border":"1px solid black", "padding":"5px", "borderRadius": "5px", "textDecoration":"none", "backgroundColor":"black", "color":"white","fontSize":"20px"}} onClick={(e)=>{

        for (let key in response) {
            if (response.hasOwnProperty(key)) {
              if(response[key] === "沒有"){
                sectionScore += 0
              }else if(response[key] === "輕微不適"){
                sectionScore += 1
              }else if(response[key] === "中度不適"){
                sectionScore += 2
              }else if(response[key] === "嚴重不適"){
                sectionScore += 3
              }
            }
          }

          


          for(let key in response){
            if(response[key] === ''){
              alert("Please Complete the form")
              e.preventDefault();
            }
          }
            cookie.set("section2Score", sectionScore);
            const summary = {
              [question[0]] : response['question1'],
              [question[1]] : response["question2"],
              [question[2]] : response["question3"],
              [question[3]] : response["question4"],
              [question[4]] : response["question5"],
            }
            cookie.set("section2QA", summary)



      }}>Submit</Link></center>
    </div>
  )
}

export default Section2;
