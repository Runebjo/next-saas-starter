import { getUser } from '@/app/(login)/actions';
import { userProfiles } from './schema';
import { db } from './drizzle';
import { eq, isNull, and } from 'drizzle-orm';

export async function getUserProfile() {
  const user = await getUser();

  if (!user) {
    return null;
  }

  const userProfile = await db
    .select()
    .from(userProfiles)
    .where(
      and(eq(userProfiles.userId, user.id), isNull(userProfiles.deletedAt))
    )
    .limit(1);

  return userProfile[0];
}
