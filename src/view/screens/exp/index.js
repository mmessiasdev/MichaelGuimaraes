import { Box } from "@mui/material"
import DefaultTitle from "../../component/title";
import { SubText, SubtitleText } from "../../styles/title";

const ExperiencePage = () => {
    return <>
        <Box sx={{ paddingTop: "200px", paddingInline: {lg: "20%", xs: "20px"}, width: "100%", justifyContent: "center", display: "flex", flexDirection: "column" }}>
            <DefaultTitle title="Expêriencias" subtitle=" que possuo" />
            <Box sx={{ padding: "100px 0px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <SubtitleText text="Rede Connect" />
                <Box sx={{ display: "flex", paddingTop: "100px", justifyContent: "space-between" }}>
                    <SubText text="------------------" />
                    <SubText text="Jul 2022 - Fev 2023" />
                </Box>
                <Box sx={{width: "100%", display: "flex", paddingTop: "100px", alignItems: "center", justifyContent: {lg: "space-between", xs: "center"}, flexDirection: {lg: "row", xs: "column"} }}>
                    <Box sx={{ width: {lg: "50%", xs: "100%"}, padding: "0px 50px 0px 0px" }}>
                        <SubText text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                    </Box>
                    <Box sx={{height: {lg: "0px", xs: "35px"}}}/>
                    <Box sx={{ width: {lg: "50%", xs: "100%"}, display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: "100%", height: "300px" }} bgcolor="secondary.main" />
                    </Box>
                </Box>
                <Box sx={{ display: "flex", paddingTop: "150px", justifyContent: "center" }}>
                    <Box sx={{ width: {lg: "50%", xs: "100%"}, display: "flex", justifyContent: "center" }}>
                        <Box sx={{ width: "80%", backgroundColor: "#ccc", margin: "20px 0", height: "1px", border: "0" }} />
                    </Box>
                </Box>
            </Box>
        </Box>
    </>
}

export default ExperiencePage;