import Image from 'next/image';

import Banner from '../utils/images/banner.png';

export default function Home() {
  return (
    <div style={{backgroundImage: Banner.src, backgroundSize: "cover" }}>
      <div className='min-vh-100 w-100'>pgfghjk</div>
    </div>
  );
}
