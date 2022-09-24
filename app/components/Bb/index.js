/**
 *
 * Bb
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
// import styled from 'styled-components';

import { FormattedMessage } from 'react-intl';
import messages from './messages';

function Bb() {
  return (
    <div>
      <FormattedMessage {...messages.header} />
    </div>
  );
}

Bb.propTypes = {};

export default memo(Bb);
