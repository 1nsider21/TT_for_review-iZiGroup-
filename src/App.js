import React from 'react';
import './App.css';
import { getRandomUsers } from './api/randomUsers';
import { UsersList } from './components/UsersList/UsersList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.addUsersInput = React.createRef();

    this.state = {
      randomUsers: [],
      query: '',
    };
  }

  componentDidMount() {
    this.loadRandomUsers(10);
  }
  
  loadRandomUsers = async (countOfUsers) => {
    const loadedRandomUsers = await getRandomUsers(countOfUsers);
    this.setState({
      randomUsers: [...this.state.randomUsers, ...loadedRandomUsers]
    });
  }

  handleAddButtonClick = () => {
    const countOfUsers = +this.addUsersInput.current.value;

    if (countOfUsers <= 0 || countOfUsers === '') {
      this.addUsersInput.current.value = '';
      return;
    } else {
      this.loadRandomUsers(countOfUsers);
      this.addUsersInput.current.value = '';
    }
  }

  render() {
    const {randomUsers, query } = this.state;

    return (
      <div className="page">
        <div className="box">
          <h1>Random user genarator</h1>
          <div className="controls">
            <input
              type="text"
              className="search-input"
              placeholder="Search users"
              onChange={(event) => {
                this.setState({ query: event.target.value });
              }}
            />
            <div className="add-group">
              <input
                type="number"
                className="add-input"
                placeholder="Add users"
                ref={this.addUsersInput}
              />
              <button
                type="button"
                className="add-button"
                onClick={this.handleAddButtonClick}
              >
                Add users
              </button>
            </div>
          </div>
        </div>
        <UsersList randomUsers={randomUsers} query={query} />
      </div>
    )
  }
}

export default App;
