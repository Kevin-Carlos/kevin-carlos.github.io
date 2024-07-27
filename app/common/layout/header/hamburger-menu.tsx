import { FC, useEffect } from 'react';
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
      className="bg-theme-lteal absolute top-0 right-0 bottom-0 h-screen w-screen z-50"
    >
      <nav role="navigation" className="h-full w-full">
        <ul className="h-full w-full space-y-4 flex flex-col justify-center items-center">
          {menuItems.map((i, idx) => (
            <li
              key={`ham-${i.name}_${idx}`}
              className="flex justify-center w-full"
            >
              <LinkText
                href={i.path}
                className="text-2xl"
                childrenClassName="grid grid-cols-[40px_200px] justify-items-center"
                animateScale={false}
              >
                {i.icon}
                <span className="justify-self-end">{i.name}</span>
              </LinkText>
            </li>
          ))}
        </ul>
      </nav>
    </animated.menu>
  );
};
