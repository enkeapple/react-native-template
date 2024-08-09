import { TextStyle, ViewStyle } from 'react-native';
import { TextStyleProps, ViewStyleProps } from 'themes';

export const flex: { [key in keyof ViewStyleProps]: keyof ViewStyle } = {
  f: 'flex',
  fd: 'flexDirection',
  jc: 'justifyContent',
  flw: 'flexWrap',
  ai: 'alignItems',
  as: 'alignSelf',
  w: 'width',
  h: 'height',
  mw: 'minWidth',
  mh: 'minHeight',
  maw: 'maxWidth',
  mah: 'maxHeight',
};

export const fonts: { [key in keyof TextStyleProps]: keyof TextStyle } = {
  fs: 'fontSize',
  ff: 'fontFamily',
  fw: 'fontWeight',
  lh: 'lineHeight',
  ta: 'textAlign',
  color: 'color',
};

const positions: { [key in keyof ViewStyleProps]: keyof ViewStyle } = {
  z: 'zIndex',
  ov: 'overflow',
  pos: 'position',
  t: 'top',
  r: 'right',
  b: 'bottom',
  l: 'left',
};

export const borders: { [key in keyof ViewStyleProps]: keyof ViewStyle } = {
  bc: 'borderColor',
  btc: 'borderTopColor',
  bbc: 'borderBottomColor',
  blc: 'borderLeftColor',
  brc: 'borderRightColor',
  bgc: 'backgroundColor',
};

export const colors: { [key in keyof ViewStyleProps]: keyof ViewStyle } = {
  bw: 'borderWidth',
  bc: 'borderColor',
  btc: 'borderTopColor',
  bbc: 'borderBottomColor',
  blc: 'borderLeftColor',
  brc: 'borderRightColor',
  br: 'borderRadius',
  btlr: 'borderTopLeftRadius',
  btrr: 'borderTopRightRadius',
  bblr: 'borderBottomLeftRadius',
  bbrr: 'borderBottomRightRadius',
  bgc: 'backgroundColor',
  op: 'opacity',
};

export const margins: { [key in keyof ViewStyleProps]: keyof ViewStyle } = {
  m: 'margin',
  mvl: 'marginVertical',
  mhl: 'marginHorizontal',
  mt: 'marginTop',
  mb: 'marginBottom',
  ml: 'marginLeft',
  mr: 'marginRight',
};

export const paddings: { [key in keyof ViewStyleProps]: keyof ViewStyle } = {
  p: 'padding',
  pvl: 'paddingVertical',
  phl: 'paddingHorizontal',
  pt: 'paddingTop',
  pb: 'paddingBottom',
  pl: 'paddingLeft',
  pr: 'paddingRight',
};

export const viewStyleProps: {
  [key in keyof ViewStyleProps]: keyof ViewStyle;
} = {
  ...flex,
  ...margins,
  ...paddings,
  ...colors,
  ...positions,
  sc: 'shadowColor',
  so: 'shadowOffset',
  sop: 'shadowOpacity',
  sr: 'shadowRadius',
  el: 'elevation',
};

export const textStyleProps: {
  [key in keyof TextStyleProps]: keyof TextStyle;
} = {
  ...flex,
  ...colors,
  ...margins,
  ...paddings,
  ...fonts,
  ...positions,
  td: 'textDecorationLine',
  tdc: 'textDecorationColor',
  tt: 'textTransform',
  ls: 'letterSpacing',
  ifp: 'includeFontPadding',
  tsc: 'textShadowColor',
  tso: 'textShadowOffset',
  tsr: 'textShadowRadius',
};
