import { ElementType } from 'react';

type ContainerProps = {
  as: ElementType;
};

function Container({ as }: ContainerProps) {
  const Component = as; // renaming as to Component
  return <Component>{Component}</Component>;
}

export default Container;
