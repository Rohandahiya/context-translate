import React from "react";
import LanguageContext from "../contexts/LanguageContext";

class Field extends React.Component {
  static contextType = LanguageContext; // contextType should be named so no other name allowed

  render() {
    // console.log(this.context);  // this.context gets the default value passed by the LanguageContext component which is a createContext file
    const text = this.context === "English" ? "Name" : "Naam";

    return (
      <div className="ui field">
        <label>{text}</label>
        <br />
        <input />
      </div>
    );
  }
}

export default Field;
