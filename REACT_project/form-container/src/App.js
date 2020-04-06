import React from 'react';
import './App.css';

function Sampleform(props) {
  const dietList = props.diets.map((diet, index) => {
    const listId = 'diet' + index;
    return (
      <React.Fragment>
        <input type="checkbox" id={listId} name={diet.type} value={diet.type} onClick={props.handleDietChange} />
        <label for={diet.type}> {diet.type}</label><br />
      </React.Fragment>
    )
  })

  return (
    <form onSubmit={props.handleSubmit} class="sample-form">
      <input id="fname" name="firstN" type="text" placeholder="First Name" value={props.firstN} onChange={props.handleInputChange} />
      <br />
      <input id="lname" name="lastN" type="text" placeholder="Last Name" value={props.lastN} onChange={props.handleInputChange} />
      <br />
      <input id="age" name="age" type="number" min="1" max="150" placeholder="Age" value={props.age} onChange={props.handleInputChange} />

      <br /><br />

      <input type="radio" id="male" name="gender" value="male" onClick={props.handleInputChange} />
      <label for="male">Male</label><br />
      <input type="radio" id="female" name="gender" value="female" onClick={props.handleInputChange} />
      <label for="female">Female</label>

      <br />

      <label for="destination" class="dest-label">Select your destination</label><br />
      <select id="destination" name="destination" form="destform" onChange={props.handleInputChange}>
        <option value="noselect">--Please Choose a destination--</option>
        <option value="thailand">Thailand</option>
        <option value="japan">Japan</option>
        <option value="brazil">Brazil</option>
      </select>

      <br /><br />

      <lable class="diet-title">Dietary restrictions:</lable><br />
      <div class="diet-list">{dietList}</div>

      <br />

      <input type="submit" value="Submit" />
    </form>
  )
}

function Information(props) {
  const dietList = props.diets.map((diet, index) => {
    const listId = 'diet' + index;
    return (
      <li key={listId}>**{ diet.type} : { diet.status === true ? 'Yes' : 'No'}</li>
    )
  })

  return (
    <div className="information">
      <h2>Entered information:</h2>
      <p>Your name: {props.firstN} {props.lastN}</p>
      <p>Your age: {props.age}</p>
      <p>Your gender: {props.gender}</p>
      <p>Your destination: {props.destination}</p>
      <p>Your dietary restrictions:</p>
      <ul className="dietList" >{dietList}</ul>
    </div>
  )
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstN: '',
      lastN: '',
      age: null,
      gender: null,
      destination: null,
      diets: [{ type: "Nuts free", status: false }, { type: "Lactose free", status: false }, { type: "Vegan", status: false }]
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleDietChange = this.handleDietChange.bind(this);
  }

  handleInputChange = (e) => {
    const input = e.target.value;
    const inputName = e.target.name;
    this.setState({ [inputName]: input });
  }

  handleDietChange = (e) => {
    const inputName = e.target.name;
    this.setState((prevState) => ({
      diets: prevState.diets.map((diet) =>
        diet.type === inputName ? { ...diet, status: diet.status === false ? true : false } : diet
      )
    }))
  }

  render() {
    return (
      <React.Fragment>
        <div>
          <h1>Sample form</h1>
          <Sampleform
            handleInputChange={this.handleInputChange}
            firstN={this.state.firstN}
            lastN={this.state.lastN}
            age={this.state.age}
            gender={this.state.gender}
            destination={this.state.destination}
            diets={this.state.diets}
            handleDietChange={this.handleDietChange}
          />
        </div>
        <hr/>
        <div>
          <Information
            firstN={this.state.firstN}
            lastN={this.state.lastN}
            age={this.state.age}
            gender={this.state.gender}
            destination={this.state.destination}
            diets={this.state.diets}
          />
        </div>
      </React.Fragment>
    )
  }
}

export default App;
