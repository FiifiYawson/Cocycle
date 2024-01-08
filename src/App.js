import React, { useState } from "react"
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import ThemeProvider from "@mui/material/styles/ThemeProvider"
import createTheme from "@mui/material/styles/createTheme"
import PageLayout from "./PageLayouts/PageLayout";
import routes from "./utils/routes";
import './App.css';


function App() {
  const [theme, setTheme] = useState(themeCreater)

  const changeTheme = () => {
    setTheme(themeCreater)
  }

  return (
    <ThemeProvider theme={theme}>
      <themeContext.Provider value={changeTheme}>
        <Router>
          <Routes>
            <Route element={<PageLayout />} >
              {routes.map(({ path, element }, index) => <Route path={path} element={element} key={index} />)}
            </Route>
          </Routes>
        </Router>
      </themeContext.Provider>
    </ThemeProvider>
  );
}



const getCssVarible = (variable, element) => {
  let root

  if (element) {
    root = getComputedStyle(document.querySelector(element))
  } else {
    root = getComputedStyle(document.querySelector(":root"))
  }

  return root.getPropertyValue(variable)
}


const themeCreater = () => {
  return createTheme({
    palette: {
      primary: {
        main: getCssVarible("--primary-color"),
        light: getCssVarible("--primary-light"),
      }
    },
    typography: {
      fontFamily: "inter",
      h1: {
        fontSize: "50px",
        fontWeight: "700",
      },
      h2: {
        fontSize: "40px",
        fontWeight: "700"
      },
      h3: {
        fontSize: "30px",
        fontWeight: "700"
      },
      h4: {
        fontSize: "25px",
        fontWeight: "700",
      },
      h5: {
        fontSize: "20px",
        fontWeight: "700"
      },
      h6: {
        fontSize: "18px",
        fontWeight: "700"
      },
      body1: {
        fontSize: "15px",
        fontWeight: "400"
      },
      body2: {
        fontSize: "12px",
        fontWeight: "400"
      },
      subtitle1: {
        fontSize: "10px",
        fontWeight: "400"
      }
    }
  })
}

const themeContext = React.createContext()

export default App;
