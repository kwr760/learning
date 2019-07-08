import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './styles.css';

class TextInput extends React.Component {
  // eslint-disable-line react/prefer-stateless-function
  value() {
    return this.field.value;
  }

  render() {
    const { errorText, placeholder } = this.props;

    const fieldError = errorText ? (
      <div className={styles.errorMessage}>{errorText}</div>
    ) : null;

    return (
      <div>
        <input
          className={classNames(styles.input, this.props.className, {
            [styles.inputError]: errorText,
          })}
          placeholder={placeholder}
          ref={f => {
            this.field = f;
          }}
          type="text"
        />
        {fieldError}
      </div>
    );
  }
}

TextInput.propTypes = {
  errorText: PropTypes.string,
  placeholder: PropTypes.string,
  className: PropTypes.string,
};
export default TextInput;
