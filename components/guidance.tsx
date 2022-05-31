import {
	Card,
	CardContent,
	Link,
	Grid,
	Container,
	Typography,
	Box,
} from "@mui/material";
import { FunctionComponent } from "react";

const Guidance: FunctionComponent = () => {
	return (
		<Container sx={{ mt: 4 }}>
			<Grid container spacing={4}>
				<Grid item lg={6} md={12}>
					<Card>
						<Box sx={{ mt: 2 }} className="howto-image guidance-image" />
						<CardContent sx={{ p: 4 }}>
							<Typography component="h2" variant="h4" sx={{ mb: 2 }}>
								政策担当者の方へ
							</Typography>
							<Typography component="p" variant="body1">
								関心のある政策課題を選択すると過去に行われた政策の検証結果を調べることができます。星の数は検証結果の
								<Link href="/EBPMDB/sms">証拠としての強さ</Link>
								を示しています。さまざまな課題に対する政策のアイデアの発掘や、客観的なデータに基づく政策の優先づけ、議会や住民とのコンセンサスづくりなどにご活用できます。
							</Typography>
							<Typography component="p" variant="body1" sx={{ mt: 1 }}>
								レビューの作成者による詳しいアドバイスが必要な場合は、お気軽にebpm@cyberagent.co.jpまでお問い合わせください。
							</Typography>
						</CardContent>
					</Card>
				</Grid>
				<Grid item lg={6} md={12}>
					<Card sx={{ height: "100%" }}>
						<Box sx={{ mt: 2 }} className="report-image guidance-image" />
						<CardContent sx={{ p: 4 }}>
							<Typography component="h2" variant="h4" sx={{ mb: 2 }}>
								研究者の方へ
							</Typography>
							<Typography component="p" variant="body1">
								GitHubから新たな記事（レビュー）を自由に投稿したり、既存のレビューを修正することができます。政策的な含意のある国内外の研究成果・検証結果をわかりやすく伝えることで学術的知見にもとづいた政策コンサルティング、行政におけるフィールド実験などのコラボレーションが期待できます。今投稿されている政策課題に限らず、あらゆる政策分野のレビューを歓迎します。
							</Typography>
							<Typography component="p" variant="body1">
								詳細は
								<Link href="https://github.com/CyberAgentAILab/EBPMDB/">
									GitHubページ
								</Link>
								をご覧ください。
							</Typography>
						</CardContent>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Guidance;
