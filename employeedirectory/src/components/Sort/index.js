  
import React from "react";
import "./style.css";
import 'bootstrap';

function Sort(props) {
  return (
      <div className="searchBlock md-form mt-0">
        <input placeholder="Narrow Your Search!" className="inputBox blockItem form-control" type="text" value={props.search} onChange={props.handleInputChange} name="search" id="search"></input>
        <h3 className="blockItem">Sort By:</h3>
        <div className="blockItem">
            <button className="btn btn-secondary" type="button" onClick={props.sortName}>
            Sort By...
            </button>
        </div>
      </div>
  );
}

export default Sort;