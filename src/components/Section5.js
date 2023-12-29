import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';


const cookie = new Cookies();
const Section3 = () => {
    let sectionScore = 0

    const[response, setResponse] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: ''

    })
    const question = ["1.\t您會容易患傷風感冒嗎?  Are you susceptible to colds?" ,"2.\t您是否患病康復進度緩慢? Are you recovering from an illness slowly?" ,"3.\t您是否容易肌肉/關節酸痛?　Are you prone to muscle/joint soreness?" , "4.您是否容易感到疲倦或沒有精力?  Do you feel tired easily or have no energy?", "5. 您是否患有自身免疫疾病(例如:類風濕性關節炎、全身性紅斑狼瘡) ? Do you have an autoimmune disease (e.g. rheumatoid arthritis, systemic lupus erythematosus)? "]
    const q1_2_3_4Choices = ["沒有 No", "甚少 Seldom", "間中 Sometimes", "總是 Always"]
    const q5Choices = ["沒有 No", "輕微 Slight", "中度 Moderate", "嚴重 Serious"]

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
              "margin": "20px",
              padding: "20px",
              maxWidth: "900px",
              borderRadius: "20px",
              boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
              backdropFilter: "blur(8.5px)"
          }}>

              <h1 style={{"textAlign": "center"}}>Immune 免疫</h1>
              <h3>{question[0]}</h3>

              {q1_2_3_4Choices.map((choice, index) => (
                  <div>
                      <input style={{"marginRight": "5px"}} type='radio' value={q1_2_3_4Choices[index]} name='question1'
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question1"]: e.target.value
                             }))}/>
                      <label htmlFor={q1_2_3_4Choices[index]}>{q1_2_3_4Choices[index]}</label>
                  </div>
              ))}


              <h3 style={{"marginTop": "10px"}}>{question[1]}</h3>
              {q1_2_3_4Choices.map((choice, index) => (
                  <div>
                      <input style={{"marginRight": "5px"}} type='radio' name='question2' value={q1_2_3_4Choices[index]}
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question2"]: e.target.value
                             }))}/>
                      <label htmlFor={q1_2_3_4Choices[index]}>{q1_2_3_4Choices[index]}</label>
                  </div>
              ))}


              <h3 style={{"marginTop": "10px"}}>{question[2]}</h3>
              {q1_2_3_4Choices.map((choice, index) => (
                  <div>
                      <input style={{"marginRight": "5px"}} type='radio' name='question3' value={q1_2_3_4Choices[index]}
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question3"]: e.target.value
                             }))}/>
                      <label htmlFor={q1_2_3_4Choices[index]}>{q1_2_3_4Choices[index]}</label>
                  </div>
              ))}

              <h3 style={{"marginTop": "10px"}}>{question[3]}</h3>
              {q1_2_3_4Choices.map((choice, index) => (
                  <div>
                      <input style={{"marginRight": "5px"}} type='radio' name='question4' value={q1_2_3_4Choices[index]}
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question4"]: e.target.value
                             }))}/>
                      <label htmlFor={q1_2_3_4Choices[index]}>{q1_2_3_4Choices[index]}</label>
                  </div>
              ))}

              <h3 style={{"marginTop": "10px"}}>{question[4]}</h3>
              {q5Choices.map((choice, index) => (
                  <div>
                      <input style={{"marginRight": "5px"}} type='radio' name='question5' value={q5Choices[index]}
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question5"]: e.target.value
                             }))}/>
                      <label htmlFor={q5Choices[index]}>{q5Choices[index]}</label>
                  </div>
              ))}

              <center><Link to="/summary" style={{
                  "border": "1px solid black",
                  "padding": "5px",
                  "borderRadius": "5px",
                  "textDecoration": "none",
                  "backgroundColor": "black",
                  "color": "white",
                  "fontSize": "20px"
              }} onClick={(e) => {


                  for (let key in response) {

                      switch (key) {
                          case "question1":
                              if (response["question1"] === q1_2_3_4Choices[0]) {
                                  sectionScore += 0
                              } else if (response["question1"] === q1_2_3_4Choices[1]) {
                                  sectionScore += 1
                              } else if (response["question1"] === q1_2_3_4Choices[2]) {
                                  sectionScore += 2
                              } else if (response["question1"] === q1_2_3_4Choices[3]) {
                                  sectionScore += 3
                              }
                              break;

                          case "question2":
                              if (response["question2"] === q1_2_3_4Choices[0]) {
                                  sectionScore += 0
                              } else if (response["question1"] === q1_2_3_4Choices[1]) {
                                  sectionScore += 1
                              } else if (response["question1"] === q1_2_3_4Choices[2]) {
                                  sectionScore += 2
                              } else if (response["question1"] === q1_2_3_4Choices[3]) {
                                  sectionScore += 3
                              }
                              break;

                          case "question3":
                              if (response["question3"] === q1_2_3_4Choices[0]) {
                                  sectionScore += 0
                              } else if (response["question1"] === q1_2_3_4Choices[1]) {
                                  sectionScore += 1
                              } else if (response["question1"] === q1_2_3_4Choices[2]) {
                                  sectionScore += 2
                              } else if (response["question1"] === q1_2_3_4Choices[3]) {
                                  sectionScore += 3
                              }
                              break;

                          case "question4":
                              if (response["question4"] === q1_2_3_4Choices[0]) {
                                  sectionScore += 0
                              } else if (response["question1"] === q1_2_3_4Choices[1]) {
                                  sectionScore += 1
                              } else if (response["question1"] === q1_2_3_4Choices[2]) {
                                  sectionScore += 2
                              } else if (response["question1"] === q1_2_3_4Choices[3]) {
                                  sectionScore += 3
                              }
                              break;

                          case "question5":
                              if (response["question5"] === q5Choices[0]) {
                                  sectionScore += 0
                              } else if (response["question5"] === q5Choices[1]) {
                                  sectionScore += 1
                              } else if (response["question5"] === q5Choices[2]) {
                                  sectionScore += 2
                              } else if (response["question5"] === q5Choices[3]) {
                                  sectionScore += 3
                              }
                              break;

                          default:
                              console.log("Not Found");
                              break;
                      }
                  }


                  let show_alert = false

                  for (let key in response) {
                      if (response[key] === '') {
                          show_alert = true
                          e.preventDefault();
                      }
                  }

                  if(show_alert === true) {
                    alert("Please Complete the form")
                  }
                  cookie.set("section5Score", sectionScore);
                  const summary = {
                      [question[0]]: response['question1'],
                      [question[1]]: response["question2"],
                      [question[2]]: response["question3"],
                      [question[3]]: response["question4"],
                      [question[4]]: response["question5"],
                  }
                  cookie.set("section5QA", summary)

              }}>Submit</Link></center>
          </div>
      </div>
  )
}

export default Section3;
