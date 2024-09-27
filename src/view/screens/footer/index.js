import { Box, Typography } from "@mui/material"
import { SubText, SubtitleText } from "../../styles/title";

const FooterPage = () => {
    return <>
        <Box sx={{ padding: "50px 50px" }}>
            <Box sx={{ padding: "150px 0px" }}>
                <Box sx={{ display: "flex", paddingTop: "100px", justifyContent: "center" }}>
                    <Box sx={{ width: "600px", padding: "0px 50px 0px 0px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}>
                        <Typography variant="h2">MG</Typography>
                        <Box sx={{ paddingTop: "50px" }}>
                            <SubText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
}

export default FooterPage;