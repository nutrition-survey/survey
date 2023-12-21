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
    const question = ["1.\t過去一個月，您對自己的睡眠品質整體評價如何? How would you rate your overall sleep quality in the past month?" ,"2.\t平均每晚通常需要多長時間（以分鐘為單位）才能入睡？ How long (in minutes) it usually takes to fall asleep on an average night?" ,"3.\t在睡眠期間，您是否容易在半夜或清晨醒來? During sleep, do you tend to wake up in the middle of the night or early in the morning?" , "4.\t您是否感到心情難以放鬆？ Do you find it difficult to relax?", "5.\t您是否感到緊張、焦慮和憂慮？Do you feel nervous, anxious or worried?"]
    const q1Choices = ["非常好 Very Good", "好 Good", "一般 General", "差 Poor"]
    const q2Choices = ["10 分鐘或以下 10 minutes or less ", "10-20 分鐘  10-20 minutes", "20-30 分鐘  20-30 minutes", "超過30分鐘 More than 30 minutes"]
    const q3_4_5Choices = ["沒有 No", "甚少 Seldom", "間中 Sometimes", "經常 Always"]

  return (
      <div style={{display: "flex", justifyContent:"center"}}>
          <div style={{marginBottom: "20px", backgroundColor:"white", "margin": "20px", padding:"20px", maxWidth:"900px", borderRadius:"20px", boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)", backdropFilter: "blur(8.5px)"}}>

              <h1 style={{"textAlign": "center"}}>Mood 情緒及睡眠質素</h1>
              <h3>{question[0]}</h3>

              {q1Choices.map((choice, index) => (
                  <div key={index}>
                      <input
                          style={{"marginRight": "5px"}}
                          type='radio'
                          name='question1'
                          value={q1Choices[index]}
                          onChange={e => setResponse((prevResponse) => ({
                              ...prevResponse,
                              ["question1"]: e.target.value
                          }))}
                      />
                      <label htmlFor={q1Choices[index]}>{q1Choices[index]}</label>
                  </div>
              ))}


              <h3 style={{"marginTop": "10px"}}>{question[1]}</h3>
              {q1Choices.map((choice, index) => (
                  <div>
                      <input style={{"marginRight": "5px"}} type='radio' name='question2' value={q2Choices[index]}
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question2"]: e.target.value
                             }))}/>
                      <label htmlFor={q1Choices[index]}>{q2Choices[index]}</label>
                  </div>
              ))}


              <h3 style={{"marginTop": "10px"}}>{question[2]}</h3>
              {q3_4_5Choices.map((choice, index) => (
                  <div>
                      <input style={{"marginRight": "5px"}} type='radio' name='question3' value={q3_4_5Choices[index]}
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question3"]: e.target.value
                             }))}/>
                      <label htmlFor={q1Choices[index]}>{q3_4_5Choices[index]}</label>
                  </div>
              ))}

              <h3 style={{"marginTop": "10px"}}>{question[3]}</h3>
              {q3_4_5Choices.map((choice, index) => (
                  <div>
                      <input style={{"marginRight": "5px"}} type='radio' name='question4' value={q3_4_5Choices[index]}
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question4"]: e.target.value
                             }))}/>
                      <label htmlFor={q1Choices[index]}>{q3_4_5Choices[index]}</label>
                  </div>
              ))}

              <h3 style={{"marginTop": "10px"}}>{question[4]}</h3>
              {q3_4_5Choices.map((choice, index) => (
                  <div>
                      <input style={{"marginRight": "5px"}} type='radio' name='question5' value={q3_4_5Choices[index]}
                             onChange={e => setResponse((prevResponse) => ({
                                 ...prevResponse,
                                 ["question5"]: e.target.value
                             }))}/>
                      <label htmlFor={q3_4_5Choices[index]}>{q3_4_5Choices[index]}</label>
                  </div>
              ))}

              <center><Link to="/sec4" style={{
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
                              if (response["question1"] === "非常好 Very Good") {
                                  sectionScore += 0
                              } else if (response["question1"] === "好 Good") {
                                  sectionScore += 1
                              } else if (response["question1"] === "一般 General") {
                                  sectionScore += 2
                              } else if (response["question1"] === "差 Poor") {
                                  sectionScore += 3
                              }
                              break;

                          case "question2":
                              if (response["question2"] === "10 分鐘或以下 10 minutes or less ") {
                                  sectionScore += 0
                              } else if (response["question2"] === "10-20分鐘 10-20 minutes") {
                                  sectionScore += 1
                              } else if (response["question2"] === "20-30分鐘 20-30 minutes") {
                                  sectionScore += 2
                              } else if (response["question2"] === "超過30分鐘 More than 30 minutes") {
                                  sectionScore += 3
                              }
                              break;

                          case "question3":
                              if (response["question3"] === "沒有 No") {
                                  sectionScore += 0
                              } else if (response["question3"] === "甚少 Seldom") {
                                  sectionScore += 1
                              } else if (response["question3"] === "間中 Sometimes") {
                                  sectionScore += 2
                              } else if (response["question3"] === "經常 Always") {
                                  sectionScore += 3
                              }
                              break;

                          case "question4":
                              if (response["question4"] === "沒有 No") {
                                  sectionScore += 0
                              } else if (response["question3"] === "甚少 Seldom") {
                                  sectionScore += 1
                              } else if (response["question3"] === "間中 Sometimes") {
                                  sectionScore += 2
                              } else if (response["question3"] === "經常 Always") {
                                  sectionScore += 3
                              }
                              break;

                          case "question5":
                              if (response["question5"] === "沒有 No") {
                                  sectionScore += 0
                              } else if (response["question3"] === "甚少 Seldom") {
                                  sectionScore += 1
                              } else if (response["question3"] === "間中 Sometimes") {
                                  sectionScore += 2
                              } else if (response["question3"] === "經常 Always") {
                                  sectionScore += 3
                              }
                              break;

                          default:
                              console.log("Not Found");
                              break;
                      }
                  }


                  for (let key in response) {
                      if (response[key] === '') {
                          alert("Please Complete the form")
                          e.preventDefault();
                      }
                  }
                  cookie.set("section3Score", sectionScore);
                  const summary = {
                      [question[0]]: response['question1'],
                      [question[1]]: response["question2"],
                      [question[2]]: response["question3"],
                      [question[3]]: response["question4"],
                      [question[4]]: response["question5"],
                  }
                  cookie.set("section3QA", summary)

              }}>Submit</Link></center>
          </div>
      </div>

  )
}

export default Section3;
