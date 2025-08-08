import Image from "next/image";
// import { Popover } from "../ui/popover";

function User() {
  return (
    <div>
      <button className="sm:size-[2.5rem] relative size-[2rem] bg-neutral-200 rounded-full">
        <Image
          alt="profile"
          src={
            "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHx8MA%3D%3D"
          }
          fill
          className="object-cover"
          sizes="(max-width: 640px) 2rem, 2.5rem"
          quality={95}
        />
      </button>
    </div>
  );
}
export default User;
