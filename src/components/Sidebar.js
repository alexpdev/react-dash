
import React, { useState } from "react";
import SimpleBar from 'simplebar-react';
import { useLocation } from "react-router-dom";
import { CSSTransition } from 'react-transition-group';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBook, faBoxOpen, faChartPie, faCog, faFileAlt, faHandHoldingUsd, faSignOutAlt, faTable, faTimes, faRocket } from "@fortawesome/free-solid-svg-icons";
import { Nav, Badge, Image, Button, Dropdown, Accordion, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { routes } from "../routes";
import ReactHero from "../assets/img/technologies/react-hero-logo.svg";
import ProfilePicture from "../assets/img/team/profile-picture-3.jpg";

const SideBar = (props = {}) => {
  const location = useLocation();
  const { pathname } = location;
  const [show, setShow] = useState(false);
  const showClass = show ? "show" : "";

  const onCollapse = () => setShow(!show);

  const CollapsableNavItem = (props) => {
    const { eventKey, title, icon, children = null } = props;
    const defaultKey = pathname.indexOf(eventKey) !== -1 ? eventKey : "";

    return (
      <Accordion as={Nav.Item} defaultActiveKey={defaultKey}>
        <Accordion.Item eventKey={eventKey}>
          <Accordion.Button as={Nav.Link} className="d-flex justify-content-between align-items-center">
            <span>
              <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span>
              <span className="sidebar-text">{title}</span>
            </span>
          </Accordion.Button>
          <Accordion.Body className="multi-level">
            <Nav className="flex-column">
              {children}
            </Nav>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    );
  };

  const NavItem = (props) => {
    const { title, link, external, target, icon, image, badgeText, badgeBg = "secondary", badgeColor = "primary" } = props;
    const classNames = badgeText ? "d-flex justify-content-start align-items-center justify-content-between" : "";
    const navItemClassName = link === pathname ? "active" : "";
    const linkProps = external ? { href: link } : { as: Link, to: link };

    return (
      <Nav.Item className={navItemClassName} onClick={() => setShow(false)}>
        <Nav.Link {...linkProps} target={target} className={classNames}>
          <span>
            {icon ? <span className="sidebar-icon"><FontAwesomeIcon icon={icon} /> </span> : null}
            {image ? <Image src={image} width={20} height={20} className="sidebar-icon svg-icon" /> : null}

            <span className="sidebar-text">{title}</span>
          </span>
          {badgeText ? (
            <Badge pill bg={badgeBg} text={badgeColor} className="badge-md notification-count ms-2">{badgeText}</Badge>
          ) : null}
        </Nav.Link>
      </Nav.Item>
    );
  };

  return (
    <>
      <Navbar expand={false} collapseOnSelect variant="dark" className="navbar-theme-primary px-4 d-md-none">
        <Navbar.Brand className="me-lg-5" as={Link} to={routes.DashboardOverview.path}>
          <Image src={ReactHero} className="navbar-brand-light" />
        </Navbar.Brand>
        <Navbar.Toggle as={Button} aria-controls="main-navbar" onClick={onCollapse}>
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
      </Navbar>
      <CSSTransition timeout={300} in={show} classNames="sidebar-transition">
        <SimpleBar className={`collapse ${showClass} sidebar d-md-block bg-primary text-white`}>
          <div className="sidebar-inner px-4 pt-3">
            <div className="user-card d-flex d-md-none align-items-center justify-content-between justify-content-md-center pb-4">
              <div className="d-flex align-items-center">
                <div className="user-avatar lg-avatar me-4">
                  <Image src={ProfilePicture} className="card-img-top rounded-circle border-white" />
                </div>
                <div className="d-block">
                  <h6>Hi, Jane</h6>
                  <Button as={Link} variant="secondary" size="xs" to={routes.Signin.path} className="text-dark">
                    <FontAwesomeIcon icon={faSignOutAlt} className="me-2" /> Sign Out
                  </Button>
                </div>
              </div>
              <Nav.Link className="collapse-close d-md-none" onClick={onCollapse}>
                <FontAwesomeIcon icon={faTimes} />
              </Nav.Link>
            </div>
            <Nav className="flex-column pt-3 pt-md-0">
              <NavItem title="Volt React" link={routes.Presentation.path} image={ReactHero} />

              <NavItem title="Overview" link={routes.DashboardOverview.path} icon={faChartPie} />
              <NavItem title="Transactions" icon={faHandHoldingUsd} link={routes.Transactions.path} />
              <NavItem title="Settings" icon={faCog} link={routes.Settings.path} />

              <CollapsableNavItem eventKey="tables/" title="Tables" icon={faTable}>
                <NavItem title="Bootstrap Table" link={routes.BootstrapTables.path} />
              </CollapsableNavItem>

              <CollapsableNavItem eventKey="examples/" title="Page Examples" icon={faFileAlt}>
                <NavItem title="Sign In" link={routes.Signin.path} />
                <NavItem title="Sign Up" link={routes.Signup.path} />
                <NavItem title="Forgot password" link={routes.ForgotPassword.path} />
                <NavItem title="Reset password" link={routes.ResetPassword.path} />
                <NavItem title="Lock" link={routes.Lock.path} />
                <NavItem title="404 Not Found" link={routes.NotFound.path} />
                <NavItem title="500 Server Error" link={routes.ServerError.path} />
              </CollapsableNavItem>


              <Dropdown.Divider className="my-3 border-indigo" />

              <CollapsableNavItem eventKey="documentation/" title="Getting Started" icon={faBook}>
                <NavItem title="Overview" link={routes.DocsOverview.path} />
                <NavItem title="Download" link={routes.DocsDownload.path} />
                <NavItem title="Quick Start" link={routes.DocsQuickStart.path} />
                <NavItem title="License" link={routes.DocsLicense.path} />
                <NavItem title="Folder Structure" link={routes.DocsFolderStructure.path} />
                <NavItem title="Build Tools" link={routes.DocsBuild.path} />
                <NavItem title="Changelog" link={routes.DocsChangelog.path} />
              </CollapsableNavItem>
              <CollapsableNavItem eventKey="components/" title="Components" icon={faBoxOpen}>
                <NavItem title="Accordion" link={routes.Accordions.path} />
                <NavItem title="Alerts" link={routes.Alerts.path} />
                <NavItem title="Badges" link={routes.Badges.path} />
                <NavItem title="Breadcrumbs" link={routes.Breadcrumbs.path} />
                <NavItem title="Buttons" link={routes.Buttons.path} />
                <NavItem title="Forms" link={routes.Forms.path} />
                <NavItem title="Modals" link={routes.Modals.path} />
                <NavItem title="Navbars" link={routes.Navbars.path} />
                <NavItem title="Navs" link={routes.Navs.path} />
                <NavItem title="Pagination" link={routes.Pagination.path} />
                <NavItem title="Popovers" link={routes.Popovers.path} />
                <NavItem title="Progress" link={routes.Progress.path} />
                <NavItem title="Tables" link={routes.Tables.path} />
                <NavItem title="Tabs" link={routes.Tabs.path} />
                <NavItem title="Toasts" link={routes.Toasts.path} />
                <NavItem title="Tooltips" link={routes.Tooltips.path} />
              </CollapsableNavItem>
              <Button as={Link} to={routes.Upgrade.path} variant="secondary" className="upgrade-to-pro"><FontAwesomeIcon icon={faRocket} className="me-1" /> Upgrade to Pro</Button>
            </Nav>
          </div>
        </SimpleBar>
      </CSSTransition>
    </>
  );
};

export default SideBar;