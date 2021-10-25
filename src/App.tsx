import React from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {HashRouter, Redirect, Route, Switch, withRouter} from "react-router-dom";
import Login from "./components/Login/Login";
import {connect, Provider} from "react-redux";
import {compose} from "redux";
import {initializeApp} from "./Redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import UsersContainer from "./components/Users/UsersContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import store, {AppStateType} from "./Redux/redux-store";
import {withSuspense} from "./hoc/withSuspense";
import {Box, Grid, ThemeProvider} from '@mui/material';
import {theme} from './theme/Theme';

const DialogsContainer = React.lazy((): any => import('./components/Dialogs/DialogsContainer'));
const ProfileContainer = React.lazy((): any => import('./components/Profile/ProfileContainer'));

const SuspendedDialogs = withSuspense(DialogsContainer)
const SuspendedProfile = withSuspense(ProfileContainer)

type MapsPropsType = ReturnType<typeof mapStateToProps>
type DispatchPropsType = {
    initializeApp: () => void
}

class App extends React.Component<MapsPropsType & DispatchPropsType> {
    componentDidMount() {
        this.props.initializeApp()
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className='external-wrapper'>
                <div className='app-wrapper'>
                    <Box sx={{flexGrow: 1}}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <HeaderContainer/>
                            </Grid>
                            <Grid item xs={2}>
                                <Navbar/>
                            </Grid>
                            <Grid item xs={10}>
                                <Switch>
                                    <Route exact path='/'
                                           render={() => <Redirect to={'/profile'}/>}/>
                                    <Route path='/profile/:userId?'
                                           render={() => <SuspendedProfile/>}/>
                                    <Route path='/Dialogs' render={() => <SuspendedDialogs/>}/>
                                    <Route path='/Users' render={() => <UsersContainer/>}/>
                                    <Route exact path='/Login' render={() => <Login/>}/>
                                </Switch>
                            </Grid>
                        </Grid>
                    </Box>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state: AppStateType) => ({
    initialized: state.app.initialized
})


let AppContainer = compose<React.ComponentType>(
    withRouter,
    connect(mapStateToProps, {initializeApp}))(App)


const ReactApp: React.FC = () => {
    return <HashRouter basename={process.env.PUBLIC_URL}>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <AppContainer/>
            </ThemeProvider>
        </Provider>
    </HashRouter>
}

export default ReactApp