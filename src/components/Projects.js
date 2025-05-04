import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/th.png";
import projImg2 from "../assets/img/memoryGame.png";
import projImg3 from "../assets/img/Tic.png";
import projImg4 from "../assets/img/Medibook.png";
import projImg5 from "../assets/img/Tic.png";
import projImg6 from "../assets/img/Tic.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Chef's Pantry- Chef’s Pantry - Smart Ingredient & Recipe Manager ",
      description: "A React Native app that tracks your pantry inventory with color‑coded expiry alerts and, with a single tap, suggests recipes based on what you have—powered by a Node.js/SQLite backend and the Spoonacular API.",
      imgUrl: projImg1,
    },
    {
      title: "Memory Game",
      description: "Leveraged Selenium and Python to design and execute both manual and automated tests for a web‑based task manager, logging issues in Jira and working closely on resolutions. Validated data consistency with SQL and produced concise test reports to surface trends and drive quality improvements..",
      imgUrl: projImg2,
    },
    {
      title: "Tic Tac Toe",
      description: "A responsive, web‑based Tic Tac Toe game built with React that lets you play head‑to‑head or challenge an AI opponent powered by the Minimax algorithm. It features dynamic score tracking, intuitive touch‑and‑click controls, and smooth animations—all wrapped in a clean, mobile‑friendly design and deployed on Vercel.",
      imgUrl: projImg3,
    },
    {
      title: "MediBook - Online Doctor Appointment Booking System",
      description: "MediBook is a full-stack online doctor appointment booking system built with ASP.NET Core MVC, SQL Server, Entity Framework, and Bootstrap. It features secure user authentication with role-based access for patients and doctors, responsive Razor views for seamless scheduling on any device, and an intuitive calendar interface for quick appointment management.",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
