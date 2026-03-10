import { ImageResponse } from 'next/og'

export const size = { width: 180, height: 180 }
export const contentType = 'image/png'

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(145deg, #0f172a 0%, #1e1b4b 100%)',
          position: 'relative',
        }}
      >
        {/* Outer ambient glow */}
        <div
          style={{
            position: 'absolute',
            width: 120,
            height: 120,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
        {/* Inner tight glow ring */}
        <div
          style={{
            position: 'absolute',
            width: 80,
            height: 80,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(129,140,248,0.35) 0%, transparent 65%)',
            filter: 'blur(8px)',
          }}
        />
        {/* Letter F */}
        <span
          style={{
            fontSize: 110,
            fontWeight: 900,
            fontFamily: 'Georgia, serif',
            color: '#818cf8',
            lineHeight: 1,
            letterSpacing: '-2px',
            textShadow:
              '0 0 20px rgba(129,140,248,1), 0 0 40px rgba(99,102,241,0.8), 0 0 80px rgba(79,70,229,0.5)',
            position: 'relative',
          }}
        >
          F
        </span>
      </div>
    ),
    { ...size }
  )
}
