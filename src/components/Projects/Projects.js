import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import wandurlust from "../../Assets/Projects/wandurlust.png";
import countryapi from "../../Assets/Projects/countryapi.png";
import ecommerce from "../../Assets/Projects/ecommerce.png";
function Projects() {
  return (
    <Container fluid className="project-section">
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countryapi}
              isBlog={false}
              title="Country Api"
              description="Country API to retrieve and display detailed information about countries from around the world. The application allows users to explore various data points such as country name, capital, population, area, languages, currencies, and more."
              ghLink="https://github.com/rumjotsingh/country"
              demoLink="https://country-omega-nine.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Ecommerce"
              description="This eCommerce application allows users to log in as either **admins** or **customers**, each having distinct roles. **Admins** can create, update, and delete products, while **users** can browse products, add them to the cart, and complete the checkout process. All routes are secured through **authentication** and **authorization**, with role-based access control (RBAC) ensuring that only authorized individuals access certain features.The application uses the **Context API** to manage global state, such as user authentication, product lists, and shopping cart data."
              ghLink="https://github.com/rumjotsingh/ecommerce-frontend"
              demoLink="https://ecommerce-frontend1-ln5a.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={wandurlust}
              isBlog={false}
              title="Wandurlust"
              description="Wanderlust is a full-stack application designed to offer user-friendly home-sharing experience, similar to the popular platform Airbnb. With Wanderlust, users can effortlessly list their homes."
              ghLink="https://github.com/rumjotsingh/WandurLust"
              demoLink="https://major-zgeb.onrender.com/"
            />
          </Col>
            <Col md={4} className="project-card">
            <ProjectCard
              imgPath={carSystem}
              isBlog={false}
              title="Car System"
              description="This project is a car system that allows users to view, add, update, and delete cars. The application uses  to calculate the car loan and onRoad price of the car."
              ghLink="https://github.com/rumjotsingh/carSystem"
              demoLink="https://carsystem-zeta.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
