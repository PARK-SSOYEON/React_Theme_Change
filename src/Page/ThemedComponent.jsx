import {useContext} from "react";
import ThemeContext from "./ThemeContext";

function ThemedComponent(props) {
    const {theme, toggleTheme} = useContext(ThemeContext);

    return(
        <div>
            <p>Current Theme: {theme}</p>
            <button onClick={toggleTheme}>Change Theme</button>
        </div>
    );
}

export default ThemedComponent;