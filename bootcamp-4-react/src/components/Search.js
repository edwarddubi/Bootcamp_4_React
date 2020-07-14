import React from "react";
import {getFilteredClubs} from "../Functions/AppFunctions"

const Search = (props) => {

  const filterText = (event) =>{
    props.setFilteredClubs(getFilteredClubs(event.target.value, props.data))
  }
  //You will need to save the value from the textbox and update it as it changes
  //You will need the onChange value for the input tag to capture the textbox value

  return (
    <div>
      <div  style={{ marginTop: "1rem" }} class="ui search fluid">
        <div class="ui icon input">
          <input
            onChange={filterText}
            class="prompt"
            type="text"
            placeholder="Type to filter..."
          ></input>
          <i class="search icon"></i>
        </div>
      </div>
    </div>
  );
};

export default Search;
