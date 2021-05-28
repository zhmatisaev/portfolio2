import { Button } from "antd";
// import { CheckCircleTwoTone } from "@ant-design/icons";
import React from "react";
import { CustomCollapse } from "../../components/CustomCollapse";

import { CustomButton } from "../../components/CustomButton";
import "./Home.less";
import { faq } from "../../data";
import { Switch, Link, Route } from "react-router-dom";
import mobile from "../../images/Group 824.png";
import circle from "../../images/Group 825.png";
import Group826 from "../../images/Group 826.png";
import price from "../../images/Group 827.png";
import violet from "../../images/Group 828.png";
import feedback from "../../images/Group 829.png";

import Group830 from "../../images/Group 830.png";

export const Home = () => {
  return (
    <div>
      {/* header - section */}
      <section className="header-section">
        <div className="container">
          <div>
            <p className="sub-title">Powered By AI</p>
            <h1>
              The smartest , <br /> fastest way to <br /> Legal Arguments
            </h1>
            <p className="text">
              Generate your
              <b>
                Privacy , Terms of Use <br />
              </b>
              or <b> Cooki Policy </b>for <a href="#"> free </a>
            </p>
            <div>
              <CustomButton primary>Generate for free</CustomButton>
              <Button type="text"> Learn more {">"}</Button>
            </div>
          </div>
        </div>
      </section>
      {/* ==================================================================== */}
      <srction>
        <div className="section_two">
          <img src={mobile} />
        </div>
      </srction>
      <section>
        <div className="section_two">
          <img style={{ marginTop: "50px" }} src={circle} />
        </div>
      </section>

      <section>
        <div className="section_two">
          <img
            style={{ marginLeft: "390px", marginTop: "50px" }}
            src={Group826}
          />
        </div>
      </section>

      <section>
        <div className="section_two">
          <img style={{ marginBottom: "-15px" }} src={price} />
        </div>
      </section>

      <section>
        <div className="section_two">
          <img src={violet} />
        </div>
      </section>

      <section>
        <div className="section_two">
          <img src={feedback} />
        </div>
      </section>

      <section>
        <div className="section_two">
          <img style={{ margin: "80px  0 80px 0" }} src={Group830} />
        </div>
      </section>

      {/* {faq section } */}
      <section className="faq-section">
        <div className="container">
          <p className="sub-title"> Solution to Your Problems</p>
          <h2>Do you have any Questions</h2>
          <p>
            Take a look through our answers! Still, have questions? Please don't
            be afraid to contact our team at any time.
          </p>
          <div style={{ display: "flex" }}>
            <div style={{ display: "flex", flexDirection: "column" }}>
              {faq.map((el, id) => {
                return (
                  <Link key={id} to={`/${el.title}`}>
                    {el.title}
                  </Link>
                );
              })}
            </div>
            <div className="list">
              <Switch>
                {faq.map((el, id) => {
                  return (
                    <Route key={id} path={`/${el.title}`}>
                      <CustomCollapse el={el} />
                    </Route>
                  );
                })}
              </Switch>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
