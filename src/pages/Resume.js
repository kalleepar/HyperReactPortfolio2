import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardFooter,
  MDBListGroup,
  MDBListGroupItem,
} from "mdb-react-ui-kit";



export default function Resume() {
  return (
    <div>
      <MDBCard>
        <MDBCardBody>
          <MDBCardTitle>Competencies</MDBCardTitle>
          {/* download resume */}
          <a
            href="https://blog.hubspot.com/hs-fs/hubfs/resume-template_11.webp?width=595&height=400&name=resume-template_11.webp"
            target={"_blank"}
            download
            className="btn btn-primary"
            rel="noreferrer"
          >
            Click for my resume
          </a>
        </MDBCardBody>
      </MDBCard>
      <MDBCard>
        <MDBListGroup flush>
          <MDBListGroupItem>
            {/* competencies */}
            <div>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Front-End
              </span>
              <br />
              HTML <br />
              CSS <br />
              Javascript <br />
              JQuery <br />
              React <br />
              Boostrap
            </div>
          </MDBListGroupItem>
          <MDBListGroupItem>
            {" "}
            <div>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>
                Back-End
              </span>{" "}
              <br />
              API <br />
              Node <br />
              Express <br />
              MySQL,Sequelize <br />
              MongoDB, Mongoose <br />
              REST <br />
              GraphSQL
            </div>
          </MDBListGroupItem>
        </MDBListGroup>
        {/* <MDBCardFooter>Card footer</MDBCardFooter> */}
      </MDBCard>
    </div>
  );
}
