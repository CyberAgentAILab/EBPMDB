interface DocumentMeta {
  title: string;
  slug: string;
  description: string;
  date: string;
  points: string[];
  contacts: string[];
  tables: Table[];
}

interface Table {
  title: string;
  effectiveness: string;
  strength: number;
}

interface DocumentInfo {
  meta: DocumentMeta;
  content: string;
}

export type {
  DocumentMeta,
  DocumentInfo
}