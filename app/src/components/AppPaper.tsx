import {Box, Paper} from "@mui/material";

export function AppPaper({children}) {
    return (
        <Paper>
            <Box p={4}>
                {children}
            </Box>
        </Paper>
    );
}