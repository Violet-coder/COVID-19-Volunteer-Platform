import React from 'react';
import AdminNav from '../../AdminNav';
import EditVolProfileForm from '../EditVolProfileForm';
import {getVolProfile} from '../../../../actions/adminUpdateVolProfile';
import './styles.css';


class EditVolProfilePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            volunteer: {},
            dataIsReturned: false
        }

    }
    
    componentDidMount() {
        const volId = this.props.matchProps.match.params.id
        getVolProfile( this, volId)
       }


    handleInputChange = (event) => {

        const target = event.target;
        const value = target.value;
        const id = target.id;
        var currentUser = this.state.volunteer
        currentUser[id]=value
        this.setState({
            volunteer:currentUser
        })
    }

    render(){

        let volunteer = this.state.volunteer
        if (this.state.dataIsReturned) {
            volunteer = this.state.volunteer
        if (!volunteer.desc) {
            volunteer.desc=""
        }
        if(!volunteer.links) {
            volunteer.links=""
        }
        if(!volunteer.location){
            volunteer.location = ""
        }
        if (!volunteer.skills){
            volunteer.skills = {
                analytics:false,
                biology:false,
                biotech:false,
                community:false,
                content:false,
                data:false,
                finance:false,
                helpdesk:false,
                manufacturing:false,
                marketing:false,
                mechanics:false,
                IT:false,
                anything:false
            }
        }
        if (!volunteer.availability){
            volunteer.availability={
                option1:false,
                option2:false,
                option3:false,
                option4:false,
                option5:false
            }
        }}


        const app = this.props.app


        return(
            
            <div id='page'>
                <AdminNav app={app} />
                {this.state.dataIsReturned ?
                <EditVolProfileForm user={volunteer} state={this.state} handleInputChange={this.handleInputChange} /> :null}
            </div>
        )
    }
}

export default EditVolProfilePage;