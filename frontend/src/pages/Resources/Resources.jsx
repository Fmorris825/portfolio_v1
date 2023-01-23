import { useState } from "react";

import { Image, Col, Row, Toast, Container } from "react-bootstrap";
import ToastList from "../../components/ToastList/ToastList";
import data from "../../data";

import "./Resources.css";

const Resources = () => {
  return (
    <Col>
      <Row>
        <Container>
          <h1>
            Here are some of my favorite resources to build with including
            Frameworks, Libraries, and Languages.
          </h1>
        </Container>
      </Row>
      <Row>
        {data.skills.map((skill, index) => {
          return <ToastList skill={skill} key={index} index={index} />;
        })}
      </Row>
    </Col>
  );
};

export default Resources;
