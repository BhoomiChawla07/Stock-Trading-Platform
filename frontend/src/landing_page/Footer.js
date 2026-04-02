import React from 'react'

function Footer() {
    return ( 
        <footer className='border-top' style={{backgroundColor:"#fbfbfb"}}>
      <div className='container  mt-5' >

        <div className='row mt-5'>
            <div className='col'>
                 <img src='media/logo.svg' alt="logo" style={{width:"65%"}}></img>
                 <p className='mt-3'>&copy; 2010 - 2026, Zerodha Broking Ltd. All rights reserved.</p>

                 <div class="f-info-socials text-muted mt-4" style={{display:"flex",gap:"1rem", fontSize:"1.5rem"}}>
                   <i class="fa fa-whatsapp" aria-hidden="true"></i>
                    <i class="fa fa-instagram" aria-hidden="true"></i>
                   <i class="fa fa-linkedin" aria-hidden="true"></i>
                    <i class="fa fa-twitter" aria-hidden="true"></i>
                    <i class="fa fa-telegram" aria-hidden="true"></i>
                    <i class="fa fa-youtube-play" aria-hidden="true"></i>
                 </div>
            </div>
            <div className='col'>
                <p>Account</p>
               <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Minor demat account<br/></a>
               <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Open demat account<br/></a>
               <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >NRI demat account<br/></a>
               <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >HUF demat account<br/></a>
               <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Commodity<br/></a>
               <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Dematerialisation<br/></a>
               <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Fund transfer<br/></a>
               <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >MTF<br/></a>
            </div>
            <div className='col'>
                <p>Support</p>
                <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Contact us<br/></a>
                <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Support portal<br/></a>
                <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >How to file a complaint?<br/></a>
                <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Status of your complaints<br/></a>
                <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Bulletin<br/></a>
                <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Circular<br/></a>
                <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Z-Connect blog<br/></a>
                <a className= "text-muted d-block mb-2" href='' style={{textDecoration:"none"}} >Downloads<br/></a>
            </div>
            <div className='col'>
                <p>Company</p>
                <a className= "text-muted d-block mb-2" style={{textDecoration:"none"}} >About<br/></a>
                <a className= "text-muted d-block mb-2" style={{textDecoration:"none"}} >Philosophy<br/></a>
                <a className= "text-muted d-block mb-2" style={{textDecoration:"none"}} >Press & media<br/></a>
                <a className= "text-muted d-block mb-2" style={{textDecoration:"none"}} >Careers<br/></a>
                <a className= "text-muted d-block mb-2" style={{textDecoration:"none"}} >Zerodha Cares (CSR)<br/></a>
                <a className= "text-muted d-block mb-2" style={{textDecoration:"none"}} >Zerodha.tech<br/></a>
                <a className= "text-muted d-block mb-2" style={{textDecoration:"none"}} >Open source<br/></a>
                <a className= "text-muted d-block mb-2" style={{textDecoration:"none"}} >Referral program<br/></a>
            </div>
            <div className='col'>
                <p>Quick links</p>
               <a className= "text-muted d-block mb-2"  style={{textDecoration:"none"}} >Upcoming IPOs<br/></a>
               <a className= "text-muted d-block mb-2"  style={{textDecoration:"none"}} >Brokerage charges</a>
               <a className= "text-muted d-block mb-2"  style={{textDecoration:"none"}} >Market holidays</a>
               <a className= "text-muted d-block mb-2"  style={{textDecoration:"none"}} >Economic calendar</a>
               <a className= "text-muted d-block mb-2"  style={{textDecoration:"none"}} >Calculators</a>
               <a className= "text-muted d-block mb-2"  style={{textDecoration:"none"}} >Markets</a>
               <a className= "text-muted d-block mb-2"  style={{textDecoration:"none"}} >Sectors</a>
               <a className= "text-muted d-block mb-2"  style={{textDecoration:"none"}} >Gift Nifty</a>
            </div>
            
        </div>

        <div className='mt-5 text-muted' style={{fontSize:"0.7rem"}}>
        <p>Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

        <p>Procedure to file a complaint on SEBI SCORES: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

        <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism</p>

        <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

        <p>Attention investors: 1) Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

        <p>India's largest broker based on networth as per NSE. NSE broker factsheet</p>

        <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please create a ticket here.</p>

        <p>*Customers availing insurance advisory services offered by Ditto (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent (Composite) License No CA0738) will not have access to the exchange investor grievance redressal forum, SEBI SCORES/ODR, or arbitration mechanism for such products.</p>
        </div>

        <div className='text-center mt-5 mb-5  ' >
            <ul className='text-center ' style={{display:"flex",justifyContent:"center" ,gap:"2rem", fontSize:"14px", listStyleType:"none"}}>
                <li className=''>
                    <a className="text-muted" style={{textDecoration:"none"}} href=''>NSE </a>
                </li>
                <li>
                    <a className="text-muted" style={{textDecoration:"none"}} href=''>BSE </a>
                </li>
                <li>
                    <a className="text-muted" style={{textDecoration:"none"}} href=''>MCX </a>
                </li>
                <li>
                    <a className="text-muted" style={{textDecoration:"none"}} href=''>Terms & Conditions </a>
                </li>
                <li>
                    <a className="text-muted" style={{textDecoration:"none"}} href=''>Policies & procedures  </a>
                </li>
                <li>
                    <a className="text-muted" style={{textDecoration:"none"}} href=''>Privacy policy  </a>
                </li>
                <li>
                    <a className="text-muted" style={{textDecoration:"none"}} href=''>Disclosure </a>
                </li>
                <li>
                    <a className="text-muted" style={{textDecoration:"none"}} href=''>For investor's attention  </a>
                </li>
                <li>
                    <a className="text-muted" style={{textDecoration:"none"}} href=''>Investor charter </a>
                </li>
            </ul>
        </div>
       </div>
       </footer>
     );
}

export default Footer;