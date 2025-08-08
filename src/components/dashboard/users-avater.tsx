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
              style={{ zIndex: users.length - index }}
              className="bg-default p-0.5 rounded-full  relative -mr-2 "
            >
              <div className="relative overflow-hidden rounded-full  size-[2rem]">
                <Image
                  alt={avater}
                  src={avater}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  width={200}
                  height={500}
                />
              </div>
            </div>
          );
        })}
      </div>
      <p className="text-[.95rem] text-[#15272D9E]">
        <span>Ava, Liam, Noah</span> {"    "}
        <span>+12 others</span>
      </p>
    </div>
  );
}
