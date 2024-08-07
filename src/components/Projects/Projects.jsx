import "./projects.scss";
import { projetos } from "../../data/projetos";
import { Container, Row, Col, TabContainer, Tab } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import { ProjectCard } from "../ProjectCard/ProjectCard";

export const Projects = () => {
  return (
    <div className="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projetos</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore
              rem temporibus debitis magni inventore, eaque odit. Vel, libero
              voluptatem? Accusamus modi autem quisquam reiciendis minus error
              alias, beatae rem ab?
            </p>
            <TabContainer id="project-tabs" defaultActiveKey="first">
              <Nav variant="pills" defaultActiveKey="first">
                <Nav.Item>
                  <Nav.Link eventKey="first">Front End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Back End</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Full-Stack</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="fourth">Audio</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projetos.FRONT.map((projeto, index) => {
                      return (
                        <ProjectCard img={projeto.img} title={projeto.title} description={projeto.description}/>
                      );
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">
                  <Row>
                    {projetos.BACKEND.map((projeto, index) => {
                      return <p>{projeto.title}</p>;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="third">
                  <Row>
                    {projetos.FULLSTACK.map((projeto, index) => {
                      return <p>{projeto.title}</p>;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fourth">
                  <Row>
                    {projetos.AUDIO.map((projeto, index) => {
                      return <p>{projeto.title}</p>;
                    })}
                  </Row>
                </Tab.Pane>
              </Tab.Content>
            </TabContainer>
          </Col>
        </Row>
      </Container>
    </div>
  );
};
