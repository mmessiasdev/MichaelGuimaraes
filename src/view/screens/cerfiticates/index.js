import { Box, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
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

// Melhorando o estilo dos PDFs
const PDFDocumentWrapper = styled.div`
    canvas {
        width: 100% !important;
        height: auto !important;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
    }
`;

// Botão estilizado
const StyledButton = styled(Button)`
    padding: 10px 20px;
    margin-top: 20px;
    border-radius: 8px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.15);
    transition: transform 0.3s ease;

    &:hover {
        background-color: #3700b3;
        transform: scale(1.05);
    }
`;

export const CerfiticatesCont = () => {

    return (
        <Box
            sx={{
                paddingTop: "0px",
                paddingInline: { lg: "20%", xs: "20px" },
                width: "100%",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column",
                bgcolor: "secondary.main"
            }}
        >
            <Box
                sx={{
                    padding: "25px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: { lg: "row", xs: "column" }
                }}
            >
                <Box
                    sx={{
                        width: "70%",
                        padding: "0px 50px 0px 0px",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "start"
                    }}
                >
                    <Typography variant="h2" sx={{ fontWeight: "bold", marginBottom: "20px" }}>
                        Certificados
                    </Typography>
                    <Box sx={{ paddingBlock: "25px" }}>
                        <Link to={"/certificates"}>
                            <Box sx={{ bgcolor: "primary.main", padding: "15px", borderRadius: "10px", color: "white" }}>
                                <Typography variant="h2">
                                    Acessar Certificados
                                </Typography>

                            </Box>
                        </Link>
                    </Box>
                </Box>
                <Box
                    sx={{
                        width: "30%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between"
                    }}
                >
                    <img height="150px" src="https://cdn-icons-png.flaticon.com/512/3135/3135807.png" alt="Imagem de Certificado" />
                </Box>
            </Box>
        </Box>
    );
}

// Array contendo PDFs e seus títulos
const pdfs = [
    { file: pdf1, title: 'Introdução ao 5G' },
    { file: pdf2, title: 'Redes TCP/IP' },
    { file: pdf3, title: 'Redes TCP/IP - Intermediário' },
    { file: pdf4, title: 'Fibra Optica Ponto a Ponto' },
    { file: pdf5, title: 'Portfolio do CPE para rede Opticas' },
    { file: pdf6, title: 'Certificações: Redes EPON' },
    { file: pdf7, title: 'Tecnologias Fast e Giga' },
    { file: pdf8, title: 'Inteligencia Emocional' },
    { file: pdf9, title: 'Redes de computadores' },
    { file: pdf10, title: 'Roteadores Empresariais' },
];

export const CerfiticatesPage = () => {
    const handleOpenPDF = (pdfFile) => {
        // Abre o PDF em uma nova aba
        window.open(pdfFile, '_blank');
    };

    return (
        <Box
            sx={{
                paddingTop: "100px",
                paddingInline: { lg: "20%", xs: "20px" },
                width: "100%",
                justifyContent: "center",
                display: "flex",
                flexDirection: "column"
            }}
        >
            <Typography variant="h2">Certificados</Typography>
            <Box
                sx={{
                    padding: "100px 0px",
                    width: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center"
                }}
            >
                {/* Exibindo os PDFs dinamicamente com títulos */}
                {pdfs.map((pdfItem, index) => (
                    <Box
                        key={index}
                        sx={{
                            display: "flex",
                            flexDirection: { lg: "row", xs: "column" }, // Responsividade: inline em desktop, coluna em mobile
                            width: "100%",
                            justifyContent: "space-evenly",
                            alignItems: "center",
                            marginBottom: "50px"
                        }}
                    >
                        <PDFDocumentWrapper>
                            <Document file={pdfItem.file}>
                                <Page pageNumber={1} />
                            </Document>
                        </PDFDocumentWrapper>
                        <Box sx={{ marginLeft: { lg: "20px", xs: "0" }, textAlign: { xs: "center", lg: "left" } }}>
                            <Typography variant="h6" sx={{ fontWeight: "bold" }}>{pdfItem.title}</Typography>
                            <StyledButton onClick={() => handleOpenPDF(pdfItem.file)}>
                                <Typography variant="h2">Acessar certificado</Typography>

                            </StyledButton>
                        </Box>
                    </Box>
                ))}
            </Box>
        </Box>
    );
};
