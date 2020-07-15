import React, { useState } from "react";
import Search from "./components/Search";
import ViewFootballClub from "./components/ViewFootballClub";
import FootballClubLists from "./components/FootballClubLists";
import AddFootballClub from "./components/AddFootballClub";
import RemoveFootballClub from "./components/RemoveFootballClub";
import EditFootballClub from "./components/EditFootballClub";
import { getData } from "./data/data.js";

function App() {
  const [data, setData] = useState(getData());
  const [filteredClubs, setFilteredClubs] = useState([]);
  const [footballClubId, setFootballClubId] = useState(0); //this can help you edit or delete a specific football club
  const [delFootballClub, setDelFootballClub] = useState(false);
  const [editFootballClub, setEditFootballClub] = useState(false);

  return (
    <div className="App">
      <div className="bg">
        <div
          style={{ paddingTop: "5%", paddingBottom: "10%" }}
          class="ui container"
        >
          <h1 style={{ color: "white", marginLeft: "25px" }}>
            Welcome To Football Club App
          </h1>
          <Search data={data} setFilteredClubs={setFilteredClubs} />

          <main style={{ marginTop: "50px" }} className="main">
            <div class="ui grid">
              <div
                style={{ width: "55%" }}
                class="table-responsive"
                className="tableWrapper"
              >
                <table class="ui stackable single line fixed striped selectable table padded ">
                  <thead>
                    <tr>
                      <th>School</th>
                      <th>Mascot</th>
                      <th class="four wide" colspan="2">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <FootballClubLists
                    setFootballClubId={setFootballClubId}
                    data={data}
                    filteredClubs={filteredClubs}
                    setDelFootballClub={setDelFootballClub}
                    setEditFootballClub={setEditFootballClub}
                  />
                  <tfoot>
                    <tr>
                      <th>
                        {filteredClubs !== null && filteredClubs.length !== 0
                          ? "Search results: " + filteredClubs.length
                          : data.length}{" "}
                        School(s)
                      </th>
                      <th></th>
                    </tr>
                  </tfoot>
                </table>
              </div>

              <div
                style={{ width: "35%", marginLeft: "50px", marginTop: "-20px" }}
                class="six wide column"
              >
                <div>
                  {delFootballClub && (
                    <RemoveFootballClub
                      data={data}
                      setData={setData}
                      footballClubId={footballClubId}
                      setDelFootballClub={setDelFootballClub}
                      setFootballClubId={setFootballClubId}
                      setFilteredClubs={setFilteredClubs}
                      filteredClubs={filteredClubs}
                    />
                  )}
                </div>
                {!delFootballClub && <div style={{ height: "126px" }}></div>}

                <div style={{ marginTop: "10px" }}>
                  <ViewFootballClub data={data} />
                </div>
              </div>

              <div>
                <AddFootballClub data={data} />
              </div>
              <div>
                <EditFootballClub data={data} />
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
