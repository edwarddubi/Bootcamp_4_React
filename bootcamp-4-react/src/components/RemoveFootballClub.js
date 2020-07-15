import React, { useState, useEffect } from "react";
import { deleteFootballClub } from "../Functions/AppFunctions";



const RemoveFootballClub = (props) => {
  const remove = () => {
    props.filteredClubs.length === 0
      ? props.setData(deleteFootballClub(props.footballClubId, props.data))
      : props.setFilteredClubs(
          deleteFootballClub(props.footballClubId, props.filteredClubs)
        ) ||
        props.setData(deleteFootballClub(props.footballClubId, props.data));

    props.setDelFootballClub(false);
  };
  const cancel = () => {
    props.setFootballClubId(0);
    props.setDelFootballClub(false);
  };

  return (
    <div style={{ marginTop: "10px" }} class="ui floating  message">
      <div class="header">Delete Football Club</div>
      <p>Are you sure you want to delete this football Club?</p>
      <button onClick={remove} class="ui button red ">
        Yes
      </button>
      <button onClick={cancel} class="ui button green">
        No
      </button>
     
    </div>
  );
};

export default RemoveFootballClub;
