import { useState } from "react";
import { Image, Col, Row, Toast, Container } from "react-bootstrap";

const ToastList = ({ skill, index }) => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);
  return (
    <Col md={6} className="mb-2">
      <Image src={skill.icon_url} onClick={toggleShow} className="mb-2" />
      <Toast show={show} onClose={toggleShow}>
        <Toast.Header>
          <img src={skill.icon_url} className="rounded me-2 toastImg" alt="" />
          <strong className="me-auto">{skill.skill_name}</strong>
          <small>Use case</small>
        </Toast.Header>
        <Toast.Body>
          <div>{skill.description}</div>
          Click <a href={skill.link}>here</a> to learn more.{" "}
        </Toast.Body>
      </Toast>
    </Col>
  );
};

export default ToastList;
