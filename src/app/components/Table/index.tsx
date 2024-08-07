import Image from "next/image";
import vIcon from "/public/v-icon.svg";
import xIcon from "/public/x-icon.svg";

interface TableProps {}

const Table = ({}: TableProps) => {
  return (
    <table className="table-auto w-4/5 max-md:hidden">
      <thead>
        <tr className="border-b-0.5 border-zinc-200  space-x-5">
          <th className="w-2/5"></th>
          <th className="text-xl  py-4">
            <h1 className="font-normal">
              Plano <span className="font-bold">Infinity</span>
            </h1>
            <p className="text-xs font-light w-5/6">
              Treine em mais de 100 academias FitLife!
            </p>
          </th>
          <th className="text-xl py-4">
            <h1 className="font-normal">
              Plano <span className="font-bold">Flex</span>
            </h1>
            <p className="text-xs font-light w-5/6">
              Pague menos para treinar o quanto quiser na sua unidade.
            </p>
          </th>
          <th className="text-xl  py-4">
            <h1 className="font-normal">
              Plano <span className="font-bold">Smart</span>
            </h1>
            <p className="text-xs font-light w-5/6">
              Treine o quanto quiser na sua unidade
            </p>
          </th>
        </tr>
      </thead>
      <tbody className="">
        <tr className="border-b-0.5 border-zinc-200">
          <td className="">Acesso ilimitado a +1.400 academias da rede</td>
          <td>
            <Image src={vIcon} alt="" />
          </td>
          <td>
            <Image src={xIcon} alt="" />
          </td>
          <td>
            <Image src={xIcon} alt="" />
          </td>
        </tr>
        <tr className="border-b-0.5 border-zinc-200 ">
          <td>Leve amigos para treinar com você</td>
          <td className="">
            <Image src={vIcon} alt="" className="text-black" />
          </td>
          <td className="">
            <Image src={xIcon} alt="" />
          </td>
          <td className="">
            <Image src={xIcon} alt="" />
          </td>
        </tr>
        <tr className="border-b-0.5 border-zinc-200 ">
          <td>Cadeira de massagem</td>
          <td className="">
            <Image src={vIcon} alt="" className="text-black" />
          </td>
          <td className="">
            <Image src={xIcon} alt="" />
          </td>
          <td className="">
            <Image src={xIcon} alt="" />
          </td>
        </tr>
        <tr className="border-b-0.5 border-zinc-200 ">
          <td>Smart Fit GO (treinos online) no app</td>
          <td className="">
            <Image src={vIcon} alt="" className="text-black" />
          </td>
          <td className="">
            <Image src={xIcon} alt="" />
          </td>
          <td className="">
            <Image src={xIcon} alt="" />
          </td>
        </tr>
        <tr className="border-b-0.5 border-zinc-200 ">
          <td>Área de musculação e aeróbicos</td>
          <td className="">
            <Image src={vIcon} alt="" className="text-black" />
          </td>
          <td className="">
            <Image src={xIcon} alt="" />
          </td>
          <td className="">
            <Image src={xIcon} alt="" />
          </td>
        </tr>
        <tr className="border-b-0.5 border-zinc-200 ">
          <td>Smart Fit App</td>
          <td className="">
            <Image src={vIcon} alt="" className="text-black" />
          </td>
          <td className="">
            <Image src={xIcon} alt="" />
          </td>
          <td className="">
            <Image src={xIcon} alt="" />
          </td>
        </tr>
      </tbody>
    </table>

  );
};

export default Table;
