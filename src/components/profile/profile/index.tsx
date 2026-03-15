import Image from "next/image";

export const ProfilePicture = () => {
  return (
    <div className="relative flex h-[260px] w-[260px] overflow-hidden rounded-full object-center sm:h-[320px] sm:w-[320px] lg:h-[400px] lg:w-[400px]">
      <Image
        width={1000}
        height={1000}
        src="/profile.jpeg"
        alt="profile-picture"
        className="absolute left-4 h-full w-full scale-125 object-cover sm:left-6 lg:left-8"
      />
    </div>
  );
};
