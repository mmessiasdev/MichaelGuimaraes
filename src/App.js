import { createTheme, ThemeProvider } from '@mui/material/styles';
import RoutesPage from './controller/routes/public';

function App() {

  //   0
  // sm 600 
  // md 900   
  // lg 1200
  // xl 1536

  const Theme = createTheme({
    palette: {
      primary: {
        main: "#5CBBFF",
        dark: "#4563FF",
        light: "#4563FF",
        contrastText: '#fff',
      },
      secondary: {
        main: "#D9D9D9"
      },
      background: {
        main: "#FFFFFF",
        dark: "#000000",
        default: "#FFFFFF"
      },
      text: {
        primary: "#FFFFFF",
        secondary: "#D9D9D9"
      }
    },
    typography: {
      fontFamily: "Montserrat",
      h1: {
        fontSize: 65,
        fontWeight: 'bold'
      },
      h2: {
        fontSize: 30,
        fontWeight: 600
      },
      h3: {
        textTransform: "capitalize",
        fontSize: 14,
        fontWeight: 500 
      },
      h4: {
        textTransform: "capitalize",
        fontSize: 10,
        fontWeight: 'normal'
      }
    }
  })


  return (
    <ThemeProvider theme={Theme}>
      <RoutesPage />
    </ThemeProvider>
  );
}

export default App;