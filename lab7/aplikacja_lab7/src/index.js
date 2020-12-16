import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';

//do kalendarza
import { makeStyles, withStyles  } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { Button } from '@material-ui/core';

//do radio
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
//do suwaka
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';

//
import PropTypes from 'prop-types';
import clsx from 'clsx';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Check from '@material-ui/icons/Check';
import SettingsIcon from '@material-ui/icons/Settings';
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import VideoLabelIcon from '@material-ui/icons/VideoLabel';
import StepConnector from '@material-ui/core/StepConnector';
//przycisk
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';
//drower
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

//ikony usuwania
import Grid from '@material-ui/core/Grid';
import DeleteIcon from '@material-ui/icons/Delete';
import DeleteOutlinedIcon from '@material-ui/icons/DeleteOutlined';
import DeleteRoundedIcon from '@material-ui/icons/DeleteRounded';
import DeleteTwoToneIcon from '@material-ui/icons/DeleteTwoTone';
import DeleteSharpIcon from '@material-ui/icons/DeleteSharp';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import DeleteForeverOutlinedIcon from '@material-ui/icons/DeleteForeverOutlined';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';
import DeleteForeverTwoToneIcon from '@material-ui/icons/DeleteForeverTwoTone';
import DeleteForeverSharpIcon from '@material-ui/icons/DeleteForeverSharp';
import ThreeDRotationIcon from '@material-ui/icons/ThreeDRotation';
import FourKIcon from '@material-ui/icons/FourK';
import ThreeSixtyIcon from '@material-ui/icons/ThreeSixty';
//Lista

import DraftsIcon from '@material-ui/icons/Drafts';

export default function App() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Strona1</Link>
                        </li>
                        <li>
                            <Link to="/about">Strona2</Link>
                        </li>
                        <li>
                            <Link to="/users">Strona3</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/users">
                        <Users />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

// do kalendarza
const useStyles = makeStyles((theme) => ({
    container: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: 200,
    },
}));

//Radio plec



function Home() {
    const [value, setValue] = React.useState('female');

    const handleChange = (event) => {
        setValue(event.target.value);
    };
        return (<div>
            
            <Button variant="contained" color="secondary">Kliknij</Button><h1></h1>
            <form className={useStyles.container} noValidate>
                <TextField
                    id="datetime-local"
                    label="Kalendarz"
                    type="datetime-local"
                    defaultValue="2020-12-16T10:30"
                    className={useStyles.textField}
                    InputLabelProps={{
                        shrink: true,
                    }}
                />
            </form>
            <h1></h1>
            <div>
                <FormControl component="fieldset">
                    <FormLabel component="legend">Plec</FormLabel>
                    <RadioGroup aria-label="Plec" name="gender1" value={value} onChange={handleChange}>
                        <FormControlLabel value="female" control={<Radio />} label="Kobieta" />
                        <FormControlLabel value="male" control={<Radio />} label="Meszczyzna" />
                    </RadioGroup>
                </FormControl>
            </div>

        </div>
        );
}

//suwak
const useStylesSuwak = makeStyles({
    root: {
        width: 200,
    },
});
function valuetext(value) {
    return `${value}°C`;
}
//przejcia



const useStylesPrzej = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));
const useColorlibStepIconStyles = makeStyles({
    root: {
        backgroundColor: '#ccc',
        zIndex: 1,
        color: '#fff',
        width: 50,
        height: 50,
        display: 'flex',
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    active: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
        boxShadow: '0 4px 10px 0 rgba(0,0,0,.25)',
    },
    completed: {
        backgroundImage:
            'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)',
    },
});
const ColorlibConnector = withStyles({
    alternativeLabel: {
        top: 22,
    },
    active: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    completed: {
        '& $line': {
            backgroundImage:
                'linear-gradient( 95deg,rgb(242,113,33) 0%,rgb(233,64,87) 50%,rgb(138,35,135) 100%)',
        },
    },
    line: {
        height: 3,
        border: 0,
        backgroundColor: '#eaeaf0',
        borderRadius: 1,
    },
})(StepConnector);

function ColorlibStepIcon(props) {
    const classes = useColorlibStepIconStyles();
    const { active, completed } = props;

    const icons = {
        1: <SettingsIcon />,
        2: <GroupAddIcon />,
        3: <VideoLabelIcon />,
    };

    return (
        <div
            className={clsx(classes.root, {
                [classes.active]: active,
                [classes.completed]: completed,
            })}
        >
            {icons[String(props.icon)]}
        </div>
    );
} 
ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     */
    active: PropTypes.bool,
    /**
     * Mark the step as completed. Is passed to child components.
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};
function getSteps() {
    return ['Wybor ustawien', 'Dodawanie urzytkownika', 'Stworz'];
}
function getStepContent(step) {
    switch (step) {
        case 0:
            return 'Wybierz ustawienia';
        case 1:
            return 'Dodaj urzytkownika';
        case 2:
            return 'Stwarzanie ;)';
        default:
            return 'Nieznany krok';
    }
}
//przycisk
const useStylesPrzy = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

function About() {

    const classes = useStylesPrzej();
    const [activeStep, setActiveStep] = React.useState(1);
    const steps = getSteps();

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <div>
        <div className={useStylesSuwak.root}>
            <Typography id="discrete-slider-small-steps" gutterBottom>
                Zwieksz moc
      </Typography>
            <Slider
                defaultValue={1}
                getAriaValueText={valuetext}
                aria-labelledby="discrete-slider-small-steps"
                step={1}
                marks
                min={1}
                max={10}
                valueLabelDisplay="auto"
            />
        </div>


        <div className={classes.root}>
            <Stepper alternativeLabel activeStep={activeStep} connector={<ColorlibConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={ColorlibStepIcon}>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep === steps.length ? (
                    <div>
                        <Typography className={classes.instructions}>
                            All steps completed - you&apos;re finished
            </Typography>
                        <Button onClick={handleReset} className={classes.button}>
                            Reset
            </Button>
                    </div>
                ) : (
                        <div>
                            <Typography className={classes.instructions}>{getStepContent(activeStep)}</Typography>
                            <div>
                                <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                                    Cofnij
              </Button>
                                <Button
                                    variant="contained"
                                    color="primary"
                                    onClick={handleNext}
                                    className={classes.button}
                                >
                                    {activeStep === steps.length - 1 ? 'Zakoncz' : 'Nastepny'}
                                </Button>
                            </div>
                        </div>
                    )}
            </div>
            </div>
            <br></br><br></br>
            <div className={classes.root}>
                <Fab variant="extended">
                    <NavigationIcon className={classes.extendedIcon} />
         Nawiguj
      </Fab><br></br><br></br>
                <Fab disabled aria-label="like">
                    <FavoriteIcon />
                </Fab>
            </div>
        </div>
    );
}
const useStylesDrawer = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});
//
const useStylesIkonyUsuwania = makeStyles((theme) => ({
    root: {
        color: theme.palette.text.primary,
    },
}));
const useStylesLista = makeStyles((theme) => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
}));
function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
}
function Users() {
    //drawer zmienne
    const classes = useStylesDrawer();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

    return (<div>
        <div>
            {['left', 'right', 'top', 'bottom'].map((anchor) => (
                <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                        {list(anchor)}
                    </Drawer>
                </React.Fragment>
            ))}
        </div>
        <br></br>
        <Grid container className={useStylesIkonyUsuwania.root}>
            <Grid item xs={4}>
                <Typography>Filled</Typography>
            </Grid>
            <Grid item xs={8}>
                <DeleteIcon />
                <DeleteForeverIcon />
            </Grid>
            <Grid item xs={4}>
                <Typography>Outlined</Typography>
            </Grid>
            <Grid item xs={8}>
                <DeleteOutlinedIcon />
                <DeleteForeverOutlinedIcon />
            </Grid>
            <Grid item xs={4}>
                <Typography>Rounded</Typography>
            </Grid>
            <Grid item xs={8}>
                <DeleteRoundedIcon />
                <DeleteForeverRoundedIcon />
            </Grid>
            <Grid item xs={4}>
                <Typography>Two Tone</Typography>
            </Grid>
            <Grid item xs={8}>
                <DeleteTwoToneIcon />
                <DeleteForeverTwoToneIcon />
            </Grid>
            <Grid item xs={4}>
                <Typography>Sharp</Typography>
            </Grid>
            <Grid item xs={8}>
                <DeleteSharpIcon />
                <DeleteForeverSharpIcon />
            </Grid>
            <Grid item xs={4}>
                <Typography>Edge-cases</Typography>
            </Grid>
            <Grid item xs={8}>
                <ThreeDRotationIcon />
                <FourKIcon />
                <ThreeSixtyIcon />
            </Grid>
        </Grid>
        <br></br>
        <div className={useStylesLista.root}>
            <List component="nav" aria-label="main mailbox folders">
                <ListItem button>
                    <ListItemIcon>
                        <InboxIcon />
                    </ListItemIcon>
                    <ListItemText primary="Inbox" />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <DraftsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Drafts" />
                </ListItem>
            </List>
            <Divider />
            <List component="nav" aria-label="secondary mailbox folders">
                <ListItem button>
                    <ListItemText primary="Trash" />
                </ListItem>
                <ListItemLink href="#simple-list">
                    <ListItemText primary="Spam" />
                </ListItemLink>
            </List>
        </div>
    </div>);
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
