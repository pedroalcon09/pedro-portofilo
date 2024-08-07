import "./skills.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import { skills } from "../../data/skills";

import {
  SiJavascript,
  SiCss3,
  SiPython,
  SiReact,
  SiPostgresql,
  SiDjango,
  SiHtml5,
  SiJest,
  SiNodedotjs,
  SiLeaflet,
  SiBootstrap,
  SiGit,
} from "react-icons/si";

export const Skills = () => {
  
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const iconMap = {
    SiJavascript: SiJavascript,
    SiCss3: SiCss3,
    SiPython: SiPython,
    SiReact: SiReact,
    SiPostgresql: SiPostgresql,
    SiDjango: SiDjango,
    SiHtml5: SiHtml5,
    SiJest: SiJest,
    SiNodedotjs: SiNodedotjs,
    SiLeaflet: SiLeaflet,
    SiBootstrap: SiBootstrap,
    SiGit: SiGit,
  };

  

  return (
    <div className="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <div className="skill-header">
                <h2>Habilidades</h2>
                <p>
                  Essas são algumas das habilidades em que me destaco mais e
                  estudo há mais tempo
                </p>
              </div>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
              >
                {skills.map((skill, index) => {
                  const IconComponent = iconMap[skill.icon];

                  return (
                    <div key={index} className="skill-container">
                      <div className="item" key={index}>
                        <div className="purple-circle">
                          <IconComponent />
                        </div>

                        <h5>{skill.tech}</h5>
                      </div>
                      <div className="tooltip-text">{skill.description}</div>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>

    </div>
  );
};
