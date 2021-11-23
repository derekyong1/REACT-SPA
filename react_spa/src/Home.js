import React, { Component } from "react";
 
class Home extends Component {
  render() {
    return (
      <div>
        <h2>MY REACTION</h2>
        <p>
          Using React is super fun and cool, because it shows how to create webpages with HTML and JavaScript at the sametime. 
          When I am working in HTML and creating a new change, I have to save the change then open a live server each time to 
          see my changes. In JavaScript, I need finish the program then run the live server to see my program, and if I want 
          to see my progression before I complete the program then I have to use console log function. In React, I can change 
          and view all my changes, because React will update the originial DOM when needed.
        </p>

 
        <p>
        I enjoy working in team to create projects for this class. Working in teams allows me and my team to discuss and plan how 
        we are going to approach the problem. There is a lot more communication and collaboaration needed for team projects. In 
        addition, we can assign project roles such as Designer, Programmer, and Tester. While working in a solo project, I am the 
        only one committing changes to Github, so there is no need for anyone to review my code. On the other hand working on a 
        team-based project, there are other members commiting changes to Github, so each member would have their own branch working 
        on the same repository. Each time a team member finishes a task and is ready to commit their changes: they need to create a 
        'pull request' on Github. The other members need to review the code before it is merged to the main branch. This type of 
        collaboration is one of the reasons why I enjoy team-based projects.
        </p>
      </div>
    );
  }
}
 
export default Home;