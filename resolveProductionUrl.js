const previewSecret = 'sk2mprwGvDlG3Ac8ORicMnm0jtblPc3VCr6trmgQuuwKKR5nFfAi2BfMyvDwaVg9p4PiC9MSlSxmwJO0uzyKA02WloZh5AAJ9A7V4g00jpbpFBG94UB4CzLmC26M5UAC2EmffiMAC6r2Gmpa1iLYhRvraiTcws9XiYdew5J9bGJAOJfZq9HT' // Copy the string you used for SANITY_PREVIEW_SECRET
const projectUrl = 'http://localhost:8000'

export default function resolveProductionUrl(document) {
  return `${projectUrl}/api/preview?secret=${previewSecret}&slug=${document.slug.current}`
}