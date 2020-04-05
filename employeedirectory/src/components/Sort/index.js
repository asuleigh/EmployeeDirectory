import React from "react";
import 'bootstrap';

function Sort(props) {
  return (
      <div className="md-form mt-0 mx-auto">
        <input placeholder="Search an Employee" className="form-control" 
        type="text" value={props.search} onChange={props.handleInputChange} name="search" id="search"></input>
        <h3 className="mx-auto">Sort By Category:</h3>
        <div>
            <button className="btn btn-outline-primary ml-4" type="button" onClick={props.sortName}>
            A-Z
            </button>
            <button className="btn btn-outline-primary ml-4" type="button" onClick={props.sortOccupation}>
            Occupation
            </button>
        </div>
      </div>
  );
}

export default Sort;