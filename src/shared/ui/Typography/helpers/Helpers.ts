import { match } from 'ts-pattern';
import { Theme } from 'types';

export type FontWeightType = 'regular' | 'medium' | 'bold' | 'semibold';

export const constructFontWeight = (type?: FontWeightType) =>
  match(type)
    .with('regular', () => '400')
    .with('medium', () => '500')
    .with('semibold', () => '600')
    .with('bold', () => '700')
    .otherwise(() => '400');

export const constructFontFamily = (type: FontWeightType, theme: Theme) =>
  match(type)
    .with('regular', () => theme.fonts.Regular)
    .with('medium', () => theme.fonts.Medium)
    .with('semibold', () => theme.fonts.SemiBold)
    .with('bold', () => theme.fonts.Bold)
    .otherwise(() => theme.fonts.Regular);
