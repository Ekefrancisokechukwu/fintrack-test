import Image from "next/image";

const users = [
  "/images/img-1.jpg",
  "/images/img-2.png",
  "/images/img-3.jpg",
  "/images/img-4.png",
];

export function UsersAvaters() {
  return (
    <div className="flex items-center gap-x-3">
      <div className="flex items-center  gap-x-0.5">
        {users.map((avater, index) => {
          return (
            <div
              key={index}
              className="bg-default p-0.5 rounded-full  relative -mr-2 "
            >
              <div className="relative  size-[2rem]">
                <Image
                  alt={avater}
                  src={avater}
                  fill
                  sizes="300px"
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[.95rem]">
        <span>Ava, Liam, Noah</span>
        <span></span>
      </p>
    </div>
  );
}
