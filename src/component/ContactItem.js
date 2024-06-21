import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { useSelector } from 'react-redux';

const ContactItem = ({ item }) => {
  console.log(item);
  return (
    <Row className='contact-item-box'>
      <Col lg={2}>
        <img
          width='80px'
          src='https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI='
        ></img>
      </Col>
      <Col lg={10}>
        <div>{item.name}</div>
        <div>{item.phoneNumber} </div>
      </Col>
    </Row>
  );
};

export default ContactItem;
