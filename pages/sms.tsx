import Navigation from "../components/navigation";
import { Container } from "@mui/material";
import { Typography, Grid, Link } from "@mui/material";
import EvidenceTableStrength from "../components/evidence-table-strength";
import Footer from "../components/footer";
import { FunctionComponent } from "react";

const SMS: FunctionComponent = () => {
	return (
		<>
			<Navigation />
			<Container sx={{ m: "auto" }}>
				<Typography component="h2" variant="h3" sx={{ my: 8 }}>
					証拠の強さについて
				</Typography>
				<Typography component="p" variant="body1" sx={{ my: 8, fontSize: 18 }}>
					各研究で示された分析結果を政策立案に活用する際には、その分析結果がどの程度証拠として強いのかを理解しておく必要があります。ある政策が非常に有効であるという結果が示されたとしても、証拠として弱い場合は全面的に導入する前に追加的な実証実験を行うなど慎重に検討する必要があります。
				</Typography>
				<Typography component="p" variant="body1" sx={{ my: 8, fontSize: 18 }}>
					EBPMデータベースでは各研究で示された分析結果について、証拠としての強さを5段階で評価しています。証拠の強さの判断基準は海外でも多く使われているThe
					MaryLand Scientific Method Scale (SMS)に従います。以下ではWhat Works
					Center for Local Growth（
					<Link href="https://whatworksgrowth.org/resources/the-scientific-maryland-scale/">
						https://whatworksgrowth.org/resources/the-scientific-maryland-scale/
					</Link>
					）の解説を再掲しています。
				</Typography>
				<Grid
					container
					spacing={2}
					sx={{ py: 4, borderTop: 1, borderColor: "grey.500" }}
				>
					<Grid item xs={2} sx={{ py: 4 }}>
						<Typography
							component="p"
							variant="subtitle1"
							sx={{ fontWeight: "bold" }}
						>
							レベル1
						</Typography>
						<EvidenceTableStrength strength={1} />
					</Grid>
					<Grid item xs={10} sx={{ py: 4 }}>
						<Typography component="p" variant="body1">
							(a)介入群と非介入群との横断的比較、または(b)介入群の前後比較（非介入群との比較なし）。統計解析において、介入群と非介入群の差や期間差を調整するための制御変数を用いていない。
						</Typography>
					</Grid>
					<Grid item xs={2} sx={{ py: 4 }}>
						<Typography
							component="p"
							variant="subtitle1"
							sx={{ fontWeight: "bold" }}
						>
							レベル2
						</Typography>
						<EvidenceTableStrength strength={2} />
					</Grid>
					<Grid item xs={10} sx={{ py: 4 }}>
						<Typography component="p" variant="body1">
							(a)介入群と非介入群の横断的比較、(b)介入群と非介入群の前後比較のいずれかを行い、コントロール変数が適切に用いられている。(a)では、介入群と非介入群の属性などの差異を考慮するために、コントロール変数またはマッチングが用いられる。(b)では、マクロレベルの前後変化をコントロールするために変数が使用される。
						</Typography>
					</Grid>
					<Grid item xs={2} sx={{ py: 4 }}>
						<Typography
							component="p"
							variant="subtitle1"
							sx={{ fontWeight: "bold" }}
						>
							レベル3
						</Typography>
						<EvidenceTableStrength strength={3} />
					</Grid>
					<Grid item xs={10} sx={{ py: 4 }}>
						<Typography component="p" variant="body1">
							介入後の介入群の結果変数と介入前の介入群の結果変数、および反実仮想を提供するために用いられる非介入群の比較（例：差分の差分）。介入群に類似していると主張される非介入群の選択に正当な理由がある。介入群と非介入群の比較可能性について提示された証拠。介入群と非介入群の差を調整するために回帰や傾向スコアマッチングなどの手法が用いられることがあるが、重要な未観測の差が残っている可能性が高い。
						</Typography>
					</Grid>
					<Grid item xs={2} sx={{ py: 4 }}>
						<Typography
							component="p"
							variant="subtitle1"
							sx={{ fontWeight: "bold" }}
						>
							レベル4
						</Typography>
						<EvidenceTableStrength strength={4} />
					</Grid>
					<Grid item xs={10} sx={{ py: 4 }}>
						<Typography component="p" variant="body1">
							介入が準ランダムに行われ、介入群と非介入群は、介入の有無においてのみ異なると考えられる。これは、しばしば介入における操作変数または回帰不連続の使用を伴うが、その適切性は十分に実証され、擁護されなければならない。
						</Typography>
					</Grid>
					<Grid item xs={2} sx={{ py: 4 }}>
						<Typography
							component="p"
							variant="subtitle1"
							sx={{ fontWeight: "bold" }}
						>
							レベル5
						</Typography>
						<EvidenceTableStrength strength={5} />
					</Grid>
					<Grid item xs={10} sx={{ py: 4 }}>
						<Typography component="p" variant="body1">
							介入群と非介入群への明確な無作為化を伴う実験デザイン。無作為化対照試験（RCT）。介入群と対照群の比較可能性に関する広範な証拠が提供され、水準や傾向の点で有意差
							がないことが示される。介入群と対照群の差を調整するためにコントロール変数を使用することがあるが、この調整は主要な結果に大きな影響を及ぼしてはならない。無作為割付け群からの選択的離脱の問題に注意を払うが、その重要性は無視できる程度であることが示される。対照群への介入の「混ざり込み」は限定的であるべきで、理想的には全く発生してはならない。
						</Typography>
					</Grid>
				</Grid>
			</Container>
			<Footer />
		</>
	);
};

export default SMS;
