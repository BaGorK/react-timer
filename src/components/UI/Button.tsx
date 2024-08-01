import { ComponentPropsWithoutRef } from 'react';

type ButtonProps = ComponentPropsWithoutRef<'button'> & {
  href?: never;
};

type AnchorProps = ComponentPropsWithoutRef<'a'> & {
  href?: string;
};

// type predicates
function isAnchorProps(props: ButtonProps | AnchorProps): props is AnchorProps {
  return 'href' in props;
}

function Button(props: ButtonProps | AnchorProps) {
  // if('href' in props) {} : the limitation of this is if we enter the block ts
  // understands we are dealing with anchorProps but does not know if we dealing
  // with buttonProps if we do not enter the block.
  // if we use type predicates, we ts know we are dealing with ButtonProps if we
  // don't enter the block or isAnchorProps(props) returns false
  if (isAnchorProps(props)) {
    return <a className='button' {...props}></a>;
  }

  return <button className='button' {...props}></button>;
}

export default Button;
