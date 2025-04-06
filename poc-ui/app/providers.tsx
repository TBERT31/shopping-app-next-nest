"use client";

import lightTheme from "./common/styles/light.theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ReactElement } from "react";
import { AuthContext } from "./auth/auth-context";

interface ProvidersProps {
    children: ReactElement[];
    authenticated: boolean;
}

export default function Providers({ children, authenticated }: ProvidersProps) {
    return (
         <AppRouterCacheProvider>
            <ThemeProvider theme={lightTheme}>
                <AuthContext.Provider value={authenticated}>
                    {children}
                </AuthContext.Provider>
            </ThemeProvider>
         </AppRouterCacheProvider>
    )
}