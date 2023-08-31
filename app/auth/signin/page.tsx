import { getProviders } from 'next-auth/react';
import { SignIn } from '@/app/components/AuthButtons';
import { useAuthRedirect } from '@/app/utils/use-auth-redirect';

export default async function Page() {
  await useAuthRedirect();

  const providers = await getProviders();

  if (!providers) {
    return <div>Sign in is not available</div>;
  }

  return <SignIn providers={providers} />;
}
