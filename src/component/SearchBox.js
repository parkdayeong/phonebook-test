import React, { useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';

const SearchBox = () => {
  const [keyword, setkeyword] = useState('');
  let dispatch = useDispatch();

  const searchByName = (e) => {
    e.preventDefault();
    dispatch({ type: 'SEARCH_BY_USERNAME', payload: { keyword } });
    console.log(keyword);
  };

  return (
    <Row>
      <Col lg={10}>
        <Form.Control
          type='text'
          placeholder='이름을 입력해주세요'
          onChange={(e) => {
            setkeyword(e.target.value);
          }}
        />
      </Col>
      <Col lg={2}>
        <Button onClick={searchByName}>찾기</Button>
      </Col>
    </Row>
  );
};

export default SearchBox;
