import { redirect } from 'next/navigation';
import { Settings } from './settings';
import { getUser } from '@/app/(login)/actions';

export default async function SettingsPage() {
  const user = await getUser();

  if (!user) {
    redirect('/login');
  }

  return <div>Dashboard</div>;
}
