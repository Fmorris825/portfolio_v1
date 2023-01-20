import { useState } from "react";

import { Image, Col, Row, Toast, Container } from "react-bootstrap";
import ToastList from "../../components/ToastList/ToastList";
import data from "../../data";

import "./Resources.css";

const Resources = () => {
  const [show, setShow] = useState(false);

  const toggleShow = () => setShow(!show);
  return (
    <Container>
      <Row>
        {data.skills.map((skill, index) => {
          return (
            <ToastList
              skill={skill}
              toggleShow={toggleShow}
              show={show + index}
              key={index}
              index={index}
            />
          );
        })}
      </Row>
    </Container>
  );
};

export default Resources;
