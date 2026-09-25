import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'AIΦ — King\'s Artificial Intelligence and Philosophy Society'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0E0E0E',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
          padding: '64px',
          position: 'relative',
          fontFamily: 'Georgia, serif',
        }}
      >
        {/* Left frame rule */}
        <div
          style={{
            position: 'absolute',
            left: 64,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'rgba(241,239,234,0.18)',
          }}
        />
        {/* Right frame rule */}
        <div
          style={{
            position: 'absolute',
            right: 64,
            top: 0,
            bottom: 0,
            width: 1,
            background: 'rgba(241,239,234,0.18)',
          }}
        />

        {/* Wordmark */}
        <div
          style={{
            fontSize: 96,
            fontWeight: 900,
            color: '#F1EFEA',
            lineHeight: 1,
            letterSpacing: '-0.01em',
            marginBottom: 24,
          }}
        >
          AIΦ
        </div>

        {/* Tagline */}
        <div
          style={{
            fontSize: 28,
            fontStyle: 'italic',
            color: '#D9D6CF',
            lineHeight: 1.3,
            maxWidth: 700,
            marginBottom: 32,
          }}
        >
          Thinking about the machines we&apos;ll live with.
        </div>

        {/* Footer line */}
        <div
          style={{
            fontSize: 16,
            fontFamily: 'system-ui, sans-serif',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: '#8A8781',
          }}
        >
          King&apos;s College London — AI &amp; Philosophy Society
        </div>
      </div>
    ),
    { ...size },
  )
}
