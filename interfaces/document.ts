interface DocumentMeta {
  id: string;
  title: string;
  slug: string;
  description: string;
  date: string;
  category: string;
  categoryLabel: string;
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