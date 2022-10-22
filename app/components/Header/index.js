import React from 'react';

import { Box } from '@mui/system';
import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import Img from './Img';
import HeaderLink from './HeaderLink';
import Banner from './logo.png';
import Memo from './icon_memo.svg';
import Challenge from './icon_challenge.svg';
import Info from './icon_info.svg';

const useStyles = makeStyles(() => ({
  container: {
    backgroundColor: '#414141 !important',
    height: '64px !important',
  },
  memo: {
    width: 32,
    height: 32,
  },
}));

function Header() {
  const classes = useStyles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar className={classes.container} position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <HeaderLink to="/">
            <Img src={Banner} alt="Logo" />
          </HeaderLink>
          <HeaderLink to="/record">
            <Img
              className={classes.memo}
              src={Memo}
              alt="react-boilerplate - Logo"
            />
            <Typography style={{ marginTop: '2px' }} vartiant="h6">
              自分の記録
            </Typography>
          </HeaderLink>
          <HeaderLink to="/column">
            <Img
              className={classes.memo}
              src={Challenge}
              alt="react-boilerplate - Logo"
            />
            <Typography style={{ marginTop: '2px' }} vartiant="h6">
              チャレンジ
            </Typography>
          </HeaderLink>
          <HeaderLink to="/column">
            <Img
              className={classes.memo}
              src={Info}
              alt="react-boilerplate - Logo"
            />
            <Typography style={{ marginTop: '2px' }} vartiant="h6">
              お知らせ
            </Typography>
          </HeaderLink>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;
