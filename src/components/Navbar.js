// import React from "react";

// function Navbar() {
//   return (
//     <div>
//       <nav className="navbar navbar-expand-lg bg-body-tertiary">
//         <div className="container-fluid">
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarSupportedContent"
//           aria-controls="navbarSupportedContent"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>
//           <div className="collapse navbar-collapse" id="navbarSupportedContent">
//             <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/#">
//                   Home
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link active" aria-current="page" href="/#">
//                   About
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link" href="/#">
//                   Contact Us
//                 </a>
//               </li>
//               <li className="nav-item">
//                 <a className="nav-link disabled" href="/#" aria-disabled="true">
//                   Disabled
//                 </a>
//               </li>
//             </ul>
//           </div>
//             <img
//               src="https://media.licdn.com/dms/image/C560BAQFJkNXKheUOFw/company-logo_200_200/0/1629979542773?e=1701907200&v=beta&t=dBwAptNGHxJ6_cBvlRTBwQJrjZBuzRvCtj9-bGl_ah0"
//               alt="Logo"
//               className="img-fluid rounded nav-brand"
//               style={{ width: "5%", marginRight: "20px",objectFit:"fill", mixBlendMode:"darken", }}
//             />
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

const MyNavbar = ({ links }) => {
  // console.log(links);
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        {/* This toggler is used for toggling the collapse menu */}
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="me-auto">
            {/* This loop is run for displaying Nav link */}
            {links.map((el, index) => {
              return <Nav.Link key={index} href={"/" + el}>{el}</Nav.Link>;
            })}
          </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/">
          <img
            src="https://media.licdn.com/dms/image/C560BAQFJkNXKheUOFw/company-logo_200_200/0/1629979542773?e=1701907200&v=beta&t=dBwAptNGHxJ6_cBvlRTBwQJrjZBuzRvCtj9-bGl_ah0"
            alt="Logo"
            className="img-fluid rounded nav-brand"
            style={{
              width: "40%",
              objectFit: "cover",
              mixBlendMode: "darken",
              marginTop: "-20px",
              marginBottom: "-20px",
            }}
          />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
