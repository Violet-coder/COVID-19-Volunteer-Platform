import React from 'react';
import AdminNav from '../../AdminNav';
import VolProfileForm from "../VolProfileForm";
import {BackButton} from '../../Hook/backButton';
import {getVolProfile} from '../../../../actions/adminUpdateVolProfile';
import './styles.css'


class VolFixedProfilePage extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            volunteer:{},
            dataIsReturned: false
        }
    }

    componentDidMount(){
        const volId = this.props.matchProps.match.params.id
        getVolProfile(this, volId)
    }

    render(){
        //console.log(this.props.match)
        //get the id of user and read the user info from database
        //const {id} = this.props.matchProps.match.params
        const matchProps = this.props.matchProps
        const {id} = matchProps.match.params
        console.log("id",id)
        
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

        console.log("volunteer", volunteer)


        const app = this.props.app

        return(
        
            <div id='page'>
                <AdminNav app={app}/>
                {this.state.dataIsReturned?
                <VolProfileForm volunteer={volunteer}/> :null}
                <div id='button-services' className='fh5co-bg-section'>
                <div id='update-button'><BackButton/></div>
                </div>
            </div>
        )
    }
}

export default VolFixedProfilePage;