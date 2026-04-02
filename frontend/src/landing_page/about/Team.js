import React from 'react'
import { Link } from 'react-router-dom';


function Team() {
    return ( 
        <div className='container border-top mt-5 mb-5  my-5'>
        
        <div className='row text-center mt-5  mb-5'>
            <h3 className='text-center '>People</h3>
        </div>
            
        <div className='row mb-5 '>
            <div className='col-md-6 mb-4 b'>
                <img src='media/nithinKamath.jpg' alt="office" className='rounded-circle mb-3 mt-4' style={{width:"50%", marginLeft:"15rem"}}></img>
                <p className='text-muted text-center mt-4 fs-5' style={{marginLeft:"10rem"}}>Nithin Kamath</p>
                <p className='text-muted text-center' style={{marginLeft:"10rem"}}>Founder, CEO</p>
            </div>
            <div className='col-md-6 mt-5' style={{lineHeight:"1.8", fontSize:"1.15rem"}}>
                <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
                <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
                <p>Playing basketball is his zen.</p>
                <p>Connect on <Link to= "/" style={{textDecoration:"none"}}>Homepage</Link> / <Link to= "/" style={{textDecoration:"none"}} >TradingQnA</Link> / <Link to= "/" style={{textDecoration:"none"}}>Twitter</Link></p>
            </div>
            
        </div>



            <h2 className='text-center mb-4 mt-5'>Meet Our Team</h2>
            <div className='row'>
                <div className='col-md-4 text-center'>
                    <img src='media/nikhil.jpg' alt="team member" className='rounded-circle mb-3' style={{width:"150px", height:"150px", objectFit:"cover"}}></img>
                    <h5>Nikhil Kamath</h5>
                    <p className='text-muted'>Co-Founder & CEO</p>
                </div>
                <div className='col-md-4 text-center'>
                    <img src='media/kailash.jpg' alt="team member" className='rounded-circle mb-3' style={{width:"150px", height:"150px", objectFit:"cover"}}></img>
                    <h5>Dr. Kailash Nadh</h5>
                    <p className='text-muted'>Chief Technology Officer</p>
                </div>
                <div className='col-md-4 text-center'>
                    <img src='media/venu.jpg' alt="team member" className='rounded-circle mb-3' style={{width:"150px", height:"150px", objectFit:"cover"}}></img>
                    <h5>Venu Madhav</h5>
                    <p className='text-muted'>Chief Operating Officer</p>
                </div>
            </div>
        </div>
     );
}

export default Team;