import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0E0E0E',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#F1EFEA',
          fontSize: 22,
          fontFamily: 'Georgia, serif',
          letterSpacing: '-0.01em',
        }}
      >
        Φ
      </div>
    ),
    { ...size },
  )
}
