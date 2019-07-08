import React from 'react';
import PropTypes from 'prop-types';

import TextInput from '../TextInput';

import styles from './styles.css';

class LinkForm extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  static propTypes = {
    addLinkCancelled: PropTypes.func.isRequired,
    addLink: PropTypes.func.isRequired,
    topicName: PropTypes.string.isRequired,
  };

  state = {
    urlError: '',
    descriptionError: '',
  };

  onAdd = () => {
    const url = this.url.value();
    const description = this.description.value();
    let urlError = null;
    let descriptionError = null;

    if (
      !url.match(
        /[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/,
      )
    ) {
      urlError = 'Please provide a valid URL';
    }

    if (!description) {
      descriptionError = 'Please provide a valid description';
    }

    this.setState({
      urlError,
      descriptionError,
    });

    if (urlError || descriptionError) {
      return;
    }

    this.props.addLink({
      url,
      description,
      topicName: this.props.topicName,
    });
  };

  render() {
    return (
      <div className={styles.overlay}>
        <div className={styles.linkForm}>
          <div className={styles.heading}>Add a link</div>
          <TextInput
            placeholder="URL"
            className={styles.input}
            errorText={this.state.urlError}
            ref={f => {
              this.url = f;
            }}
          />
          <TextInput
            placeholder="Description"
            className={styles.input}
            errorText={this.state.descriptionError}
            ref={f => {
              this.description = f;
            }}
          />

          <div className={styles.actionContainer}>
            <div
              className={styles.button}
              role="button"
              tabIndex="0"
              onClick={this.props.addLinkCancelled}
              onKeyDown={this.props.addLinkCancelled}
            >
              cancel
            </div>
            <div
              className={styles.button}
              role="button"
              tabIndex="0"
              onClick={this.onAdd}
              onKeyDown={this.onAdd}
            >
              add
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LinkForm;
