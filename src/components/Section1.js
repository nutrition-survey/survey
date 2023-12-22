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
    const question = ["1.\t在過去的一周內，你有沒有被便秘所困擾？ Have you been bothered by constipation in the past week? " ,"2.\t在過去的一周內，您是否被腹瀉所困擾？  Have you been bothered by diarrhea in the past week?", "3.\t在過去的一周內，你的胃是否感到腹脹？ In the past week, did your stomach feel bloated? " ,"4.\t在過去的一周內，你的是否感到消化不良？Have you experienced indigestion in the past week? " , "5.\t您是否患有腸易激綜合症？Do you suffer from irritable bowel syndrome (IBS)?"]
    const choices = ["沒有 No", "輕微 Slight ", "中度 Moderate", "嚴重 Serious"]


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
      <div style={{display: "flex",  flexDirection : "column", justifyContent: "center", alignItems: "center"}}>

          <div style={{display: "flex", width:"100%", flexDirection: "column", justifyContent: "center", alignItems: "center", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(8.5px)"}}>
              <h2 style={{marginBottom: "0"}}>亞健康評估問卷</h2>
              <h3>Sub-health Assessment Questionnaire</h3>
          </div>

          <div style={{
              marginBottom: "20px",
              backgroundColor: "white",
              "margin": "20px",
              padding: "20px",
              maxWidth: "900px",
              borderRadius: "20px",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(8.5px)"
          }}>

              <h1 style={{"textAlign": "center"}}>GI 腸道問題</h1>
              {section1}

              <center><Link style={{
                  "border": "1px solid black",
                  "padding": "5px",
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
                  cookie.set("section1Score", sectionScore);
                  const summary = {
                      [question[0]]: response['question1'],
                      [question[1]]: response["question2"],
                      [question[2]]: response["question3"],
                      [question[3]]: response["question4"],
                      [question[4]]: response["question5"],
                  }
                  cookie.set("section1QA", summary)

              }

              } to="/sec2">Next</Link></center>
          </div>
      </div>
  )
}
export default Section1;

