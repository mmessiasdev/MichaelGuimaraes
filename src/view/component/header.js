import { Box } from "@mui/material"
import { SubText, TitleText } from "../styles/title"

const Header = () => {
    return <>
        <Box sx={{ width: "100vw", alignItems: "center", display: "flex", padding: "0px 35px", justifyContent: "space-between" }} bgcolor="background.main">
            <Box>
                <TitleText text="MG" />
            </Box>
            <Box sx={{ display: "flex" }}>
                <Box sx={{ paddingInline: "10px" }}>
                    <a href="#proj">
                        <SubText text="Projetos" />
                    </a>
                </Box>
                <Box sx={{ paddingInline: "10px" }}>
                    <a href="#exp">
                        <SubText text="Experiência" />
                    </a>
                </Box>
                <Box sx={{ paddingInline: "10px" }}>
                    <a href="#about">
                        <SubText text="Sobre" />
                    </a>
                </Box>
            </Box>
        </Box>
    </>
}

export default Header;