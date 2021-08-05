import HomePage from "./HomePage";
import { getPagesList } from '../../actions'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapDispatchToProps = {getPagesList}

export default withRouter(connect(null, mapDispatchToProps)(HomePage));
