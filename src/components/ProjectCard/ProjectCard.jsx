import "../Projects/projects.scss";
import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, img, description }) => {
  return (
    <Col sm={4} md={3}>
      <div className="proj-imgbx">
        <img
          src={`https://raw.githubusercontent.com/pedroalcon09/pedro-portofilo/starter/src/imgs/${img}`}
          alt={`${title}-IMG`}
        />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
