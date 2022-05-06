import { useDarkMode } from '~/common/hooks/theme';
import { colors, Divider } from '~/common/ui-elements/library';

export const BlurbDivider = () => {
  const [mode] = useDarkMode();

  return (
    <Divider
      className="my-5"
      color={mode === 'dark' ? colors.orange : colors.black}
    />
  );
};
