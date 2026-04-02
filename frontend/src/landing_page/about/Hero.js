import React from 'react'


function Hero() {
    return (  
       <div className="container mt-5">
        <div className="row mb-5 p-4">
            <h3 className='fs-3 text-center mt-5'>We pioneered the discount broking model in India.<br/>
                Now, we are breaking ground with our technology.</h3>
        </div>
       
         <div className="row mt-5 border-top p-4 text-muted fs-6" style={{lineHeight:"1.8", fontSize:"1.2rem"}}>
            <div className="col-md-6 p-5">
                <p>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>

                <p>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India.</p>

                <p>Over 1.6+ crore clients place billions of orders every year through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
            </div>
            <div className="col-md-6 p-5">
                <p>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>

                <p><a style={{textDecoration:"none"}}>Rainmatter</a>, our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>

                <p>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us or learn more about our business and product philosophies.</p>
            </div>
      </div>
         </div>
    );
}

export default Hero;