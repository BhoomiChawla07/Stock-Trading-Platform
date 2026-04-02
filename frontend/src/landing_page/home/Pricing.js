import React from 'react'

function Pricing() {
    return ( 
        <div className='container p-5 mt-5'>
            <div className='row '>
                <div className='col-5 p-5'>
                    <h3 className='mb-3'>Unbeatable pricing</h3>
                    <p className='text-muted' style={{fontSize:"1.05rem"}}>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
                    <a style={{textDecoration:"none", fontSize:"1.25rem"}}>See pricing  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
                
                <div className='col-7 mt-4 p-5' style={{display:"flex", gap:"1rem"}}>
                    <div>
                        <img src='media/pricing-eq.svg' alt='price' style={{width:"65%"}}/>
                        <p className='text-muted' style={{fontSize:"12px"}} > Free account opening</p>
                    </div>
                    <div>
                        <img src='media/pricing-eq.svg' alt='20' style={{width:"65%"}}/>
                        <p className='text-muted' style={{fontSize:"12px"}} >  Free equity delivery and direct mutual funds</p>
                    </div>
                    <div>
                        <img src='media/other-trades.svg' alt='0 price' style={{width:"65%"}}/>
                        <p className='text-muted ' style={{fontSize:"12px"}} >  Intraday and F&O</p>
                    </div>
                </div>
            </div>
        </div>
     );
}

export default Pricing;