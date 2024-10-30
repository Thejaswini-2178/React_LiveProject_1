import React, { Component } from 'react';
import data from './data.json';

class Service extends Component {
  render() {
    return (
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: 600 }}>
            <p className="d-inline-block border rounded-pill py-1 px-4">Services</p>
            <h1>{data.title}</h1>
          </div>
          <div className="row g-4">
            {data.services.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay={`${0.1 + index * 0.2}s`}>
                <div className="service-item bg-light rounded h-100 p-5">
                  <div
                    className="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                    style={{ width: 65, height: 65 }}
                  >
                    <i className={`fa ${service.icon} text-primary fs-4`} />
                  </div>
                  <h4 className="mb-3">{service.title}</h4>
                  <p className="mb-4">{service.description}</p>
                  <a className="btn" href="#">
                    <i className="fa fa-plus text-primary me-3" />
                    {service.linkText}
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Service;
