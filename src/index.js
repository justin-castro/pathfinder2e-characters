import React from 'react'
import ReactDOM from 'react-dom'
import './index.css';
import { Header } from './Header';
import { ClassDropdown } from './ClassDropdown';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { class: 'Monk' };

    this.changeClass = this.changeClass.bind(this);
  }
    changeClass(newClass){
      this.setState({
      charClass: newClass
    });
  }
  render() {
    return (
      <div className="App">
         <Header charClass={this.state.charClass } />
        <ClassDropdown onChange={this.changeClass} />
      </div>
    );
  }
}

ReactDOM.render(<App/>,document.getElementById('app'))
