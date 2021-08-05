import { getPageData, updatePageDetails } from '../../actions'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import PageDetails from "./PageDetails";;

const mapDispatchToProps = { getPageData, updatePageDetails }


export default withRouter(connect(null, mapDispatchToProps)(PageDetails));