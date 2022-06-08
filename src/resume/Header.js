import React, { Component } from 'react';
import Typography from "@material-ui/core/Typography/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import List from "@material-ui/core/List/List";
import './index.css';

import DraftsIcon from '@material-ui/icons/Drafts';

import WebIcon from '@material-ui/icons/Web';
import PhoneIcon from '@material-ui/icons/Phone';
import SmsIcon from '@material-ui/icons/Sms';
import {ReactComponent as GitHubIcon} from './github.svg';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton/IconButton";

import { MobileView } from "react-device-detect";

const styles = (theme) => ({
    row: {
        display: 'flex',
        flexWrap: 'wrap',
        padding: theme.spacing.unit * 2,
        backgroundColor: theme.palette.grey[100],
        alignItems: 'center',
    },
});


const contacts = [
    {
        icon: <PhoneIcon />,
        text: '(210) 971-4040',
        props: {
            button: true,
            component: "a",
            href: "tel:+12109714040",
        },
        after: <MobileView>
            <ListItemSecondaryAction>
                <IconButton
                    component="a"
                    href="sms:+12109714040"
                >
                    <SmsIcon />
                </IconButton>
            </ListItemSecondaryAction>
        </MobileView>
    },
    {
        icon: <DraftsIcon />,
        text: 'alex@vanderpot.com',
        props: {
            button: true,
            component: "a",
            href: "mailto:alex@vanderpot.com",
        }
    },
    {
        icon: <WebIcon />,
        text: 'vanderpot.com',
        props: {
            button: true,
            component: "a",
            href: "https://vanderpot.com",
        }
    },
    {
        icon: <GitHubIcon />,
        text: 'github.com/ajvpot',
        props: {
            button: true,
            component: "a",
            href: "https://github.com/ajvpot",
        }
    },
];


class Header extends Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={`printBackground ${classes.row}`}>
                <div style={{
                    flexGrow: 1,
                }}>
                    <Typography variant="display3">
                        Alex Vanderpot
                    </Typography>
                    <Typography variant="display1">
                        Full-Stack Software Engineer
                    </Typography>
                </div>
                <List
                    dense
                    component="nav"
                    style={{
                        flexGrow: 1,
                        flexBasis: 0,
                    }}
                >
                    {contacts.map((c) =>
                        <ListItem {...c.props}>
                            <ListItemIcon>
                                {c.icon}
                            </ListItemIcon>
                            <ListItemText inset primary={c.text} />
                            {c.after}
                        </ListItem>
                    )}
                </List>

            </div>
        );
    }
}

export default withStyles(styles)(Header);
