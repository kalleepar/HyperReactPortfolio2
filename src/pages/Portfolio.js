//6 project cards inside.
import React from "react";
import { MDBBadge } from "mdb-react-ui-kit";
import "./pages.css";

import maifrigoScreenshot from "../assets/maifrigoScreenshot.png"
import NoteTakerAdvanced from "../assets/NoteTakerAdvanced.png";
import quicksaveSample from "../assets/quicksaveSample.png";
import passwordGeneratorScreenshot from "../assets/passwordGeneratorScreenshot.png";
import logoMaker from "../assets/logoMaker.png";


//JSX 6 cards.
export default function Portfolio() {
  return (
    <div class="row row-cols-1 row-cols-sm-3 g-4">
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={maifrigoScreenshot}
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">Gourmet Guidance Chef app</h5>
            <p className="card-text">
            This app was created as a way for the user to create an account for an app that provides a quick and simple way to search up an ingredient, food category, keywood, or dish name to find a recipe. It also provides the user with a look at some famous menus.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://gourmetguidance-c19d01e6a962.herokuapp.com/"
                className="btn btn-primary"
              >
                Website
              </a>
              <a
                href="https://github.com/kalleepar/Gourmet-Guidance"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="maifrigoTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                Node JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Javascript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                MongoDB
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                React JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Express JS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                API - Server Side
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JWT Authentification
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={NoteTakerAdvanced}
            class="card-img-top"
            alt="Hollywood Sign on The Hill"
          />
          <div className="card-body">
            <h5 className="card-title">Note Taker Advanced</h5>
            <p className="card-text">
            Write and save notes using express
            </p>
            <div className="d-flex justify-content-evenly">
              {/* links to github and deployed app */}
              <a
                href="https://app.screencastify.com/v3/watch/ChOLD5wHqxb49AjDtVuu"
                className="btn btn-primary"
              >
                Video
              </a>
              <a
                href="https://github.com/kalleepar/NoteTakerAdvanced"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              Express
            </MDBBadge>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              fs
            </MDBBadge>
            <MDBBadge
              pill
              className="mx-2"
              color="info"
              light
              style={{ margin: "23px" }}
            >
              uuid
            </MDBBadge>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={logoMaker}
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">Logo Maker 10</h5>
            <p className="card-text">
            Create a logo for your brand with unique color, shape, and text!
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://app.screencastify.com/v3/watch/1j4NRAyaTuEyuDfVKqha"
                className="btn btn-primary"
              >
                Video
              </a>
              <a
                href="https://github.com/kalleepar/LogoMaker10"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="textEdTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
              Inquirer
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                fs
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Jest
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={quicksaveSample}
            class="card-img-top"
            alt="Palm Springs Road"
          />
          <div className="card-body">
            <h5 className="card-title">Quick Save</h5>
            <p className="card-text">
            Modernized game deals site to make searching for gaming deals easy and fun.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://kalleepar.github.io/GroupProject1/home.html"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/kalleepar/GroupProject1"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="organiseMyShopStockTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                API
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                jQuery/jQueryUI
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Materialize
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Express JS
             </MDBBadge>         
          </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src="https://ecm.capitalone.com/WCM/tech/images/blog-headers/2022/tech-blog-social-graphics-blog-headers-final-03.jpg"
            class="card-img-top"
            alt="Los Angeles Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Tech Blog 26</h5>
            <p className="card-text">
            This program was developed to log comments with other users.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://techblog24-0d7e81aabf93.herokuapp.com/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/kalleepar/TechBlog26"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="scheduleMyLifeTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
               mysql2
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                dotenv
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Sequelize
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                Express
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card w-60 h-40 m-5">
          <img
            className="imgScreenshot"
            src={passwordGeneratorScreenshot}
            class="card-img-top"
            alt="Skyscrapers"
          />
          <div className="card-body">
            <h5 className="card-title">Generate My Password App</h5>
            <p className="card-text">
              This app was created with JavaScript, it allows the user to
              generate a random password for websites.
            </p>
            <div className="d-flex justify-content-evenly">
              <a
                href="https://kalleepar.github.io/password-generator/"
                className="btn btn-primary"
              >
                App
              </a>
              <a
                href="https://github.com/kalleepar/password-generator"
                className="btn btn-primary"
              >
                Github
              </a>
            </div>
            <div className="generateMyPasswordTechnologies">
              <MDBBadge pill className="mx-2" color="info" light>
                HTML5
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                CSS
              </MDBBadge>
              <MDBBadge pill className="mx-2" color="info" light>
                JavaScript
              </MDBBadge>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
