import React from 'react';
import { Route } from 'react-router-dom';

import HomeLayout from '../Layout/Home.Layout';

const HomeLayoutHoc = ({ component: Component, ...rest}) => {
  return (
    <>
        <Route
            {...rest}
            component={(props) => (
                <HomeLayout>
                    <Component {...props} />
                </HomeLayout>
            )}   
        />
    </>
  )
}

export default HomeLayoutHoc;