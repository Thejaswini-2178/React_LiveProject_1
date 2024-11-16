import React from 'react'

const Services = () => {
    return (
        <div>
            <div>
                <div className="container-fluid bg-light p-0 wow fadeIn" data-wow-delay="0.1s">
                    <div className="row gx-0 d-none d-lg-flex">
                        <div className="col-lg-7 px-5 text-start">
                            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                                <small className="fa fa-map-marker-alt text-primary me-2" />
                                <small>123 Street, New York, USA</small>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center py-3">
                                <small className="far fa-clock text-primary me-2" />
                                <small>Mon - Fri : 09.00 AM - 09.00 PM</small>
                            </div>
                        </div>
                        <div className="col-lg-5 px-5 text-end">
                            <div className="h-100 d-inline-flex align-items-center py-3 me-4">
                                <small className="fa fa-phone-alt text-primary me-2" />
                                <small>+012 345 6789</small>
                            </div>
                            <div className="h-100 d-inline-flex align-items-center">
                                <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href><i className="fab fa-facebook-f" /></a>
                                <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href><i className="fab fa-twitter" /></a>
                                <a className="btn btn-sm-square rounded-circle bg-white text-primary me-1" href><i className="fab fa-linkedin-in" /></a>
                                <a className="btn btn-sm-square rounded-circle bg-white text-primary me-0" href><i className="fab fa-instagram" /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container-fluid page-header py-5 mb-5 wow fadeIn" data-wow-delay="0.1s">
                    <div className="container py-5">
                        <h1 className="display-3 text-white mb-3 animated slideInDown">Services</h1>
                        <nav aria-label="breadcrumb animated slideInDown">
                            <ol className="breadcrumb text-uppercase mb-0">
                                <li className="breadcrumb-item"><a className="text-white" href="#">Home</a></li>
                                <li className="breadcrumb-item"><a className="text-white" href="#">Pages</a></li>
                                <li className="breadcrumb-item text-primary active" aria-current="page">Services</li>
                            </ol>
                        </nav>
                    </div>
                </div>
                <div className="container-xxl py-5">
                    <div className="container">
                        <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
                            <p className="d-inline-block border rounded-pill py-1 px-4">Services</p>
                            <h1>Health Care Solutions</h1>
                        </div>
                        <div className="row g-4">
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item bg-light rounded h-100 p-5">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                        <i className="fa fa-heartbeat text-primary fs-4" />
                                    </div>
                                    <h4 className="mb-3">Cardiology</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item bg-light rounded h-100 p-5">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                        <i className="fa fa-x-ray text-primary fs-4" />
                                    </div>
                                    <h4 className="mb-3">Pulmonary</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item bg-light rounded h-100 p-5">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                        <i className="fa fa-brain text-primary fs-4" />
                                    </div>
                                    <h4 className="mb-3">Neurology</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                                <div className="service-item bg-light rounded h-100 p-5">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                        <i className="fa fa-wheelchair text-primary fs-4" />
                                    </div>
                                    <h4 className="mb-3">Orthopedics</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                                <div className="service-item bg-light rounded h-100 p-5">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                        <i className="fa fa-tooth text-primary fs-4" />
                                    </div>
                                    <h4 className="mb-3">Dental Surgery</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                                <div className="service-item bg-light rounded h-100 p-5">
                                    <div className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4" style={{ width: 65, height: 65 }}>
                                        <i className="fa fa-vials text-primary fs-4" />
                                    </div>
                                    <h4 className="mb-3">Laboratory</h4>
                                    <p className="mb-4">Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet diam sed stet.</p>
                                    <a className="btn" href><i className="fa fa-plus text-primary me-3" />Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Services
