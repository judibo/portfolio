import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route,} from 'react-router-dom';
import Home from './components/Home/Home';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Experience from './components/Experience/Experience';
import NavBar from './components/NavBar/NavBar';
import Skills from './components/Skills/Skills';
import About from './components/About/About';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: null,
    };
  }

  oneHandleClick = (e) => {
    e.preventDefault();
    console.log('1');
    this.setState({
      selected: 1
    })
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div className="App">
            <NavBar />
            <Route exact path="/" render={() => <Home selected={this.state.selected} /> }/>
            <Route exact path='/projects' render={(props) => 
              <Projects selected={this.state.selected} />
              
            }/>
            <Route exact path='/experience' render={(props) => 
              <Experience selected={this.state.selected} />
            }/>
            <Route exact path='/skills' render={(props) => 
              <Skills selected={this.state.selected} />
            }/>
            <Route exact path='/about' render={(props) => 
              <About selected={this.state.selected} />
            }/>
            <Route exact path='/contact' render={(props) => 
              <Contact selected={this.state.selected} />
            }/>
            
          </div>
        </Router>    
      </div>
    );
  }
}

export default App;
