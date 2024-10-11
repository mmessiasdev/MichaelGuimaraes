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
import ContactPage from "../contact";
import styled from "styled-components";
import pdf1 from '../../assets/5gb.pdf';
import pdf2 from '../../assets/17975ba3bdaf26ebf780b1bd99fa65d3734e.pdf';
import pdf3 from '../../assets/17976a0c923df6c84048c80a0b316c3790ed.pdf';
import pdf4 from '../../assets/cameraip.pdf';
import pdf5 from '../../assets/cpes.pdf';
import pdf6 from '../../assets/Epon.pdf';
import pdf7 from '../../assets/fast Giga.pdf';
import pdf8 from '../../assets/inteligencia emocional.pdf';
import pdf9 from '../../assets/iredesb.pdf';
import pdf10 from '../../assets/RxxxI.pdf';


import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Slider from "react-slick";
import CurriculumPage from "../curriculum";



const HomePage = () => {

    const PDFDocumentWrapper = styled.div`
    canvas {
        width: 50% !important;
        height: 25% !important;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px;
    }
`;

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

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        cssEase: "linear",
        autoplay: true,
        autoplaySpeed: 2000,

    };

    return <>
        <Box sx={{ display: "flex", height: "100vh", width: "100%", overflowY: "hidden" }}>
            <Box sx={{ position: "fixed", zIndex: "10", opacity: "100%" }} className={navBar ? 'menuActive' : 'menu'}>
                <Header />
            </Box>

            <Box sx={{ position: "absolute", height: "100vh", display: "flex", alignItems: "center", justifyContent: { lg: "space-between", xs: "center" }, width: "100%", flexDirection: { md: "row", xs: "column" } }}>
                <Box sx={{ height: { lg: "100vh", xs: "min-height" }, display: "flex", justifyContent: "center", alignItems: { lg: "start", xs: "center" }, flexDirection: "column", padding: { md: "75px", xs: "15px" }, width: { md: "70%", xs: "100%" } }}>
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
                <Box sx={{ height: { lg: "100vh", xs: "min-height" }, width: { lg: "30%", xs: "100%" }, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: { lg: "end", xs: "center" }, paddingBlock: "50px" }}>
                    <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="1500">
                        <Box sx={{ width: "200px", height: "100px", borderRadius: { lg: "15px 0px 0px 15px", xs: "5px" }, justifyContent: "center", alignItems: "center", display: "flex", boxShadow: "0px 7px 9px 0px rgba(0,0,0,0.75)" }} bgcolor="background.main">
                            <a href="#proj">
                                <SubtitleText text={"Projetos"} />
                            </a>
                        </Box>

                    </div>
                    <Box sx={{ height: "25px" }} />
                    <div data-aos="fade-left" data-aos-duration="1500" data-aos-delay="2500">
                        <Box sx={{ width: { lg: "240px", xs: "200px" }, height: "75px", borderRadius: { lg: "15px 0px 0px 15px", xs: "5px" }, justifyContent: "center", alignItems: "center", display: "flex", boxShadow: "0px 7px 9px 0px rgba(0,0,0,0.75)" }} bgcolor="background.main">
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
        <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflowX: "hidden" }}>
            <Box width="100%">
                <div id="exp" data-aos="fade-up" data-aos-delay="500">
                    <ExperiencePage />
                </div>
                <div>
                    <CurriculumPage/>
                </div>
                
                {/* <div>
                    <PDFDocumentWrapper>
                        <Document file={pdf1}>
                            <Page pageNumber={1} />
                        </Document>
                    </PDFDocumentWrapper>
                </div>
                <div>
                    <PDFDocumentWrapper>
                        <Document file={pdf2}>
                            <Page pageNumber={1} />
                        </Document>
                    </PDFDocumentWrapper>
                </div>
                <div>
                    <PDFDocumentWrapper>
                        <Document file={pdf3}>
                            <Page pageNumber={1} />
                        </Document>
                    </PDFDocumentWrapper>
                </div>
                <div>
                    <PDFDocumentWrapper>
                        <Document file={pdf4}>
                            <Page pageNumber={1} />
                        </Document>
                    </PDFDocumentWrapper>
                </div>
                <div>
                    <PDFDocumentWrapper>
                        <Document file={pdf5}>
                            <Page pageNumber={1} />
                        </Document>
                    </PDFDocumentWrapper>
                </div>
                <div>
                    <PDFDocumentWrapper>
                        <Document file={pdf6}>
                            <Page pageNumber={1} />
                        </Document>
                    </PDFDocumentWrapper>
                </div>
                <div>
                    <PDFDocumentWrapper>
                        <Document file={pdf7}>
                            <Page pageNumber={1} />
                        </Document>
                    </PDFDocumentWrapper>
                </div>
                <div>
                    <PDFDocumentWrapper>
                        <Document file={pdf8}>
                            <Page pageNumber={1} />
                        </Document>
                    </PDFDocumentWrapper>
                </div>
                <div>
                    <PDFDocumentWrapper>
                        <Document file={pdf9}>
                            <Page pageNumber={1} />
                        </Document>
                    </PDFDocumentWrapper>
                </div>
                <div>
                    <PDFDocumentWrapper>
                        <Document file={pdf10}>
                            <Page pageNumber={1} />
                        </Document>
                    </PDFDocumentWrapper>
                </div> */}
                <div id="proj" data-aos="fade-up" data-aos-delay="500">
                    <ProjectsPage />
                </div>
                <div id="contact" data-aos="fade-left">
                    <ContactPage />
                </div>

            </Box>
        </Box>
        <div id="about">
            <FooterPage />
        </div>
    </>
}

export default HomePage;