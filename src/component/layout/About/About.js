import React from "react";
import "./aboutSection.css";
import { Button, Typography, Avatar } from "@material-ui/core";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import InstagramIcon from "@material-ui/icons/Instagram";
const About = () => {
    const visitInstagram = () => {
        window.location = "https://www.instagram.com/vaibhav_agg0403/";
    };
    return (
        <div className="aboutSection">
            <div></div>
            <div className="aboutSectionGradient"></div>
            <div className="aboutSectionContainer">
                <Typography component="h1">About Us</Typography>

                <div>
                    <div>
                        <Avatar
                            style={{ width: "10vmax", height: "10vmax", margin: "2vmax 0" }}
                            src="https://res.cloudinary.com/dlvsm0bch/image/upload/v1688567511/avatars/vaibhav_yxaqao.jpg"
                            alt="Founder"
                        />
                        <Typography>Vaibhav Agrawal</Typography>
                        <Button onClick={visitInstagram} color="primary">
                            Visit Instagram
                        </Button>
                        <span>
                            This is a Ecommerce wesbite made by Vaibhav Agrawal.
                        </span>
                    </div>
                    <div className="aboutSectionContainer2">
                        <Typography component="h2">Our Page</Typography>
                        <a
                            href="https://www.linkedin.com/in/vaibhav-agrawal-58287b239/"
                            target="blank"
                        >
                            <LinkedInIcon className="LinkedinSvgIcon" />
                        </a>

                        <a href="https://www.instagram.com/vaibhav_agg0403/" target="blank">
                            <InstagramIcon className="instagramSvgIcon" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;