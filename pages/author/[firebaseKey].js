import React from 'react';
import { useRouter } from 'next/router';

export default function EditAuthor() {
  const router = useRouter();
  const { firebaseKey } = router.query;

  return <div>new author here {firebaseKey}</div>;
}
