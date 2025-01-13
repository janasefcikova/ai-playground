'use server'

import { list } from '@vercel/blob'

export async function getLatestImage() {
  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      throw new Error('BLOB_READ_WRITE_TOKEN is not set')
    }
    const { blobs } = await list()
    const latestBlob = blobs[0] // Assuming the latest upload is first in the list
    return latestBlob?.url || null
  } catch (error) {
    console.error('Error fetching latest image:', error)
    return { error: error instanceof Error ? error.message : 'An unknown error occurred' }
  }
}

