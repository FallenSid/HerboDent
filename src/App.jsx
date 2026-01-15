import "./App.css";
import { useState , useRef , useEffect} from "react";
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

  function deSelect(){
    document.querySelectorAll('.selected').forEach(div => div.classList.remove('selected'));
    symptoms.length = 0;

  }


  function popup1() {
    const popup = document.getElementById("varient-1");
    popup.style.display = "block";
  }

  function popup3() {
    const popup = document.getElementById("varient-3");
    popup.style.display = "block";
  }

  function popup4() {
    const popup = document.getElementById("varient-4");
    popup.style.display = "block";
  }

  function Think() {
    let a = 0;
    // let b = 0;
    let c = 0;
    let d = 0;

    for (const x of symptoms) {
      const n = Number(x);
      if (n === 1 || n === 2) {
        a++;
      } else if (n === 3 || n === 4 || n === 5) {
        d++;
        // if (n === 4) {
        //   c++;}
      } else if (n >= 6 && n <= 10) {
        c++;
       if (n === 8) {
          a++;
       }
      } else if (n === 11 || n === 12) {
        d++;
      }
    }
    console.log(a,c,d)
    const max_score = Math.max(a, c, d);
    const count = [a, c, d].filter((score) => score === max_score).length;

    if (count > 1) {
      popup4();
    } else if (max_score === a) {
      popup1();
    } else if (max_score === c) {
      popup3();
    } else if (max_score === d) {
      popup4();
    }
    console.log(a,c,d)
    console.log(symptoms)
  }


  const v1 = useRef(null);
  // const v2 = useRef(null);
  const v3 = useRef(null);
  const v4 = useRef(null);

  return (
    <>
      <div className="container">
        <div className="header">
          <img
            id="herbal-pic"
            src="/img/herbodent.png"
            alt="Herbal Toothpaste"
          />
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

          <div className="footer">Made by FallendSid</div>
        </div>
      </div>








      <div id="varient-1" className="popup" ref={v1}>
        <div className="image">
          <img src="/img/dental-cavity.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Your Recommended Toothpaste</h2>
          <div className="varient-name">
            <h3>Cavity / Tooth decay treatment</h3>
          </div>
          <p>
            Based on your mixed oral symptoms , This herbal toothpaste provides
            balanced cavity protections, gum care,sensitivity relief, an long
            lasting freshness.
          </p>
          <div className="grids">
            <div> Protection</div>
            <div className="danda">|</div>
            <div>Fights Cavities</div>
            <div className="danda">|</div>
            <div>Removes Stains</div>
          </div>
          <div className="tips">
            <h3>Usage Tips:</h3>
            <div className="list">
              <div>Use twice daily</div>
              <div>Brush for 2 minutes</div>
              <div>Suitable for daily use</div>
            </div>
          </div>
        </div>
        <button className="close-popup" onClick={()=>{v1.current.style.display='none';deSelect()}} >Try Again</button>
      </div>

      <div id="varient-3" className="popup" ref={v3}>
        <div className="image">
          <img src="/img/sensitivity.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Your Recommended Toothpaste</h2>
          <div className="varient-name">
            <h3>🦷 Sensitivity & Whitening ✨</h3>
          </div>
          <p>
            Based on symptoms like cold sensitivity and yellow teeth, this
            toothpaste is made to soothe sensitive teeth white gently removing
            stains for a white smile.
          </p>
          <div className="grids">
            <div>🦷 Sensitive Relief</div>
            <div className="danda">|</div>
            <div>✨ Whitens Teeth</div>
            <div className="danda">|</div>
            <div>strength</div>
          </div>
          <div className="tips">
            <h3>Usage Tips:</h3>
            <div className="list">
              <div>Use twice daily</div>
              <div>Brush for 2 minutes</div>
              <div>Suitable for daily use</div>
            </div>
          </div>
        </div>
        <button className="close-popup" onClick={()=>{v3.current.style.display='none';deSelect()}}>Try Again</button>
      </div>

      <div id="varient-4" className="popup" ref={v4}>
        <div className="image">
          <img src="/img/overall.jpg" alt="" />
        </div>
        <div className="content">
          <h2>Your Recommended Toothpaste</h2>
          <div className="varient-name">
            <h3>All-Rounder Herbal Toothpaste</h3>
          </div>
          <p>
            Based on your mixed oral symptoms , This herbal toothpaste provides
            balanced cavity protections, gum care,sensitivity relief, an long
            lasting freshness.
          </p>
          <div className="grids">
            <div>🦷 Protection</div>
            <div className="danda">|</div>
            <div>🌿 Herbal Care</div>
            <div className="danda">|</div>
            <div>🍃 Fresh Breath</div>
          </div>

          <div className="tips">
            <h3>Usage Tips:</h3>
            <div className="list">
              <div>Use twice daily</div>
              <div>Brush for 2 minutes</div>
              <div>Suitable for daily use</div>
            </div>
          </div>
        </div>
        <button className="close-popup" onClick={()=>{v4.current.style.display='none';deSelect()}}>Try again</button>
      </div>
    </>
  );
}

export default App;
