import { Grid } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useEffect, useState } from 'react';

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

const data = [
    {
        v_img:'https://i.vimeocdn.com/video/1445901947-95048f131a919bf88c8c5eb017338595f9a0a6209e2616b4cdc7a834fd21c2d8-d_390x220',
        v_name:'YOU RE ABSOLUTELY RIGHT',
        v_channel_img: 'https://i.vimeocdn.com/portrait/34099901_16x16',
        v_channel_name: 'Theo Gee',
        v_count: '5432 views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1620263835-e741e6b09e2f15ae9c6da4ecb00ab5798d91643bf2bb108cc8b01ac7de7dc7e5-d_390x220',
        v_name: 'JESTEM TUTAJ',
        v_channel_img: 'https://i.vimeocdn.com/portrait/44706945_16x16?subrect=559%2C159%2C1225%2C825&r=cover',
        v_channel_name: 'Lodz Film School',
        v_count: '1K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1604758005-9d07d8772b21301c087a1d4539fba3e76e25a07aa7889ce29caed7d6e5319823-d_390x220',
        v_name: 'Sub Eleven Seconds',
        v_channel_img: 'https://i.vimeocdn.com/portrait/68175820_16x16?subrect=294%2C63%2C814%2C583&r=cover',
        v_channel_name: 'NewYorker',
        v_count:'10K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1606268396-bac0fbb54c25f301e90283816547422a36fc37a4c3c1d0f6c0d4e218bc221bc1-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1617828791-12ffe9e91480f94152aac925debc637e72dab8c45f2d1ed399658eac4ec6dd3b-d_390x220',
        v_name: 'Aserth xdhcf',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Awwwee Ggg',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1617252155-d5760dd107cb3be5719fffe8456144ab721c120ef482a4efc04195956aad618a-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM11',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1612209173-aebfcc62feffeb6134543314b6f9e4bd0034eb808d179342619cab08fd62fc68-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM22',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1615616116-087632cf57a75389ec6c274240981538d9b0601503136b7d7c2787ba1867bfdd-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM33',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1614936187-b617cf54a14aa8913bb6359ade5481979a7d0f18919b5b613353224edea81fa7-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM44',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1521254085-9806606329a840e5168b48ab8a316a674135f941ffd9f68081cd63dc9403349c-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM55',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1610104163-677e026fc47a7815e93e5e6d24a0f7b977a133a0f35c47cf32ccacc79f9f3778-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM66',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1609718426-f834308d351a88431084a4d7790758d53079380180903b051780f9d07c96864e-d_390x220',
        v_name: '[ WALTZ ] SHORT ',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1607611652-0d36d7a82f81433b6211fac21913fe6d5beb822290ce98d28b6e404adccbc64e-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM66',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1620263835-e741e6b09e2f15ae9c6da4ecb00ab5798d91643bf2bb108cc8b01ac7de7dc7e5-d_390x220',
        v_name: 'JESTEM TUTAJ',
        v_channel_img: 'https://i.vimeocdn.com/portrait/44706945_16x16?subrect=559%2C159%2C1225%2C825&r=cover',
        v_channel_name: 'Lodz Film School',
        v_count: '1K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1604758005-9d07d8772b21301c087a1d4539fba3e76e25a07aa7889ce29caed7d6e5319823-d_390x220',
        v_name: 'Sub Eleven Seconds',
        v_channel_img: 'https://i.vimeocdn.com/portrait/68175820_16x16?subrect=294%2C63%2C814%2C583&r=cover',
        v_channel_name: 'NewYorker',
        v_count:'10K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1610774774-578ef7ee87f49246c97365bfbd1803bd3cf55e93fe1fce1b02ae558b4265f798-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM88',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1606220314-86138a279891d1bdb3fa4900066b269c4b51e0edf5f43f9d7c56af4d49002ddc-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM699',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1608055594-ce73ba1bae4dabc2001d361f2030e67254b348a4b97d30275e60e745a94c5057-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM00',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1615616116-087632cf57a75389ec6c274240981538d9b0601503136b7d7c2787ba1867bfdd-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM33',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
    {
        v_img: 'https://i.vimeocdn.com/video/1614936187-b617cf54a14aa8913bb6359ade5481979a7d0f18919b5b613353224edea81fa7-d_390x220',
        v_name: '[ WALTZ ] SHORT FILM44',
        v_channel_img: 'https://i.vimeocdn.com/portrait/59491344_16x16',
        v_channel_name: 'Lado Kvataniya',
        v_count: '11K views',
    },
]

const Cards = ({ page }) => {
    const classes = useStyles();
    const [cardData, setCardData] = useState([])

    useEffect(() => {
        if (page === 1) {
            setCardData(data.slice(0, 10))
        } else {
            setCardData(data.slice(11, 20))
        }
    }, [page])

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