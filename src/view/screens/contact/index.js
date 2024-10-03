import { Box, Typography } from "@mui/material"
import { SubText, SubtitleText } from "../../styles/title";
import { FaWhatsapp } from "react-icons/fa";


const ContactPage = () => {
    return <>
        <Box sx={{ paddingTop: "0px", paddingInline: { lg: "20%", xs: "20px" }, width: "100%", justifyContent: "center", display: "flex", flexDirection: "column", bgcolor: "primary.main" }}>
            <Box sx={{ padding: "25px", display: "flex", justifyContent: "center", alignItems: "center", flexDirection: {lg: "row", xs: "column"} }}>
                <Box sx={{ width: "70%", padding: "0px 50px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "start" }}>
                    <Typography variant="h2">Contate-nos</Typography>
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
                <Box sx={{ width: "30%", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                    <img height="150px" src="https://static.vecteezy.com/system/resources/previews/019/025/541/original/3d-mobile-phone-frame-mockup-template-illustration-png.png" />
                </Box>
            </Box>
        </Box>
    </>
}

export default ContactPage;