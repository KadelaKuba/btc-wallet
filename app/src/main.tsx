import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from "@app/App";
import {BrowserRouter} from "react-router-dom";
import {Auth0ProviderWithNavigate} from "@app/Auth0ProviderWithNavigate";
import {Container, CssBaseline, ThemeProvider} from "@mui/material";
import theme from "@app/theme";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0ProviderWithNavigate>
                <ThemeProvider theme={theme}>
                    <CssBaseline/>
                    <Container maxWidth="sm">
                        <App/>
                    </Container>
                </ThemeProvider>
            </Auth0ProviderWithNavigate>
        </BrowserRouter>
    </React.StrictMode>,
)
