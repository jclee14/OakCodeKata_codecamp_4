import React from 'react';
import './App.css';

const API = 'https://api.github.com/';

class SearchForm extends React.Component {
  handleForm = event => {
    event.preventDefault();
    let username = this.refs.username.value
    this.props.fetchSearch(username);
  }

  render() {
    return (
      <div className="search-bar">
        <form
          className="input-group"
          onSubmit={this.handleForm}>
          <input
            type="search"
            ref="username"
            placeholder="Type Username here"
            className="form-control" />
          <span className="input-group-btn">
            <button type="submit" className="btn btn-warning">Submit</button>
          </span>
        </form>
      </div>
    )
  }
}

function AppHeader() {
  return (
    <div className="jumbotron">
      <h1>Github Search App</h1>
      <h2>Search users in GitHub using this simple React application.</h2>
      <p>Click on the card to see more detail about individual user. The search default is jclee14 (me!)</p>
    </div>
  );
};

function Profiles(props) {
  if (props.data) {
    let data = props.data;
    if (data.message === 'Not Found') {
      return (
        <div className="notfound">
          <h2>Oops !!!</h2>
          <p>The Component Couldn't Find The You Were Looking For . Try Again </p>
        </div>
      );
    } else {
      let userList = data.items.map((name) => {
        return (
          <a key={name.id} href={name.html_url} target="blank">
            <div className="bs-callout bs-callout-info">
              <img className="user" src={name.avatar_url} alt={`${name.login}`} />
              <h4>Username : {name.login}</h4>
              <p> Url : {name.html_url}</p>
              <p> Score : {name.score} </p>
            </div>
          </a>
        );
      })
      return (
        <div>{userList}</div>
      );
    }
  }
  else {
    return <div>Fetching data . . .</div>
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: 'jclee14',
      data: '',
    }
  }

  fetchSearch = username => {
    let url = `${API}search/users?q=${username}`;
    fetch(url).then((res) => res.json())
      .then((data) => {
        this.setState({
          data: data
        });
      })
      .catch((error) => console.log('Oops! . There Is A Problem' + error))
  }

  componentDidMount() {
    this.fetchSearch(this.state.searchText);
  }

  render() {
    return (
      <div>
        <AppHeader />
        <SearchForm
          fetchSearch={this.fetchSearch}
        />
        <Profiles
          data={this.state.data}
        />
      </div>
    )
  }
}

export default App;
