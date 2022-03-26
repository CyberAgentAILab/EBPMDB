export interface EvidenceCardProps {
  title: string
  lead: string
  table: EvidenceTableProps[]
}

export interface EvidenceTableProps {
  title: string
  effectiveness: string
  strength: number
}