import React, {useState, useCallback} from "react";
import styled, {ThemeProvider} from "styled-components";
import Mainpage from "./Page/Mainpage";
import ThemeContext from "./Page/ThemeContext";

const MainTitleText = styled.p`
    font-size: 24px;
    font-weight: bold;
    text-align: center;
`;

function App(props) {
    const [theme, setTheme] = useState('light');

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    }, []);

  return (

      <ThemeContext.Provider value={{theme, toggleTheme}}>
          <ThemeProvider theme={{ mode: theme }}>
              <div
                  style={{
                      width: "100vw",
                      height: "100vh",
                      backgroundColor: theme === 'light' ? "white" : "black",
                      color: theme === 'light' ? "black" : "white",
                      textAlign: 'center',
                      padding: '20px'
                  }}
              >
                  <MainTitleText theme={theme}>React Theme Change</MainTitleText>
                  <Mainpage />
              </div>
          </ThemeProvider>
      </ThemeContext.Provider>
  );
}

export default App;
