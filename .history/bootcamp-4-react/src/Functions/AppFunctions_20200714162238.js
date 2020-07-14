/**
 * Write all your functions here and export them to use in each respective component
 * An example is done below for filtering football clubs
 */

const getFilteredClubs = (filterText, data) => {
  //
  /**
   * 
   */
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
  if(results.length === 0){
    data.filter((footballClub) => {
      footballClub.search.forEach(tags => {
        if(tags.indexOf(filterText) !== -1) {
          results.push(footballClub)
        }
      })
    });
    const unique = new Set(results)
    results = [...unique]
    return results
  }
  return results
};

export { getFilteredClubs };
