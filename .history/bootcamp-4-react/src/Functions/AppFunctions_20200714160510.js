/**
 * Write all your functions here and export them to use in each respective component
 * An example is done below for filtering football clubs
 */

const getFilteredClubs = (filterText, data) => {
  //Here, you will need to search football clubs meeting the filter text passed as a parameter
  let results = []
  results = data.filter((footballClub) => {
    return (
      (filterText.length > 0 &&
        footballClub.school
          .toLowerCase()
          .indexOf(filterText.toLowerCase().trim()) !== -1)
      
    );
  });
  //(footballClub.search.indexOf(filterText) !== -1)
  if(!results){
    results = []
    results = data.filter((footballClub) => {
      return (
        ()
        
      );
    });
  }

  return results
};

export { getFilteredClubs };
