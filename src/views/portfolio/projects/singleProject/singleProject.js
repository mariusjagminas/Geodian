import React from "react";
import "./singleProject.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SingleProject = () => (
  <section className="project">
    <div className="project__grid">
      <main className="project__grid--main">
        <div className="project-content">
          <h1 className="project-content__title">My First Project for You</h1>
          <p className="project-content__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            assumenda ea beatae repellendus temporibus facere alias cum fugit
            labore! Labore, quasi sit cupiditate voluptates nostrum illum dolore
            fugit iure nemo et libero nam! Nihil saepe error ad maxime dicta
            soluta expedita aut Asperiores expedita repellendus nihil assumenda
            nobis atque
          </p>
          <p className="project-content__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            doloribus accusamus dicta, libero cupiditate iure similique!
            Asperiores dolores accusantium officia ipsa alias consectetur
            nesciunt cumque, non eum quo atque iure?
          </p>
          <p className="project-content__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nesciunt cumque, non eum quo atque iure?
          </p>
          <p className="project-content__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            doloribus accusamus dicta, libero cupiditate iure similique!
            Asperiores dolores accusantium officia ipsa alias consectetur
            nesciunt cumque, non eum quo atque iure?
          </p>
        </div>
        <div className="project-images">
          <img
            src={require("./img/main-top.jpg")}
            alt=""
            className="project-images__img--top"
          />
          <img
            src={require("./img/main-bottom.jpg")}
            alt=""
            className="project-images__img--bottom"
          />
        </div>
      </main>
      {/* -------- */}
      {/* -------- */}
      {/* -------- */}
      <aside className="project__grid--aside">
        <div className="project-info">
          <h2 className="project-info__title">Project Details </h2>

          <div className="project-info__info-container">
            <p className="project-info__text-info--bold">Date</p>
            <p className="project-info__text-info">January, 2, 2017</p>
          </div>

          <div className="project-info__info-container">
            <p className="project-info__text-info--bold">Category</p>
            <p className="project-info__text-info">Web Design</p>
          </div>

          <div className="project-info__info-container">
            <p className="project-info__text-info--bold" />
            <p className="project-info__text-info">Graphic Design</p>
          </div>

          <div className="project-info__info-container">
            <p className="project-info__text-info--bold" />
            <p className="project-info__text-info">Consultance</p>
          </div>

          <div className="project-info__info-container">
            <p className="project-info__text-info--bold">Client</p>
            <p className="project-info__text-info">Rocian Studio</p>
          </div>

          <h2 className="project-info__title--bottom">Share This Project</h2>
          <div className="project-info__links-container">
            <a href="!#">
              <FontAwesomeIcon
                className="project-info__link"
                icon={["fab", "facebook-f"]}
                size="lg"
              />
            </a>
            <a href="!#">
              <FontAwesomeIcon
                className="project-info__link"
                icon={["fab", "twitter"]}
                size="lg"
              />
            </a>
            <a href="!#">
              <FontAwesomeIcon
                className="project-info__link"
                icon={["fab", "linkedin"]}
                size="lg"
              />
            </a>
          </div>
        </div>
        <div className="project-info__img-container">
          <img
            src={require("./img/aside.jpg")}
            alt=""
            className="project__img"
          />
        </div>
      </aside>
      <div className="project__grid--footer">
        <Link className="project-footer__link" to="/portfolio">
          <FontAwesomeIcon
            className="project-footer__icon"
            icon="caret-left"
            size="lg"
          />
          Back to portfolio
        </Link>
      </div>
    </div>
  </section>
);

export default SingleProject;