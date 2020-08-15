import React from "react";
import Navbar from "../../../react-components/Volunteer/Navbar";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import OrgDetail from "../../../react-components/OrgDetail";
import {BackButton} from '../../../react-components/Organization/Hook/backButton';
import './styles.css';



import "../../../css/animate.css";
import "../../../css/icomoon.css";
import "../../../css/bootstrap.css";
import "../../../css/magnific-popup.css";
import "../../../css/style.css";


class OrgProfilePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            org: {},          
            isLoading: false,
        }
        
    }
    componentDidMount() {   
        const id = this.props.matchProps.match.params.id
       
        const url = `/organization/get_profile/${id}`
     
        fetch(url)
        .then(res => {
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Could not get post detail");
            }
        })
        .then(json => {
            this.setState({ org: json, isLoading: true });
        })
        .catch(error => {
            console.log(error);
        });


    }
    
    render() {
        const app = this.props.app
               
        return(
            <div id='page'>
                <Navbar app={app}/>
                <Header_appli title={this.state.org.name} subtitle={this.state.org.email} app={app} />
                <div id="fh5co-blog" className="fh5co-bg-section">
                <div className="container">
                <OrgDetail org={this.state.org}/>
                </div>
                </div>
                
                
            </div>
        )
    }
}

export default OrgProfilePage;

