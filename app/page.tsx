import { SignOut } from './components/AuthButtons';
import { useAuthRedirect } from './utils/use-auth-redirect';

export default async function Page() {
  await useAuthRedirect();

  return (
    <>
      <p className="text-3xl">Welcome to the App! You&apos;re authenticated!</p>
      <SignOut />
    </>
  );
}
