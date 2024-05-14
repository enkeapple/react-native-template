import type { TextStyle } from 'react-native';
import type { Theme } from 'types/styled-components';
import type { DefaultTheme } from 'styled-components';

export interface StyledProps {
  /** theme */
  theme: Theme;

  /** flex */
  f?: number;

  /** flex-direction */
  fd?: string;

  /** justify-content */
  jc?: string;

  /** flex-wrap */
  fw?: string;

  /** align-items */
  ai?: string;

  /** with default padding (16px) */
  wdp?: boolean;

  /** margin-top */
  mt?: number;

  /** margin-bottom */
  mb?: number;

  /** margin-left */
  ml?: number;

  /** margin-right */
  mr?: number;

  /** margin */
  m?: number | number[];

  /** padding-top */
  pt?: number;

  /** padding-bottom */
  pb?: number;

  /** padding-left */
  pl?: number;

  /** padding-right */
  pr?: number;

  /** padding */
  p?: number | number[];

  /** width */
  w?: string;

  /** height */
  h?: string;

  /** min height */
  mh?: string;

  /** border-width */
  bw?: string;

  /** border-color */
  bc?: string;

  /** border-radius */
  br?: string;

  /** background-color */
  bgc?: string;

  /** text-align */
  ta?: string;

  /** text-transform */
  ttf?: string;

  /** text-decoration */
  ttd?: string;

  /** text-decoration-color */
  ttdc?: string;

  /** font-family */
  ff?: string;

  /** font-size */
  fs?: number;

  /** font-weight */
  fnw?: TextStyle['fontWeight'];

  /** line-height */
  lh?: number;

  /** color */
  color?: string;

  /** z-index */
  z?: number;

  /** with default background (Colors.background) */
  wdbg?: boolean;

  /* with shadow */
  shadowed?: boolean;

  /* opacity */
  op?: number;

  /* gap */
  gp?: number;
}

export interface DividerProps {
  /** add padding */
  withoutSpace?: boolean;

  /** color */
  color?: string;

  /** theme */
  theme?: Theme;
}

export const constructBgc = (
  theme: DefaultTheme,
  withDefaultBg?: boolean,
  bgc?: string,
) => {
  if (withDefaultBg) {
    return theme.colors.bg_primary;
  }

  if (bgc) {
    return bgc;
  }

  return 'transparent';
};

export const constructSizing = (
  props: StyledProps,
  type: 'padding' | 'margin' | 'position',
) => {
  const { ml, mr, mb, mt, m, pl, pr, pb, pt, p, wdp } = props;

  const isMargin = type === 'margin';

  const top = isMargin ? mt : pt;
  const right = isMargin ? mr : pr;
  const bottom = isMargin ? mb : pb;
  const left = isMargin ? ml : pl;

  const sizing = isMargin ? m : p;
  const defaultPadding = wdp ? 16 : 0;

  if (top) {
    return `${type}-top: ${top}px`;
  }

  if (right) {
    return `${type}-right: ${right}px`;
  }

  if (bottom) {
    return `${type}-bottom: ${bottom}px`;
  }

  if (left) {
    return `${type}-left: ${left}px`;
  }

  if (Array.isArray(sizing)) {
    return `${type}: ${sizing.map(value => `${value}px`).join(' ')}`;
  }

  if (wdp) {
    return `padding: ${defaultPadding}px`;
  }

  return `${type}: ${sizing || 0}px`;
};
