import { collection, getDocs} from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { db } from '../config/firebase-config'


const Nutrition = () => {

    const[names, setNames] = useState([])
    let [QA,setQA] = useState([])
    const [expandedDoc, setExpandedDoc] = useState(null);
    
    const colRef = collection(db,'survey')

    useEffect(()=>{

        getDocs(colRef).then((snapshot)=>{
            snapshot.docs.forEach((doc)=>{
                setQA(prev => [...prev, {...doc.data(), id: doc.id}])
            })
        }).then(()=>{
        })


    },[])

    // Function to handle the toggle button click
  const handleToggle = (docName) => {
    if (expandedDoc === docName) {
      setExpandedDoc(null); // Collapse if already expanded
    } else {
      setExpandedDoc(docName); // Expand if not expanded
    }
  };

  return (

    <div>
      {QA.map((doc) => (
        <div
          key={doc.name}
          style={{ backgroundColor: "lightblue", borderRadius: "10px", padding: "10px", margin: "20px" }}
        >
          <button onClick={() => handleToggle(doc.name)}>
            {doc.name}'s Response - {expandedDoc === doc.name ? 'Collapse' : 'Expand'}
          </button>
          {expandedDoc === doc.name && (
            <div>
              <div style={{ backgroundColor: "lightgreen", padding: "10px", borderRadius: "10px", margin: "20px" }}>
                <h3>Section1 Answers: </h3>
                {Object.entries(doc.sec1QA).map(([key, value]) => (
                  <div key={key} style={{ padding: "10px" }}>
                    <p>Question: {key}</p>
                    <p>Answer: {value}</p>
                  </div>
                ))}
                <h3>Score: {doc.section1Score}</h3>
              </div>
            
              <div style={{ backgroundColor: "lightgreen", padding: "10px", borderRadius: "10px", margin: "20px" }}>
                <h3>Section2 Answers: </h3>
                {Object.entries(doc.sec2QA).map(([key, value]) => (
                  <div key={key} style={{ padding: "10px" }}>
                    <p>Question: {key}</p>
                    <p>Answer: {value}</p>
                  </div>
                ))}
                <h3>Score: {doc.section2Score}</h3>
              </div>


              <div style={{ backgroundColor: "lightgreen", padding: "10px", borderRadius: "10px", margin: "20px" }}>
                <h3>Section3 Answers: </h3>
                {Object.entries(doc.sec3QA).map(([key, value]) => (
                  <div key={key} style={{ padding: "10px" }}>
                    <p>Question: {key}</p>
                    <p>Answer: {value}</p>
                  </div>
                ))}
                <h3>Score: {doc.section3Score}</h3>
              </div>

              <div style={{ backgroundColor: "lightgreen", padding: "10px", borderRadius: "10px", margin: "20px" }}>
                <h3>Section4 Answers: </h3>
                {Object.entries(doc.sec4QA).map(([key, value]) => (
                  <div key={key} style={{ padding: "10px" }}>
                    <p>Question: {key}</p>
                    <p>Answer: {value}</p>
                  </div>
                ))}
                <h3>Score: {doc.section4Score}</h3>
              </div>

              <div style={{ backgroundColor: "lightgreen", padding: "10px", borderRadius: "10px", margin: "20px" }}>
                <h3>Section5 Answers: </h3>
                {Object.entries(doc.sec4QA).map(([key, value]) => (
                  <div key={key} style={{ padding: "10px" }}>
                    <p>Question: {key}</p>
                    <p>Answer: {value}</p>
                  </div>
                ))}
                <h3>Score: {doc.section5Score}</h3>
              </div>


              {/* Add other sections here */}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default Nutrition
