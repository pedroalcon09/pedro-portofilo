import "./skills.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Row, Col } from "react-bootstrap";
import js from "../../imgs/js.png";
import world from "../../imgs/world.png";
import foto from "../../imgs/foto.jpg";
import node from "../../imgs/node.png";
import ts from "../../imgs/ts.png";
import typeorm from "../../imgs/typeorm.png";
import python from "../../imgs/python.png";
import pg from "../../imgs/pg.png";
import postman from "../../imgs/postman.png";
import jest from "../../imgs/jest.png";
import django from "../../imgs/django.png";
import bootstrap from "../../imgs/bootstrap.svg";
import docker from "../../imgs/docker.png";
import react from "../../imgs/react.png";
import html from "../../imgs/html.png";
import css from "../../imgs/css.png";
import sql from "../../imgs/sql.png";
import vscode from "../../imgs/vscode.png";
import git from "../../imgs/git.png";
import pytest from "../../imgs/pytest.png";
import heroku from "../../imgs/heroku.png";
import vercel from "../../imgs/vercel.png";
import trello from "../../imgs/trello.png";
import clickup from "../../imgs/clickup.png";
import wappler from "../../imgs/wappler.png";
import beekeeper from "../../imgs/beekeeper.png";
import leaflet from "../../imgs/leaflet.png";
import google from "../../imgs/google.png";
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
                    <div className="skill-container">
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
