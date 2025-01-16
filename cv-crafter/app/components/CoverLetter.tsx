interface CoverLetterProps {
  coverLetter: string
  setCoverLetter: (coverLetter: string) => void
}

export default function CoverLetter({ coverLetter, setCoverLetter }: CoverLetterProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">Cover Letter</h2>
      <textarea
        value={coverLetter}
        onChange={(e) => setCoverLetter(e.target.value)}
        className="w-full h-[calc(100%-2rem)] p-2 resize-none border rounded"
        placeholder="Write or paste your cover letter here..."
      />
    </div>
  )
}

