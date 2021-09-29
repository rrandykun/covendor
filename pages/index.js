import Aos from "aos";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <nav
        className="
        navbar navbar-expand-lg navbar-light navbar-store
        fixed-top
        navbar-fixed-top
      "
        data-aos="fade-down"
      >
        <div className="container">
          <a href="/index.html" className="navbar-brand">
            <img src="/images/logo-covendor.svg" alt="Logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarResponsive"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item active">
                <a href="/index.html" className="nav-link">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="/register.html" className="nav-link">
                  Sign Up
                </a>
              </li>
              <li className="nav-item">
                <a href="/login.html" className="btn btn-warning nav-link px-4">
                  Sign In
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="page-content page-home">
        <section className="store-carousel">
          <div className="container">
            <div className="row">
              <div className="col-lg-12" data-aos="zoom-in">
                <div
                  id="storeCarousel"
                  className="carousel slide"
                  data-ride="carousel"
                >
                  <ol className="carousel-indicators">
                    <li
                      className="active"
                      data-target="#storeCarousel"
                      data-slide-to="0"
                    ></li>
                    <li data-target="#storeCarousel" data-slide-to="1"></li>
                    <li data-target="#storeCarousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                    <div className="carousel-item active">
                      <img
                        src="/images/banner-covendor.jpg"
                        alt="Banner"
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/images/banner-covendor.jpg"
                        alt="Banner"
                        className="d-block w-100"
                      />
                    </div>
                    <div className="carousel-item">
                      <img
                        src="/images/banner-covendor.jpg"
                        alt="Banner"
                        className="d-block w-100"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="store-trend-categories">
          <div className="container">
            <div className="row">
              <div className="col-12" data-aos="fade-up">
                <h5>Trend Categories</h5>
              </div>
            </div>
            <div className="row">
              <div
                className="col-6 col-md-3 col-lg-2"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <a href="#" className="component-categories d-block">
                  <div className="categories-image">
                    <img
                      src="/images/categories-gadgets.svg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <p className="categories-text">Gadgets</p>
                </a>
              </div>
              <div
                className="col-6 col-md-3 col-lg-2"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="#" className="component-categories d-block">
                  <div className="categories-image">
                    <img
                      src="/images/categories-furniture.svg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <p className="categories-text">Furniture</p>
                </a>
              </div>
              <div
                className="col-6 col-md-3 col-lg-2"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a href="#" className="component-categories d-block">
                  <div className="categories-image">
                    <img
                      src="/images/categories-makeup.svg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <p className="categories-text">Make Up</p>
                </a>
              </div>
              <div
                className="col-6 col-md-3 col-lg-2"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a href="#" className="component-categories d-block">
                  <div className="categories-image">
                    <img
                      src="/images/categories-sneaker.svg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <p className="categories-text">Sneakers</p>
                </a>
              </div>
              <div
                className="col-6 col-md-3 col-lg-2"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <a href="#" className="component-categories d-block">
                  <div className="categories-image">
                    <img
                      src="/images/categories-baby.svg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <p className="categories-text">Baby</p>
                </a>
              </div>
              <div
                className="col-6 col-md-3 col-lg-2"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a href="#" className="component-categories d-block">
                  <div className="categories-image">
                    <img
                      src="/images/categories-tools.svg"
                      alt=""
                      className="w-100"
                    />
                  </div>
                  <p className="categories-text">Tools</p>
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="store-new-products">
          <div className="container">
            <div className="row">
              <div className="col-12" data-aos="fade-up">
                <h5>New Products</h5>
              </div>
            </div>
            <div className="row">
              <div
                className="col-6 col-md-4 col-lg-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <a href="/details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: `url(
                          "/images/products-apple-watch.jpg"
                        )`,
                      }}
                    ></div>
                  </div>
                  <div className="products-text">Apple Watch 4</div>
                  <div className="products-price">$890</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <a href="/details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: `url(
                          "/images/products-black-edition-nike.jpg"
                        )`,
                      }}
                    ></div>
                  </div>
                  <div className="products-text">Black Edition Nike</div>
                  <div className="products-price">$70,482</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-3"
                data-aos="fade-up"
                data-aos-delay="300"
              >
                <a href="/details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: `url(
                          "/images/products-bubuk-maketti.jpg"
                        )`,
                      }}
                    ></div>
                  </div>
                  <div className="products-text">Bubuk Maketti</div>
                  <div className="products-price">$225</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-3"
                data-aos="fade-up"
                data-aos-delay="400"
              >
                <a href="/details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: `url("/images/products-mavic-kawe.jpg")`,
                      }}
                    ></div>
                  </div>
                  <div className="products-text">Mavic Kawe</div>
                  <div className="products-price">$503</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-3"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                <a href="/details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: `url(
                          "/images/products-monkey-toys.jpg"
                        )`,
                      }}
                    ></div>
                  </div>
                  <div className="products-text">Monkey Toys</div>
                  <div className="products-price">$783</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-3"
                data-aos="fade-up"
                data-aos-delay="600"
              >
                <a href="/details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: `url(
                          "/images/products-orange-bogotta.jpg"
                        )`,
                      }}
                    ></div>
                  </div>
                  <div className="products-text">Orange Bogotta</div>
                  <div className="products-price">$94,509</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-3"
                data-aos="fade-up"
                data-aos-delay="700"
              >
                <a href="/details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: `url(
                          "/images/products-sofa-ternyaman.jpg"
                        )`,
                      }}
                    ></div>
                  </div>
                  <div className="products-text">Sofa Ternyaman</div>
                  <div className="products-price">$1,409</div>
                </a>
              </div>
              <div
                className="col-6 col-md-4 col-lg-3"
                data-aos="fade-up"
                data-aos-delay="800"
              >
                <a href="/details.html" className="component-products d-block">
                  <div className="products-thumbnail">
                    <div
                      className="products-image"
                      style={{
                        backgroundImage: `url(
                          "/images/products-tatakan-gelas.jpg"
                        )`,
                      }}
                    ></div>
                  </div>
                  <div className="products-text">Tatakan Gelas</div>
                  <div className="products-price">$45,184</div>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <footer>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <p className="pt-4 pb-2">
                2021 Copyright Co-Vendor. All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
