import "./App.css";
import { useState } from "react";
const symptoms = [];
function App() {
  function selected(event) {
    const symptomDiv = event.currentTarget;
    symptomDiv.classList.toggle("selected");
    const symptomId = symptomDiv.id;
    const index = symptoms.indexOf(symptomId);
    if (index > -1) {
      symptoms.splice(index, 1);
    } else {
      symptoms.push(symptomId);
    }
  }

  function Think() {
    // alert("Symptoms selected: " + symptoms);
    let a = 0;
    let b = 0;
    let c = 0;
    let d = 0;

    for (const x of symptoms) {
      const n = Number(x);
      if (n === 1 || n === 2) {
        a++;
      }
      else if (n === 3 || n === 4 || n === 5) {
        b++;
      }
      // else if (n === 8 ) {
      //   a++;
      // }
      else if (n >= 6 && n <= 10) {
        c++;
        if (n === 8) {
          a++;
        }
      }
      else if (n === 11 || n === 12) {
        d++;
      }
    }

    const max_score = Math.max(a, b, c, d);

    const count = [a, b, c, d].filter(score => score === max_score).length;

    if (count > 1) {
      alert("Your have multiple symptoms and based on that we recommend you to try our All Rounder varient D.");
    }
    else if (max_score === a) {
      alert("you should try varient A for tooth decay and caries");
    }
    else if (max_score === b) {
      alert("you should try varient B for gum related issues");
    }
    else if (max_score === c) {
      alert("you should try varient C for sensitivity issues");
    }
    else if (max_score === d) {
      alert("you should try varient D the All Rounder");
    }
  }
  return (
    <>
      <div className="container">
        <div className="header">
        <img id="herbal-pic" src="/img/herbodent.png" alt="Herbal Toothpaste" />
        <div className="title">Personalized Dental Care Using AI</div>
        </div>
        <div className="body">
        <div className="intro">
          <h2>Welcome to HerboDent 👋 </h2>
          <p>Where Herbal Care Meets Artificial Intelligence</p>
        </div>
        <div className="direction">
          <h3>Please select your symptoms</h3>
          <p>Multiple selections are allowed</p>
        </div>
          <div className="options">
            <div className="symptoms" id="1" onClick={selected}>
              <img id="toothache" src="/img/toothache.png" alt="" />
              Toothache
            </div>
            <div className="symptoms" id="2" onClick={selected}>
              <img id="spots" src="/img/spots.png" alt="" />
              Spots
            </div>
            <div className="symptoms" id="3" onClick={selected}>
              <img id="bad-breath" src="/img/bad-breath.jpeg" alt="" />
              Bad breath
            </div>
            <div className="symptoms" id="4" onClick={selected}>
              <img id="bleeding-gum" src="/img/bleeding-gum.jpeg" alt="" />
              Bleeding Gums
            </div>
            <div className="symptoms" id="5" onClick={selected}>
              <img id="swollen-gum" src="/img/swollen-gum.jpeg" alt="" />
              Swollen gums
            </div>
            <div className="symptoms" id="6" onClick={selected}>
              <img id="cold-sensitive" src="/img/cold-sensitive.jpeg" alt="" />
              Cold sensitivity
            </div>
            <div className="symptoms" id="7" onClick={selected}>
              <img id="hot-sensitive" src="/img/hot-sensitive.png" alt="" />
              Hot sensitivity
            </div>
            <div className="symptoms" id="8" onClick={selected}>
              <img id="sharp-pain" src="/img/sharp-pain.jpeg" alt="" />
              Sharp pain
            </div>
            <div className="symptoms" id="9" onClick={selected}>
              <img id="yellow-teeth" src="/img/yellow-teeth.png" alt="" />
              Yellow teeth
            </div>
            <div className="symptoms" id="10" onClick={selected}>
              <img id="stain" src="/img/stain.jpeg" alt="" />
              Stains
            </div>
            <div className="symptoms" id="11" onClick={selected}>
              <img id="discomfort" src="/img/discomfort.png" alt="" />
              Discomfort
            </div>
            <div className="symptoms" id="12" onClick={selected}>
              <img id="dry-mouth" src="/img/dry-mouth.jpeg" alt="" />
              Dry mouth
            </div>
          </div>
          <button className="btn" onClick={Think}>
            <img id="search" src="/img/search.svg" alt="" />
            <p>Get my Recommendation</p>
          </button>
          <p className="text">no personal data is stored</p>

          <div className="footer">
            Made by FallendSid
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
