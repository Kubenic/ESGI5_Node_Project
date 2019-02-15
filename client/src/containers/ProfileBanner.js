import React from 'react';
import { connect } from 'react-redux';

import Banner from "../components/Banner";

class ProfileBanner extends React.Component {
    render() {
        console.log(this.props);
        const { user, isLogged } = this.props;
        console.log(user);
        return <Banner content={isLogged ? user.username : "Vous n'êtes pas connecté(e)"}/>
    }
}

const mapStateToProps = (state) => {
    const { security: { user, isLogged } } = state;

    return {
        user,
        isLogged,
    }
};

const ConnectedProfileBanner = connect(mapStateToProps)(ProfileBanner);

export default ConnectedProfileBanner;