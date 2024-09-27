import { Box, Typography } from "@mui/material"
import { SubText, SubtitleText, TitleText } from "../styles/title";

const DefaultTitle = ({ title, subtitle }) => {
    return <div >
        <Box sx={{ width: "100%", paddingBlock: "15px" }}>
            <TitleText text={title} />
            <SubtitleText text={subtitle} />
        </Box>
    </div>
}

export default DefaultTitle;