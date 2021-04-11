import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  text: {
    background: 'rgba( 255, 255, 255, 0.25 )',
    boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
    backdropFilter: 'blur( 15.5px )',
    borderRadius: '8px',
  },
  cardContainer: {
    display: "flex",
    alignItems: "center",
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
  }
}));