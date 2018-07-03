import { connect } from 'react-redux';
import Contacts from './Contacts';
import setMessageContact from '../redux/actions';

const mapDispatchToProps = dispatch => {
  return {
    setMessageContact: contact => {
      dispatch(setMessageContact(contact))
    }
  }
}
export default connect(null, mapDispatchToProps)(Contacts)
