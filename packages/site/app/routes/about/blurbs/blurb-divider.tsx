import { colors, Divider } from 'sublimity-ui';
import { useDarkMode } from '~/common/hooks/theme';

export const BlurbDivider = () => {
  const [mode] = useDarkMode();

  return (
    <Divider
      className="my-5"
      color={mode === 'dark' ? colors.orange : colors.black}
    />
  );
};
