"use client"

import * as React from "react"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function ThemeToggle() {
    const [isDark, setIsDark] = React.useState(false)

    const toggleTheme = () => {
        setIsDark(!isDark)
        document.documentElement.classList.toggle('dark')
    }

    return (
        <Button
            variant="outline"
            size="icon"
            className="fixed bottom-6 border right-6 h-12 w-12 rounded-full transition-all hover:scale-110 bg-white-700   bg-clip-padding backdrop-filter backdrop-blur-2xl bg-opacity-10"
            onClick={toggleTheme}
        >
            {isDark ? (
                <Sun className="h-5 w-5 rotate-90 transition-all dark:rotate-0 " />
            ) : (
                <Moon className="h-5 w-5  transition-all dark:rotate-0 dark:text-white text-white bg-opacity-10" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    )
}

