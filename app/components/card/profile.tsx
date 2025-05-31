import { profileDetail } from '@/lib/data/profile';

const ProfileCard = () => {
  return (
    <>
      < div className="relative w-32 h-32 mx-auto bg-[var(--color-silver)] rounded-full" >
        <img
          src={profileDetail?.image} // Replace with your image path
          alt="Profile"
          style={{
            width:'128px',
            height:'128px'
          }}
          className="object-cover rounded-full "
        />
        <span className="absolute bottom-2 right-2 h-4 w-4 bg-green-500 border-2 border-white rounded-full" />
      </div >
      {/* Name and Title */}
      <h2 className="text-xl font-semibold">{profileDetail?.name ?? ''}</h2>
      <p className="text-gray-500">{profileDetail?.role ?? ''}</p>
    </>
  );
};

export default ProfileCard;
