import { createClient } from '@sanity/client'

export const sanityClient = createClient({
  projectId: 'uvuj8y7z',       // Replace with your real project ID
  dataset: 'craft-website-cms',              // Default dataset name (or yours)
  apiVersion: '2023-01-01',           // Any recent date
  useCdn: true,                       // `true` for fast cached reads
})
