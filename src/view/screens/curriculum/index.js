import { Box, Typography } from "@mui/material"
import { SubText, SubtitleText } from "../../styles/title";
import { FaWhatsapp } from "react-icons/fa";


const CurriculumPage = () => {
    return <>
        <Box sx={{ paddingTop: "0px", paddingInline: { lg: "20%", xs: "20px" }, width: "100%", justifyContent: "center", display: "flex", flexDirection: "column", bgcolor: "secondary.main" }}>
            <Box sx={{ padding: "25px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: { lg: "row", xs: "column" } }}>
                <Box sx={{ width: "70%", padding: "0px 50px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start" }}>
                    <Typography variant="h2">Certificados</Typography>
                    <Box sx={{ paddingBlock: "25px" }}>
                        <Box sx={{ padding: "30px", height: "100px", borderRadius: "10px", justifyContent: "center", alignItems: "center", display: "flex", boxShadow: "0px 7px 9px 0px rgba(0,0,0,0.75)" }} bgcolor="background.main">
                            <a href="#proj">
                                <SubtitleText text={"Acessar certificados"} />
                            </a>
                        </Box>
                    </Box>
                </Box>
                <Box sx={{ width: "30%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <img height="150px" src="https://cdn-icons-png.flaticon.com/512/3135/3135807.png" />
                </Box>
            </Box>
        </Box>
    </>
}

export default CurriculumPage;