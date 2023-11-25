import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';


const cookie = new Cookies();
const Section1 = () => {

    let sectionScore = 0

    const[response, setResponse] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: ''

    })
    const question = ["1. 在過去的一周內，你有沒有被便秘所困擾? " ,"2. 在過去的一周內，您是否被腹瀉所困擾?" ,"3. 在過去的一周內，你的胃是否感到腹脹?" , "4. 在過去的一周內，你的是否感到消化不良?", "5. 您是否患有腸易激綜合症"]
    const choices = ["沒有", "輕微不適", "中度不適", "嚴重不適"]


const section1 = question.map((question, index) => {
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

        <h1 style={{"textAlign":"center"}}>GI</h1>
      {section1}

      <center><Link style={{"border":"1px solid black", "padding":"5px", "borderRadius": "5px", "textDecoration":"none", "backgroundColor":"black", "color":"white","fontSize":"20px"}} onClick={(e)=>{
        
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

        if(sectionScore === 0){
          alert("Please Complte the form")
          e.preventDefault();

        }else{
          cookie.set("section1Score", sectionScore);
          const summary = {
            [question[0]] : response['question1'],
            [question[1]] : response["question2"],
            [question[2]] : response["question3"],
            [question[3]] : response["question4"],
            [question[4]] : response["question5"],
          }
          cookie.set("section1QA", summary)
        }

      }} to="/sec2">Next</Link></center>
    </div>
  )
}
export default Section1;

