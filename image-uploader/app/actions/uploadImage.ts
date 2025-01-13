'use server'

import { put } from '@vercel/blob'
import { revalidatePath } from 'next/cache'

export async function uploadImage(file: File) {
  try {
    if (!process.env.BLOB_READ_WRITE_TOKEN) {
      throw new Error('BLOB_READ_WRITE_TOKEN is not set')
    }

    const arrayBuffer = await file.arrayBuffer()
    const buffer = Buffer.from(arrayBuffer)

    const { url } = await put(file.name, buffer, { access: 'public' })

    revalidatePath('/')
    return { success: true, url }
  } catch (error) {
    console.error('Error uploading image:', error)
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Failed to upload image. Please check your Vercel Blob configuration.'
    }
  }
}

