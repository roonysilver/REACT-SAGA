/*
 * FeaturePage
 *
 * List all the features
 */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import {
  Button,
  Grid,
  ImageList,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
} from '@mui/material';
// import Chart from 'react-apexcharts';
import { styled } from '@mui/material/styles';
import Chart from 'react-apexcharts';
import { useStyles } from './styles';
import Recom1 from './image/MyRecommend-1.jpg';
import Recom2 from './image/MyRecommend-2.jpg';
import Recom3 from './image/MyRecommend-3.jpg';

const itemData = [
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
  {
    day: '2021.05.21   23:25',
    title: '私の日記の記録が一部表示されます。',
    text:
      'テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…',
  },
];

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

function createData(name, title, minute) {
  return { name, title, minute };
}

const rows = [
  createData('家事全般（立位・軽い）', 26, 6.0, 24, 4.0),
  createData('家事全般（立位・軽い）', 26, 9.0, 37, 4.3),
  createData('家事全般（立位・軽い）', 262, 16.0, 24, 6.0),
  createData('家事全般（立位・軽い）', 305, 3.7, 67, 4.3),
  createData('家事全般（立位・軽い）', 356, 16.0, 49, 3.9),
];

export default function FeaturePage() {
  const classes = useStyles();
  const [imageHeight, setImageHeight] = useState(320);
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#ffff',
    ...theme.typography.body2,
    padding: theme.spacing(4),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderRadius: '0px',
  }));
  return (
    <div>
      <Helmet>
        <title>Record Page</title>
        <meta name="description" />
      </Helmet>
      <Grid container spacing={0}>
        <Grid item xs={12}>
          <Item>
            <Grid item xs={12}>
              <Grid
                container
                justifyContent="center"
                spacing={11}
                sx={{ marginTop: '-40px' }}
              >
                <Grid item>
                  <Paper
                    sx={{
                      height: 288,
                      width: 288,
                      borderRadius: 0,
                      padding: '8%',
                      backgroundColor: theme =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#FFCC21',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#414141',
                        height: 240,
                        width: 240,
                      }}
                    >
                      <Item
                        sx={{
                          backgroundImage: `url(${Recom1})`,
                          height: 240,
                          width: 240,
                          backgroundBlendMode: 'luminosity',
                          opacity: 0.25,
                          position: 'absolute',
                          backgroundSize: 'cover',
                        }}
                      />
                      <div style={{ paddingBlock: '35%' }}>
                        <Typography
                          className={classes.recommendText}
                          variant="h5"
                          mb={1}
                        >
                          BODY RECORD
                        </Typography>
                        <Button
                          className={classes.recommendButton}
                          onClick={() => setImageHeight(800)}
                        >
                          自分のカラダの記録
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    sx={{
                      height: 288,
                      width: 288,
                      borderRadius: 0,
                      padding: '8%',
                      backgroundColor: theme =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#FFCC21',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#414141',
                        height: 240,
                        width: 240,
                      }}
                    >
                      <Item
                        sx={{
                          backgroundImage: `url(${Recom2})`,
                          height: 240,
                          width: 240,
                          backgroundBlendMode: 'luminosity',
                          opacity: 0.25,
                          position: 'absolute',
                          backgroundSize: 'cover',
                        }}
                      />
                      <div style={{ paddingBlock: '35%' }}>
                        <Typography
                          className={classes.recommendText}
                          variant="h5"
                          mb={1}
                        >
                          MY EXERCISE
                        </Typography>
                        <Button
                          className={classes.recommendButton}
                          onClick={() => setImageHeight(800)}
                        >
                          自分の運動の記録
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    sx={{
                      height: 288,
                      width: 288,
                      borderRadius: 0,
                      padding: '8%',
                      backgroundColor: theme =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#FFCC21',
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: '#414141',
                        height: 240,
                        width: 240,
                      }}
                    >
                      <Item
                        sx={{
                          backgroundImage: `url(${Recom3})`,
                          height: 240,
                          width: 240,
                          backgroundBlendMode: 'luminosity',
                          opacity: 0.25,
                          position: 'absolute',
                          backgroundSize: 'cover',
                        }}
                      />
                      <div style={{ paddingBlock: '35%' }}>
                        <Typography
                          className={classes.recommendText}
                          variant="h5"
                          mb={1}
                        >
                          MY DIARY
                        </Typography>
                        <Button
                          className={classes.recommendButton}
                          onClick={() => setImageHeight(800)}
                        >
                          自分の日記
                        </Button>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Item>
          <Item>
            <div
              style={{
                backgroundColor: '#414141',
                marginInline: '12%',
                color: '#fff',
                height: 264,
              }}
            >
              <Chart
                options={options}
                series={series}
                type="line"
                width="100%"
                height={300}
              />
            </div>
          </Item>
          <Item>
            <div
              style={{
                backgroundColor: '#414141',
                marginInline: '12%',
                color: '#fff',
                height: 264,
              }}
            >
              <div style={{ display: 'flex', padding: '1%' }}>
                <Typography variant="h6">MY EXERCISE</Typography>
                <Typography variant="h6" ml={2}>
                  2021.05.21
                </Typography>
              </div>
              <div style={{ display: 'flex', overflow: 'scroll', height: 210 }}>
                <Table aria-label="simple table" sx={{ marginInline: '5%' }}>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow
                        key={row.name}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <li>{row.name}</li>
                            <p style={{ margin: 0, color: '#FFCC21' }}>
                              {row.title}Kcal
                            </p>
                          </div>
                          <Typography variant="h6" sx={{ color: '#FFCC21' }}>
                            {row.minute} min
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
                <Table aria-label="simple table" sx={{ marginInline: '5%' }}>
                  <TableBody>
                    {rows.map(row => (
                      <TableRow
                        key={row.name}
                        sx={{
                          '&:last-child td, &:last-child th': { border: 0 },
                        }}
                      >
                        <TableCell
                          component="th"
                          scope="row"
                          sx={{
                            color: '#fff',
                            display: 'flex',
                            justifyContent: 'space-between',
                          }}
                        >
                          <div>
                            <li>{row.name}</li>
                            <p style={{ margin: 0, color: '#FFCC21' }}>
                              {row.title}Kcal
                            </p>
                          </div>
                          <Typography variant="h6" sx={{ color: '#FFCC21' }}>
                            {row.minute} min
                          </Typography>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>
          </Item>
          <Item>
            <Typography
              variant="h5"
              style={{ marginInline: '13%', position: 'absolute' }}
            >
              MY DIARY
            </Typography>
            <ImageList
              sx={{
                width: 1040,
                height: imageHeight,
                marginInline: 'auto',
                marginTop: '40px',
              }}
              cols={4}
            >
              {itemData.map(item => (
                <Paper
                  variant="outlined"
                  square
                  key={item.img}
                  style={{ height: 231, width: 231, padding: '5%' }}
                >
                  <Typography className={classes.titleDiaries} variant="h6">
                    {item.day}
                  </Typography>
                  <Typography className={classes.textDiaries} variant="h8">
                    {item.title}
                  </Typography>
                  <Typography className={classes.textDiaries} variant="h8">
                    {item.text}
                  </Typography>
                </Paper>
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
    </div>
  );
}
