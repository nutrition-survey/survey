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
    const question = ["1. 過去一個月，您對自己的睡眠品質整體評價如何? " ,"2. 平均每晚通常需要多長時間（以分鐘為單位）才能入睡?" ,"3. 在睡眠期間，您是否容易在半夜或清晨醒來?" , "4.您是否感到心情難以放鬆 ", "5. 您是否感到緊張、焦慮和憂慮"]
    const q1Choices = ["非常好", "好", "一般", "差"]
    const q2Choices = ["10 分鐘或以下", "10-20分鐘", "20-30分鐘 ", "超過30 分鐘"]
    const q3_4_5Choices = ["沒有", "甚少", "間中", "經常"]

  return (
    <div style={{"margin" : "20px"}}>

        <h1 style={{"textAlign":"center"}}>Mood</h1>
         <h3>{question[0]}</h3>

       {q1Choices.map((choice,index) => (
          <div>
            <input style={{"marginRight":"5px"}} type='radio' value={q1Choices[index]} onChange={e => setResponse((prevResponse) => ({ ...prevResponse, ["question1"]: e.target.value }))} />
            <label htmlFor={q1Choices[index]}>{q1Choices[index]}</label>
          </div>
          ))}



      <h3 style={{"marginTop": "10px"}} >{question[1]}</h3>
          {q1Choices.map((choice,index) => (
            <div>
              <input style={{"marginRight":"5px"}} type='radio' value={q2Choices[index]} onChange={e => setResponse((prevResponse) => ({ ...prevResponse, ["question2"]: e.target.value }))} />
              <label htmlFor={q1Choices[index]}>{q2Choices[index]}</label>
            </div>
            ))}


      <h3 style={{"marginTop": "10px"}} >{question[2]}</h3>
          {q3_4_5Choices.map((choice,index) => (
            <div>
              <input style={{"marginRight":"5px"}} type='radio' value={q3_4_5Choices[index]} onChange={e => setResponse((prevResponse) => ({ ...prevResponse, ["question3"]: e.target.value }))} />
              <label htmlFor={q1Choices[index]}>{q3_4_5Choices[index]}</label>
            </div>
            ))}

      <h3 style={{"marginTop": "10px"}} >{question[3]}</h3>
          {q3_4_5Choices.map((choice,index) => (
            <div>
              <input style={{"marginRight":"5px"}} type='radio' value={q3_4_5Choices[index]} onChange={e => setResponse((prevResponse) => ({ ...prevResponse, ["question4"]: e.target.value }))} />
              <label htmlFor={q1Choices[index]}>{q3_4_5Choices[index]}</label>
            </div>
            ))}

      <h3 style={{"marginTop": "10px"}} >{question[4]}</h3>
          {q3_4_5Choices.map((choice,index) => (
            <div>
              <input style={{"marginRight":"5px"}} type='radio' value={q3_4_5Choices[index]} onChange={e => setResponse((prevResponse) => ({ ...prevResponse, ["question5"]: e.target.value }))} />
              <label htmlFor={q3_4_5Choices[index]}>{q3_4_5Choices[index]}</label>
            </div>
            ))}

            <center><Link to="/sec4" style={{"padding" :"5px","border":"1px solid black", "padding":"5px", "borderRadius": "5px", "textDecoration":"none", "backgroundColor":"black", "color":"white","fontSize":"20px"}} onClick={(e)=>{


                for(let key in response){

                  switch(key){
                    case "question1":
                      if(response["question1" ] === "非常好"){
                          sectionScore += 0
                          }else if(response["question1"] === "好"){
                              sectionScore +=1
                          }else if(response["question1"] === "一般"){
                          sectionScore +=2
                          }else if(response["question1"] === "差"){
                          sectionScore +=3
                          }
                      break;
            
                    case "question2":
                      if(response["question2" ] === "10 分鐘或以下"){
                          sectionScore += 0
                          }else if(response["question2"] === "10-20分鐘"){
                              sectionScore +=1
                          }else if(response["question2"] === "20-30分鐘"){
                          sectionScore +=2
                          }else if(response["question2"] === "超過30 分鐘"){
                          sectionScore +=3
                          }
                      break;
            
                    case "question3":
                      if(response["question3" ] === "沒有"){
                          sectionScore += 0
                          }else if(response["question3"] === "甚少"){
                              sectionScore +=1
                          }else if(response["question3"] === "間中"){
                          sectionScore +=2
                          }else if(response["question3"] === "經常"){
                          sectionScore +=3
                          }
                      break;
                    
                    case "question4":
                      if(response["question4" ] === "沒有"){
                          sectionScore += 0
                          }else if(response["question4"] === "甚少"){
                              sectionScore +=1
                          }else if(response["question4"] === "間中"){
                          sectionScore +=2
                          }else if(response["question4"] === "經常"){
                          sectionScore +=3
                          }
                      break;
                      
                      case "question5":
                          if(response["question5" ] === "沒有"){
                              sectionScore += 0
                              }else if(response["question5"] === "輕微"){
                                  sectionScore +=1
                              }else if(response["question5"] === "間中"){
                              sectionScore +=2
                              }else if(response["question5"] === "嚴重"){
                              sectionScore +=3
                              }
                          break;
            
                    default:
                      console.log("Not Found");
                      break;
                  }
                }
            
                if(sectionScore === 0){
                  alert("Please Complte the form")
                  e.preventDefault();
                }else{
                  cookie.set("section3Score", sectionScore)
                  const summary = {
                    [question[0]] : response['question1'],
                    [question[1]] : response["question2"],
                    [question[2]] : response["question3"],
                    [question[3]] : response["question4"],
                    [question[4]] : response["question5"],
                  }
                  cookie.set("section3QA", summary)
                }

            }}>Submit</Link></center>
          </div>
  )
}

export default Section3;
