import React from "react";
import "./Footer.less";
import { Button } from "antd";

export const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="subscribtion-block">
          <p>Get Started Within Minutes</p>
          <h1>Are You Ready to Protect Your Business?</h1>
          <p>
            Sign up for our account packages and start generating
            <br />
            legal agreements suited to your business needs.
          </p>
          <div>
            <Button type="primary">Get started for free</Button>
            <Button type="text">Learn more</Button>
          </div>
        </div>
        <div className="footer-nav">
          <div>
            <div className="iterms">iTerms</div>
            <p>
              More than 140,000 businesses <br /> use iTerms. Join our
              community.
            </p>
          </div>
          <div className="links-block">
            <ul>
              <li>
                <h2>Company</h2>
              </li>
              <li>How It Works</li>
              <li>Reviews</li>
              <li>Contact us</li>
              <li>Blog</li>
            </ul>
            <ul>
              <li>
                {" "}
                <h2>Products</h2>
              </li>
              <li>Solutions</li>
              <li>Trust & Safety</li>
              <li>Payment</li>
              <li>Help</li>
            </ul>
            <ul>
              <li>
                {" "}
                <h2>Support</h2>
              </li>
              <li>Help</li>
              <li>Pricing</li>
              <li>Payment</li>
              <li>Help</li>
            </ul>
          </div>
        </div>
        <div className="copyright-block">
          <div>© 2021 Terms Inc. All rights reserved</div>
          <ul>
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Disclaimer</li>
            <li>English version</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
