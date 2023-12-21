import './App.css';
import Cookies from 'universal-cookie';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const cookie = new Cookies();

function App() {

  const [name, setName] = useState("")

  return (
    <div className="App" style={{fontSize:"20px", display:"flex", justifyContent:"center", alignItems:"center"}}>

        <div style={{width:"50%", marginTop:"100px", backgroundColor: "white", padding: "20px", borderRadius: "20px", display:"flex", flexDirection: "column", justifyContent: "center", alignItems: "center", maxWidth: "500px"}}>
          <label>Please Enter your name:</label> <br></br>
          <input style={{width:"100%", border : "1px solid black",color:"black", borderRadius: "5px",  padding: "5px"}} value={name} onChange={(e)=> setName(e.target.value)} placeholder='Stephen Tsui' />

          <div style={{marginTop: "50px"}}>
          <Link style={{"padding" :"5px","border":"1px solid black","borderRadius": "5px", "textDecoration":"none", "backgroundColor":"black", "color":"white","fontSize":"20px"}} to="/sec1" onClick={(e)=>{
            if(name.length === 0){
              e.preventDefault();
              alert("Please Enter your name")
            }else{
              cookie.set("name", name)
            }
          }}>Start Questionnaire</Link>
          </div>

        </div>
    </div>
  );
}

export default App;