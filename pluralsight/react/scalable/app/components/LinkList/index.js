import React from 'react';
import PropTypes from 'prop-types';

import Link from '../Link';
import IconButton from '../IconButton';

import styles from './styles.css';

function LinkList({ links, topicName, children, startAdd }) {
  const linkNodes = links.map(l => <Link key={l.id} link={l} />);

  return (
    <div className={styles.linkList}>
      <h1>{topicName}</h1>
      {linkNodes}
      <IconButton
        icon="plus"
        buttonClass={styles.button}
        iconClass={styles.icon}
        role="button"
        tabIndex="0"
        onClick={() => startAdd(topicName)}
        onKeyDown={() => startAdd(topicName)}
      />
      {children}
    </div>
  );
}

LinkList.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      description: PropTypes.string.isRequired,
      url: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    }),
  ),
  topicName: PropTypes.string.isRequired,
  children: PropTypes.element,
  startAdd: PropTypes.func.isRequired,
};

export default LinkList;
