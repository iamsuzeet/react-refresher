import React, { Component } from "react";
import styles from "./App.module.css";
import { CardList } from "./components/cardList/CardList";
import { SearchBox } from "./components/searchBox/SearchBox";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchValue: ""
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(user => this.setState({ monsters: user }));
  }

  onInputChange = e => {
    console.log(e.target.value);

    this.setState({
      searchValue: e.target.value
    });
  };

  render() {
    const { monsters, searchValue } = this.state;
    const filteredMonsters = monsters.filter(monster =>
      monster.name.toLowerCase().includes(searchValue)
    );

    return (
      <div className={styles.App}>
        <h1>Monsters Rolodex</h1>
        <SearchBox
          changeHandler={this.onInputChange}
          placeholder="search monster"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
