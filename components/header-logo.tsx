import Image from "next/image";
import Link from "next/link";
import React from "react";

export const HeaderLogo = () => {
  return (
    <Link href="/">
      <div className=" items-center hidden lg:flex">
        <Image src="/logo.svg" alt="Logo" height={64} width={64} />
      </div>
    </Link>
  );
};
