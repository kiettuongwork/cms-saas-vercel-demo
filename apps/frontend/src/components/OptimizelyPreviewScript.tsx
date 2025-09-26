"use client"

import Script from "next/script"
import { useEffect, useState } from "react"

export default function OptimizelyPreviewScript() {
  const [isPreview, setIsPreview] = useState(false)

  useEffect(() => {
    // Detect if the site is loaded inside the Optimizely editor iframe
    if (window && window !== window.parent) {
      setIsPreview(true)
    }
  }, [])

  if (!isPreview) return null

  return (
    <Script
      src={`https://app-padi01saas10v7ut001.cms.optimizely.com/util/javascript/communicationinjector.js`}
      strategy="afterInteractive"
    />
  )
}
