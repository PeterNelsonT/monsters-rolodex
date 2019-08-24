import React from "react";
import Monsters from "./components/Monsters/Monsters";
import Search from "./components/Search/Search";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      search: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => {
        this.setState({ monsters: data });
      })
      .catch(error => console.log(error));
  }

  searchmonster = e => {
    this.setState({ search: e.target.value });
  };

  render() {
    const { monsters, search } = this.state;
    const filteredmonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <Search find={this.searchmonster} />
        <Monsters data={filteredmonsters} />
      </div>
    );
  }
}

export default App;
