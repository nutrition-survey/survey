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
    const question = ["1.您認為自己的體重是 " ,"2.您會進食過多高脂肪或高膽固醇的食物嗎?" ,"3. 您會進食糖類或甜食嗎?" , "4. 您會進食高熱量或煎炸食物嗎?", "5.您患有高血壓、高膽固醇/高血脂或高血糖嗎?"]
    const q1Choices = ["標準", "輕微過重/過輕", "過重/過輕", "嚴重過重/過輕"]
    const q2_3_4Choices = ["沒有", "甚少", "間中(每月1-2次)", "經常"]
    const q5Choices = ["沒有", "輕微", "中度", "嚴重"]

  return (
    <div style={{"margin" : "20px"}}>

      <h1 style={{"textAlign":"center"}}>Slim</h1>

      <h3>{question[0]}</h3>

          {q1Choices.map((choice,index) => (
          <div>
            <input type='radio' value={q1Choices[index]} onChange={e => setResponse((prevResponse) => ({ ...prevResponse, ["question1"]: e.target.value }))} />
            <label htmlFor={q1Choices[index]}>{q1Choices[index]}</label>
          </div>
          ))}



      <h3 style={{"marginTop": "10px"}} >{question[1]}</h3>
          {q2_3_4Choices.map((choice,index) => (
            <div>
              <input type='radio' value={q2_3_4Choices[index]} onChange={e => setResponse((prevResponse) => ({ ...prevResponse, ["question2"]: e.target.value }))} />
              <label htmlFor={q1Choices[index]}>{q2_3_4Choices[index]}</label>
            </div>
            ))}

      
      <h3 style={{"marginTop": "10px"}} >{question[2]}</h3>
          {q2_3_4Choices.map((choice,index) => (
            <div>
              <input type='radio' value={q2_3_4Choices[index]} onChange={e => setResponse((prevResponse) => ({ ...prevResponse, ["question3"]: e.target.value }))} />
              <label htmlFor={q1Choices[index]}>{q2_3_4Choices[index]}</label>
            </div>
            ))}

      <h3 style={{"marginTop": "10px"}} >{question[3]}</h3>
          {q2_3_4Choices.map((choice,index) => (
            <div>
              <input type='radio' value={q2_3_4Choices[index]} onChange={e => setResponse((prevResponse) => ({ ...prevResponse, ["question4"]: e.target.value }))} />
              <label htmlFor={q1Choices[index]}>{q2_3_4Choices[index]}</label>
            </div>
            ))}

      <h3 style={{"marginTop": "10px"}} >{question[4]}</h3>
          {q5Choices.map((choice,index) => (
            <div>
              <input type='radio' value={q5Choices[index]} onChange={e => setResponse((prevResponse) => ({ ...prevResponse, ["question5"]: e.target.value }))} />
              <label htmlFor={q5Choices[index]}>{q5Choices[index]}</label>
            </div>
            ))}

      <center><Link to="/sec5" style={{"padding" :"5px","border":"1px solid black", "padding":"5px", "borderRadius": "5px", "textDecoration":"none", "backgroundColor":"black", "color":"white","fontSize":"20px"}} onClick={(e)=>{

          for(let key in response){

            switch(key){
              case "question1":
                if(response["question1" ] === "標準"){
                    sectionScore += 0
                    }else if(response["question1"] === "輕微過重/過輕"){
                        sectionScore +=1
                    }else if(response["question1"] === "過重/過輕"){
                    sectionScore +=2
                    }else if(response["question1"] === "嚴重過重/過輕"){
                    sectionScore +=3
                    }
                break;

              case "question2":
                if(response["question2" ] === "沒有"){
                    sectionScore += 0
                    }else if(response["question2"] === "甚少"){
                        sectionScore +=1
                    }else if(response["question2"] === "間中(每月1-2次)"){
                    sectionScore +=2
                    }else if(response["question2"] === "經常"){
                    sectionScore +=3
                    }
                break;

              case "question3":
                if(response["question3" ] === "沒有"){
                    sectionScore += 0
                    }else if(response["question3"] === "甚少"){
                        sectionScore +=1
                    }else if(response["question3"] === "間中(每月1-2次"){
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
                    }else if(response["question4"] === "間中(每月1-2次"){
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
                        }else if(response["question5"] === "中度"){
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
            alert("Please Complete the form")
            e.preventDefault();
          }else{
            cookie.set("section4Score", sectionScore)
            const summary = {
              [question[0]] : response['question1'],
              [question[1]] : response["question2"],
              [question[2]] : response["question3"],
              [question[3]] : response["question4"],
              [question[4]] : response["question5"],
            }
            cookie.set("section4QA", summary)
          }

      }}>Submit</Link></center>
  

      </div>     
  )
}

export default Section4;
