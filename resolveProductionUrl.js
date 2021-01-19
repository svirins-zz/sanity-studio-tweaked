const previewSecret = process.env.SANITY_API_TOKEN// Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = process.env.PREVIEW_URL

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}