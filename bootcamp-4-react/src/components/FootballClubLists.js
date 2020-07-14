import React from "react";

const FootballClubLists = (props) => {

  const buildingList =
    props.filteredClubs.length === 0
      ? props.data.map((footballClub) => {
          return (
            <tr key={footballClub.id}>
              <td data-label="School">{footballClub.school} </td>
              <td data-label="Mascot"> {footballClub.mascot} </td>
            </tr>
          );
        })
      : props.filteredClubs.map((footballClub) => {
        return (
          <tr key={footballClub.id}>
            <td data-label="School">{footballClub.school} </td>
            <td data-label="Mascot"> {footballClub.mascot} </td>
          </tr>
        );
      });

  return <tbody>{buildingList}</tbody>;
};
export default FootballClubLists;
