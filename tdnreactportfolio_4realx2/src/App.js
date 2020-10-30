import React from 'react';
import { Route, Switch, NavLink } from 'react-router-dom'
import './App.css';
import AboutContainer from './containers/AboutContainer'
import HomeContainer from './containers/HomeContainer'
import ProjectsContainer from './containers/ProjectsContainer'
import ResumeContainer from './containers/ResumeContainer'
import Contact from './containers/ContactContainer'
import NotFound from './components/NotFound'

class App extends React.Component {

  state = {

    forceUpdate: false
  }



  handleForceUpdateTrue = () => {
    this.setState({
      forceUpdate: true
    })
  }

  handleForceUpdateFalse = () => {
    this.setState({
      forceUpdate: false
    })
  }

  renderProjectsContainer = () => <ProjectsContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />
  renderAboutContainer = () => <AboutContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />
  renderResumeContainer = () => <ResumeContainer forceUpdate={this.state.forceUpdate} handleForceUpdateFalse={this.handleForceUpdateFalse} />

  render() {

    window.addEventListener('resize', this.handleResize)

    return (

      <div>

        {/* {this.state.isMobile === false ?  */}

        <div className="homepage">

          <div id="navbar">
            <Route>
              <NavLink to='/' exact className="navbar-links" >
                {/* <img src={require("./media/logo.png")} alt='' id="logo" /> */}
              </NavLink>
              <NavLink to='/contact' exact className="navbar-links" >05. Contact</NavLink>
              <NavLink to='/about' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >04. About</NavLink>
              <NavLink to='/resume' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >03. Resume</NavLink>
              <NavLink to='/projects' exact className="navbar-links" onClick={this.handleForceUpdateTrue} >02. Projects</NavLink>
              <NavLink to='/' exact className="navbar-links" >01. Home</NavLink>
            </Route>
          </div >

          <div id="social-links-div">
            <a href="https://github.com/TestadeNevill" rel="noopener noreferrer" target="_blank" >
              <img src={require("./media/github-icon.svg")} alt='' className="icons" />
            </a><br></br>
            <a href="https://www.linkedin.com/in/dnicklecet/" rel="noopener noreferrer" target="_blank" >
              <img src={require("./media/linkedin-icon.svg")} alt='' className="icons" />
            </a><br></br>
            <a href={`mailto:dnickle.cet@gmail.com`} >
              <img src={require("./media/send.png")} alt='' className="icons" />
            </a>
          </div>

          <Switch>
            <Route exact path='/' component={HomeContainer} />
            <Route exact path='/about' component={this.renderAboutContainer} />
            <Route exact path='/projects' component={this.renderProjectsContainer} />
            <Route exact path='/resume' component={this.renderResumeContainer} />
            <Route exact path='/contact' component={Contact} />
            <Route component={NotFound} />
          </Switch>

        </div>
      </div>

    );

  }

}

export default App;
