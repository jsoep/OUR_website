'use client'

import { useEffect, useRef } from 'react'

interface VideoBackgroundProps {
  videoId: string
  className?: string
  children?: React.ReactNode
}

export default function VideoBackground({ videoId, className = '', children }: VideoBackgroundProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    // Load YouTube API
    const tag = document.createElement('script')
    tag.src = 'https://www.youtube.com/iframe_api'
    const firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag)

    // Initialize player when API is ready
    const onYouTubeIframeAPIReady = () => {
      if (typeof window !== 'undefined' && (window as any).YT) {
        new (window as any).YT.Player(iframeRef.current, {
          videoId: videoId,
          playerVars: {
            autoplay: 1,
            controls: 0,
            disablekb: 1,
            enablejsapi: 1,
            fs: 0,
            iv_load_policy: 3,
            loop: 1,
            modestbranding: 1,
            playsinline: 1,
            rel: 0,
            showinfo: 0,
            start: 0,
            mute: 1,
            playlist: videoId
          },
          events: {
            onReady: (event: any) => {
              event.target.mute()
              event.target.playVideo()
            },
            onStateChange: (event: any) => {
              // Loop the video
              if (event.data === (window as any).YT.PlayerState.ENDED) {
                event.target.playVideo()
              }
            }
          }
        })
      }
    }

    // Set up global callback
    ;(window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady

    // If API is already loaded, call the function
    if ((window as any).YT && (window as any).YT.Player) {
      onYouTubeIframeAPIReady()
    }
  }, [videoId])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <div className="relative w-full h-full scale-150 origin-center">
          <iframe
            ref={iframeRef}
            className="absolute top-1/2 left-1/2 w-[177.77777778vh] h-[56.25vw] min-w-full min-h-full transform -translate-x-1/2 -translate-y-1/2"
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0&disablekb=1&enablejsapi=1&fs=0&iv_load_policy=3&loop=1&modestbranding=1&playsinline=1&rel=0&showinfo=0&start=0&mute=1&playlist=${videoId}`}
            title="Background Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        {/* Blur and darken overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}