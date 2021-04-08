import React, { Component } from 'react';
import './App.css';
import CardList from './components/CardList/CardList';
import SearchBox from './components/SearchBox/SearchBox';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }

  handleChange = (e) => this.setState({ searchField: e.target.value });

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    return (
      <>
        <div className='bg-white'>
          <div className='mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24'>
            <h2 class='text-6xl text-center font-extrabold font-sedgwick text-red-800 tracking-tight sm:text-7xl'>
              Monster Rolodex
            </h2>
            <div class='mt-8 sm:mx-auto sm:w-full sm:max-w-md'>
              <div class='py-8 px-4 sm:px-10'>
                <SearchBox
                  placeholder='Search monsters'
                  handleChange={this.handleChange}
                />
              </div>
            </div>

            <div className='space-y-12'>
              <ul className='space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:grid-cols-3 lg:gap-x-8'>
                <CardList monsters={filteredMonsters} />
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
