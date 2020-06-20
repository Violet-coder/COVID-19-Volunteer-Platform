import React from "react";
import { uid } from "react-uid";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";

import SingleApplicant from "./../SingleApplicant";

//import "./styles.css";

/* Component for the List of Posts */
class ApplicantList extends React.Component {
  render() {
    const { posts, queueComponent} = this.props;

    return (
      <Table className="student-list">
        <TableBody>
        <SingleApplicant name='Jack' rank='A'/>
        <SingleApplicant name='Mike' rank='B'/>

        </TableBody>
      </Table>
    );
  }
}

export default ApplicantList;