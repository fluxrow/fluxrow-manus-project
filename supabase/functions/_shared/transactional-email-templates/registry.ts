/// <reference types="npm:@types/react@18.3.1" />
import * as React from 'npm:react@18.3.1'

export interface TemplateEntry {
  component: React.ComponentType<any>
  subject: string | ((data: Record<string, any>) => string)
  to?: string
  displayName?: string
  previewData?: Record<string, any>
}

import { template as kitDeliveryPt } from './kit-delivery-pt.tsx'
import { template as kitDeliveryEn } from './kit-delivery-en.tsx'
import { template as diagnosticoCompleto } from './diagnostico-completo.tsx'
import { template as diagnosticoLeadInterno } from './diagnostico-lead-interno.tsx'

export const TEMPLATES: Record<string, TemplateEntry> = {
  'kit-delivery-pt': kitDeliveryPt,
  'kit-delivery-en': kitDeliveryEn,
  'diagnostico-completo': diagnosticoCompleto,
  'diagnostico-lead-interno': diagnosticoLeadInterno,
}
