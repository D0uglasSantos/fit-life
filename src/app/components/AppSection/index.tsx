import Image from "next/image";
import GooglePlay from "/public/google-play.png";
import AppStore from "/public/app-store.png";

interface AppSectionProps {}

const AppSection = ({}: AppSectionProps) => {
  return (
    <section className="text-center flex flex-col items-center justify-center h-max py-10 space-y-8">
      <h1 className=" font-bold text-black text-2xl w-3/5">
        Acompanhe seu treino pelo APP
      </h1>
      <p className="text-sm text-zinc-400 font-light w-3/4">
        Acompanhe o progresso das suas metas, aulas online e a experiência Fit
        Life dentro e fora da academia na palma da mão.
      </p>
      <div className="flex flex-col space-y-3">
        <Image src={GooglePlay} alt="Google Play" />
        <Image src={AppStore} alt="App Store" />
      </div>
    </section>
  );
};

export default AppSection;
