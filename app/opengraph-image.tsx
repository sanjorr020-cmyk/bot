import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site-config';
import { palette } from '@/lib/palette';

export const alt = 'MitService — автосервис в Астане';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

/** Open Graph-картинка генерируется кодом: без внешних файлов и без лицензионных проблем. */
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px',
          background: palette.bg,
          color: palette.text,
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 700 }}>
          <span>Mit</span>
          <span style={{ color: palette.text }}>Service</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 950 }}>
            Диагностика и ремонт автомобилей в Астане
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: palette.muted }}>
            {`Рейтинг ${siteConfig.reputation.rating.toString().replace('.', ',')} в ${siteConfig.reputation.source} · ${siteConfig.address.street}`}
          </div>
        </div>
        <div style={{ display: 'flex', height: 6, width: 220, background: palette.text, borderRadius: 3 }} />
      </div>
    ),
    { ...size },
  );
}
