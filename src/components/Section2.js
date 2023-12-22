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
    const question = ["1.\t您是否有食物過敏(例如:雞蛋、花生、海鮮)嗎?  Do you have food allergies (e.g. eggs, peanuts, seafood)?" ,"2.\t您是否有環境過敏(例如:花粉、麈蟎)嗎?  Do you have environmental allergies (e.g. pollen, mites)?" ,"3.\t您是否患有濕疹? Do you suffer from eczema?" , "4.\t您是否患有鼻敏感或哮喘? Do you suffer from nasal allergies or asthma?", "5.\t您是否經常皮膚紅腫痕癢? Do you often have red, swollen, itchy skin?"]
    const choices = ["沒有 No", "輕微 Slight", "中度 Moderate", "嚴重 Serious"]


const section2 = question.map((question, index) => {
  const questionKey = `question${index + 1}`;

  return (
    <div style={{"marginTop": "20px"}}>
      <h3>{question}</h3>
      {choices.map((choice, choiceIndex) => (
        <div style={{"margin":"10px"}}>
          
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
      <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>

          <div style={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(8.5px)"
          }}>
              <h2 style={{marginBottom: "0"}}>亞健康評估問卷</h2>
              <h3>Sub-health Assessment Questionnaire</h3>
          </div>


          <div style={{
              marginBottom: "20px",
              backgroundColor: "white",
              margin: "20px",
              padding: "20px",
              maxWidth: "900px",
              borderRadius: "20px",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(8.5px)"
          }}>


              <h1 style={{"textAlign": "center"}}>Allergy 過敏</h1>
              {section2}

              <center><Link to="/sec3" style={{
                  "padding": "5px",
                  "border": "1px solid black",
                  "borderRadius": "5px",
                  "textDecoration": "none",
                  "backgroundColor": "black",
                  "color": "white",
                  "fontSize": "20px"
              }} onClick={(e) => {

                  for (let key in response) {
                      if (response.hasOwnProperty(key)) {
                          if (response[key] === "沒有 No") {
                              sectionScore += 0
                          } else if (response[key] === "輕微 Slight") {
                              sectionScore += 1
                          } else if (response[key] === "中度 Moderate") {
                              sectionScore += 2
                          } else if (response[key] === "嚴重 Serious") {
                              sectionScore += 3
                          }
                      }
                  }


                  for (let key in response) {
                      if (response[key] === '') {
                          alert("Please Complete the form")
                          e.preventDefault();
                      }
                  }
                  cookie.set("section2Score", sectionScore);
                  const summary = {
                      [question[0]]: response['question1'],
                      [question[1]]: response["question2"],
                      [question[2]]: response["question3"],
                      [question[3]]: response["question4"],
                      [question[4]]: response["question5"],
                  }
                  cookie.set("section2QA", summary)


              }}>Submit</Link></center>
          </div>
      </div>
  )
}

export default Section2;
