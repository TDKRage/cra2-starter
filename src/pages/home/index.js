import { connect } from 'react-redux';
import { urls } from 'app/routes';
import component from './page';

const handleSignInClick = push => () => {
  push(urls.signIn());
};

const mapDispatchToProps = (dispatch, { history: { push } }) => ({
  onSignInClick: handleSignInClick(push),
});

export default connect(
  undefined,
  mapDispatchToProps
)(component);
