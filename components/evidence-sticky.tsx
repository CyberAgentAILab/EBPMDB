import { Box, Link, Grid, Paper } from "@mui/material";
import { Help } from "@mui/icons-material";

export default function EvidenceSticky() {
	const ext = process.env.ENV === "prd" ? ".html" : "";
	return (
		<Box
			sx={{ position: "sticky", top: 0, display: { xs: "none", md: "block" } }}
		>
			<Paper elevation={4}>
				<Grid container columns={20}>
					<Grid item xs={2} sx={{ p: "1rem" }}>
						分野
					</Grid>
					<Grid item xs={8} sx={{ p: "1rem" }}>
						介入
					</Grid>
					<Grid item xs={5} sx={{ p: "1rem" }}>
						評価指標
					</Grid>
					<Grid item xs={2} sx={{ p: "1rem" }}>
						効果
						<Link href={`/EBPMDB/effectiveness`}>
							<Help
								sx={{ position: "relative", top: "3px", fontSize: "18px" }}
							/>
						</Link>
					</Grid>
					<Grid item xs={3} sx={{ p: "1rem" }}>
						証拠の強さ
						<Link href={`/EBPMDB/sms`}>
							<Help
								sx={{ position: "relative", top: "3px", fontSize: "18px" }}
							/>
						</Link>
					</Grid>
				</Grid>
			</Paper>
		</Box>
	);
}
