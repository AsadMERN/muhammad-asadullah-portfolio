import { ImageResponse } from 'next/og';

export const runtime = 'edge';

export const size = {
  width: 32,
  height: 32,
};
export const contentType = 'image/png';

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 18,
          background: 'linear-gradient(135deg, #0c2a4a 0%, #020813 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#55d9ff',
          borderRadius: '8px',
          border: '1.5px solid rgba(85, 217, 255, 0.8)',
          fontWeight: 900,
          fontFamily: 'sans-serif',
          letterSpacing: '-0.5px',
        }}
      >
        MA
      </div>
    ),
    {
      ...size,
    }
  );
}
