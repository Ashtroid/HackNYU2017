import React, {Component} from 'react'; //we can have access to it without having to say React.Component when we put the class word down
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

export default class About extends Component {

  setVar(){
    Session.set('test', 'Christian!!!!!!!!!!!!!!!!!!!!');
  }

  setSomethingElse(){
    Session.set('david', 'david!!!!!!!!!!!!!!!!!!!!');
  }

  //you can set session variables across different pages and components with meteor
  //hit control + m to see the session variables
  triggerLogin() {
    Session.set('Meteor.loginButtons.dropdownVisible', true);
  }

  render(){

    return (
      <div>
        <h1>About Us</h1>

        <p>Build good habits. Organize your life. Productive has all the tools you need to build a routine of positive, life changing habits. Productive gives you:</p>

        <ul>
          <li> This is Peri. Peri is a personal website application tracker designed to help employers search for  & keep track of applicants & potential employees in a social media environment.</li>
<br></br>
<li> Simply login into your Peri account Enter short vital details , keep track , Mark complete after an apllicants interview has been scheduled.</li>
        </ul>

       

        <button onClick={this.triggerLogin}>Want to login?</button>

        
      </div>
    )
  }
}
