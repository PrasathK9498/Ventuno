import AddIcon from '@mui/icons-material/Add';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { makeStyles } from '@mui/styles';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import { Grid } from '@mui/material';
import Cards from '../cards';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { useState } from 'react';

const useStyles = makeStyles((Theme) => ({
    root:{
        display: 'flex', justifyContent: 'space-between', margin: '1% 10% 1% 4%'
    },
    subHeader: {
        display: 'flex',
        alignItems: 'center',
        color: 'gray',
        cursor: 'pointer',
        "&:hover": {
            color: 'black',
        },
    },
    followbtn:{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif', 
        fontWeight: `900 !important`, 
        color: 'rgb(0, 173, 239) !important'
    },
    contentDiv:{
        display: 'flex', flexDirection: 'row', alignItems: 'center'
    },
    nextBtn:{
        fontSize: '48px !important', cursor: 'pointer'
    },
    disableNext:{
        fontSize: '48px !important', 
        pointerEvents: 'none',
        color: '#D0D8DB'
    },
    infoGrid:{
        maxWidth: '15%', height: 'auto', padding: '8px'
    },
    imgDiv:{
        display: 'flex', position: 'absolute', height: '20%', top: '6rem', left: '5.5%'
    },
    watchBtn:{
        fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
        fontWeight: 700,
        color: 'white !important',
        backgroundColor: 'rgb(0, 173, 239) !important', marginBottom: '8px'
    }
}));

const Widget = () => {
    const classes = useStyles();
    const [page, setPage] = useState(1);

    return (
        <div>
            <div className={classes.root}>
                <div className={classes.subHeader}>
                    <h1 style={{ margin: '0px' }}>Watch human-curated Staff Picks</h1>
                    <ArrowForwardIosIcon style={{ marginTop: '8px' }} />
                </div>
                <Button variant="outlined" startIcon={<AddIcon />} className={classes.followbtn}>
                    Follow
                </Button>
            </div>
            <div className={classes.contentDiv}>
                <ArrowBackIosIcon className={page === 1 ? classes.disableNext : classes.nextBtn} onClick={()=>{setPage(page-1)}}/>
                <div style={{ display: 'flex' }}>
                    <Grid container className={classes.infoGrid}>
                        <div style={{ backgroundColor: 'black', height: '150px', width: '100%' }}></div>
                        <Grid item className={classes.imgDiv}>
                            <img src="https://f.vimeocdn.com/p/images/badges/1.svg"></img>
                        </Grid>
                        <Grid item style={{ display: 'flex', flexDirection: 'column', marginTop: '48px', padding: '16px' }}>
                            <h2 style={{ margin: '0 0 8px 0' }}>Vimeo Staff Picks</h2>
                            <span style={{ marginBottom: '24px', textAlign: 'left' }}>The best short films on the internet, handpicked by Vimeo staff</span>
                            <Button variant="filled" className={classes.watchBtn} startIcon={<PlayArrowIcon />}
                                >
                                Watch now
                            </Button>
                        </Grid>
                    </Grid>
                    <Cards page={page}/>
                </div>
                <ArrowForwardIosIcon className={page === 2 ? classes.disableNext : classes.nextBtn} onClick={()=>{setPage(page+1)}}/>
            </div>
        </div>
    )
}

export default Widget