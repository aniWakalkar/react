import './App.css';
import Navbar from './Components/Navbar';
import home from './img/home.jpg'
import cv from './img/myCV.pdf'

function App() {
  return (
    <>
    <Navbar/>
    <div className="container-fluid p-0 mt-5">
      <div className="container mt-4 p-4 mb-5" style={{display: "flex", alignItems: "center", backgroundColor: "aliceblue", boxShadow: "3px 4px 5px"}}>
          <img src={home} alt="key_image"/>
          <h6 className="display-6" style={{marginLeft: '30px'}}>
            You are the <b>master</b> of <b>your destiney,</b> you can <b>influence direct</b> and <b>control</b> your own environment you can make <b>your life</b> what <b> you want it to be.</b> <br/>
            <a className="btn btn-success mt-5" href={cv} download="myCV" role="button">Download CV</a>
          </h6>
      </div>
    </div>
    </>
  );
}

export default App;
