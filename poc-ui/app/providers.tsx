import lightTheme from "./common/styles/light.theme";
import { ThemeProvider } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { ReactElement } from "react";

interface ProvidersProps {
    children: ReactElement[];
}

export default function Providers({children}: ProvidersProps) {
    return (
         <AppRouterCacheProvider>
            <ThemeProvider theme={lightTheme}>
                {children}
            </ThemeProvider>
         </AppRouterCacheProvider>
    )
}