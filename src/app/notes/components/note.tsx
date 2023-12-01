import React from 'react'

export interface INote {
  note_id: number;
  author_id: number;
  point_id: number;
  created_at: string;
  citation: string;
  citation_source: string;
}

export const Note: React.FC<INote> = (props) => {
  return (
    <div>

    </div>
  )
}
