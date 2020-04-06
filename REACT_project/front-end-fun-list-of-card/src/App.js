import React from 'react';

function Card(props) {
  return (
    <div className="card">
      <img 
        className="card-img-top"
        src={props.coverImage} 
        alt="cap image" 
      />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.description}</p>
        <a href={props.buttonLink} className="btn btn-primary" target="_blank">Learn more</a>
      </div>
    </div>
  );
}

function CardList() {
  return (
    <div className="row">
      <div className="col-sm-4">
        <Card 
          coverImage="https://sebhastian.com/static/eb0e936c0ef42ded5c6b8140ece37d3e/fcc29/feature-image.png"
          title="How To Make Interactive ReactJS Form"
          description="Let's write some interactive form with React"
          buttonLink="https://sebhastian.com/interactive-react-form"
        />
      </div>
      <div className="col-sm-4">
        <Card 
          coverImage="https://sebhastian.com/static/4257b49310455388f3e155f8d5ab632e/fcc29/feature-image.png"
          title="Babelify your JavaScript code"
          description="Babel make JavaScript code browser-compatible."
          buttonLink="https://sebhastian.com/babel-guide"
        />
      </div>
      <div className="col-sm-4">
        <Card
          coverImage="https://sebhastian.com/static/4d13c75e6afd3976800de29628da5ba5/fcc29/feature-image.png"
          title="JavaScript Basics Before You Learn React"
          description="Learn the prerequisites of learning React fast"
          buttonLink="https://sebhastian.com/js-before-react"
        />
      </div>
    </div>
  );
}

export default CardList;
