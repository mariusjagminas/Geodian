import React from "react";
import "./singleProject.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

const SingleProject = () => (
  <section className="project-l-grid">
    <div className="project-l-grid__container">
      <main className="project-l-grid__column--1">
        <div className="project-c-content">
          <h1 className="project-c-content__title">My First Project for You</h1>
          <p className="project-c-content__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error,
            assumenda ea beatae repellendus temporibus facere alias cum fugit
            labore! Labore, quasi sit cupiditate voluptates nostrum illum dolore
            fugit iure nemo et libero nam! Nihil saepe error ad maxime dicta
            soluta expedita aut Asperiores expedita repellendus nihil assumenda
            nobis atque
          </p>
          <p className="project-c-content__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            doloribus accusamus dicta, libero cupiditate iure similique!
            Asperiores dolores accusantium officia ipsa alias consectetur
            nesciunt cumque, non eum quo atque iure?
          </p>
          <p className="project-c-content__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            nesciunt cumque, non eum quo atque iure?
          </p>
          <p className="project-c-content__article">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
            doloribus accusamus dicta, libero cupiditate iure similique!
            Asperiores dolores accusantium officia ipsa alias consectetur
            nesciunt cumque, non eum quo atque iure?
          </p>
        </div>
        <div className="project-c-images">
          <img
            src={require("./img/main-top.jpg")}
            alt=""
            className="project-c-images__img--top"
          />
          <img
            src={require("./img/main-bottom.jpg")}
            alt=""
            className="project-c-images__img--bottom"
          />
        </div>
      </main>
      {/* -------- */}
      {/* -------- */}
      {/* -------- */}
      <aside className="project-l-grid__column--2">
        <div className="project-c-info">
          <h2 className="project-c-info__title">Project Details </h2>

          <div className="project-c-info__text-container">
            <p className="project-c-info__text--left">Date</p>
            <p className="project-c-info__text--right">January, 2, 2017</p>
          </div>

          <div className="project-c-info__text-container">
            <p className="project-c-info__text--left">Category</p>
            <p className="project-c-info__text--right">Web Design</p>
          </div>

          <div className="project-c-info__text-container">
            <p className="project-c-info__text--left" />
            <p className="project-c-info__text--right">Graphic Design</p>
          </div>

          <div className="project-c-info__text-container">
            <p className="project-c-info__text--left" />
            <p className="project-c-info__text--right">Consultance</p>
          </div>

          <div className="project-c-info__text-container">
            <p className="project-c-info__text--left">Client</p>
            <p className="project-c-info__text--right">Rocian Studio</p>
          </div>

          <h2 className="project-c-info__links-title">Share This Project</h2>
          <div className="project-c-info__links-container">
            <a href="!#">
              <FontAwesomeIcon
                className="project-c-info__link"
                icon={["fab", "facebook-f"]}
                size="lg"
              />
            </a>
            <a href="!#">
              <FontAwesomeIcon
                className="project-c-info__link"
                icon={["fab", "twitter"]}
                size="lg"
              />
            </a>
            <a href="!#">
              <FontAwesomeIcon
                className="project-c-info__link"
                icon={["fab", "linkedin"]}
                size="lg"
              />
            </a>
          </div>
        </div>
        <div className="project-c-info__img-container">
          <img
            src={require("./img/aside.jpg")}
            alt=""
            className="project-c-info__img"
          />
        </div>
      </aside>
      <div className="project-l-grid__column--3">
        <Link className="project-c-footer__link" to="/portfolio">
          <FontAwesomeIcon
            className="project-c-footer__icon"
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
