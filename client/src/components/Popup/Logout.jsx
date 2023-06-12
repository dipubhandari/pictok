import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import DialogTitle from '@mui/material/DialogTitle';
import Dialog from '@mui/material/Dialog';
import PersonIcon from '@mui/icons-material/Person';
import AddIcon from '@mui/icons-material/Add';
import Typography from '@mui/material/Typography';
import { blue } from '@mui/material/colors';
import { HiOutlineLogout } from 'react-icons/hi'
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { useDispatch } from 'react-redux'
import { logout } from '../../redux/userslice'
import { useLocation, redirect } from 'react-router-dom';


const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
const emails = ['dipika@gmail.com'];
function Logout(props) {
    const location = useLocation()

    const dispatch = useDispatch()

    // redirect to login page when user clicis on add account
    const redirectLogin = () => {
        console.log('redirect');
        redirect('/login')
    }
    const { onClose, selectedValue, open } = props;

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        onClose(value);
    };

    // notify code when user clicks on logout
    const [open2, setOpen2] = React.useState(false);

    const handleClick2 = () => {
        setOpen2(true);
        setTimeout(() => {

            dispatch(logout())

        }, 1000)
    };

    const handleClose2 = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen2(false);
    };

    return (
        <>
            <Snackbar open={open2} autoHideDuration={6000} onClose={handleClose2}>
                <Alert onClose={handleClose2} severity="success" sx={{ width: '100%' }}>
                    Successfully Logout...!
                </Alert>
            </Snackbar>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle>Hey Pictoker...</DialogTitle>
                <List sx={{ pt: 0 }}>
                    {emails.map((email) => (
                        <ListItem disableGutters>
                            <ListItemButton onClick={() => handleListItemClick(email)} key={email}>
                                <ListItemAvatar>
                                    <Avatar sx={{ bgcolor: blue[100], color: blue[600] }}>
                                        <PersonIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                <ListItemText primary={email} />
                            </ListItemButton>
                        </ListItem>
                    ))}

                    <ListItem onClick={handleClick2} disableGutters>
                        <ListItemButton
                            autoFocus
                            onClick={() => handleListItemClick('addAccount')}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <HiOutlineLogout />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Logout" />
                        </ListItemButton>
                    </ListItem>

                    <ListItem disableGutters onClick={redirectLogin}>
                        <ListItemButton
                            autoFocus
                            onClick={() => handleListItemClick('addAccount')}
                        >
                            <ListItemAvatar>
                                <Avatar>
                                    <AddIcon />
                                </Avatar>
                            </ListItemAvatar>
                            <ListItemText primary="Add Account" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Dialog>
        </>
    );
}

Logout.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
    const [open, setOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <div>

            <img src="https://cdn.pixabay.com/photo/2016/07/13/11/49/vietnam-1514246_640.jpg" width={40} height={40} alt="logo" className='userprofilepicheader'
                onClick={handleClickOpen} />

            <Logout
                selectedValue={selectedValue}
                open={open}
                onClose={handleClose}
            />
        </div>
    );
}
