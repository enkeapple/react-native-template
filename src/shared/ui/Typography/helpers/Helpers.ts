import { match } from 'ts-pattern';

export type FontWeightType = 'regular' | 'medium' | 'bold' | 'semibold';

export const constructFontWeight = (type?: FontWeightType) =>
  match(type)
    .with('regular', () => 400)
    .with('medium', () => 500)
    .with('semibold', () => 600)
    .with('bold', () => 700)
    .otherwise(() => 400);

export const constructFontFamily = (type: FontWeightType) =>
  match(type)
    .with('regular', () => 'Regular')
    .with('medium', () => 'Medium')
    .with('semibold', () => 'SemiBold')
    .with('bold', () => 'Bold')
    .otherwise(() => 'Regular');
