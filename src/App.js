import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
       <fieldset>
    <h3>0</h3>
    <section>
      <div>
        <button text="1"><span>1</span></button>
        <button text="2"><span>2</span></button>
        <button text="3" ><span>3</span></button>
        <button text="+" ><span>+</span></button>
      </div>
      <div>
        <button text="4"><span>4</span></button>
        <button text="5"><span>5</span></button>
        <button text="6"><span>6</span></button>
        <button text="-"><span>-</span></button>
      </div>
      <div>
        <button text="7"><span>7</span></button>
        <button text="8"><span>8</span></button>
        <button text="9"><span>9</span></button>
        <button text="*"><span>*</span></button>
      </div>
      <div>
        <button text="clear"><span>clear</span></button>
        <button text="0"><span>0</span></button>
        <button text="&larr;"><span>&larr;</span></button>
        <button text="/"><span>/</span></button>
      </div>
    </section>
    <section>
      <button text="="><span>=</span></button>
    </section>
  </fieldset>
      </div>
    );
  }
}

export default App;
