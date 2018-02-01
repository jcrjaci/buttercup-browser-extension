import { connect } from "react-redux";
import SaveCredentialsPage from "../components/SaveCredentialsPage.js";
// import { getArchiveTitle } from "../../shared/selectors/archives.js";
import { getLastLogin } from "../library/messaging.js";
import { notifyError, notifySuccess } from "../library/notify.js";
import { setBusy, unsetBusy } from "../../shared/actions/app.js";
import { closeCurrentTab } from "../../shared/library/extension.js";

export default connect((state, ownProps) => ({}), {
    fetchLoginDetails: () => () => getLastLogin()
})(SaveCredentialsPage);
