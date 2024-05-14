import styled from 'styled-components/native';
import {
  constructBgc,
  constructSizing,
  DividerProps,
  StyledProps,
} from './StyledConstructors';

export const shadow = `
  shadow-color: #4E4F55;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.20;
  elevation: 5;
`;

export const Text = styled.Text<StyledProps>`
  font-family: ${({ ff, theme }) => ff || theme.fonts.Regular};
  font-size: ${({ fs }) => `${fs || 16}px`};
  font-weight: ${({ fnw }) => `${fnw || 'normal'}`};
  line-height: ${({ lh }) => `${lh || 24}px`};
  color: ${({ color, theme }) => color || theme.colors.text_primary};
  text-align: ${({ ta }) => ta || 'left'};
  text-transform: ${({ ttf }) => ttf || 'none'};
  text-decoration: ${({ ttd }) => ttd || 'none'};
  text-decoration-color: ${({ ttdc, theme }) =>
    ttdc || theme.colors.outline_input};

  ${props => constructSizing(props, 'margin')};
  ${props => constructSizing(props, 'padding')};

  width: ${({ w }) => w || 'auto'};
  height: ${({ h }) => h || 'auto'};
`;

export const Box = styled.View<StyledProps>`
  flex: ${({ f }) => f || '0 1 auto'};
  flex-direction: ${({ fd }) => fd || 'column'};
  justify-content: ${({ jc }) => jc || 'flex-start'};
  flex-wrap: ${({ fw }) => fw || 'nowrap'};
  align-items: ${({ ai }) => ai || 'stretch'};
  gap: ${({ gp }) => `${gp || 0}px`};

  ${props => constructSizing(props, 'margin')};
  ${props => constructSizing(props, 'padding')};

  border-width: ${({ bw }) => bw || '0px'};
  border-color: ${({ bc }) => bc || 'transparent'};

  border-radius: ${({ br }) => br || '0px'};
  background-color: ${({ wdbg, bgc, theme }) => constructBgc(theme, wdbg, bgc)};

  width: ${({ w }) => w || 'auto'};
  height: ${({ h }) => h || 'auto'};
  min-height: ${({ mh }) => mh || 'auto'};
  opacity: ${({ op }) => op || 1};
  ${({ shadowed }) => shadowed && shadow};

  z-index: ${({ z }) => z || 1};
`;

export const HorizontalDivider = styled.View<DividerProps>`
  width: 100%;
  height: 1px;
  background-color: ${({ color, theme }) =>
    color || theme.colors.outline_input};
  margin: ${({ withoutSpace }) => (withoutSpace ? '0px' : '12px')} 0px;
`;

export const VerticalDivider = styled.View<DividerProps>`
  width: 1px;
  height: 20px;
  background-color: ${({ color, theme }) =>
    color || theme.colors.outline_input};
  margin: 0px ${({ withoutSpace }) => (withoutSpace ? '0px' : '10px')};
`;
