import React from 'react'

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default class User extends React.Component {
    constructor(props) {
        super(props);
    }

    getLoginButton = () => (
        <Button size="small" onClick={this.props.login}>
            Login
        </Button>
    )

    getLogoutButton = () => (
        <Button size="small" onClick={this.props.logout}>
            Logout
        </Button>
    )

    render = () => {
        let cardContent, cardActions;
        let { user, loading, error } = this.props;

        if (loading) {
            cardContent = (
                <h1>Loading...</h1>
            )
        } else if (user) {
            cardContent = (
                <React.Fragment>
                    <Typography color="textSecondary" gutterBottom>
                        { user.company.name }
                    </Typography>
                    <Typography variant="h5" component="h2">
                        { user.name }
                    </Typography>
                    <Typography color="textSecondary">
                        { user.address.city }
                    </Typography>
                    <Typography color="textSecondary">
                        { user.website }
                    </Typography>
                </React.Fragment>
            )
            cardActions = this.getLogoutButton()
        } else if (error) {
            cardContent = (
                <h1>Error: {error}</h1>
            )
            cardActions = this.getLoginButton()
        } else {
            cardActions = this.getLoginButton()
        }

        return (
            <Card>
                { cardContent &&
                    <CardContent>
                        { cardContent }
                    </CardContent>
                }
                { cardActions &&
                    <CardActions>
                        { cardActions }
                    </CardActions>
                }
            </Card>
        )
    }
}