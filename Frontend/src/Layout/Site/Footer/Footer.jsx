import React from "react";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="footer__top">
          <div className="container">
            <div className="row" id="footerTopRow">
              <div className="col-6">
                <div className="container">
                  <div className="row">
                    <div className="col-12">
                      <h3>Navigations</h3>
                    </div>
                    <div className="col-4">
                      <ul className="footer__top__ul">
                        <li>
                          <Link>Sell online</Link>
                        </li>
                        <li>
                          <Link>Features</Link>
                        </li>
                        <li>
                          <Link>Shopping cart</Link>
                        </li>
                        <li>
                          <Link>Store builder</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <ul className="footer__top__ul">
                        <li>
                          <Link>Mobile commerce</Link>
                        </li>
                        <li>
                          <Link>Dropshipping</Link>
                        </li>
                        <li>
                          <Link>Website development</Link>
                        </li>
                      </ul>
                    </div>
                    <div className="col-4">
                      <ul className="footer__top__ul">
                        <li>
                          <Link>Point of sale</Link>
                        </li>
                        <li>
                          <Link>Hardware</Link>
                        </li>
                        <li>
                          <Link>Software</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-6">
                <div className="container">
                  <div className="row">
                    <div className="col-6">
                      <div className="footer__top__Promo">
                        <h3>Promo</h3>
                        <Link>
                          <img
                            src="https://preview.colorlib.com/theme/shoppers/images/hero_1.jpg.webp"
                            width="255px"
                            alt=""
                          />
                          <h3>Finding Your Perfect Shoes</h3>
                          <p>Promo from nuary 15 — 25, 2019</p>
                        </Link>
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="footer__top__contact">
                        <div className="footer__top__contact__header">
                          <h3>Contact Info</h3>
                          <ul>
                            <li>
                              <Link>
                                <i class="fa-solid fa-location-dot"></i>
                              </Link>
                              203 Fake St. Mountain View, San Francisco,
                              California, USA
                            </li>
                            <li>
                              <Link>
                                <i class="fa-solid fa-phone"></i>
                                +2 392 3929 210
                              </Link>
                            </li>
                            <li>
                              <Link>
                                <i class="fa-solid fa-envelope"></i>
                              </Link>
                              emailaddress@domain.com
                            </li>
                          </ul>
                        </div>
                        <div className="footer__top__contact__body">
                          <form id="footer--form" action="#">
                            <label htmlFor="subscribe">Subscribe</label>
                            <div className="footer__input">
                              <input type="text" placeholder="Email" />
                              <button>Send</button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer__bottom">
          <p>
            Copyright ©2024 All rights reserved | This template is made with{" "}
            <i class="fa-solid fa-heart"></i> by Colorlib
          </p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
