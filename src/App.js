import React from 'react';
import { Menu } from 'semantic-ui-react';
import PropTypes from 'prop-types';
import Loader from 'react-loader-spinner';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  getIsLoading,
  getCharactersCount,
  getLoadingError,
} from './store/store';
import { loadCharacters } from './store/actions';
import CharactersTable from './components/CharactersTable';
import Pagination from './components/Pagination';
import './styles/App.scss';
import Block from './components/Block';

class App extends React.Component {
  // eslint-disable-next-line react/state-in-constructor
  state = { activeItem: 'home' };

  componentDidMount() {
    const { fetchCharacters } = this.props;

    fetchCharacters();
  }

  componentDidUpdate(prevProps) {
    const { history, location } = this.props;

    if (location.pathname.length !== 2
      || !/[1-4]/.test(location.pathname.slice(-1))) {
      history.push({ pathname: '/1' });
    }
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state;

    const { isLoading, loadingError, charactersCount } = this.props;

    if (isLoading) {
      return (
        <Loader className="spinner" type="ThreeDots" color="#324960" />
      );
    }

    if (loadingError) {
      return (
        <p className="error-message">Sorry, something went wrong.</p>
      );
    }

    return (
      <div>
        <Menu pointing>
          <Menu.Item
            name="home"
            active={activeItem === 'home'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name="messages"
            active={activeItem === 'messages'}
            onClick={this.handleItemClick}
          />
        </Menu>
        <div>
          {activeItem === 'home' && charactersCount > 0 && (
            <>
              <CharactersTable />
              <Pagination />
            </>
          )}
          {activeItem === 'messages' && (
            <>
              <Block />
            </>
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  isLoading: getIsLoading(state),
  loadingError: getLoadingError(state),
  charactersCount: getCharactersCount(state),
});

export default connect(
  mapStateToProps,
  { fetchCharacters: loadCharacters },
)(withRouter(App));

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  loadingError: PropTypes.bool.isRequired,
  charactersCount: PropTypes.number.isRequired,
  fetchCharacters: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
};
