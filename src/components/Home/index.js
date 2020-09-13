import React, { Component } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import image1 from "../../img/1.jpg";
import image2 from "../../img/2.jpg";
import image3 from "../../img/3.jpg";
import image4 from "../../img/4.jpg";
import { Button } from "react-bootstrap";

export default class index extends Component {
  render() {
    return (
      <div>
        <AliceCarousel autoPlay autoPlayInterval="3000">
          <img src={image1} className="sliderimg" />
          <img src={image2} className="sliderimg" />
          <img src={image3} className="sliderimg" />
          <img src={image4} className="sliderimg" />
        </AliceCarousel>

        <p className="para">
          Connect with in-demand, independent professionals and specialized
          agencies. From one-offs to longer-term contracts, you can tailor your
          engagements to achieve your business goals and scale dynamically as
          business needs change. With 1M+ reviews, get a reliable evaluation of
          candidates’ previous work from businesses like yours. Plus, unlike
          other solutions, only see client reviews from legitimate jobs
          completed though HireNow.
        </p>
        <p className="para">
          Get white-glove support for your job postings, shortlisting,
          onboarding, and driving company adoption. Plus, get a solution
          customized to your existing contingent worker policies, providing the
          protection you need—from compliance to results risk limitation to IP
          and data security.
        </p>
        <div className="centerAlign">
          <h1 style={{ color: "white" }}>What are you?</h1>
          <Button
            style={{
              margin: "10px",
              backgroundColor: "white",
              color: "#37a000",
            }}
            onClick={() => this.props.history.push("/Employees")}
          >
            Hire a Person
          </Button>
          <Button
            style={{
              margin: "10px",
              backgroundColor: "#37a000",
              color: "white",
            }}
            onClick={() => this.props.history.push("/AddEmployee")}
          >
            Free Lancer
          </Button>
        </div>
      </div>
    );
  }
}
