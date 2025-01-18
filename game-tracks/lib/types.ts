export interface Song {
  name: string
  slug: string
  author: string
  published: string
  art_type: string
  tags: string[]
  genre: string
  license: string
  description: string
  copyright_notice?: string
  source: string
  file: {
    name: string
    url: string
    size: string
  }
}

