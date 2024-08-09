import { ViewStyle, TextStyle } from 'react-native';
import { Theme } from 'types';
import { FontFamily } from './Fonts';

interface FlexProps {
  /** flex */
  f?: ViewStyle['flex'];

  /** flex-direction */
  fd?: ViewStyle['flexDirection'];

  /** justify-content */
  jc?: ViewStyle['justifyContent'];

  /** flex-wrap */
  flw?: ViewStyle['flexWrap'];

  /** align-items */
  ai?: ViewStyle['alignItems'];

  /** align-self */
  as?: ViewStyle['alignSelf'];

  /** width */
  w?: ViewStyle['width'];

  /** height */
  h?: ViewStyle['height'];

  /** min-width */
  mw?: ViewStyle['minWidth'];

  /** min-height */
  mh?: ViewStyle['minHeight'];

  /** max-width */
  maw?: ViewStyle['maxWidth'];

  /** max-height */
  mah?: ViewStyle['maxHeight'];
}

interface Margin {
  /** margin */
  m?: ViewStyle['margin'];

  /** margin-vertical */
  mvl?: ViewStyle['marginVertical'];

  /** margin-horizontal */
  mhl?: ViewStyle['marginHorizontal'];

  /** margin-top */
  mt?: ViewStyle['marginTop'];

  /** margin-bottom */
  mb?: ViewStyle['marginBottom'];

  /** margin-left */
  ml?: ViewStyle['marginLeft'];

  /** margin-right */
  mr?: ViewStyle['marginRight'];
}

interface Padding {
  /** padding */
  p?: ViewStyle['padding'];

  /** padding-vertical */
  pvl?: ViewStyle['paddingVertical'];

  /** margin-horizontal */
  phl?: ViewStyle['paddingHorizontal'];

  /** padding-top */
  pt?: ViewStyle['paddingTop'];

  /** padding-bottom */
  pb?: ViewStyle['paddingBottom'];

  /** padding-left */
  pl?: ViewStyle['paddingLeft'];

  /** padding-right */
  pr?: ViewStyle['paddingRight'];
}

interface Position {
  /** z-index */
  z?: ViewStyle['zIndex'];

  /** overflow */
  ov?: ViewStyle['overflow'];

  /** position */
  pos?: ViewStyle['position'];

  /** top */
  t?: ViewStyle['top'];

  /** right */
  r?: ViewStyle['right'];

  /** bottom */
  b?: ViewStyle['bottom'];

  /** left */
  l?: ViewStyle['left'];
}

interface Border {
  /** border-width */
  bw?: ViewStyle['borderWidth'];

  /** border-color */
  bc?: keyof Theme['colors'];

  /** border-style */
  bs?: ViewStyle['borderStyle'];

  /** border-top-color */
  btc?: keyof Theme['colors'];

  /** border-bottom-color */
  bbc?: keyof Theme['colors'];

  /** border-left-color */
  blc?: keyof Theme['colors'];

  /** border-right-color */
  brc?: keyof Theme['colors'];
}

export interface ViewStyleProps
  extends FlexProps,
    Margin,
    Padding,
    Position,
    Border {
  /** border-radius */
  br?: ViewStyle['borderRadius'];

  /** border-top-left-radius */
  btlr?: ViewStyle['borderTopLeftRadius'];

  /** border-top-right-radius */
  btrr?: ViewStyle['borderTopRightRadius'];

  /** border-bottom-left-radius */
  bblr?: ViewStyle['borderBottomLeftRadius'];

  /** border-bottom-right-radius */
  bbrr?: ViewStyle['borderBottomRightRadius'];

  /** background-color */
  bgc?: keyof Theme['colors'];

  /** opacity */
  op?: ViewStyle['opacity'];

  /** shadow-color */
  sc?: keyof Theme['colors'];

  /** shadow-offset */
  so?: ViewStyle['shadowOffset'];

  /** shadow-opacity */
  sop?: ViewStyle['shadowOpacity'];

  /** shadow-radius */
  sr?: ViewStyle['shadowRadius'];

  /** elevation */
  el?: ViewStyle['elevation'];

  /** gap */
  gp?: ViewStyle['gap'];
}

export interface TextStyleProps
  extends FlexProps,
    Margin,
    Padding,
    Position,
    Border {
  /** font family */
  ff?: keyof typeof FontFamily;

  /** font size */
  fs?: TextStyle['fontSize'];

  /** font weight */
  fw?: TextStyle['fontWeight'];

  /** line height */
  lh?: TextStyle['lineHeight'];

  /** text align */
  ta?: TextStyle['textAlign'];

  /** text color */
  color?: keyof Theme['colors'];

  /** text decoration */
  td?: TextStyle['textDecorationLine'];

  /** text decoration color */
  tdc?: TextStyle['textDecorationColor'];

  /** text transform */
  tt?: TextStyle['textTransform'];

  /** letter spacing */
  ls?: TextStyle['letterSpacing'];

  /** include font padding */
  ifp?: TextStyle['includeFontPadding'];

  /** text shadow color */
  tsc?: keyof Theme['colors'];

  /** text shadow offset */
  tso?: TextStyle['textShadowOffset'];

  /** text shadow radius */
  tsr?: TextStyle['textShadowRadius'];

  /** border radius */
  br?: ViewStyle['borderRadius'];

  /** opacity */
  op?: ViewStyle['opacity'];

  /** gap */
  gp?: ViewStyle['gap'];
}
