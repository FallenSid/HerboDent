import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="header">
          <h1>HerboDent</h1>
        </div>
        <img
          id="herbal-pic"
          src="/img/herbal.jpeg"
          alt="Herbal Toothpaste"
        />
        <div className="body">
          <h2>Welcome to Herbodent Where Dentalcare Meets AI.</h2>

          <h2>Please select your symptoms...</h2>
          <div className="options">
            <div className="symptoms" id="1">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="toothache" src="/img/toothache.png" alt="" />
              Toothache
            </div>
            <div className="symptoms" id="2">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="spots" src="/img/spots.png" alt="" />
              Spots
            </div>
            <div className="symptoms" id="3">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="toothache" src="/img/bad-breath.jpeg" alt="" />
              Bad breath
            </div>
            <div className="symptoms" id="4">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="toothache" src="/img/bleeding-gum.jpeg" alt="" />
              Bleeding Gums
            </div>
            <div className="symptoms" id="5">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="toothache" src="/img/swollen-gum.jpeg" alt="" />
              Swollen gums
            </div>
            <div className="symptoms" id="6">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="toothache" src="/img/cold-sensitive.jpeg" alt="" />
              Cold sensitivity
            </div>
            <div className="symptoms" id="7">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="toothache" src="/img/hot-sensitive.png" alt="" />
              Hot sensitivity
            </div>
            <div className="symptoms" id="8">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="toothache" src="/img/sharp-pain.jpeg" alt="" />
              Sharp pain
            </div>
            <div className="symptoms" id="9">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="toothache" src="/img/yellow-teeth.png" alt="" />
              Yellow teeth
            </div>
            <div className="symptoms" id="10">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="toothache" src="/img/stain.jpeg" alt="" />
              Stains
            </div>
            <div className="symptoms" id="11">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="toothache" src="/img/discomfort.png" alt="" />
              Discomfort
            </div>
            <div className="symptoms" id="12">
              <div className="checkmark"><span class="material-symbols-outlined">check_small</span></div>
              <img id="toothache" src="/img/dry-mouth.jpeg" alt="" />
              Dry mouth
            </div>
          </div>
          <button className="btn">Submit</button>
          
        </div>
      </div>
    </>
  );
}

export default App;
