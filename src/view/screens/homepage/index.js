import { Box } from "@mui/material";
import DefaultTitle from "../../component/title"
import { FaWhatsapp } from "react-icons/fa";
import { SubText } from "../../styles/title";
import Header from "../../component/header";
import ExperiencePage from "../exp";
import ProjectsPage from "../projects";
import FooterPage from "../footer";

const HomePage = () => {
    return <>
        <Box sx={{ display: "flex", height: "100vh", width: "100%" }}>
            <Box sx={{ position: "fixed", zIndex: "10" }}>
                <Header />
            </Box>
            <Box sx={{ position: "absolute", height: "100vh", display: "flex", justifyContent: "center", alignItems: "start", flexDirection: "column", padding: "75px" }}>
                <DefaultTitle title="Michael Guimarães" subtitle="Técnico de Rede e NOC" />
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