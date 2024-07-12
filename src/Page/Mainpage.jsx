import React, {useState, useCallback} from "react";
import ThemedComponent from "./ThemedComponent";
import ThemeContext from "./ThemeContext";

function NameInput({name, onChange}) {
    return (
        <lable>
            이름:
            <input type="text" value={name} onChange={onChange}/>
        </lable>
    );
}

function SubmitButton({ onClick }) {
    return <button type="submit" onClick={onClick}>submit</button>;
}

function CurrentDate() {
    const date = new Date();
    const formattedDate = date.toLocaleString("ko-KR", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit"
    });

    return <h1>현재 날짜: {formattedDate}</h1>;
}

function DisplayName({name}) {
    return <h2>작성한 이름: {name}</h2>;
}

function Mainpage(props) {
    const [name, setName] = useState("");
    const [submittedName, setSubmittedName] = useState("");

    const handleChangeName = (event) => {
        setName(event.target.value);
    }

    const onClick = (event) => {
        setSubmittedName(name)
    }

    return (
        <div>
            <NameInput name={name} onChange={handleChangeName}/>
            <SubmitButton onClick={onClick}/>
            <CurrentDate/>
            <DisplayName name={submittedName}/>

            <ThemedComponent />
        </div>
    );
}

export default Mainpage;