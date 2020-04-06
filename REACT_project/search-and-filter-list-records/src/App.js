import React, { Component } from 'react';
import './App.css';
import data from "./data.json";

class App extends Component {
  state = {
    displayItems: [],
    allItems: [],
    cuisines: []
  };

  handleSelect = () => {
    var e = document.getElementById("cuisine-filter");
    var selected = e.options[e.selectedIndex].text;

    if (selected === "Choose Any")
      this.setState({ displayItems: [...this.state.allItems] });
    else {
      let displayItems = [];
      displayItems = this.state.allItems.filter(item =>
        item["Cuisine Style"].toLowerCase().includes(selected.toLowerCase())
      );
      this.setState({ displayItems });
    }
  };

  handleSort = () => {
    var e = document.getElementById("rate-filter");
    var selected = e.options[e.selectedIndex].value;

    if (selected === "ranking") {
      this.setState({ displayItems: [...this.state.allItems] });
    } else if (selected === "lowToHigh") {
      let displayItems = [...this.state.displayItems];
      displayItems.sort(function (index1, index2) {
        return index1["Rating"] - index2["Rating"];
      });
      this.setState({ displayItems });
    } else {
      let displayItems = [...this.state.displayItems];
      displayItems.sort(function (index1, index2) {
        return index2["Rating"] - index1["Rating"];
      });
      this.setState({ displayItems });
    }
  };

  componentDidMount() {
    this.renderList();
  }

  renderList() {
    var cuisines = [];
    var displayItems = [];
    for (let i = 0 ; i < data.length ; i++) {

      displayItems.push(data[i]);

      /* เตรียม item ให้กับ select option */
      data[i]["Cuisine Style"].substring(1, data[i]["Cuisine Style"].length - 2).split(",")
        .forEach(cuisine => {
          let cuisineN = cuisine.substring(1, cuisine.length - 1);
          cuisineN = cuisineN.includes("'") ? cuisineN.substring(1, cuisineN.length) : cuisineN;
          if (cuisines.indexOf(cuisineN) < 0) {
            cuisines.push(cuisineN);
          }
        }
      );
    }

    this.setState({ cuisines });

    this.setState({ displayItems }, () => {
      this.setState({ allItems: [...this.state.displayItems] });
    });
  }

  render() {
    return (
      <div>
        <div className="filter-section">
          <div>
            Choose a cuisine : &nbsp;
            <select id="cuisine-filter" onChange={this.handleSelect}>
              <option value="any">Choose Any</option>
              {this.state.cuisines.map((cuisine) => {
                return <option value={cuisine}>{cuisine}</option>;
              })}
            </select>
          </div>
          <div>
            Sort by : &nbsp;
            <select id="rate-filter" onChange={this.handleSort}>
              <option value="ranking">Ranking</option>
              <option value="lowToHigh">Rating: Low to High</option>
              <option value="highToLow">Rating: High to Low</option>
            </select>
          </div>
        </div>
        <div className="list-container">
          {this.state.displayItems.map(item => {
            /* ถอดรายการออกมาจาก string */
            let cuisines = item["Cuisine Style"].substring(1, item["Cuisine Style"].length - 2).split(",");
            return (
              <div className="restaurant">
                <div className="restaurant-data">
                  <div className="restaurant-city">{item["City"]}</div>
                  <br />
                  <div className="restaurant-name">{item["Name"]}</div>
                  {/* สร้าง list ของ cuisines */}
                  <div className="restaurant-cuisines">
                    {cuisines.map(cuisine => {
                      let displayCuisine = cuisine.substring(1, cuisine.length - 1); /* ลบ "" ออก */
                      displayCuisine = displayCuisine.includes("'") ? displayCuisine.substring(1, displayCuisine.length) : displayCuisine; /* ลบ ' ออก */
                      return (
                        <div className="cuisine-container">
                          {displayCuisine}
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div className="line"></div>
                <div className="score">
                  <div>
                    {item["Number of Reviews"]}
                  </div>
                  <div>
                    {item["Rating"]}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default App;
