import React from 'react';

import { makeStyles } from '@mui/styles';
import { Toolbar } from '@mui/material';
import Wrapper from './Wrapper';
import HeaderLink from '../Header/HeaderLink';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#414141 !important',
  },
}));

function Footer() {
  const classes = useStyles();
  return (
    <Wrapper className={classes.container}>
      <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <HeaderLink to="/record">会員登録</HeaderLink>
        <HeaderLink to="/column">運営会社</HeaderLink>
        <HeaderLink to="/column">利用規約</HeaderLink>
        <HeaderLink to="/record">個人情報の取扱について</HeaderLink>
        <HeaderLink to="/column">特定商取引法に基づく表記</HeaderLink>
        <HeaderLink to="/column">お問い合わせ</HeaderLink>
      </Toolbar>
    </Wrapper>
  );
}

export default Footer;
