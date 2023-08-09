import Link from "next/link";

type ButtonProps = {
  btnName: string;
  btnAddress: string;
};

const FeatureContentButton = ({ btnAddress, btnName }: ButtonProps) => {
  return (
    <Link
      href={btnAddress}
      className="bg-primary w-full sm:w-[auto] h-12 sm:h-auto p-3 pt-2 pb-2 rounded-[8px]"
    >
      <p className="text-white text-center gap-2 not-italic tracking-widest
       lg:text-base text-sm font-bold ">
        {btnName}
      </p>
    </Link>
  );
};

export default FeatureContentButton;
