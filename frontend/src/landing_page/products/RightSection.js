import React from 'react'

function RightSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay,appStore}) {
    return ( 
        <div className='container mt-4'>
            <div className='row '>

                <div className='col-5 p-5' style={{marginTop:"6rem"}}>
                    <h2>{productName}</h2>
                    <p className='mb-4 fs-5 mt-4'>{productDescription}</p>

                    <a style={{textDecoration:"none", fontSize:"1.15rem", }}>Learn more    <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
    

                </div>
                    
                <div className='col-7 '>
                    <img src={imageURL} alt='right'/>
                </div>
                
            </div>

        </div>
     );
}

export default RightSection;