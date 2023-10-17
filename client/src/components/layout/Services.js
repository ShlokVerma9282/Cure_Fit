import React from 'react'
import img from './doctor (1).png'
import FeaturesNew from './FeaturesNew'
import Footer from './Footer'

const Services = () => {
    return (
        <>        <section data-bs-version="5" className="header1 cid-sIjMv8j33t mbr-fullscreen" id="header1-1">

    

    

    <div className="container">
        <div className="main-container row">
            <div className="col-12 col-lg-6">
                <div className="mb-3 mb-sm-4 mt-3 mt-md-4 mt-lg-0">
                    <h1 className="m-0 mbr-section-title mbr-fonts-style main-title display-1" style={{fontSize:"75px"}}>Online doctor appointment scheduling software.</h1>
                    </div>
                
                <p className="mbr-text mbr-fonts-style mt-1 mt-sm-2 mb-lg-2 mb-md-1 display-7">
                Increase efficiency and keep patients at the heart of your practice.</p>
                <div className="mbr-section-btn mt-3 mt-md-4"><a className="btn btn-primary display-4" href="#">LEARN
                        MORE</a></div>
            </div>
            <div className="col">
                <img className="main-img" src={img}/>
            </div>
        </div>
    </div>
</section>
<div>
<FeaturesNew/>

</div>
<div>
    <Footer/>
</div>
</>


    // </div>
  )
}

export default Services