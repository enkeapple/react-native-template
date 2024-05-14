import type React from 'react';

export type PropsFromReactComponent<TComponent> = TComponent extends React.FC<
  infer Props
>
  ? Props
  : never;
