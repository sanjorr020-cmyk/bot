import { ImageResponse } from 'next/og';
import { siteConfig } from '@/config/site-config';

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
          background: 'linear-gradient(135deg, #0B0F14 0%, #111820 60%, #18212B 100%)',
          color: '#E6EAF0',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', fontSize: 34, fontWeight: 700 }}>
          <span>Mit</span>
          <span style={{ color: '#FF7A00' }}>Service</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 950 }}>
            Диагностика и ремонт автомобилей в Астане
          </div>
          <div style={{ marginTop: 28, fontSize: 28, color: '#9AA6B6' }}>
            {`Рейтинг ${siteConfig.reputation.rating.toString().replace('.', ',')} в ${siteConfig.reputation.source} · ${siteConfig.address.street}`}
          </div>
        </div>
        <div style={{ display: 'flex', height: 6, width: 220, background: '#FF7A00', borderRadius: 3 }} />
      </div>
    ),
    { ...size },
  );
}
