import Button from "../Button";

interface PhotoSectionProps {}

const PhotoSection = ({}: PhotoSectionProps) => {
  return (
    <section className="bg-foco-forca-fit bg-cover py-10 px-2 h-72 flex items-center justify-center">
      <div className="w-4/6 text-center flex flex-col space-y-8">
        <h1 className="text-xl font-bold uppercase text-white">
          foco, força e fit
        </h1>
        <p className=" text-white font-light text-sm">
          Treine resistência muscular para sua hipertrofia ou emagrecimento
        </p>
        <Button
          bgColor="bg-white"
          font="font-bold"
          text="text-sm"
          borderRadius="rounded-full"
          paddingY="py-2"
          textColor="text-color-details"
        >
          Encontre sua Unidade
        </Button>
      </div>
    </section>
  );
};

export default PhotoSection;
