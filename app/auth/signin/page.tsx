import { getProviders } from 'next-auth/react';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';
import { SignIn } from '@/app/components/AuthButtons';

export default async function Page() {
  const session = await getServerSession();
  const providers = await getProviders();

  if (session) {
    redirect('/');
  }

  if (!providers) {
    return <div>Sign in is not available</div>;
  }

  return <SignIn providers={providers} />;
}
