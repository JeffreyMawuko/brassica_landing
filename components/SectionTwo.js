import { Fragment } from 'react';

const SectionTwo = () => {
    
  return(
    <Fragment>
        
        <section className='rounded-3r bg-green mt-5 mb-5'>
            <div className='container mb-5'>
                <div className='row d-flex align-items-center mb-5'>
                    <div className='col-4'></div>
                    <div className='col-6'>
                        <div className="btn bg-green-1 rounded-pill mb-2 mb-lg-0 mt-5">
                            <button className="btn btn-warning rounded-pill px-4 mb-2 mb-lg-0 me-4" >
                                <span className="d-flex align-items-center">
                                    <span className="small">Pay</span>
                                </span>
                            </button>
                            <button className="btn btn-outline-success text-white rounded-pill px-4 mb-2 mb-lg-0 me-4 bg-white">
                                <span className="d-flex align-items-center">
                                    <span className="small text-green">Buy</span>
                                </span>
                            </button>
                            <button className="btn btn-outline-success text-white rounded-pill px-4 mb-2 mb-lg-0 me-4 bg-white">
                                <span className="d-flex align-items-center">
                                    <span className="small text-green">Transfer</span>
                                </span>
                            </button>
                            <button className="btn btn-outline-success text-white rounded-pill px-4 mb-2 mb-lg-0 bg-white">
                                <span className="d-flex align-items-center">
                                    <span className="small text-green">Invest</span>
                                </span>
                            </button>
                            
                        </div>
                    </div>
                    <div className='col-2'></div>

                </div>
                <div className="row mt-5 mb-5">
                    <div className="col-md-6 col-sm-12">
                        <div className="text-white h3 mt-5">Pay with Brassica</div>
                        <div className="small text-white mt-4">Brassica Pay is the preferred provider of retail micro-investment services, ordered through digital 
                        channels encouraging investments for all types of investors.</div>

                        <div className="btn-toolbar mt-4">
                            <button className="btn btn-outline-white text-white rounded-pill px-4 mb-2 mb-lg-0 bg-green">
                                <span className="d-flex align-items-center">
                                    <span className="small text-white">Get Started</span>
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className='col-md-1'></div>
                    <div className='col-md-4 col-sm-6 d-flex align-items-center' style={{marginBottom:"10%"}}>
                        <img src="/assets/images/bg/3.png" className='z-index w-75'></img>

                    </div>
                </div>
            </div>
        </section>
    </Fragment>
)}
export default SectionTwo
