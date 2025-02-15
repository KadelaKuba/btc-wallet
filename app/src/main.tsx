import React from 'react'
import ReactDOM from 'react-dom/client'
import { App } from "@app/App";
import {BrowserRouter} from "react-router-dom";
import {Auth0ProviderWithNavigate} from "@app/Auth0ProviderWithNavigate";

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <BrowserRouter>
            <Auth0ProviderWithNavigate>
                <App/>
            </Auth0ProviderWithNavigate>
        </BrowserRouter>
    </React.StrictMode>,
)
