"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { ThemeProviderProps, useTheme } from "next-themes"
import { setGlobalColorTheme } from "@/lib/theme-colors";

const ThemeContext = createContext<ThemeColorStateParams>(
    {} as ThemeColorStateParams,
)

export function ZeroThemeProvider({ children }: ThemeProviderProps) {
    const getSavedThemeColor = () => {
        try {
            return (localStorage.getItem("zeroTheme") as ThemeColors) || "Zinc";
        } catch {
            return "Zinc";
        }
    };

    const [themeColor, setThemeColor] = useState<ThemeColors>(getSavedThemeColor());
    const { theme } = useTheme();

    useEffect(() => {
        if (theme) {
            localStorage.setItem("zeroTheme", themeColor);
            setGlobalColorTheme(theme as "light" | "dark", themeColor);
        }
    }, [themeColor, theme]);

    return (
        <ThemeContext.Provider value={{ themeColor, setThemeColor }}>
            {children}
        </ThemeContext.Provider>
    );
}

export function useThemeContext() {
    return useContext(ThemeContext);
}
