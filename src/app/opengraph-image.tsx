import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Hernan Rochon — ML Engineer & Data Scientist'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          background: '#0a0a0a',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          padding: '80px',
          fontFamily: 'monospace',
        }}
      >
        <div style={{ color: '#10b981', fontSize: '24px', marginBottom: '40px', fontFamily: 'monospace' }}>
          HR
        </div>
        <div style={{ color: '#ffffff', fontSize: '72px', fontWeight: 'bold', lineHeight: 1.1, marginBottom: '24px' }}>
          Hernan Rochon
        </div>
        <div style={{ color: '#a1a1aa', fontSize: '32px', marginBottom: '60px' }}>
          ML Engineer &amp; Data Scientist
        </div>
        <div style={{ color: '#52525b', fontSize: '20px', fontFamily: 'monospace' }}>
          portfolio-five-mu-o76n21qfaq.vercel.app
        </div>
      </div>
    ),
    { ...size }
  )
}
