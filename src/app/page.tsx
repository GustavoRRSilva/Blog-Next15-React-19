import Spinloader from '@/components/SpinLoader';
import clsx from 'clsx';

export default function HomePage() {
  return (
    <div>
      <Spinloader containerClasses={clsx('min-h-[500px]', 'bg-amber-500')} />
    </div>
  );
}
