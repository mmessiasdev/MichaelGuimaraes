import { Box, Fade } from "@mui/material";
import DefaultTitle from "../../component/title"
import { FaWhatsapp } from "react-icons/fa";
import { SubText, SubtitleText } from "../../styles/title";
import Header from "../../component/header";
import ExperiencePage from "../exp";
import ProjectsPage from "../projects";
import FooterPage from "../footer";
import '../../../App.css';
import { useState } from "react";

const HomePage = () => {
    const [navBar, setNavBar] = useState(false); // Responsible for the Menu bar Scroll animation
    const changeBackground = () => {
        if (window.scrollY >= 10) {
            setNavBar(true);
        } else {
            setNavBar(false);
        }
    };
    // console.log(window.scrollY);
    window.addEventListener('scroll', changeBackground);

    return <>
        <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
            <Box sx={{ position: "fixed", zIndex: "10", opacity: "100%" }} className={navBar ? 'menuActive' : 'menu'}>
                <Header />
            </Box>

            <Box sx={{ position: "absolute", height: "100vh", display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
                <Box sx={{ height: "100vh", display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column", padding: "75px", width: "70%" }}>
                    <div data-aos="fade-right" data-aos-duration="1000">
                        <DefaultTitle title="Michael Guimarães" subtitle="Técnico de Rede e NOC" />
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1500" data-aos-delay="500">
                        <Box sx={{ paddingBlock: "25px" }}>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <FaWhatsapp size={25} />
                                <Box sx={{ width: "10px" }} />
                                <SubText text="(77) 9 9105-4070"></SubText>
                            </Box>
                            <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                <FaWhatsapp size={25} />
                                <Box sx={{ width: "10px" }} />
                                <SubText text="(77) 9 9105-4070"></SubText>
                            </Box>
                        </Box>

                    </div>

                </Box>
                <Box sx={{ height: "100vh", width: "30%", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "end" }}>
                    <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1500">
                        <Box sx={{ width: "200px", height: "100px", borderRadius: "15px 0px 0px 15px", justifyContent: "center", alignItems: "center", display: "flex", boxShadow: "0px 7px 9px 0px rgba(0,0,0,0.75)" }} bgcolor="background.main">
                            <a href="#proj">
                                <SubtitleText text={"Projetos"} />
                            </a>
                        </Box>

                    </div>
                    <Box sx={{ height: "25px" }} />
                    <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="2500">
                        <Box sx={{ width: "240px", height: "75px", borderRadius: "15px 0px 0px 15px", justifyContent: "center", alignItems: "center", display: "flex", boxShadow: "0px 7px 9px 0px rgba(0,0,0,0.75)" }} bgcolor="background.main">
                            <a href="#exp">
                                <SubtitleText text={"Experiência"} />
                            </a>
                        </Box>

                    </div>

                </Box>
            </Box>
            <Box sx={{ width: "40%" }} />
            <Box sx={{ width: "60%" }} bgcolor="secondary.main" />
        </Box>
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", width: "100%" }}>
            <Box sx={{ width: "1000px" }}>
                <div id="exp">
                    <ExperiencePage />
                </div>
                <div id="proj">
                    <ProjectsPage />
                </div>
            </Box>
            <div id="about">
                <FooterPage />
            </div>
        </Box>
    </>
}

export default HomePage;