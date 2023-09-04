import { getServerSession } from 'next-auth';
import { SignOut } from './components/AuthButtons';
import { useAuthRedirect } from './utils/use-auth-redirect';

export default async function Page() {
  await useAuthRedirect();
  const session = await getServerSession();

  return (
    <>
      <p className="text-3xl">
        Welcome to the App, {session?.user?.name}! You&apos;re authenticated!
      </p>
      <SignOut />
    </>
  );
}
