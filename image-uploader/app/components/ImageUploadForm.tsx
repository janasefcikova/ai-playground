'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { uploadImage } from '../actions/uploadImage'
import ErrorMessage from './ErrorMessage'

export default function ImageUploadForm() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!file) return

    setUploading(true)
    setError(null)
    try {
      const result = await uploadImage(file)
      if (result.success) {
        router.refresh()
      } else {
        setError(result.error || 'An unknown error occurred')
      }
    } catch (error) {
      console.error('Error uploading image:', error)
      setError('An unexpected error occurred')
    } finally {
      setUploading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor="image" className="block text-sm font-medium text-gray-700">
          Upload Image
        </label>
        <input
          type="file"
          id="image"
          accept="image/*"
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          className="mt-1 block w-full text-sm text-gray-500
            file:mr-4 file:py-2 file:px-4
            file:rounded-full file:border-0
            file:text-sm file:font-semibold
            file:bg-blue-50 file:text-blue-700
            hover:file:bg-blue-100"
        />
      </div>
      <button
        type="submit"
        disabled={!file || uploading}
        className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
      >
        {uploading ? 'Uploading...' : 'Upload and Process'}
      </button>
      {error && <ErrorMessage message={error} />}
    </form>
  )
}

