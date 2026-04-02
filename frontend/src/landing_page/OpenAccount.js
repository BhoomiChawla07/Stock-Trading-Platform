import React from 'react'


function OpenAccount() {
    return ( 
         <div className="container p-5">
            <div className="row text-center mb-5">
               <img src='media/homeHero.png' alt='Hero Image' className='mb-5'/>
               <h2 className='mt-5 mb-4'>Open a Zerodha account</h2>
               <p>Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and F&O trades.</p>
               <button className='btn btn-primary p-2 mt-3 fs-5' style={{width:"18%", margin:"0 auto"}}>Sign up for free</button>
            </div>
         </div>
     );
}

export default OpenAccount;