import React from "react";
import Header_appli from "../../../react-components/Volunteer/Header_appli";
import OrgNav from "../../../react-components/OrgNav";
import Footer from '../../../react-components/Footer';
import PostDetail from "../../../react-components/PostDetail";
import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import { Link } from "react-router-dom";
import {uid} from "react-uid";
import SingleApplicant from "./../SingleApplicant";
import { BackButton } from '../Hook/backButton'
import { deletePost } from "../../../actions/postList";
import "./styles.css"

class SelfPostDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      applications: [],
      postIsLoading: false,
      appIsLoading: false,
      post: {}
    };
  }
  componentDidMount() {
    const applications = []
    const post_id = this.props.matchProps.match.params.id

    const url = `/post/${post_id}`
    fetch(url)
      .then(res => {
          if (res.status === 200) {
              return res.json();
          } else {
              // alert("Could not get applications");
          }
      })
      .then(json => {
        this.setState({post: json})
        this.setState({postIsLoading: true})
        const applicationlist = new Array(json.applications)
        //console.log("applicationlist", applicationlist[0].length)
        for (var app_id of applicationlist[0]) {
          const url = `/organization/get_applications/${app_id}`  
          //console.log("url",url)
          fetch(url)
          .then(res => {
              if (res.status === 200) {
                  return res.json();
              } else {
                  // alert("Could not get applications");
              }
          })
          .then(appli => {
            applications.push(appli)
            //console.log("applications now", applications)
            if (applications.length ===  applicationlist[0].length) {
            this.setState({ applications: applications, appIsLoading: true });
          }
            
          })
          .catch(error => {
              console.log(error);
          });
          
        }
      })
      .catch(error => {
          console.log(error);
      });
}
    render(){
        const app = this.props.app
        const {matchProps} = this.props
        const id = matchProps.match.params.id
        const addr = "/organization/post_edit/" + String(id)
        return(
            <div>
            <OrgNav app={app}/>
            { this.state.postIsLoading ? 
            <Header_appli title={this.state.post.name} subtitle={this.state.post.org_name}/>:null }
            <div id="fh5co-blog" className="fh5co-bg-section">
            <div className="container">
            { this.state.postIsLoading ? 
            <PostDetail post={this.state.post}/>:null }
            <div className='buttons'>
                <Link to="/organization/profile">
                <Button
                variant="contained"
                color="secondary"
                style={{fontSize: 12}}
                onClick={(e)=>{
                  const r = deletePost(id, e);
                  if (r===false) {
                    e.preventDefault()
                  }
                }
                }
            >
                delete
                </Button>
                </Link>
                <Link to={addr}>
                <Button
                variant="contained"
                color="primary"
                style={{fontSize: 12}}
            >
                edit
                </Button>
                </Link>
                <BackButton/>
                </div>

        <h1>Applicants</h1>
      <Table style={{ width: '80%' }}>
      { this.state.appIsLoading ? <TableBody>
        {this.state.applications.map(applicant => (
            <SingleApplicant
            key = {uid(applicant)}
            app_id = {applicant._id}
            id={applicant.applicant_id}
            name={applicant.applicant_name}
            rank={applicant.applicant_rank}
            jobName= {applicant.post_name}
            status={applicant.applicant_status}
            />
          ))}
        </TableBody>:null }
      </Table>
      </div>
      </div>
            <Footer/>
            </div>

        )
    }
}

export default SelfPostDetail;