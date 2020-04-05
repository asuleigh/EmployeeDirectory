  
import React from "react";
import "./style.css";
import 'bootstrap';

function Sort(props) {
  return (
      <div className="searchBlock md-form mt-0">
        <input placeholder="Narrow Your Search!" className="inputBox blockItem form-control" type="text" value={props.search} onChange={props.handleInputChange} name="search" id="search"></input>
        <h3 className="blockItem mx-auto">Sort By:</h3>
        <div className="blockItem">
            <button className="btn btn-secondary" type="button" onClick={props.sortName}>
            A-Z
            </button>
            <button className="btn btn-secondary ml-4" type="button" onClick={props.sortOccupation}>
            Occupation
            </button>
        </div>
      </div>
  );
}

export default Sort;