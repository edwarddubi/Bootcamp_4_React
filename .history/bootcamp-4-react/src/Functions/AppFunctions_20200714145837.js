
/**
 * Write all your functions here and export them to use in each respective component
 * An example is done below for filtering football clubs
 */



const getFilteredClubs = (filterText, data) => {
  //Here you will need to update the value of the filter with the value from the textbox
  let resu
  return data.filter((footballClub) => {
    return (
      filterText.length > 0 &&
      footballClub.school
        .toLowerCase()
        .indexOf(filterText.toLowerCase().trim()) !== -1
    );
  });
  
};


export {getFilteredClubs}