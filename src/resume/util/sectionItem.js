import React, {Component} from 'react';
import withStyles from "@material-ui/core/styles/withStyles";
import Typography from "@material-ui/core/Typography/Typography";
import Chip from '@material-ui/core/Chip';

const styles = (theme) => ({
    heading: {
        display: 'flex',
        flexWrap: 'wrap',
        //paddingBottom: theme.spacing.unit,
    },
    row: {
        paddingBottom: theme.spacing.unit*2,
    },
    jobHeader: {
        fontWeight: '500',
    },
    chip: {
        marginRight: theme.spacing.unit / 2,
        height: theme.spacing.unit * 3,
    },
    chipContainer: {
        paddingBottom: theme.spacing.unit,
    }
});

class SectionItem extends Component {
    render() {
        const {classes, heading, time, chips, description} = this.props;
        return (
            <React.Fragment>
                <div className={classes.row}>
                <div className={classes.heading}>
                    <Typography
                        variant="subheading"
                        style={{
                            flexGrow: 1,
                        }}
                        className={classes.jobHeader}
                    >
                        {heading}
                    </Typography>
                    {time &&
                        <Typography
                            variant="subheading"
                        >
                            {time}
                        </Typography>
                    }
                </div>
                    <div className={classes.chipContainer}>
                {chips && chips.map((chip) => (
                    <Chip
                        {...chip}
                        className={classes.chip}
                        variant="outlined"
                    />
                ))}
                    </div>
                <Typography variant="body1">
                    {description}
                </Typography>
                </div>
            </React.Fragment>
        );
    }
}

export default withStyles(styles)(SectionItem);
