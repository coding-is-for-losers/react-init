import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/styles';
import { Button, Container } from '@material-ui/core';
import Box from '@material-ui/core/Box';
import Theme from '../theme';

const useStyles = makeStyles(theme => ({
    actionContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: theme.spacing(2, 0, 0)
    },
    boxContainer: {
        padding: theme.spacing(4)
    },
    container: {
        margin: `${theme.spacing(4)  }px auto`
    }
}));

const Wizard = ({ steps, onComplete, completeName }) => {
    const classes = useStyles(Theme);
    const [activeStep, setStep] = useState(0);
    const handleNext = () => {
        setStep(activeStep + 1);
    };
    const handleBack = () => {
        if (!activeStep) {
            return;
        }
        setStep(activeStep - 1);
    };
    return (
        <Container maxWidth="xs" border={1} className={classes.container}>
            <Box
                border={1}
                borderRadius={16}
                borderColor={Theme.palette.grey[300]}
                className={classes.boxContainer}
            >
                {steps[activeStep].component}
                <div className={classes.actionContainer}>
                    {activeStep ? (
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={handleBack}
                            className={classes.button}
                        >
              Back
                        </Button>
                    ) : null}
                    <Button
                        variant="contained"
                        color="primary"
                        size="large"
                        onClick={activeStep === steps.length - 1 ? onComplete : handleNext}
                        className={classes.button}
                    >
                        {activeStep === steps.length - 1 ? completeName : 'Next'}
                    </Button>
                </div>
            </Box>
        </Container>
    );
};

Wizard.propTypes = {
    steps: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
    onComplete: PropTypes.func.isRequired,
    completeName: PropTypes.string.isRequired
};

export default Wizard;