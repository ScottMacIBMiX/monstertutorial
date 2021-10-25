import { Component } from 'react';

import {CardList} from "./components/CardList/CardList"
import {SearchBox} from "./components/SearchBox/SearchBox"
import './App.css';

class App extends Component{

  constructor(){

    super();

    this.state={

      monsters: [ ],
      searchField: ""

    }

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({monsters:users}))
  }

  handleChange = e => {this.setState({searchField: e.target.value}, () => console.log(this.state.searchField))} //Callback after state as setState() is Async

render() {
  const {monsters, searchField} = this.state;
  const filteredMonster = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return(
    <div className="App">
    <h1 className="apptitle">Monster Rolodex</h1>
    <SearchBox placeholder="Find A Monster..." handleChange={this.handleChange}/>
    <CardList monsters={filteredMonster}/>
    </div>
  );

}

}

export default App;
