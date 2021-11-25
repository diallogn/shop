import React from 'react';
import { useRouter } from 'next/router';

export default function Backdropclick() {
  const router = useRouter();
  router.push('/?redirect=/backdropClick');
  return <div></div>;
}
