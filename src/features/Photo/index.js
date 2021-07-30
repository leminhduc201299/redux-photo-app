import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import MainPage from './pages/MainPage';
import AddEditPage from './pages/AddEditPage';
import NotFound from '../../components/NotFound';

Photo.propTypes = {

};

function Photo(props) {
    const match = useRouteMatch();
    console.log(match);

    return (
        <Switch>
            <Route exact path={`${match.url}`}>
                <MainPage />
            </Route>

            <Route path={`${match.url}/add`}>
                <AddEditPage />
            </Route>
            <Route path={`${match.url}/:photoId`}>
                <AddEditPage />
            </Route>

            <Route path={`${match.url}`}>
                <NotFound />
            </Route>
        </Switch>
    );
}

export default Photo;