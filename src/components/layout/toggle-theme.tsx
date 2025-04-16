"use client"
import { useTheme } from "next-themes";
import { Button } from "../ui/button";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
    const { setTheme, theme } = useTheme()

    return (
        <Button
            variant={"default"}
            size={"icon"}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
            <Sun
                className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all dark:rotate-90 dark:scale-0"
            />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 s dark:scale-100" />
            {/* <span>Toggle theme</span> */}
        </Button>
    )
}