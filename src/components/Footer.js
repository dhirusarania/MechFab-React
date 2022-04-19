import React from "react";
import Link from "next/link";

const Footer = props => {
  return (
    <div>
      <div className="footer">
        {/* <div className="d-flex justify-between">
        </div> */}
        <div className="row">
          <div className="col-sm">
            <div className="footer__content">
              <h4>
                <img
                  className="footer__logo center-img"
                  src="/static/8571aa18-56cf-49b3-abc4-d4d006a3310e.png"
                />
              </h4>
              <p>
                M/S MECHFAB ENGINEERING INDUSTRIES PVT. LTD. was established in
                28 June 1996. We are a certified mechanical fabrication and
                construction industry (read more about our certifications)
              </p>
            </div>
          </div>
          <div className="col-sm">
            <div className="footer__content">
              <h4>Get In Touch</h4>
              <ul>
                <li className="d-flex">
                  <div style={{ width: "2rem" }}>
                    <img src="/static/d3701288-6978-43b4-81d3-15b5fff9cb74.svg" />
                  </div>
                  <div>Industrial Area, Bamunimaidan, Guwahati-781021.</div>
                </li>
                <li className="d-flex">
                  <div className="center" style={{ width: "2rem" }}>
                    <img src="/static/0f22b45b-b12d-481c-ad02-dac833c906ba.svg" />
                  </div>
                  <div>0361- 2465511/2465512 (F), 2550179.</div>
                </li>
                <li className="d-flex">
                  <div className="center" style={{ width: "2rem" }}>
                    <img src="/static/98fd4b0a-c616-440a-b3d6-a96f0c296f47.svg" />
                  </div>
                  <div>info@mechfab.org</div>
                </li>
                <li className="d-flex">
                  <div className="center" style={{ width: "2rem" }}>
                    <img src="/static/8cfb22a8-91e2-40d5-9b91-1807f9ec9b15.svg" />
                  </div>
                  <div>+91 - 97060- 99975</div>
                </li>
                <li className="d-flex">
                  <div className="center" style={{ width: "2rem" }}>
                    <img src="/static/ddd1511c-d33d-457e-862d-2bbd33203d5f.svg" />
                  </div>
                  <div>Mon - Sat: 9:00 - 18:00</div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-sm">
            <div className="footer__content">
              <h4>Information</h4>
              <ul>
                <li>
                  <Link href="/about-us">
                    <a>WHO WE ARE</a>
                  </Link>
                </li>
                <li>
                  <Link href="/our-core-value-system">
                    <a>CORE VALUES</a>
                  </Link>
                </li>
                <li>
                  <Link href="/registration-department">
                    <a>REGISTERED WITH</a>
                  </Link>
                </li>
                <li>
                  <Link href="/product-range">
                    <a>PRODUCT RANGE</a>
                  </Link>
                </li>
                <li>
                  <Link href="/valued-customers">
                    <a>VALUED CUSTOMERS</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          {/* <div className="col-sm">
            <div className="footer__content">
              <h4>News Letter</h4>
              <div className="footer__form d-flex flex-column">
                <input placeholder="Name" type="text" />
                <input placeholder="Email" type="email" />
                <button>Send Message</button>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      <h3 className="footer__copyright text-center py-3">
        MECHFAB © 2019 DESIGN AND DEVELOPED BY{" "}
        <a
          style={{ textDecoration: "none", color: "#949494" }}
          target="__blank"
          href="http://tecmeadows.com/"
        >
          TECMEADOWS
        </a>{" "}
        . ALL RIGHTS RESERVED.
      </h3>
    </div>
  );
};

export default Footer;
