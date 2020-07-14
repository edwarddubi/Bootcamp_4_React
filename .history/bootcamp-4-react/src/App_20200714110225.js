import React, { useState } from "react";
import Search from "./components/Search";
import ViewFootballClub from "./components/ViewFootballClub";
import FootballClubLists from "./components/FootballClubLists";
import AddFootballClub from "./components/AddFootballClub";
import RemoveFootballClub from "./components/RemoveFootballClub";
import EditFootballClub from "./components/EditFootballClub"
import { getData } from "./data/data.js";

function App() {
  const [data, setData] = useState(getData());
  const [filteredClubs, setFilteredClubs] = useState([])
  

  return (
    <div className="App">
      <div className="bg">
        <div
          style={{ paddingTop: "5%", paddingBottom: "10%" }}
          class="ui container"
        >
          <h1 style={{ color: "white", marginLeft: "25px" }}>
            Football Club App
          </h1>
          <Search data={data} setFilteredClubs={setFilteredClubs} />

          <main style={{ marginTop: "50px" }} className="main">
            <div class="ui grid">
              <div style={{ width: "50%" }} class="table-responsive" className="tableWrapper">
                <table
                  class="ui stackable fixed striped single line selectable celled table padded "
                >
                  <thead>
                    <tr>
                      <th>School</th>
                      <th>Mascot</th>
                    </tr>
                  </thead>
                  <FootballClubLists data={data} filteredClubs={filteredClubs} />
                  <tfoot>
                    <tr>
                      <th>{filteredClubs.length !== 0 ? "Search results: " + filteredClubs.length : data.length} School(s)</th>
                      <th></th>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div style={{ width: "50%", marginLeft:"50px", marginBottom:"" }} class="six wide column">
                <ViewFootballClub data={data} />
              </div>

              <div>
                <AddFootballClub data={data} />
              </div>
              <div>
                <EditFootballClub data={data} />
              </div>
             
              <div>
                <RemoveFootballClub data={data} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
