import React from "react";
import "./help-page.css";

function Help() {
  return (<div className="HelpInner"><h3 className="FaqTitle">

  	FAQ

  	</h3>
  	<ul className="FaqQs">
  		<li className="FaqQ">How do I control which tools are used in projects suggested to my child?</li>
  		<p className="FaqA">In the account section, simply deselect the catagories of tools that you do not feel comfortable with your child using. <br /> Then, when projects are suggested to your child, only projects that do not require the deselected tools will be suggested.</p>
  		<li className="FaqQ">How does my child input tools and materials?</li>
  		<p className="FaqA">Tools and materials are added in the <i>Projects</i> tab. Once tools and materials are added, a list of projects will be generated.</p>
  		<li className="FaqQ">Will I have to buy expensive tools and materials so that my child can complete the projects?</li>
  		<p className="FaqA">Not at all! The whole point of this service to use tools and materials that are lying around the whole. These tools don't have to be new! Old cardboard and tape can be turned into a fabulous project with the right amount of imagination.</p>
  	</ul>

  	<h3 className="Contact">
  	Need to contact us? 
  	</h3>
  	<p className="ContactMsg">
  	Questions, comments, and concerns can be directed towards <i>help@buildabout.com</i>.
  	</p>
  	</div>
  	);
}

export default Help;
