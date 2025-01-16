interface KeywordsProps {
  keywords: string[]
  cv: string
  jobDescription: string
  coverLetter: string
  onRemove: (keyword: string) => void
}

export default function Keywords({ keywords, cv, jobDescription, coverLetter, onRemove }: KeywordsProps) {
  const countOccurrences = (text: string, keyword: string) => {
    return (text.match(new RegExp(keyword, 'gi')) || []).length
  }

  const calculateCoverage = () => {
    const totalKeywords = keywords.length
    const coveredKeywords = keywords.filter(kw => 
      countOccurrences(cv, kw) > 0 || countOccurrences(coverLetter, kw) > 0
    ).length
    return (coveredKeywords / totalKeywords) * 100 || 0
  }

  const coverage = calculateCoverage()

  return (
    <div className="border p-4 rounded-lg shadow-md overflow-auto">
      <h2 className="text-xl font-bold mb-2">Keywords</h2>
      <div className="mb-4">
        {keywords.map(keyword => (
          <div key={keyword} className="flex justify-between items-center mb-2">
            <span className="font-semibold">{keyword}</span>
            <div>
              <span className="mr-2 text-sm">JD: {countOccurrences(jobDescription, keyword)}</span>
              <span className="mr-2 text-sm">CV: {countOccurrences(cv, keyword)}</span>
              <span className="mr-2 text-sm">CL: {countOccurrences(coverLetter, keyword)}</span>
              <button onClick={() => onRemove(keyword)} className="text-red-500 text-sm">Remove</button>
            </div>
          </div>
        ))}
      </div>
      <div className={`text-right text-2xl font-bold ${coverage >= 70 ? 'text-green-500' : 'text-yellow-500'}`}>
        Coverage: {coverage.toFixed(1)}%
      </div>
    </div>
  )
}

