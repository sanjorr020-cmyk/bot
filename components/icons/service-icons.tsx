import { BatteryCharging, Cpu, Disc3, Fuel, Gauge, Plug, Settings2, Zap, type LucideIcon } from 'lucide-react';
import type { ServiceItem } from '@/config/site-config';

/** Соответствие ключа иконки из конфига компоненту lucide-react. */
export const serviceIcons: Record<ServiceItem['icon'], LucideIcon> = {
  diagnostics: Cpu,
  generator: BatteryCharging,
  starter: Zap,
  chassis: Disc3,
  engine: Settings2,
  electrics: Plug,
  diesel: Fuel,
  maintenance: Gauge,
};
