import React from 'react'
import RightSection from "./RightSection"

function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay,appStore}) {
    return ( 
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-7 p-5'>
                    <img src={imageURL} style={{marginLeft:"3.5rem"}}/>
                </div>
                <div className='col-5 p-5 mt-3'>
                    <h2>{productName}</h2>
                    <p className='mb-4 fs-5 mt-4'> {productDescription}</p>
                    <div>
                    <a href='#'style={{textDecoration:"none", fontSize:"1.15rem", }}>Try demo   <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <a href='#'style={{textDecoration:"none", fontSize:"1.15rem", paddingLeft:"3rem"}}>Learn more   <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>

                    <div className='mt-4 d-flex gap-4'>
                    <a href={googlePlay} target="_blank" rel="noopener noreferrer">
                        <img src="media/googlePlayBadge.svg" alt="Google Play" style={{width: "160px", height: "auto", marginTop:"3px"}} />
                    </a>
                    <a href={appStore} target="_blank" rel="noopener noreferrer">
                        <img src="media/appStoreBadge.svg" alt="App Store" style={{width: "150px", height: "auto"}} />
                    </a>
                    </div>
                </div>       
            </div>


        {/* Left Section */}

             {/* <div className='row'>
                <div className='col-7 p-5'>
                    <img src='media/kite.png' style={{marginLeft:"3.5rem"}}/>
                </div>
                <div className='col-5 p-5 mt-3'>
                    <h2>Coin</h2>
                    <p className='mb-4 fs-5 mt-4'> Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices.</p>

                    <a href='#'style={{textDecoration:"none", fontSize:"1.15rem", }}>Coin   <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    
                </div>       
            </div> */}

        </div>


        



     );
}

export default LeftSection;