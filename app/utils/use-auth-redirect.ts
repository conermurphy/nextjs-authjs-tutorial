import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { authOptions } from '../lib/auth';
import useServerPathname from './use-server-pathname';

export async function useAuthRedirect() {
  const session = await getServerSession(authOptions);
  const pathname = useServerPathname();

  if (!session && !pathname?.includes('auth')) {
    redirect('/auth/signin');
  }

  if (session && pathname?.includes('auth')) {
    redirect('/');
  }
}
