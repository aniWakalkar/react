import React from 'react'
import icon from '../img/profile.png'
function Navbar() {
  return (
    <>
        <nav className='navbar navbar-expand-lg navbar-light bg-light'>
            <div className='container-fluid'>
                <a className="navbar-brand mx-5" href="index.html">Portfolio</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                    </ul>
                    <form className="d-flex" style={{alignItems: 'center', marginRight: '50px'}}>
                        <h4 className="text-success" style={{marginRight:'50px'}}>Aniket Wakalkar </h4>
                        <img src={icon} alt="key_image" style={{height:'50px', width: '50px'}}/>
                    </form>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Navbar