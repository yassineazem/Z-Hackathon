import { Perf } from 'r3f-perf';
import { folder, useControls } from 'leva';
import Earth from './components/Earth';

export default function Experience() {
  const { perfVisible } = useControls({
    performance: folder({
      perfVisible: true,
    }),
  });

  return (
    <>
      {perfVisible ? <Perf position='top-left' /> : null}
      <Earth />
    </>
  );
}
