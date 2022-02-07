import React, { FC, useEffect } from 'react';
import { animated, useSpring } from 'react-spring';
import { LinkText } from '~/common/ui-elements';
import { menuItems } from '../menu-items';

type HamburgerMenuProps = {
  isOpen: boolean;
  setIsOpen: (v: boolean) => void;
};

export const HamburgerMenu: FC<HamburgerMenuProps> = ({
  isOpen,
  setIsOpen,
}) => {
  // animate the menu opening
  const spring = useSpring({
    from: { opacity: 0, transform: `translateX(100vw)` },
    to: isOpen
      ? { opacity: 1, transform: `translateX(0vw)` }
      : { opacity: 0, transform: `translateX(100vw)` },
  });

  /**
   * If the screen resizes to a size that no longer needs the mobile menu, close it
   */
  useEffect(() => {
    const handleResize = () => {
      // breakpoint
      if (window.innerWidth > 1200) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [isOpen, setIsOpen]);

  return (
    <animated.menu
      style={spring}
      className="bg-theme-lteal absolute top-0 right-0 h-screen w-screen z-40"
    >
      <nav>
        <ul>
          {menuItems.map((i, idx) => (
            <li key={`ham-${i.name}_${idx}`}>
              {i.icon}
              <LinkText href={i.path} animateScale={false}>
                {i.name}
              </LinkText>
            </li>
          ))}
        </ul>
      </nav>
    </animated.menu>
  );
};
