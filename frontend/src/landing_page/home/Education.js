import React from 'react'

function Education() {
    return ( 
       <div className='container  '>
            <div className='row p-5'>
                <div className='col-6 p-5'>
                <img src='media/education.svg' style={{width:"90%"}}></img>
                </div>
                <div className='col-6 p-5'>
                    <h2 className='mb-5'>Free and open market education</h2>
                    <p className='mb-4 text-muted'>Varsity, the largest online stock market education book in the world covering everything from the basics to advanced trading.</p>
                    <a href='#'style={{textDecoration:"none", fontSize:"1.25rem"}}>Varsity  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    <p className='mb-4 mt-5 text-muted'>TradingQ&A, the most active trading and investment community in India for all your market related queries.</p>
                    <a href='#'style={{textDecoration:"none", fontSize:"1.25rem"}}>TradingQ&A  <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                </div>
            </div>
       </div>
     );
}

export default Education;