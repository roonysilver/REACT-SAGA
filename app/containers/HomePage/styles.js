import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
  buttonColor: {
    background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
    color: '#ffff !important',
    width: '296px',
    height: '56px',
    fontWeight: '400',
    fontSize: '20px',
    fontFamily: 'Inter !important',
  },
  buttonClipPath: {
    clipPath:
      'polygon(50% 0, 50% 0, 85% 25%, 85% 75%, 50% 100%, 50% 100%, 15% 75%, 15% 25%)',
    background: 'linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)',
    color: '#ffffff !important',
    width: '134px',
    height: '116px',
    marginInline: '22px !important',
    display: 'inline-block !important',
    marginTop: '20px',
  },
  forkButton: {
    left: '33px',
    display: 'block',
  },
  cupButton: {
    left: '42px',
    display: 'block',
  },
}));
