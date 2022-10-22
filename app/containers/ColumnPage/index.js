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
  ImageListItem,
  ImageListItemBar,
  Paper,
  Typography,
} from '@mui/material';
// import Chart from 'react-apexcharts';
import { styled } from '@mui/material/styles';
import { useStyles } from './styles';
import col1 from './image/column-1.jpg';
import col2 from './image/column-2.jpg';
import col3 from './image/column-3.jpg';
import col4 from './image/column-4.jpg';
import col5 from './image/column-5.jpg';
import col6 from './image/column-6.jpg';
import col7 from './image/column-7.jpg';
import col8 from './image/column-8.jpg';

const itemData = [
  {
    img: col1,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    day: '5.20.Morning',
    hastag: ['魚料理', '和食', 'DHA'],
  },
  {
    img: col2,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    day: '5.20.Lunch',
    hastag: ['魚料理', '和食', 'DHA'],
  },
  {
    img: col3,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    day: '5.20.Dinner',
    hastag: ['魚料理', '和食', 'DHA'],
  },
  {
    img: col4,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    day: '5.20.Snack',
    hastag: ['魚料理', '和食', 'DHA'],
  },
  {
    img: col5,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    day: '5.21.Morning',
    hastag: ['魚料理', '和食', 'DHA'],
  },
  {
    img: col6,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    day: '5.21.Lunch',
    hastag: ['魚料理', '和食', 'DHA'],
  },
  {
    img: col7,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    day: '5.21.Dinner',
    hastag: ['魚料理', '和食', 'DHA'],
  },
  {
    img: col8,
    title: '魚を食べて頭もカラダも元気に！知っておきたい魚を食べるメリ…',
    day: '5.21.Snack',
    hastag: ['魚料理', '和食', 'DHA'],
  },
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
                spacing={7}
                sx={{ marginTop: '-40px' }}
              >
                <Grid item>
                  <Paper
                    sx={{
                      height: 144,
                      width: 216,
                      borderRadius: 0,
                      padding: '8%',
                      backgroundColor: theme =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#2E2E2E',
                    }}
                  >
                    <div>
                      <Typography
                        className={classes.recommendText}
                        variant="h5"
                        mb={1}
                      >
                        RECOMMENDED COLUMN
                      </Typography>
                      <hr style={{ color: '#fff', width: '56px' }} />
                      <Typography sx={{ color: '#fff' }}>オススメ</Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    sx={{
                      height: 144,
                      width: 216,
                      borderRadius: 0,
                      padding: '8%',
                      backgroundColor: theme =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#2E2E2E',
                    }}
                  >
                    <div>
                      <Typography
                        className={classes.recommendText}
                        variant="h5"
                        mb={1}
                      >
                        RECOMMENDED DIET
                      </Typography>
                      <hr style={{ color: '#fff', width: '56px' }} />
                      <Typography sx={{ color: '#fff' }}>ダイエット</Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    sx={{
                      height: 144,
                      width: 216,
                      borderRadius: 0,
                      padding: '8%',
                      backgroundColor: theme =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#2E2E2E',
                    }}
                  >
                    <div>
                      <Typography
                        className={classes.recommendText}
                        variant="h5"
                        mb={1}
                      >
                        RECOMMENDED BEAUTY
                      </Typography>
                      <hr style={{ color: '#fff', width: '56px' }} />
                      <Typography sx={{ color: '#fff' }}>美容</Typography>
                    </div>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper
                    sx={{
                      height: 144,
                      width: 216,
                      borderRadius: 0,
                      padding: '8%',
                      backgroundColor: theme =>
                        theme.palette.mode === 'dark' ? '#1A2027' : '#2E2E2E',
                    }}
                  >
                    <div>
                      <Typography
                        className={classes.recommendText}
                        variant="h5"
                        mb={1}
                      >
                        RECOMMENDED HEALTH
                      </Typography>
                      <hr style={{ color: '#fff', width: '56px' }} />
                      <Typography sx={{ color: '#fff' }}>健康</Typography>
                    </div>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Item>
          <Item>
            <ImageList
              sx={{ width: '75%', height: imageHeight, marginInline: 'auto' }}
              cols={4}
            >
              {itemData.map(item => (
                <div style={{ display: 'block' }}>
                  <ImageListItem key={item.img}>
                    <img
                      src={item.img}
                      alt={item.title}
                      loading="lazy"
                      style={{ height: 182 }}
                    />
                    <ImageListItemBar title={item.day} />
                  </ImageListItem>
                  <Typography className={classes.textColumn}>
                    {item.title}
                  </Typography>
                  <div style={{ display: 'flex' }}>
                    {item.hastag.map(h => (
                      <Typography
                        style={{ marginRight: '4px' }}
                        className={classes.hastagText}
                      >
                        #{h}
                      </Typography>
                    ))}
                  </div>
                </div>
              ))}
            </ImageList>
          </Item>
          <Item>
            <Button
              className={classes.buttonColor}
              onClick={() => setImageHeight(800)}
            >
              コラムをもっと見る
            </Button>
          </Item>
        </Grid>
      </Grid>
    </div>
  );
}
