import './App.css'

function App() {
  return (
    <>
    <div className="container">
      <h1>Welcome to HerboDent AI Assistent</h1>
      <h2>where Dental care meets AI </h2>
      <h2>Please select your symptoms...</h2>
      <div className="options">
      <div className="symptoms" id='1'>Toothache</div>
      <div className="symptoms" id='2'>Spots</div>
      <div className="symptoms" id='3'>Bad breath</div>
      <div className="symptoms" id='4'>Bleeding Gums</div>
      <div className="symptoms" id='5'>Swollen gums</div>
      <div className="symptoms" id='6'>Cold sensitivity</div>
      <div className="symptoms" id='7'>Hot sensitivity</div>
      <div className="symptoms" id='8'>Sharp pain</div>
      <div className="symptoms" id='9'>Yellow teeth</div>
      <div className="symptoms" id='10'>Stains</div>
      <div className="symptoms" id='11'>Discomfort</div>
      <div className="symptoms" id='12'>Dry mouth</div>
      </div>
      <button className="btn">Submit</button>
    </div>
    </>
  )
}

export default App
