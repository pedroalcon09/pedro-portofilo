import "./projectcard.scss";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, img, description }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
          <img
            src={`https://raw.githubusercontent.com/pedroalcon09/pedro-portfolio/starter/src/imgs/${img}`}
            alt=""
          />
      </div>
      <div className="proj-txtx">
        <h4>{title}</h4>
        <span>{description}</span>
      </div>
    </Col>
  );
};
