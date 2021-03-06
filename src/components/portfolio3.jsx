import React from "react";

//import stock
import stock from "../img/image1.jpg";
import stock1 from "../img/image2.jpg";
import stock2 from "../img/image3.jpg";
import stock3 from "../img/sair.png";
import stock4 from "../img/rf.jpg";
import stock5 from "../img/sam.jpeg";
import './custom.scss'
class Portfolio extends React.Component {
    render() {
        return (
            <section id="work" className="portfolio-mf sect-pt4 route">
                <div className="container stores">
                    <div className="row content_center p_t_100">
                        <div className="col-sm-12">
                            <div className="title-box text-center">
                                <h3 className="title-a">Projects</h3>
                                <p className="subtitle-a">

                                </p>
                                <div className="line-mf"></div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-sm-4">
                            <div className="margin_t_35 margin_b_100 shop_over project">
                            <a href="https://raja-fashions.com" target="_blank">
                                <div className="store_img" style={{ backgroundImage: `url(${stock4})` }} >
                                </div>
                                <div className="p_15">
                                    <div className="lead">
                                        <strong>Raja Fashions</strong>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="margin_t_35 margin_b_100 shop_over project">
                            <a href="https://samthingelse.com" target="_blank">
                                <div className="store_img" style={{ backgroundImage: `url(${stock5})` }} >
                                </div>
                                <div className="p_15">
                                    <div className="lead">
                                        <strong>Sam's</strong>
                                    </div>
                                </div>
                                </a>
                            </div>
                        </div>
                        <div className="col-12 col-sm-4">
                            <div className="margin_t_35 margin_b_100 shop_over project">
                                <div className="store_img" style={{ backgroundImage: `url(${stock3})` }} >
                                </div>
                                <div className="p_15">
                                    <div className="lead">
                                        <strong>Sair</strong>
                                    </div>
                                    <div className="desp_content_2 margin_t_0">
                                        
                                    </div>
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
