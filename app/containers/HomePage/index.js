/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React, { useEffect, memo, useState } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { useInjectReducer } from 'utils/injectReducer';
import { useInjectSaga } from 'utils/injectSaga';
import {
  makeSelectRepos,
  makeSelectLoading,
  makeSelectError,
} from 'containers/App/selectors';
import {
  Button,
  Grid,
  ImageList,
  ImageListItem,
  ImageListItemBar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Image from 'mui-image';
import Chart from 'react-apexcharts';
// import ReportsLineChart from 'components/ReportsLineChart';
import reportsLineChartData from 'containers/HomePage/data/reportsLineChartData';
import { useStyles } from './styles';
import { loadRepos } from '../App/actions';
import { changeUsername } from './actions';
import { makeSelectUsername } from './selectors';
import reducer from './reducer';
import saga from './saga';
import KnifeIcon from './image/svg/forkIcon.svg';
import CupIcon from './image/svg/coffee-15.svg';
import ChartImg from './image/d01.jpg';
import img2 from './image/d02.jpg';
import img3 from './image/l01.jpg';
import img4 from './image/l02.jpg';
import img5 from './image/l03.jpg';
import img6 from './image/m01.jpg';
import img7 from './image/m02.jpg';
import img8 from './image/m03.jpg';

const key = 'home';

const itemData = [
  {
    img: ChartImg,
    title: 'Breakfast',
    day: '5.20.Morning',
  },
  {
    img: img2,
    title: 'Burger',
    day: '5.20.Lunch',
  },
  {
    img: img3,
    title: 'Camera',
    day: '5.20.Dinner',
  },
  {
    img: img4,
    title: 'Coffee',
    day: '5.20.Snack',
  },
  {
    img: img5,
    title: 'Hats',
    day: '5.21.Morning',
  },
  {
    img: img6,
    title: 'Honey',
    day: '5.21.Lunch',
  },
  {
    img: img7,
    title: 'Basketball',
    day: '5.21.Dinner',
  },
  {
    img: img8,
    title: 'Fern',
    day: '5.21.Snack',
  },
];

export function HomePage({ username, onSubmitForm }) {
  const classes = useStyles();
  useInjectReducer({ key, reducer });
  useInjectSaga({ key, saga });

  useEffect(() => {
    // When initial state username is not null, submit the form to load repos
    if (username && username.trim().length > 0) onSubmitForm();
  }, []);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '0px',
  }));
  const { tasks } = reportsLineChartData;
  const [imageHeight, setImageHeight] = useState(320);
  const options = {
    series: [5, 2],
    labels: ['Tai', 'Thach'],
    colors: ['#fff', 'transparent'],
    plotOptions: {
      pie: {
        customScale: 0.8,
        expandOnclick: false,
        donut: {
          size: '95px',
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
              fontSize: '24px',
              color: '#fff',
            },
          },
        },
      },
    },
  };

  const series = [5, 2];
  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta
          name="description"
          content="A React.js Boilerplate application homepage"
        />
      </Helmet>
      <Grid container spacing={0}>
        <Grid item xs={5}>
          <Item
            sx={{
              backgroundImage: `url(${ChartImg})`,
              height: 316,
            }}
          >
            <Chart
              options={options}
              series={series}
              type="donut"
              width="100%"
              height={300}
            />
          </Item>
        </Grid>
        <Grid item xs={7}>
          <Item
            sx={{
              backgroundColor: '#2E2E2E',
              height: 316,
            }}
          >
            <Chart
              options={tasks}
              series={series}
              type="line"
              width="100%"
              height={300}
            />
            {/* <ReportsLineChart
              color="dark"
              title="completed tasks"
              description="Last Campaign Performance"
              date="just updated"
              chart={tasks}
            /> */}
          </Item>
        </Grid>
        <Grid item xs={12}>
          <Item>
            <Button className={classes.buttonClipPath}>
              <Image
                className={classes.forkButton}
                src={KnifeIcon}
                width="53px"
                height="45px"
              />
              Morning
            </Button>
            <Button className={classes.buttonClipPath}>
              <Image
                className={classes.forkButton}
                src={KnifeIcon}
                width="53px"
                height="45px"
              />
              Lunch
            </Button>
            <Button className={classes.buttonClipPath}>
              <Image
                className={classes.forkButton}
                src={KnifeIcon}
                width="53px"
                height="45px"
              />
              Dinner
            </Button>
            <Button className={classes.buttonClipPath}>
              <Image
                className={classes.cupButton}
                src={CupIcon}
                width="34px"
                height="40px"
              />
              Snack
            </Button>
          </Item>
          <Item>
            <ImageList
              sx={{ width: 900, height: imageHeight, marginInline: 'auto' }}
              cols={4}
            >
              {itemData.map(item => (
                <ImageListItem key={item.img}>
                  <img
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    width="234px"
                    height="234px"
                  />
                  <ImageListItemBar title={item.day} />
                </ImageListItem>
              ))}
            </ImageList>
          </Item>
          <Item>
            <Button
              className={classes.buttonColor}
              onClick={() => setImageHeight(800)}
            >
              記録をもっと見る
            </Button>
          </Item>
        </Grid>
      </Grid>
    </>
  );
}

HomePage.propTypes = {
  onSubmitForm: PropTypes.func,
  username: PropTypes.string,
};

const mapStateToProps = createStructuredSelector({
  repos: makeSelectRepos(),
  username: makeSelectUsername(),
  loading: makeSelectLoading(),
  error: makeSelectError(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onChangeUsername: evt => dispatch(changeUsername(evt.target.value)),
    onSubmitForm: evt => {
      if (evt !== undefined && evt.preventDefault) evt.preventDefault();
      dispatch(loadRepos());
    },
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(HomePage);
