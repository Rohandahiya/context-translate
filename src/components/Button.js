import React from "react";
import LanguageContext from "../contexts/LanguageContext";
import ColorContext from "../contexts/ColorContext";

class Button extends React.Component {
  //static contextType = LanguageContext; // contextType should be named so no other name allowed
  // contextType is only used when we want this.context (which we get by default value in create context file) we  dont need it if we use consumer tag

  render() {
    // console.log(this.context);  // this.context gets the default value passed by the LanguageContext component which is a createContext file
    // const text = this.context === "English" ? "Submit" : "Voorleggen"; // not used when we use consumer tag
    return (
      <ColorContext.Consumer>
        {(color) => (
          <button className={`ui button ${color}`}>
            <LanguageContext.Consumer>
              {(value) => (value === "English" ? "Submit" : "Voorleggen")}
            </LanguageContext.Consumer>
          </button>
        )}
      </ColorContext.Consumer>
    );
    // Value in LanguageContextconsumer to handle default case
  }
}

export default Button;
