import clsx from 'clsx';
import { useTheme } from '~/useTheme';
import * as styles from './spinners.module.css';

export const Spinners = () => {
  const [mode] = useTheme();

  return (
    <>
      {/* @ts-expect-error typing modules */}
      <div
        className={styles['alternate-spinner']}
        style={{ height: '41px', width: '41px' }}
      >
        {/* @ts-expect-error typing modules */}
        <div
          className={clsx(
            mode === 'light' ? styles.spinLight : styles.spinDark,
            styles.altSpin1,
          )}
        />
        {/* @ts-expect-error typing modules */}
        <div
          className={clsx(
            mode === 'light' ? styles.spinLight : styles.spinDark,
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
        <div className={clsx(styles.dot, styles.slideDot1)} />
        <div className={clsx(styles.dot, styles.slideDot2)} />
        <div className={clsx(styles.dot, styles.slideDot3)} />
      </div>
    </>
  );
};
