import { Bar } from "react-chartjs-2";
import Cookies from "universal-cookie";
import { db } from "../config/firebase-config";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { BarElement, CategoryScale, Chart as ChartJS, LinearScale } from "chart.js";
import { useEffect } from "react";

const cookie = new Cookies();

function Summary() {
  const sec1 = cookie.get('section1Score');
  const sec2 = cookie.get('section2Score');
  const sec3 = cookie.get('section3Score');
  const sec4 = cookie.get('section4Score');
  const sec5 = cookie.get('section5Score');
  
  const sec1QA = cookie.get("section1QA")
  const sec2QA = cookie.get("section2QA")
  const sec3QA = cookie.get("section3QA")
  const sec4QA = cookie.get("section4QA")
  const sec5QA = cookie.get("section5QA")
  
  const name = cookie.get("name")
  
  const colRef = collection(db,'survey')
  
  useEffect(()=>{
    addDoc(colRef, {
      section1Score: parseInt(sec1),
      section2Score: parseInt(sec2),
      section3Score: parseInt(sec3),
      section4Score: parseInt(sec4),
      section5Score: parseInt(sec5),
      sec1QA : sec1QA,
      sec2QA : sec2QA,
      sec3QA : sec3QA,
      sec4QA : sec4QA,
      sec5QA : sec5QA,
      name : name,
      createdAt: serverTimestamp()
      })
      .then(() => {
      console.log("submitted to firebase")
      })
  },[])


  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement
  )

  const chartData = {
    labels: ["GI", "Allergy", "Mood", "Slim", "Immune"],
    datasets: [
      {
        data: [
          parseInt(sec1),
          parseInt(sec2),
          parseInt(sec3),
          parseInt(sec4),
          parseInt(sec5),
        ],
        backgroundColor: ["red", "green", "blue", "orange", "violet"],
        barThickness: "30",
        borderRadius: "10"
      },
    ],
  };

  const chartOptions = {
    scales: {
      x: {
        type: "category",
      },
      y: {
        beginAtZero: true,
      },
    },
  };


  return (
    <div className="App" style={{ margin: "100px" }}>
      <center>
        <h1 style={{ marginBottom: "50px" }}>Summary of Your Response</h1>
      </center>
      <Bar  data={chartData} />
    </div>
  );
}

export default Summary;