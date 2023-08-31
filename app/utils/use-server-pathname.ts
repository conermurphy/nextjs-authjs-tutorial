import { headers } from 'next/headers';

export default function useServerPathname() {
  const headersList = headers();

  return headersList.get('x-invoke-path');
}
