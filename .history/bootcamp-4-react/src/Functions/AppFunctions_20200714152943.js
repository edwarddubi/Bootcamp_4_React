/**
 * Write all your functions here and export them to use in each respective component
 * An example is done below for filtering football clubs
 */

const getFilteredClubs = (filterText, data) => {
  //Here, you will need to search football clubs meeting the filter text passed as a parameter
  return data.filter((footballClub) => {
    let results = filterText.length > 0 &&
      footballClub.school
        .toLowerCase()
        .indexOf(filterText.toLowerCase().trim()) !== -1
        if (!results){
          
        }
    footballClub.search.forEach((tags) => {
      if (tags.indexOf(filterText) !== -1) return footballClub
    })
    return (
      
    );
  });
};

export { getFilteredClubs };
