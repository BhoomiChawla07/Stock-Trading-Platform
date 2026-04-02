import React from 'react'

function Hero () {
    return ( 
        <div className="container mt-5">
        <div className="row mb-5">
            <h3 className='fs-2 text-center mt-5'>Charges</h3>
            <p className='fs-4 text-muted text-center mt-2'>List of all charges and taxes</p>
        </div>
       
         <div className="row mt-5 border-top p-4 text-muted fs-6" style={{lineHeight:"1.8", fontSize:"1.2rem"}}>
            <div className="col-4 p-5 text-center">
                <img src='media/pricing0.svg' alt='price0' style={{width:"80%"}}></img>
                <h2 className=''>Free Equity Delivery</h2>
                <p className='text-muted mt-3 ' style={{fontSize:"1rem", width:"20rem"}}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            
            </div>
            <div className="col-4 p-5 text-center">
                <img src='media/other-trades.svg' alt='price20' style={{width:"80%"}}></img>
                <h2 className=''>Intraday and F&O trades</h2>
                <p className='text-muted mt-3 ' style={{fontSize:"1rem", width:"19rem"}}>lat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4 p-5 text-center">
                <img src='media/pricing-eq.svg' alt='price-zero' style={{width:"80%"}}></img>
                <h2 className=''>Free direct MF</h2>
                <p className='text-muted mt-3 ' style={{fontSize:"1rem", width:"20rem"}}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>


            </div>
                
      </div>
         </div>
     );
}

export default Hero ;