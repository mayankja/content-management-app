import PageForm from "./PageForm";

import { addPage } from '../../actions'
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

const mapDispatchToProps = { addPage }

export default withRouter(connect(null, mapDispatchToProps)(PageForm));