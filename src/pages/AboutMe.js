import React from "react";
import "../pages";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardHeader,
  MDBCardFooter,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link } from "react-router-dom";

// profile picture and about me
import ProfilePic from "../assets/takumi.png";

export default function AboutMe() {
  return (
    <div>
      <div>
        <div className="aboutMe aboutMeContainer">
          <img
            src={ProfilePic}
            className="profile-picture"
            alt="profile"
            style={{
              paddingTop: "35px",
            }}
          />
          <p
            className="aboutMe text"
            style={{
              paddingTop: "35px",
              fontSize: "20px",
            }}
          >
            Hello and welcome to
         
            <br />
            Kal Parker's extraordinary portfolio
            <br />
            Email: Kalleepar@gmail.com
            <br />
            <span>
              <a href="https://github.com/kalleepar">GitHub {"   "} </a>
            </span>
            <span>
              <a href="!#">
                LinkedIn {"   "}
              </a>
            </span>
            {/* <p
          style={{
            fontSize: "15px",
          }}
        >
          Competencies: JavaScript ES6+, CSS3, HTML5, SQL, NoSQL
          <br /> MySQL, MongoDB, GitHub, Express, React.js <br /> Node.js,
          Handlebars, JQuery, Bootstrap MUI- Material Design <br /> CSS
          Framework, Client-Side and 3rd Party APIs.
        </p> */}
            <br />
          </p>
        </div>
        <MDBCard
          alignment="center"
          className="myBackgroundcard w-auto p-3 text-start"
        >
          <MDBCardHeader></MDBCardHeader>
          <MDBCardBody style={{ backgroundImage: `url("https://godotshaders.com/wp-content/uploads/2021/01/cover-2.jpg")`, }}>
          <MDBCardTitle style={{ color: 'black' }}>About Me</MDBCardTitle>
            <MDBCardText className="myBackgroundText">
              My name is Kal Parker and this is my portfolio!
              <br />
              <br />
            Browse at your own leisure!
            </MDBCardText>
          </MDBCardBody>
          <MDBCardFooter className="text-muted"></MDBCardFooter>
        </MDBCard>
      </div>
    </div>
  );
}
