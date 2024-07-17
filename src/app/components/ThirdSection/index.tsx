import PriceCards from "./PriceCards";

interface PriceSectionProps {}

const PriceSection = ({}: PriceSectionProps) => {
  return (
    <section className="bg-color-white h-max flex flex-col items-center justify-start space-y-6 py-10">
      <h1 className="text-xl font-bold text-color-details text-center">
        <span className="text-color-primary">Conheça</span> os planos <br />
        desta academia
      </h1>
      <PriceCards
        planoTitle="Black"
        description="Treine em mais de 100 academias FitLife"
        priceDescription="depois R$ 119,90 /mês"
        months="12"
      />
      <PriceCards
        planoTitle="Fit"
        description="Pague menos para treinar o quanto quiser na sua unidade."
        priceDescription="depois R$ 109,90 /mês"
        months="12"
      />
      <PriceCards
        planoTitle="Smart"
        description="Treine quando quiser na sua unidade"
        priceDescription="depois R$ 99,90 /mês"
        months="3"
      />
    </section>
  );
};

export default PriceSection;
