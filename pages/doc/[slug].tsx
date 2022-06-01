import { FunctionComponent } from "react";
import fs from "fs";
import matter from "gray-matter";
import { DocumentInfo } from "../../interfaces/document";
import { Container, Typography, Grid, Link } from "@mui/material";
import Navigation from "../../components/navigation";
import Markdown from "../../components/markdown";
import MarkdownList from "../../components/markdown-list";
import EvidenceTable from "../../components/evidence-table";
import Footer from "../../components/footer";
import { Help } from "@mui/icons-material";

interface IProps {
	doc: DocumentInfo;
}

const Document: FunctionComponent<IProps> = ({ doc }) => {
	return (
		<>
			<Navigation />
			<Container sx={{ m: "auto", width: "100%", maxWidth: 1024 }}>
				<Typography component="h1" variant="h4" sx={{ marginTop: "2em" }}>
					{doc.meta.title}
				</Typography>
				<Typography component="p" variant="body1" sx={{ my: "1.5em" }}>
					{doc.meta.description}
				</Typography>
				<div className="summary">
					<Grid
						container
						columns={10}
						sx={{ marginBottom: "1rem", display: { xs: "none", md: "flex" } }}
					>
						<Grid item xs={5}>
							<Typography component="h3" variant="body1">
								評価指標
							</Typography>
						</Grid>
						<Grid item xs={2} sx={{ px: "1rem" }}>
							<Typography component="h3" variant="body1">
								効果
								<Link href={`/EBPMDB/effectiveness`}>
									<Help
										sx={{ position: "relative", top: "3px", fontSize: "18px" }}
									/>
								</Link>
							</Typography>
						</Grid>
						<Grid item xs={3}>
							<Typography component="h3" variant="body1">
								証拠の強さ
								<Link href={`/EBPMDB/sms`}>
									<Help
										sx={{ position: "relative", top: "3px", fontSize: "18px" }}
									/>
								</Link>
							</Typography>
						</Grid>
					</Grid>
					{doc.meta.tables.map((table, i) => (
						<EvidenceTable key={i} table={table} />
					))}
					<Typography component="h3" variant="h6" sx={{ marginTop: "2em" }}>
						ポイント
					</Typography>
					<MarkdownList contents={doc.meta.points} />
					<Typography component="h3" variant="h6">
						文献選定／レビュー作成
					</Typography>
					<MarkdownList contents={doc.meta.contacts} />
				</div>
				<Markdown content={doc.content} />
			</Container>
			<Footer />
		</>
	);
};

export async function getStaticPaths() {
	const files = fs.readdirSync("docs");
	const paths = files.map((file) => ({
		params: {
			slug: file.split(".")[0],
		},
	}));

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ ...ctx }) {
	const { slug } = ctx.params;
	const content = fs.readFileSync(`docs/${slug}.md`).toString();
	const info = matter(content);
	const doc = {
		meta: {
			...info.data,
			slug,
		},
		content: info.content,
	};

	return {
		props: {
			doc,
		},
	};
}

export default Document;
