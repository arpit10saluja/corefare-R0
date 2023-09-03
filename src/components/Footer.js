import React from "react";
import { Nav } from "react-bootstrap";

function Footer({ links }) {
  return (
    <footer className="bg-light text-dark">
      <div className="container py-4">
        <div className="row">
          <div className="col-md-6">
            <h5>Contact Us</h5>
            <p>
              Address: 123 Main St, Kanpur, India
              <br />
              Phone: (+91) 1234-XXXXXX
              <br />
              Email: info@gmail.com
            </p>
          </div>
          <div className="col-md-6">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              {/* This loop is run for displaying Nav link */}
              {links.map((el, index) => {
                return (
                  <Nav.Link key={index} href={"/" + el}>
                    {el}
                  </Nav.Link>
                );
              })}
            </ul>
          </div>
        </div>
        <hr />
        <p className="text-center">&copy; 2023 Core Fare Pvt. Ltd </p>
      </div>
    </footer>
  );
}

export default Footer;
