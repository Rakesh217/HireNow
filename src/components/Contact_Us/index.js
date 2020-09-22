import React, { Component } from "react";
import { Card } from "react-bootstrap";

export default class index extends Component {
  render() {
    return (
      <div style={{ margin: "50px", padding: "20px" }}>
        <p>
          <b>
            As a preferred domestic contact center outsourcer with multiple
            locations in the eastern United States, we take pride in our
            professional workforce and value the importance of one-on-one
            customer relationships. We can be counted on to help your brand
            succeed.
          </b>
        </p>
        <Card>
          <Card.Body>
            <Card.Title>Corporate Headquarters</Card.Title>
            <Card.Text>
              Corporate Headquarters 3700 Fishinger Blvd. Columbus, OH 43026 P.
              614-984-2399 F. 614-603-2041
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>Pennsylvania Office</Card.Title>
            <Card.Text>
              111 Roberts Rd. Suite 400 Grindstone, PA 15442 P. 724-812-5016 F.
              614-603-2041
            </Card.Text>
          </Card.Body>
        </Card>
        <Card>
          <Card.Body>
            <Card.Title>North Carolina Office</Card.Title>
            <Card.Text>
              3085 Richlands Hwy. Suite 8 Jacksonville, NC 28540 P. 910-294-5937
              F. 614-603-2041
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    );
  }
}
