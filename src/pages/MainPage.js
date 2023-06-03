import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import { faReact, } from "@fortawesome/free-brands-svg-icons";
import { Col, Row, Image, Button, Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

import { routes } from "../routes";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";

const MainPage = () => {
  return (
    <>
      <Navbar variant="dark" expand="lg" bg="dark" className="navbar-transparent navbar-theme-primary sticky-top">
        <Container className="position-relative justify-content-between px-3">
          <Navbar.Brand as={HashLink} to="#home" className="me-lg-3 d-flex align-items-center">
            <Image src={ReactHero} />
            <span className="ms-2 brand-text d-none d-md-inline">Data Dashboard</span>
          </Navbar.Brand>
          <div className="d-flex align-items-center">
            <Navbar.Collapse id="navbar-default-primary">
              <Nav className="navbar-nav-hover align-items-lg-center">
                <Nav.Link as={HashLink} to="#">item1</Nav.Link>
                <Nav.Link as={HashLink} to="#">item2</Nav.Link>
                <Nav.Link as={HashLink} to="#" className="d-sm-none d-xl-inline">item3</Nav.Link>
                <Nav.Link as={HashLink} to="#">item4</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <section className="section-header overflow-hidden pt-5 pt-lg-6 pb-9 pb-lg-12 bg-primary text-white" id="home">
        <Container>
          <Row>
            <Col xs={12} className="text-center">
              <div className="react-big-icon d-none d-lg-block"><span className="fab fa-react"></span></div>
              <h1 className="fw-bolder text-secondary">Dashboard</h1>
              <div className="d-flex align-items-center justify-content-center">
                <Button variant="secondary" as={Link} to={routes.DashboardOverview.path} className="text-dark me-3">
                  Explore <FontAwesomeIcon icon={faExternalLinkAlt} className="d-none d-sm-inline ms-1" />
                </Button>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-center">
                  <Button as={Link} to={routes.Forms.path} variant="secondary" className="mb-5 mb-lg-0" target="_blank"><FontAwesomeIcon icon={faReact} className="me-1" /> Components examples</Button>
                </div>
              </div>
              <div className="d-flex justify-content-center flex-column mb-6 mb-lg-5 mt-5">
                <div className="text-center">
                  <Button variant="secondary" as={Link} to={routes.Signin.path} className="text-dark me-3">
                    SignIn 
                  </Button>
                </div>
              </div>
            </Col>
          </Row>
          <figure className="position-absolute bottom-0 left-0 w-100 d-none d-md-block mb-n2">
            <svg className="fill-soft" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 3000 185.4">
              <path d="M3000,0v185.4H0V0c496.4,115.6,996.4,173.4,1500,173.4S2503.6,115.6,3000,0z" />
            </svg>
          </figure>
        </Container>
      </section>
    </>
  );
};

export default MainPage;