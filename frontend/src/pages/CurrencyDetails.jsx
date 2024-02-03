import React, { Children, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";

import useFetch from "../hooks/useFetch";
import { BASE_URL } from "../utils/config";

import img1 from "../assets/images/euro.jpg";
import img2 from "../assets/images/bdt.jpg";
import img3 from "../assets/images/d.jpg";
import img4 from "../assets/images/mvr.jpg";
import img5 from "../assets/images/coin.jpg";
import img6 from "../assets/images/crodoba.jpg";
import img7 from "../assets/images/cd.jpg";

import "../styles/currencyDetails.css";

const CurrencyDetails = () => {
  let imgId;
  const [seller, setSeller] = useState(false);
  const [item, setItem] = useState(true);
  const [shipping, setShipping] = useState(false);

  const itemClicker = () => {
    setItem(true);
    setSeller(false);
    setShipping(false);
  };

  const shippingClicker = () => {
    setItem(false);
    setSeller(false);
    setShipping(true);
  };

  const sellerClicker = () => {
    setItem(false);
    setSeller(true);
    setShipping(false);
  };
  const { id } = useParams();

  switch (id) {
    case "6526664ae1403a9f3f5d777e":
      imgId = img1;
      break;
    case "652666c6e1403a9f3f5d7780":
      imgId = img2;
      break;
    case "6538abb079b476e1d8e2224c":
      imgId = img3;
      break;
    case "6538abb979b476e1d8e2224e":
      imgId = img4;
      break;
    case "6538abbf79b476e1d8e22250":
      imgId = img5;
      break;
    case "6538abdf79b476e1d8e22253":
      imgId = img6;
      break;
    case "6538abf179b476e1d8e22256":
      imgId = img7;
      break;
  }

  const {
    data: currency,
    loading,
    error,
  } = useFetch(`${BASE_URL}/currencies/getSingleCurrency/${id}`);
  return (
    <>
      <section>
        <Container className="container">
          {loading && <h4 className="text-center pt-5">Loading...</h4>}
          {error && <h4 className="text-center pt-5">{error}</h4>}
          <div className="imgDiv">
            <img src={imgId} alt="" className="image" />
          </div>
          <div className="bidDetails">
            <div className="titleCard">
              <label className="title">{currency.title}</label>
              <div className="desc">{currency.desc}</div>
            </div>
            <div className="timeLeft">
              <p> Time Left : 11d 3h</p>
            </div>
            <div className="price">
              <p>Price</p>
              <div className="upper">
                <div className="value">${currency.price}</div>
                <div className="buyNow">Buy Now</div>
              </div>
              <div className="lower">*This is a "Pure Buy Now Item".</div>
            </div>

            <div className="paypal">
              <label>
                <i class="ri-paypal-line">
                  <i>Paypal</i>
                </i>
              </label>
              <label>As low as $124.32/mo. Learn more</label>
            </div>
            <div className="extra">
              <div className="contact">
                <i class="ri-chat-3-line"></i>
                <Link to=""> Contact Seller</Link>
              </div>
              <div className="print">
                {" "}
                <i class="ri-printer-line"></i>
                <Link to=""> Print Page</Link>
              </div>
              <div className="share">
                <i class="ri-share-line"></i>
                <Link to=""> Share</Link>
              </div>
            </div>
          </div>
        </Container>
        <Container className="moreDetails">
          <div className="chooser">
            {!item && <label onClick={itemClicker}>Item Info</label>}
            {item && (
              <label onClick={itemClicker}>
                <i>
                  <b>Item Info</b>
                </i>
              </label>
            )}
            {!shipping && <label onClick={shippingClicker}>Shipping</label>}
            {shipping && (
              <label onClick={shippingClicker}>
                <i>
                  <b>Shipping</b>
                </i>
              </label>
            )}
            {!seller && <label onClick={sellerClicker}>Seller Info</label>}
            {seller && (
              <label onClick={sellerClicker}>
                <i>
                  <b>Seller Info</b>
                </i>
              </label>
            )}
          </div>
          {item && (
            <div className="itemInfo">
              <div className="leftDiv">
                <div className="title">
                  <label>Item Profile</label>
                </div>
                <p>
                  <b>Product Id</b> : {id}
                </p>
                <p>
                  <b>Product Name :</b> {currency.title}
                </p>
                <p>
                  <b>Number of Bids:</b> 0
                </p>
                <p>
                  <b>Shipping Price :</b> ${currency.price}
                </p>
                <p>
                  <b>Bid Increment :</b> $1.00
                </p>
                <p>
                  <b>Ends On : </b>25-12-24
                </p>
                <p>
                  <b>Seller :</b> Bidder.com
                </p>
              </div>
              <div className="rightDiv">
                <div className="title">
                  <label>Item Description</label>
                </div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
                  molestias voluptas, iure ex dolore voluptatum libero deleniti
                  modi eligendi assumenda necessitatibus eaque eos nihil eius
                  officiis nobis earum praesentium nisi?
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde
                  iure in eveniet dolorum est? Voluptatum sed at fuga,
                  laboriosam eligendi unde accusantium debitis quibusdam
                  delectus quas dolores quae ipsum explicabo.
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat, veritatis mollitia. Eum aut assumenda dolorum a
                  magnam repellendus, quo accusantium consequatur tempore
                  repellat in voluptate nisi, velit quia eius incidunt!
                </p>
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Pariatur voluptatem animi porro cumque, repudiandae
                  repellendus natus ullam atque distinctio dolores praesentium,
                  sequi fugiat quia iusto quis laborum officia excepturi earum!
                </p>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Voluptatibus, quia molestiae. Odio porro sed esse rerum quas
                  voluptates animi architecto dicta, harum consectetur vero sunt
                  corrupti similique incidunt perspiciatis quod!
                </p>
                <div className="desc"></div>
              </div>
            </div>
          )}
          {shipping && (
            <div className="sellerInfo">
              <span>
                <div className="sellerInfo-smallDiv"><b>This item cannot be shipped internationally.</b></div>
              </span>
              <span>
                <div className="sellerInfo-smallDiv">
                 <b>This item ships via UPS</b>
                 <div>Handling Price: $89.99</div>
                 <div>Shipping Weight: 0 lbs.</div>
                 <div>Shipping Price: $0.01</div>
                </div>
              </span>
              <span>
                <div className="sellerInfo-smallDiv">
                <b>Shipping information</b>
                </div>
              </span>
              <span className="">
                <div className="sellerInfo-largeDiv">
                  <div className="normDiv">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, nesciunt rem fugiat temporibus iure minima, neque doloribus tempore impedit sequi, illum doloremque quas voluptatem eos quis. Architecto consequatur dolore tempore.
                  </div>
                  <div className="normDiv">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam minus illum enim delectus omnis magni distinctio dicta nam nesciunt nobis veritatis, iure atque. Repellendus dolorem temporibus cupiditate dicta a nam?
                  </div>
                  <div className="normDiv">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem dolore optio tempora mollitia facilis ullam error accusamus eos rerum eligendi, commodi harum consequatur libero nobis quidem fugit molestiae ex obcaecati.
                  </div>
                </div>
              </span>
            </div>
          )}
          {seller && (
            <div className="sellerInfo">
              <span>
                <p>Seller</p>
                <div className="sellerInfo-smallDiv">Mohammad kuddus Mia</div>
              </span>
              <span>
                <p>Location</p>
                <div className="sellerInfo-smallDiv">
                  82, Sabujbag, Basabo, Dhaka-1214
                </div>
              </span>
              <span>
                <p>Contact</p>
                <div className="sellerInfo-smallDiv">
                  <div>01311338931</div>
                  <div>01521771459</div>
                  <div>sourav35joy80@gmail.com</div>
                </div>
              </span>
              <span className="">
                <p>Return Policy</p>
                <div className="sellerInfo-largeDiv">
                  <div className="normDiv">
                    Customers must contact us within 3 days (72 hours) of
                    receiving the item via service ticket if there is a major
                    distortion between our listing's description and the actual
                    item you received. You must obtain and digitally submit a
                    report from a verified jeweler/gemologist on his or her
                    signed letterhead outlining the discrepancy. If we deem your
                    submission of a discrepancy to be valid, you will then need
                    to send your item back to the following address:
                  </div>
                  <div class="boldDiv">Bidder.com</div>
                  <div class="boldDiv">6/C, Wall Street,</div>
                  <div className="boldDiv">Washington Dc</div>
                  <div className="boldDiv">U.S.A</div>
                  <div className="normDiv">
                    The responsibility of the item to arrive safely back to our
                    facility lies solely on the customer (please purchase
                    adequate insurance for the parcel, as you will not be
                    refunded for item(s) lost or damaged in shipping).
                    Additionally, any return authorization(s) agreed to by us
                    are voided if the item has been tampered with or any of the
                    original precious stones have been swapped with fake or
                    lesser value stones (the same applies to precious metals as
                    well). We must receive the item back in order for the refund
                    process to begin.
                  </div>
                  <div className="normDiv">
                    You will not be refunded the original S&H or your out of
                    pocket return shipping expenses. You will also be charged an
                    additional 15% restocking fee (This only applies item cost
                    before shipping, handling and tax). Feel free to contact us
                    if you have any further inquires! Thank you!
                  </div>
                </div>
              </span>
            </div>
          )}
        </Container>
      </section>
    </>
  );
};

export default CurrencyDetails;
