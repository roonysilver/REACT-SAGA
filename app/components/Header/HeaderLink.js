import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  display: inline-flex;
  padding: 0.25em 2em;
  margin: 1em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  color: #fff;
  font-family: 'Hiragino Kaku Gothic Pro';
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 23px;
  background-color: #414141;

  &:active {
    background: #ff963c;
    color: #fff;
  }
`;
