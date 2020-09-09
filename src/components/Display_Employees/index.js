import React, { Component } from 'react'
import {Card, CardColumns} from "react-bootstrap";
import image1 from '../../img/1.jpg';

export default class index extends Component {
    render() {
        return (
            <div>
                <CardColumns>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Jhon Lee</Card.Title>
                        <Card.Text>
                            Work with passion. Nerver miss a dead line. Proficient in React js, HTML5, CSS3.
                            That's it.
                        </Card.Text>
                        </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="../../img/1.jpg/100px160" />
                    <Card.Body>
                        <Card.Title>Cary Linda</Card.Title>
                        <Card.Text>
                            Work with passion. Nerver miss a dead line. Proficient in React js, HTML5, CSS3.
                            That's it.
                        </Card.Text>
                        </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Tom Cruise</Card.Title>
                        <Card.Text>
                            Work with passion. Nerver miss a dead line. Proficient in React js, HTML5, CSS3.
                            That's it.
                        </Card.Text>
                        </Card.Body>
                </Card>
                <Card>
                    <Card.Img variant="top" src="holder.js/100px160" />
                    <Card.Body>
                        <Card.Title>Jady Pam</Card.Title>
                        <Card.Text>
                            Work with passion. Nerver miss a dead line. Proficient in React js, HTML5, CSS3.
                            That's it.
                        </Card.Text>
                        </Card.Body>
                </Card>

                </CardColumns>
            </div>
        )
    }
}
