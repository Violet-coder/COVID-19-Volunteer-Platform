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
    render(){
        const {matchProps,context} = this.props
        const id = parseInt(matchProps.match.params.id)
        const post = context.state.posts.find((p) => p.id===id)
        const filteredApplicants = context.state.applicants.filter(applicant => {
            return applicant.jobId===post.id});
        const addr = "/organization/post_edit/" + String(id)
        return(
            <div>
            <OrgNav/>
            <Header_appli title={post.name} subtitle='Listening Society'/>
            <div id="fh5co-blog" className="fh5co-bg-section">
            <div className="container">
            <PostDetail post={post}/>
            <div className='buttons'>
                <Link to="/organization/profile">
                <Button
                variant="contained"
                color="secondary"
                style={{fontSize: 12}}
                onClick={(e)=>{
                  const r = deletePost(context, post, e);
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
        <TableBody>
        {filteredApplicants.map(applicant => (
            <SingleApplicant
              key = {uid(applicant)}
              id={applicant.id}
              name={applicant.name}
              rank={applicant.rank}
              jobName={applicant.jobName}
              status={applicant.status}
              context={this}
            />
          ))}
        </TableBody>
      </Table>
      </div>
      </div>
            <Footer/>
            </div>

        )
    }
}

export default SelfPostDetail;