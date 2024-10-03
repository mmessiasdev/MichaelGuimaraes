import { Box } from "@mui/material"
import DefaultTitle from "../../component/title";
import { SubText, SubtitleText } from "../../styles/title";
import Slider from "react-slick";


const ProjectsPage = () => {

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerPadding: "0px",
        centerMode: true,
        autoplay: true,


    };

    return <>
        <Box sx={{ paddingTop: "200px", paddingInline: {lg: "20%", xs: "20px"}, width: "100%", justifyContent: "center", display: "flex", flexDirection: "column" }}>
            <DefaultTitle title="Projetos" subtitle=" em que fiz parte" />
            <Box sx={{ padding: "100px 0px" }}>

                <Slider {...settings}>
                    <div>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={"20px"}>
                            <SubtitleText text="Instalação de torre rádio" />
                            <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "100px", justifyContent: "space-between", alignItems: "center" }}>
                                <Box sx={{ width: "100%", padding: "0px 0px 30px 0px" }}>
                                    <SubText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                                </Box>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "start" }}>
                                    <Box sx={{ width: "100%", height: "300px" }} bgcolor="secondary.main" />
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", paddingTop: "150px", justifyContent: "center" }}>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <Box sx={{ width: "100%", backgroundColor: "#ccc", margin: "20px 0", height: "1px", border: "0" }} />
                                </Box>
                            </Box>

                        </Box>
                    </div>
                    <div>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={"20px"}>
                            <SubtitleText text="Instalação de torre rádio" />
                            <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "100px", justifyContent: "space-between", alignItems: "center" }}>
                                <Box sx={{ width: "100%", padding: "0px 0px 30px 0px" }}>
                                    <SubText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                                </Box>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "start" }}>
                                    <Box sx={{ width: "100%", height: "300px" }} bgcolor="secondary.main" />
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", paddingTop: "150px", justifyContent: "center" }}>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <Box sx={{ width: "100%", backgroundColor: "#ccc", margin: "20px 0", height: "1px", border: "0" }} />
                                </Box>
                            </Box>

                        </Box>
                    </div>
                    <div>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={"20px"}>
                            <SubtitleText text="Instalação de torre rádio" />
                            <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "100px", justifyContent: "space-between", alignItems: "center" }}>
                                <Box sx={{ width: "100%", padding: "0px 0px 30px 0px" }}>
                                    <SubText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                                </Box>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "start" }}>
                                    <Box sx={{ width: "100%", height: "300px" }} bgcolor="secondary.main" />
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", paddingTop: "150px", justifyContent: "center" }}>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <Box sx={{ width: "100%", backgroundColor: "#ccc", margin: "20px 0", height: "1px", border: "0" }} />
                                </Box>
                            </Box>

                        </Box>
                    </div>
                    <div>
                        <Box display={"flex"} flexDirection={"column"} justifyContent={"center"} alignItems={"center"} padding={"20px"}>
                            <SubtitleText text="Instalação de torre rádio" />
                            <Box sx={{ display: "flex", flexDirection: "column", paddingTop: "100px", justifyContent: "space-between", alignItems: "center" }}>
                                <Box sx={{ width: "100%", padding: "0px 0px 30px 0px" }}>
                                    <SubText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                                </Box>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "start" }}>
                                    <Box sx={{ width: "100%", height: "300px" }} bgcolor="secondary.main" />
                                </Box>
                            </Box>
                            <Box sx={{ display: "flex", paddingTop: "150px", justifyContent: "center" }}>
                                <Box sx={{ width: "100%", display: "flex", justifyContent: "center" }}>
                                    <Box sx={{ width: "100%", backgroundColor: "#ccc", margin: "20px 0", height: "1px", border: "0" }} />
                                </Box>
                            </Box>

                        </Box>
                    </div>

                </Slider>
            </Box>
        </Box>
    </>
}

export default ProjectsPage;