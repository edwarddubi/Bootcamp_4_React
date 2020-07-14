/**
 * Write all your functions here and export them to use in each respective component
 * An example is done below for filtering football clubs
 */

const getFilteredClubs = (filterText, data) => {
  //
  /**
   * Here, you will need to search football clubs either by school name or by tags
   * the search  text passed as a parameter
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
