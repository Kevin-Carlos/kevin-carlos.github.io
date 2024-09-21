import clsx from 'clsx';
import { useTheme } from '~/useTheme';
import * as styles from './spinners.module.css';
import * as triangles from './triangles.module.css';

const TriangleDot = ({
  className,
}: { className?: string }) => {
  return (
    <div
      className={clsx(
        'absolute',
        'rounded-full',
        'h-[10px]',
        'w-[10px]',
        'bg-theme-black',
        'dark:bg-theme-white',
        className,
      )}
    />
  );
};

export const Spinners = () => {
  const [mode] = useTheme();

  return (
    <>
      <div className='relative h-[60px] w-[60px]'>
        {/* Top / Triangle 1 */}
        <TriangleDot
          // @ts-expect-error css module
          className={clsx('top-0 left-[50%]', triangles.tip1)}
        />

        {/* Right / Triangle 2 */}
        <TriangleDot
          // @ts-expect-error css module
          className={clsx('right-0 top-[20%]', triangles.triangle2)}
        />

        {/* Right / Triangle 1 */}
        <TriangleDot
          // @ts-expect-error css module
          className={clsx('right-0 bottom-[20%]', triangles.triangle1)}
        />

        {/* Left / Triangle 2 */}
        <TriangleDot
          // @ts-expect-error css module
          className={clsx('left-0 top-[20%]', triangles.triangle2)}
        />

        {/* Left / Triangle 1 */}
        <TriangleDot
          // @ts-expect-error css module
          className={clsx('left-0 bottom-[20%]', triangles.triangle1)}
        />

        {/* Bottom / Triangle 2 */}
        <TriangleDot
          // @ts-expect-error css module
          className={clsx('bottom-0 left-[50%]', triangles.tip2)}
        />
      </div>

      <div
        // @ts-expect-error typing modules
        className={styles['alternate-spinner']}
        style={{ height: '41px', width: '41px' }}
      >
        <div
          className={clsx(
            // @ts-expect-error typing modules
            mode === 'light' ? styles.spinLight : styles.spinDark,
            // @ts-expect-error typing modules
            styles.altSpin1,
          )}
        />
        <div
          className={clsx(
            // @ts-expect-error typing modules
            mode === 'light' ? styles.spinLight : styles.spinDark,
            // @ts-expect-error typing modules
            styles.altSpin2,
          )}
        />
      </div>

      {/* @ts-expect-error typing modules */}
      <div className={styles.pulsing}>
        {/* @ts-expect-error typing modules */}
        <div className={clsx(styles.dot, styles.pulseDot1)} />
        {/* @ts-expect-error typing modules */}
        <div className={clsx(styles.dot, styles.pulseDot2)} />
        {/* @ts-expect-error typing modules */}
        <div className={clsx(styles.dot, styles.pulseDot3)} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {/* @ts-expect-error typing modules */}
        <div className={clsx(styles.dot, styles.slideDot1)} />
        {/* @ts-expect-error typing modules */}
        <div className={clsx(styles.dot, styles.slideDot2)} />
        {/* @ts-expect-error typing modules */}
        <div className={clsx(styles.dot, styles.slideDot3)} />
      </div>
    </>
  );
};
