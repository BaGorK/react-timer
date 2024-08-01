import {
  type ComponentPropsWithoutRef,
  type ElementType,
  type ReactNode,
} from 'react';

type ContainerProps<T extends ElementType> = {
  as?: ElementType; // ElementType is a type that represents a component
  children: ReactNode; // ReactNode is a type that represents a react node
} & ComponentPropsWithoutRef<T>;

function Container<C extends ElementType>({
  as,
  children,
  ...props
}: ContainerProps<C>) {
  const Component = as || 'div'; // renaming as to Component
  return (
    <Component className='container' {...props}>
      {children}
    </Component>
  );
}

export default Container;
