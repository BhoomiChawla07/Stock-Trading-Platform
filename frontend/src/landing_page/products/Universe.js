import React from 'react'

function Universe() {
    return ( 
        <div className='container mt-5' style={{marginTop:"5rem"}}>
            <div className='row text-center'>
                <h2>The Zerodha Universe</h2>
                <p className='text-muted'>Extend your trading and investment experience even further with our partner platforms</p>

                <div className='col-4 p-3' style={{marginTop:"3rem"}}>
                    <img src='media/smallcaseLogo.png'></img>
                    <p className='text-muted mt-3 ' style={{fontSize:"0.8rem", width:"15rem", marginLeft:"5rem"}}>Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs.</p>
                </div>

                <div className='col-4 p-3' style={{marginTop:"3rem"}}>
                    <img src='media/zerodhaFundhouse.png' style={{width:"50%"}}></img>
                    <p className='text-muted mt-3 ' style={{fontSize:"0.8rem", marginLeft:"2rem"}}>Our asset management venture that is creating simple and transparent index funds to help you save for your goals..</p>
                </div>

                <div className='col-4 p-3' style={{marginTop:"3rem"}}>
                    <img src='media/sensibullLogo.svg' style={{width:"50%"}}></img>
                    <p className='text-muted mt-3 ' style={{fontSize:"0.8rem", width:"15rem", marginLeft:"5rem"}}>Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more..</p>
                </div>

                <div className='col-4 p-3' style={{marginTop:"3rem"}}>
                    <img src='media/streakLogo.png' style={{width:"50%"}}></img>
                    <p className='text-muted mt-3 ' style={{fontSize:"0.8rem", width:"15rem", marginLeft:"5rem"}}>Systematic trading platformthat allows you to create and backtest strategies without coding.</p>
                </div>

                <div className='col-4 p-3' style={{marginTop:"3rem"}}>
                    <img src='media/dittoLogo.png'style={{width:"40%"}} ></img>
                    <p className='text-muted mt-3 ' style={{fontSize:"0.8rem", width:"15rem", marginLeft:"5rem"}}>Personalized advice on life and health insurance. No spam and no mis-selling.</p>
                </div>

                <div className='col-4 p-3' style={{marginTop:"3rem"}}>
                    <img src='media/goldenpiLogo.png' style={{width:"50%"}}></img>
                    <p className='text-muted mt-3 ' style={{fontSize:"0.8rem", width:"15rem", marginLeft:"5rem"}}>Investment research platform  that offers detailed insights on stocks, sectors, supply chains, and more.</p>
                </div>

                <button className='btn btn-primary p-2 mt-3 mb-5 fs-5' style={{width:"18%", margin:"0 auto"}}>Sign up for free</button>
                <div className='mb-5'></div>
            </div>
        </div>
     );
}

export default Universe;