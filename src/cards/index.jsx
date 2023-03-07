import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((Theme) => ({
    cardDiv: {
        display: 'flex',
        flexDirection: 'column !important',
        position: 'relative',
        marginRight: '24px !important',
        textAlign: 'left'
    },
    img: {
        width: '100%'
    }
}));

const Cards = ({cardData }) => {
    const classes = useStyles();

    return (
        <Grid container my={10} style={{ margin: '16px 0 0 16px' }}>
            {
                cardData.map((data) => (
                    <Grid item xs={2} className={classes.cardDiv}>
                        <div>
                            <img className={classes.img} src={data.v_img}></img>
                        </div>
                        <span style={{ fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{data.v_name}</span>
                        <div style={{ marginTop: '8px', fontSize: '13px', color: '#8A9599', display: 'flex' }}>
                            <img style={{ borderRadius: '50%' }} src={data.v_channel_img}></img>
                            <span style={{ marginLeft: '8px' }}>{data.v_channel_name} | {data.v_count}</span>
                        </div>
                    </Grid>
                ))
            }
        </Grid>
    )
}

export default Cards
