interface CVProps {
  cv: string
  setCV: (cv: string) => void
}

export default function CV({ cv, setCV }: CVProps) {
  return (
    <div className="border p-4 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-2">CV</h2>
      <textarea
        value={cv}
        onChange={(e) => setCV(e.target.value)}
        className="w-full h-[calc(100%-2rem)] p-2 resize-none border rounded"
        placeholder="Edit your CV here..."
      />
    </div>
  )
}

