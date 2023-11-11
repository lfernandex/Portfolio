import MuiAlert, { AlertProps } from '@mui/material/Alert';
import Snackbar from '@mui/material/Snackbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import React from 'react';


const theme = createTheme({
    palette: {
        success: {
            main: '#0f7db8', 
        },
    },
});

const Alert = React.forwardRef<HTMLDivElement, AlertProps>((props, ref) => {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

interface CustomizedSnackbarsProps {
    open: boolean;
    onClose: () => void;
}

export default function CustomizedSnackbars({ open, onClose }: CustomizedSnackbarsProps) {
    const handleClose = (_event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        onClose();
    };

    return (
        <ThemeProvider theme={theme}>
            <Snackbar open={open} autoHideDuration={5000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Obrigado pelo contato! Retornaremos em breve!
                </Alert>
            </Snackbar>
        </ThemeProvider>
    );
}