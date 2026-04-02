import React from 'react'

function Stats() {
    return ( 
       <div className='container p-3 mt-5'>
            <div className='row p-5'>
                <div className='col-6 '>
                  <h2 className='mb-5'>Trust with confidence</h2> 
                  <h4>Customer-first always</h4>
                  <p className='mb-4 text-muted'>That's why 1.6+ crore customers trust Zerodha with ~ ₹6 lakh crores of , equity investments, making us India’s largest broker; contributing to 15% of daily retail   exchange volumes in India.</p>
                  <h4>No spam or gimmicks</h4>
                  <p className='mb-4 text-muted'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like. <a href='#' style={{textDecoration:"none"}}>Our philosophies.</a></p>
                  <h4>The Zerodha universe</h4>
                  <p className='mb-4 text-muted'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                  <h4>Do better with money</h4>
                  <p>With initiatives like <a href='#'style={{textDecoration:"none"}}>Nudge</a> and <a href="#"style={{textDecoration:"none"}}>Kill Switch,</a> we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className='col-6 p-5'>
                    <img src='media/ecosystem.png' style={{width:"100%"}}></img>
                    <div className='text-center mt-5'>
                        <a href='#'style={{textDecoration:"none", fontSize:"1.25rem"}}>Explore our products <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                        <a href='#' style={{textDecoration:"none", fontSize:"1.25rem"}} className='mx-5'>Try Kite demo <i class="fa fa-long-arrow-right" aria-hidden="true"></i></a>
                    </div>
                </div>
                <div className='col-12 text-center mt-5'>
                    <img src='media/pressLogos.png' style={{width:"80%"}}></img>
                </div>
            </div>
       </div>
     );
}

export default Stats;