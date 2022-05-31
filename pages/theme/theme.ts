import { createTheme } from "@mui/material/styles";

const theme = createTheme({
	palette: {
		primary: {
			light: "#6C63FF",
			main: "#6C63FF",
			dark: "#b24545",
			contrastText: "#000",
		},
		secondary: {
			light: "#d6d6d6",
			main: "#cccccc",
			dark: "#8e8e8e",
			contrastText: "#000",
		},
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1200,
			xl: 1536,
		},
	},
	typography: {
		h1: {
			"@media (max-width:960px)": {
				fontSize: "2.5rem",
			},
		},
		h2: {
			"@media (max-width:960px)": {
				fontSize: "2rem",
			},
		},
	},
});

export default theme;
