import Image from "next/image";

function User() {
  return (
    <button className="sm:size-[2.5rem] hover:ring-1  ring-offset-2 duration-200 ring-neutral-300 focus:ring-2  transition-all  overflow-hidden size-[2rem] shrink-0 relative  bg-neutral-200 rounded-full">
      <Image
        alt="profile"
        src={
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
        }
        style={{ objectFit: "cover", width: "100%", height: "100%" }}
        width={200}
        height={170}
        className="object-cover"
        quality={95}
        priority
      />
    </button>
  );
}
export default User;
