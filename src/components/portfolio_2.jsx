import React from "react";

//import stock
import stock from "../img/react_js.png";
import stock1 from "../img/js1.png";
import stock2 from "../img/rails.png";
import stock3 from "../img/nxt.png";
import stock4 from "../img/html.png";
import stock5 from "../img/css.jpeg";
import stock6 from "../img/algo.jpg";

import './custom.scss'
class Portfolio extends React.Component {
    render() {
        return (
            <section id="skills" className="portfolio-mf sect-pt4 route">
                <div className="container stores">
                    <div className="row content_center p_t_100">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">My Experties</h3>
                                <p className="subtitle-a">

                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <div className="margin_t_35 margin_b_100 shop_over">
                                <div className="store_img" style={{ backgroundImage: `url(${stock})` }} >
                                </div>
                                <div className="circle_content">
                                    REACT JS
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="margin_t_35 margin_b_100 shop_over">
                                <div className="store_img" style={{ backgroundImage: `url(${stock1})` }} >
                                </div>
                                <div className="circle_content">
                                    JAVA SCRIPT
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="margin_t_35 margin_b_100 shop_over">
                                <div className="store_img" style={{ backgroundImage: `url(${stock2})` }} >
                                </div>
                                <div className="circle_content">
                                    RUBY on RAILS
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="margin_t_35 margin_b_100 shop_over">
                                <div className="store_img" style={{ backgroundImage: `url(${stock3})` }} >
                                </div>
                                <div className="circle_content">
                                    NEXT JS
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="margin_t_35 margin_b_100 shop_over">
                                <div className="store_img" style={{ backgroundImage: `url(${stock6})` }} >
                                </div>
                                <div className="circle_content">
                                    DS & ALGO
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="margin_t_35 margin_b_100 shop_over">
                                <div className="store_img" style={{ backgroundImage: `url(${stock4})` }} >
                                </div>
                                <div className="circle_content">
                                    HTML
                                </div>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="margin_t_35 margin_b_100 shop_over">
                                <div className="store_img" style={{ backgroundImage: `url(${stock5})` }} >
                                </div>
                                <div className="circle_content">
                                    CSS
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
