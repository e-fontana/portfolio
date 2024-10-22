import { ProfileNav } from './nav'
import { ProfilePicture } from './profile'
import { ProfileBody, ProfileText } from './text'

export const Profile = () => {
  return (
    <section id='profile' className="grid w-full grid-cols-2">
      <div className="flex flex-col items-start justify-center gap-3">
        <ProfileText />
        <ProfileNav />
        <ProfileBody />
      </div>
      <div className='w-full flex items-center justify-center'>
        <ProfilePicture />
      </div>
    </section>
  )
}
