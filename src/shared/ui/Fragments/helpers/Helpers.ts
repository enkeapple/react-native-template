import { ViewStyleProps, TextStyleProps } from 'themes';
import { AnyType } from 'helpers';
import { Theme } from 'types';
import { match } from 'ts-pattern';
import { borders, textStyleProps, viewStyleProps } from '../constants';

type CombinedStyleProps = ViewStyleProps | TextStyleProps;

type MappingProps = { [key in keyof CombinedStyleProps]: AnyType };

const transformStyle = <T extends CombinedStyleProps>(
  styles: T,
  theme: Theme,
  mapping: MappingProps,
) => {
  const { fonts } = theme;

  return Object.entries(styles).reduce<Record<string, AnyType>>(
    (acc, [key, value]) => {
      const mappedKey = mapping[key as keyof typeof mapping];

      if (mappedKey) {
        acc[mappedKey] = match(mappedKey)
          .with(
            borders[key as keyof ViewStyleProps],
            () =>
              theme?.colors?.[value as keyof Theme['colors']] ?? 'transparent',
          )
          .with(
            'color',
            () =>
              theme?.colors?.[value as keyof Theme['colors']] ?? 'transparent',
          )
          .with('fontFamily', () => fonts?.[value as keyof typeof fonts])
          .otherwise(() => value);
      }

      return acc;
    },
    {},
  );
};

export const transformViewStyle = (styles: ViewStyleProps, theme: Theme) =>
  transformStyle(styles, theme, viewStyleProps);

export const transformTextStyle = (styles: TextStyleProps, theme: Theme) =>
  transformStyle(styles, theme, textStyleProps);
