import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import Cookies from "universal-cookie"

const cookie = new Cookies();

const Section4 = (props) => {
    let sectionScore = 0

    const[response, setResponse] = useState({
        question1: '',
        question2: '',
        question3: '',
        question4: '',
        question5: ''

    })
    const question = ["1.您認為自己的體重是 What do you think your weight is?" ,"2.您會進食過多高脂肪或高膽固醇的食物嗎?  Do you eat too many high-fat or high-cholesterol foods?" ,"3.\t您會進食糖類或甜食嗎?  Do you eat sugar or sweets?" , "4.\t您會進食高熱量或煎炸食物嗎?  Do you eat high-calorie or fried foods?", "5.您患有高血壓、高膽固醇/高血脂或高血糖嗎?  Do you have high blood pressure, high cholesterol/lipidaemia or high blood sugar?"]
    const q1Choices = ["標準 Standard", "輕微過重/過輕 Slightly overweight/ underweight", "過重/過輕 overweight/ underweight", "嚴重過重/過輕 Severely overweight/ underweight"]
    const q2_3_4Choices = ["沒有 No", "甚少 Seldom", "間中 Sometimes", "總是 Always"]
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

              <h1 style={{"textAlign": "center"}}>Slim 排毒瘦身</h1>

              <h3>{question[0]}</h3>

              {q1Choices.map((choice, index) => (
                  <div>
                      <input type='radio' value={q1Choices[index]} name='question1'
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question1"]: e.target.value
                             }))}/>
                      <label htmlFor={q1Choices[index]}>{q1Choices[index]}</label>
                  </div>
              ))}


              <h3 style={{"marginTop": "10px"}}>{question[1]}</h3>
              {q2_3_4Choices.map((choice, index) => (
                  <div>
                      <input type='radio' value={q2_3_4Choices[index]} name='question2'
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question2"]: e.target.value
                             }))}/>
                      <label htmlFor={q1Choices[index]}>{q2_3_4Choices[index]}</label>
                  </div>
              ))}


              <h3 style={{"marginTop": "10px"}}>{question[2]}</h3>
              {q2_3_4Choices.map((choice, index) => (
                  <div>
                      <input type='radio' value={q2_3_4Choices[index]} name='question3'
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question3"]: e.target.value
                             }))}/>
                      <label htmlFor={q1Choices[index]}>{q2_3_4Choices[index]}</label>
                  </div>
              ))}

              <h3 style={{"marginTop": "10px"}}>{question[3]}</h3>
              {q2_3_4Choices.map((choice, index) => (
                  <div>
                      <input type='radio' value={q2_3_4Choices[index]} name='question4'
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question4"]: e.target.value
                             }))}/>
                      <label htmlFor={q1Choices[index]}>{q2_3_4Choices[index]}</label>
                  </div>
              ))}

              <h3 style={{"marginTop": "10px"}}>{question[4]}</h3>
              {q5Choices.map((choice, index) => (
                  <div>
                      <input type='radio' value={q5Choices[index]} name='question5'
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question5"]: e.target.value
                             }))}/>
                      <label htmlFor={q5Choices[index]}>{q5Choices[index]}</label>
                  </div>
              ))}

              <center><Link to="/sec5" style={{
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
                              if (response["question1"] === q1Choices[0]) {
                                  sectionScore += 0
                              } else if (response["question1"] === q1Choices[1]) {
                                  sectionScore += 1
                              } else if (response["question1"] === q1Choices[2]) {
                                  sectionScore += 2
                              } else if (response["question1"] === q1Choices[3]) {
                                  sectionScore += 3
                              }
                              break;

                          case "question2":
                              if (response["question2"] === q2_3_4Choices[0]) {
                                  sectionScore += 0
                              } else if (response["question2"] === q2_3_4Choices[1]) {
                                  sectionScore += 1
                              } else if (response["question2"] === q2_3_4Choices[2]) {
                                  sectionScore += 2
                              } else if (response["question2"] === q2_3_4Choices[3]) {
                                  sectionScore += 3
                              }
                              break;

                          case "question3":
                              if (response["question3"] === q2_3_4Choices[0]) {
                                  sectionScore += 0
                              } else if (response["question2"] === q2_3_4Choices[1]) {
                                  sectionScore += 1
                              } else if (response["question2"] === q2_3_4Choices[2]) {
                                  sectionScore += 2
                              } else if (response["question2"] === q2_3_4Choices[3]) {
                                  sectionScore += 3
                              }
                              break;

                          case "question4":
                              if (response["question4"] === q2_3_4Choices[0]) {
                                  sectionScore += 0
                              } else if (response["question2"] === q2_3_4Choices[1]) {
                                  sectionScore += 1
                              } else if (response["question2"] === q2_3_4Choices[2]) {
                                  sectionScore += 2
                              } else if (response["question2"] === q2_3_4Choices[3]) {
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
                  cookie.set("section4Score", sectionScore);
                  const summary = {
                      [question[0]]: response['question1'],
                      [question[1]]: response["question2"],
                      [question[2]]: response["question3"],
                      [question[3]]: response["question4"],
                      [question[4]]: response["question5"],
                  }
                  cookie.set("section4QA", summary)

              }}>Submit</Link></center>


          </div>
      </div>
  )
}

export default Section4;
