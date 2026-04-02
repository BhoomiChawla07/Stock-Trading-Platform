import React from 'react'

function Hero() {
    return ( 
         <div className="container p-5">
            <div className="row text-center mb-5">
               <h2 className='mt-5 mb-4'>Zerodha Products</h2>
               <p className='fs-5'>Sleek, modern, and intuitive trading platforms.</p>
              <p>Check out our<a style={{textDecoration:"none", fontSize:"1.05rem", paddingLeft:"7px"}}>investment offerings <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a></p>
         </div>
         </div>
     );
}

export default Hero;