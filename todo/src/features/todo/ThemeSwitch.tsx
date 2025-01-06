import { useEffect, useState } from "react";
import darkModeURL from "../../assets/images/icon-moon.svg";
import lightModeURL from "../../assets/images/icon-sun.svg";

export function ThemeSwitch() {
	const [theme, setTheme] = useState<Theme>(
		() => localStorage.getItem("theme") as Theme
	);
	useEffect(() => {
		document.body.dataset["theme"] = theme;
		localStorage.setItem("theme", theme);
	}, [theme]);
	return (
		<button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
			<img
				src={theme === "light" ? darkModeURL : lightModeURL}
				alt="dark mode"
			/>
		</button>
	);
}

export type Theme = "light" | "dark";
