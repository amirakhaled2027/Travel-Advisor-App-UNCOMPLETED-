import React from 'react';

//CssBaseline: This a component from material ui that simply normalizes the styles(so it's just ganna fix some paddings, margins, and background-colors immediately for us)
import { CssBaseline, Grid } from '@mui/material';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/Map';
// import PlaceDetails from './components/PlaceDetails/PlaceDetails';

const App = ( ) => {
    return (
        <>
            <CssBaseline/>
            <Header/>
            <Grid container spacing={3} style={{width: '100%'}}>
                {/* the following second grid means [xs] that this grid is gonna take full width on mobile devices,
                [md] medium and larger is gonna take only the width of four columns*/}
                <Grid items xs={12} md={4}>
                     <List />
                </Grid>

                {/* Coz the map is larger than the list, it's gonna be double in space (8 columns in medium and larger devices) */}
                <Grid items xs={12} md={8}>
                     <Map />
                </Grid>
            </Grid>
        </>
    )
}


export default App;