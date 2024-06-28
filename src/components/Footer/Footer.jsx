

import React from 'react'
import {Container , Row , Col , ListGroup, ListGroupItem  } from 'reactstrap'
import logo from '../../assets/images/res-logo.png'

import '../../styles/footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return <footer className='footer'>
    <Container>
      <Row>
        <Col lg='3' md='4' sm='6'>
        <div className=' footer__logo text-start'>
          <img src={logo} alt='logo' />
          <h5>Tasty Treat</h5>
          <p>
            Lorem ipsum dolor sit amet, consectetur 
            adipisicing elit. Corporis quia culpa nesciunt! 
          </p>
        </div>
        </Col>

        <Col lg='3' md='4' sm='6'>
          <h5 className='footer__title'>Delivery Time</h5>
          <ListGroup className='delivery__time-list'>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Sunday - Thursday</span>
              <p>10:00am - 11:00pm</p>
            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Friday - Saturday</span>
              <p>Off day</p>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer__title'>Contact </h5>
          <ListGroup className='delivery__time-list'>

          <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <p>Location:  Sheraton Al Matar, El Nozha, Cairo </p>
            </ListGroupItem>
            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Phone: 01235987456</span>
            </ListGroupItem>

            <ListGroupItem className='delivery__time-item border-0 ps-0'>
              <span>Email: deliveryFood@gmail.com</span>
            </ListGroupItem>
          </ListGroup>
        </Col>

        <Col lg='3' md='4' sm='6'>
        <h5 className='footer__title'>NewsLetter </h5>
        <p>Subscribe our newsLetter</p>
        <div className='newsletter'>
          <input type='email' placeholder='Enter your email' />
          <span><i class='ri-send-plane-line'></i></span>
        </div>
        </Col>
      </Row>

      <Row className='mt-5'>
        <Col lg='6' md='6'>
          <p className='copyright__text'>CopyRight - 2024. All Rights Reserved</p>
        </Col>
        <Col lg='6' md='6'>
          <div className='social__links d-flex align-items-center gap-4
          justify-content-end'>

            <p className='m-0'>Follow: </p>

            <span><Link to='https://www.facebook.com/profile.php?id=100048722721198&mibextid=ZbWKwL' className='text-decoration-none'>
            <i class='ri-facebook-line'></i></Link></span>

            <span><Link to='https://github.com/nurM7md' className='text-decoration-none'>
            <i class='ri-github-line'></i></Link></span>

            <span><Link to='https://twitter.com/toxicBoa_?t=9SS5960viFrq_N3_yrbudQ&s=09' className='text-decoration-none'>
            <i class='ri-twitter-line'></i></Link></span>

            <span><Link to='https://www.instagram.com/_nur_m7md?igshid=NGVhN2U2NjQ0Yg==' className='text-decoration-none'>
            <i class='ri-instagram-line'></i></Link></span>

          </div>
        </Col>
      </Row>
    </Container>
  </footer>
}

export default Footer