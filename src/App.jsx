import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

import Audiencepole from "../src/assets/lifeline/audiencePoles.png";
import Fiftyfifty from "../src/assets/lifeline/50__50.png";
import Plusonce from "../src/assets/lifeline/Plusonce.png";
import Askthehost from "../src/assets/lifeline/Ask_the_host.png";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("₹ 0");
 

  const data = [
    {
      id: 1,
      question: "1. Rolex is a company that specializes in what type of product?",
      answers: [
        {
          text: "A. Phone",
          correct: false,
        },
        {
          text: "B. Watches",
          correct: true,
        },
        {
          text: "C. Food",
          correct: false,
        },
        {
          text: "D. Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "2. When did the website `Facebook` launch?",
      answers: [
        {
          text: "A. 2004",
          correct: true,
        },
        {
          text: "B. 2005",
          correct: false,
        },
        {
          text: "C. 2006",
          correct: false,
        },
        {
          text: "D. 2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "3. Who is the Father's of computer?",
      answers: [
        {
          text: "A. Johnny Deep",
          correct: false,
        },
        {
          text: "B. Charles Babbage",
          correct: true,
        },
        {
          text: "C. James Lvory",
          correct: false,
        },
        {
          text: "D. Daniel Red Cliff",
          correct: false,
        },
      ],
    },

    {
      id: 4,
      question: "4. Who played the character of harry potter in movie?",
      answers: [
        {
          text: "A. Johnny Deep",
          correct: false,
        },
        {
          text: "B. Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "C. Denzel Washington",
          correct: false,
        },
        {
          text: "D. Daniel Red Cliff",
          correct: true,
        },
      ],
    },

    {
      id: 5,
      question: "5. How many Bits make one Byte?",
      answers: [
        {
          text: "A. 16 Bits",
          correct: false,
        },
        {
          text: "B. 32 bits",
          correct: false,
        },
        {
          text: "C. 64 Bits",
          correct: false,
        },
        {
          text: "D. 8 Bits",
          correct: true,
        },
      ],
    },

    {
      id: 6,
      question: "6. Who is the founder of Facebook?",
      answers: [
        {
          text: "A. Andrew Maclin",
          correct: false,
        },
        {
          text: "B. Mark Adon",
          correct: false,
        },
        {
          text: "C. Mark Zuckerberg",
          correct: true,
        },
        {
          text: "D. None of the above mentioned",
          correct: false,
        },
      ],
    },

    {
      id: 7,
      question: "7. All mathematical and logical functions in the computer are done by?",
      answers: [
        {
          text: "A. Central Processing Unit",
          correct: false,
        },
        {
          text: "B. Arithmetic and Logical Unit",
          correct: true,
        },
        {
          text: "C. Control Unit",
          correct: false,
        },
        {
          text: "D. Memory Unit",
          correct: false,
        },
      ],
    },

    {
      id: 8,
      question: "8. Who was the programmer of the MS-DOS operating system?",
      answers: [
        {
          text: "A. Tim Paterson",
          correct: true,
        },
        {
          text: "B. Andrew N.",
          correct: false,
        },
        {
          text: "C. Bill Gates",
          correct: false,
        },
        {
          text: "D. Dennis Ritchie",
          correct: false,
        },
      ],
    },

    {
      id: 9,
      question: "9. Patanjali is well known for the compilation of –",
      answers: [
        {
          text: "A. Yoga Sutra",
          correct: true,
        },
        {
          text: "B. Panchatantra",
          correct: false,
        },
        {
          text: "C. Brahma Sutra",
          correct: false,
        },
        {
          text: "D. Ayurveda",
          correct: false,
        },
      ],
    },

    {
      id: 10,
      question: "10. A Website's main page is called?",
      answers: [
        {
          text: "A. Middle Page",
          correct: false,
        },
        {
          text: "B. Index Page",
          correct: false,
        },
        {
          text: "C. Blog",
          correct: false,
        },
        {
          text: "D. Home Page",
          correct: true,
        },
      ],
    },

    {
      id: 11,
      question: "11. Which was the first web browser?",
      answers: [
        {
          text: "A. World Wide Web",
          correct: true,
        },
        {
          text: "B. Mosaic",
          correct: false,
        },
        {
          text: "C. Lynx",
          correct: false,
        },
        {
          text: "D. Netscape Navigator",
          correct: false,
        },
      ],
    },

    {
      id: 12,
      question: "12. How many characters are there in ASCII?",
      answers: [
        {
          text: "A. 1024",
          correct: false,
        },
        {
          text: "B. 128",
          correct: true,
        },
        {
          text: "C. 256",
          correct: false,
        },
        {
          text: "D. 512",
          correct: false,
        },
      ],
    },

    {
      id: 13,
      question: "13. Which method was employed to program the earliest computers?",
      answers: [
        {
          text: "A. Punch cards",
          correct: false,
        },
        {
          text: "B. Machine language",
          correct: true,
        },
        {
          text: "C. High-level language",
          correct: false,
        },
        {
          text: "D. Voice commands",
          correct: false,
        },
      ],
    },

    {
      id: 14,
      question: "14. What is a joystick primarily in computers used?",
      answers: [
        {
          text: "A. Word Processing",
          correct: false,
        },
        {
          text: "B. Navigating Web Pages",
          correct: false,
        },
        {
          text: "C. Spreadsheets",
          correct: false,
        },
        {
          text: "D. Gaming",
          correct: true,
        },
      ],
    },

    {
      id: 15,
      question: "15. What is correcting errors in a program called?",
      answers: [
        {
          text: "A. Debugging",
          correct: true,
        },
        {
          text: "B. Optimizing",
          correct: false,
        },
        {
          text: "C. Compiling",
          correct: false,
        },
        {
          text: "D. Interpreting",
          correct: false,
        },
      ],
    },

    {
      id: 16,
      question: "16. The refresh rate of the monitor is measured in?",
      answers: [
        {
          text: "A. Pixels",
          correct: false,
        },
        {
          text: "B. Frames per Second (FPS)",
          correct: false,
        },
        {
          text: "C. Inches",
          correct: false,
        },
        {
          text: "D.Hertz (Hz)",
          correct: true,
        },
      ],
    },

  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1,000" },
        { id: 2, amount: "₹ 2,000" },
        { id: 3, amount: "₹ 3,000" },
        { id: 4, amount: "₹ 5,000" },
        { id: 5, amount: "₹ 10,000" },
        { id: 6, amount: "₹ 20,000" },
        { id: 7, amount: "₹ 40,000" },
        { id: 8, amount: "₹ 80,000" },
        { id: 9, amount: "₹ 1,60,000" },
        { id: 10, amount: "₹ 3,20,000" },
        { id: 11, amount: "₹ 6,40,000" },
        { id: 12, amount: "₹ 12,50,000" },
        { id: 13, amount: "₹ 25,000,00" },
        { id: 14, amount: "₹ 50,00,000" },
        { id: 15, amount: "₹ 1,00,00,000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You Earned: {earned}</h1>
            ) : (
              <>


                   <div className="lifelines">
                    <div className="lifeline">
                      <img src={Audiencepole} alt="Audience pole" height="40%"/>
                    </div>

                    <div className="lifeline">
                      <img src={Fiftyfifty} alt="Fifty Fifty" height="40%"/>
                    </div>

                    <div className="lifeline">
                      <img src={Plusonce} alt="Plus Once" height="35%"/>
                    </div>

                   <div className="lifeline">
                      <img src={Askthehost} alt="Ask The Host" height="35%"/>
                    </div>

                  </div>



                <div className="top">
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>


                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">

              <div className="yourchoice">
              <li className="choice" style={{float:"right"}} 
              color="light" 
              onClick={()=>{setQuestionNumber(true);
              setTimeOut(true);
              
              }}>
                
                Quit
                
              </li>

              <li className="choice" 
              style={{float:"right"}} 
              onClick={()=>{
              setUsername(null);
              setQuestionNumber(1);
              setTimeOut(false);
              setEarned(0);

              }}>
                Exit
                
              </li>
              </div>
              

              <li className="name"> Name : {username}</li>
              <li className="name"> Total Earned : {earned}</li>
              <hr/>
              


              {moneyPyramid.map((m) => (
                
                 
                
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;
