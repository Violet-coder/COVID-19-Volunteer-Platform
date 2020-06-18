import React from "react";
import Navbar from "./../Navbar";
import Header from "../Header";
import Recommended_ops from "../Recommended_op";

class Userpage_volunteer extends React.Component{
    state = {
        ops: [
          { date: "May. 29th", 
            organization: "The Atrium Project",
            title: "Volunteer for Grocery Delivery",
            content: "If you are looking for a simple way to get involved in your community, this is a great volunteer opportunity for you! There is no required time commitment!"
            },
          { date: "May. 27th", 
            organization: "The mental Health books",
            title: "Peer Support Volunteer",
            content: "Your tasks for this position would include, attending sessions about mental health and crisis intervention, supporting a youth or adult 1:1."
            },
          { date: "May. 26th", 
            organization: "Family Counselling and Support Services",
            title: "Distress Line Volunteer",
            content: "Through this role you will have the opportunity to safely volunteer from the comfort of your own home. All volunteers are provided with online training."
            },
          { date: "May. 24th", 
            organization: "Certified Listeners Society",
            title: "COVID-19 Chat Responder Volunteer",
            content: "This is an opportunity to volunteer from home. Reporting to the Certified Listener Program Manager all volunteers are fully trained prior to taking emotional support chats."
            }        
        ]

      };
    
    
    
    
    render() {
        return(
            <div id="page">
            <Navbar user="Application"/>
            <Header title="Support Our Community During Covid-19" subtitle="Let's work together"/>
            <Recommended_ops ops={this.state.ops}/>





            </div>



        );
    }
}

export default Userpage_volunteer;

