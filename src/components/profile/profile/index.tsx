import Image from 'next/image'

export const ProfilePicture = () => {
  return (
    <div className="flex h-[400px] w-[400px] items-center rounded-full object-center overflow-hidden relative">
      <Image width={1000} height={1000} src="/profile.jpeg" alt="profile-picture" className='w-full h-full object-cover scale-125 absolute left-8' />
    </div>
  )
}
