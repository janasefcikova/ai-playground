interface JobDescriptionProps {
  jobDescription: string
  setJobDescription: (jobDescription: string) => void
  onHighlight: (word: string) => void
}

export default function JobDescription({ jobDescription, setJobDescription, onHighlight }: JobDescriptionProps) {
  const handleDoubleClick = (e: React.MouseEvent<HTMLTextAreaElement>) => {
    const selection = window.getSelection()
    if (selection && selection.toString().trim()) {
      onHighlight(selection.toString().trim())
    }
  }

  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Job Description</h2>
      <textarea
        value={jobDescription}
        onChange={(e) => setJobDescription(e.target.value)}
        onDoubleClick={handleDoubleClick}
        className="w-full h-[calc(100%-2rem)] p-2 resize-none border rounded"
        placeholder="Paste the job description here..."
      />
    </div>
  )
}

