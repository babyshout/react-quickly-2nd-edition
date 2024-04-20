import React, { useState } from "react";

const FocusEnum = {
  FOCUS_NONE: 0,
  FOCUS_USER: 1,
  FOCUS_REQUEST: 2,
};
Object.freeze(FocusEnum);

function getStyle(isActive) {
  return {
    display: "flex",
    flexDirection: "column",
    backgroundColor: isActive ? "oldlace" : "transparent",
  };
}

function Field({ label, children }) {
  return (
    <label>
      {label}:
      <br />
      {children}
    </label>
  );
}

function Contact() {
  const [focus, setFocus] = useState(FocusEnum.FOCUS_NONE);
  const onUserFocus = () => setFocus(FocusEnum.FOCUS_USER);
  const onRequestFocus = () => setFocus(FocusEnum.FOCUS_REQUEST);
  const onBlur = () => setFocus(FocusEnum.FOCUS_NONE);

  return (
    <form onBlur={onBlur}>
      <h1>Contact</h1>
      <fieldset
        onFocus={onUserFocus}
        style={getStyle(focus === FocusEnum.FOCUS_USER)}
      >
        <legend>User</legend>
        <Field label="Name">
          <input />
        </Field>
        <Field label="Email">
          <input type="email"></input>
        </Field>
      </fieldset>
      <fieldset
        onFocus={onRequestFocus}
        style={getStyle(focus === FocusEnum.FOCUS_REQUEST)}
      >
        <legend>Request</legend>
        <Field label="Subject">
          <input />
        </Field>
        <Field label="Body">
          <textarea />
        </Field>
      </fieldset>
    </form>
  );
}

function App() {
  return React.createElement(Contact);
}

export default App;
