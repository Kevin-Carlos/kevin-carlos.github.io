import clsx from 'clsx';
import { useTheme } from '~/useTheme';
import * as styles from './spinners.module.css';

export const Spinners = () => {
  const [mode] = useTheme();

  return (
    <>
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
