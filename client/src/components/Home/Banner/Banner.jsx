import "./Banner.scss";
import BannerImg from "../../../assets/banner-img.png";

const Banner = () => {
    return (<div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>SALES</h1>
                    <p>
                        Convallis intedum purus adipiscing dis parturient
                        posuere ac a quam a eleifend montes paerturient posuere
                        curae tempor
                    </p>
                    <div className="ctas">
                          <diV className="banner-cta">Read More</diV>
                          <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt="" ></img>
            </div>
    </div>
    );
};

export default Banner;
