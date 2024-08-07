import "./projects.scss";
import { projetos } from "../../data/projetos";
import { Container, Row, Col, TabContainer, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "../ProjectCard/ProjectCard";
import ReactPlayer from "react-player";
import colorSharp2 from "../../imgs/color-sharp2.png";
import colorSharp from "../../imgs/color-sharp.png";

export const Projects = () => {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>
              Esses são alguns dos projetos que já desenvolvi utilizando react,
              node, python e muitas outras tecnologias.
            </p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                defaultActiveKey="first"
                className="nav-pills mb-5 d-flex justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Front End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Back End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Música</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Sound-Design</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projetos.FRONT.map((projeto, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          img={projeto.img}
                          title={projeto.title}
                          description={projeto.description}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projetos.BACKEND.map((projeto, index) => {
                      return (
                        <ProjectCard
                          key={index}
                          img={projeto.img}
                          title={projeto.title}
                          description={projeto.description}
                        />
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                <Row>
                      <Col sm={4} className="snd-cld">
                        <ReactPlayer
                          width="75%"
                          url="https://soundcloud.com/pedro-alcon/sets/ceviche-da-saudade"
                        />
                      </Col>

                      <Col sm={4} className="snd-cld">
                        <ReactPlayer
                          width="75%"
                          url="https://soundcloud.com/pedro-alcon/sets/ransomware-leftovers"
                        />
                      </Col>

                      <Col sm={4} className="snd-cld">
                        <ReactPlayer
                          width="75%"
                          url="https://soundcloud.com/pedro-alcon/assassinato-no-jasmin"
                        />
                      </Col>
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row>
                    {projetos.AUDIO.map((projeto, index) => {
                      return (
                        <Col sm={4} key={index}>
                          <h3>{projeto.title}</h3>
                          <div>
                            <iframe
                              title={projeto.description.split(" || ")[0]}
                              src={projeto.video}
                              frameborder="0"
                              allow="autoplay; fullscreen; picture-in-picture"
                              allowfullscreen
                            ></iframe>
                          </div>
                          <script src="https://player.vimeo.com/api/player.js"></script>
                          <h4>{projeto.description}</h4>
                        </Col>
                      );
                    })}
                  </Row>
                  
                </Tab.Pane>
              </Tab.Content>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};