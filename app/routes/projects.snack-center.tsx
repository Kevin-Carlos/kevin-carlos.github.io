import { PillButton } from '~/common/ui-elements';
import { SnackCenter } from '~/common/ui-elements/snacks/SnackCenter';
import {
  SnackProvider,
  useToast,
} from '~/common/ui-elements/snacks/SnackContext';

export const T = () => {
  const { upsert } = useToast();

  return (
    <PillButton
      className='bg-theme-black text-theme-white dark:bg-theme-orange'
      onPress={() => {
        upsert({
          message: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          important: Math.random() > 0.5,
        });
      }}
    >
      Activate Toast
    </PillButton>
  );
};

export default function Index() {
  return (
    <SnackProvider>
      <SnackCenter />

      <div className='h-full w-full flex flex-col md:flex-row justify-center items-center mx-auto gap-20'>
        <T />
      </div>
    </SnackProvider>
  );
}
