import { Box, Typography } from "@mui/material";

export const TitleText = ({ text }) => {
    return (
        <Box>
            <Typography variant="h1">{text}</Typography>
        </Box>
    );
};

export const SubtitleText = ({ text }) => {
    return (
        <Box>
            <Typography variant="h2">{text}</Typography>
        </Box>
    );
};

export const SubText = ({ text }) => {
    return (
        <Box>
            <Typography variant="h3">{text}</Typography>
        </Box>
    );
};
