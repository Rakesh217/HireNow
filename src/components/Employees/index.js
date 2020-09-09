import React, { Component } from 'react';
import Employees from '../Display_Employees/index';
import Filter from '../Filter/index';
import {Container, Row, Col} from "react-bootstrap";

export default class index extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col> <Filter></Filter> </Col>
                    <Col> <Employees></Employees> </Col>
                </Row>
            </Container>
        )
    }
}
