import {ReactNode} from 'react';
import cn from 'classnames';

interface Props {
  variant?: 'white' | 'black';
  size?: 'sm' | 'md';
  onClick: () => void;
  children: ReactNode;
}

const SharedBtn = ({
  variant = 'white',
  size = 'md',
  onClick,
  children,
}: Props) => (
  <button
    onClick={onClick}
    className={cn(
      'btn',
      {'btn--sm': size === 'sm'},
      {'btn--black': variant === 'black'},
    )}>
    {children}
  </button>
);

export default SharedBtn;
