import { Spinners } from './projects/loaders/Spinners';

export default function Index() {
  return (
    <div className="h-full w-full flex flex-col md:flex-row justify-center items-center mx-auto gap-20">
      {/* <HaloCountdown /> */}
      <Spinners />
    </div>
  );
}
