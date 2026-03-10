import { ImageResponse } from 'next/og'

export const size = { width: 32, height: 32 }
export const contentType = 'image/png'

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 32,
          height: 32,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#0f172a',
          borderRadius: 6,
          position: 'relative',
        }}
      >
        {/* Glow effect layer */}
        <div
          style={{
            position: 'absolute',
            width: 18,
            height: 18,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(129,140,248,0.45) 0%, transparent 70%)',
            filter: 'blur(4px)',
          }}
        />
        <span
          style={{
            fontSize: 20,
            fontWeight: 900,
            fontFamily: 'serif',
            color: '#818cf8',
            lineHeight: 1,
            letterSpacing: '-0.5px',
            textShadow: '0 0 8px rgba(129,140,248,0.9), 0 0 16px rgba(99,102,241,0.6)',
          }}
        >
          F
        </span>
      </div>
    ),
    { ...size }
  )
}
