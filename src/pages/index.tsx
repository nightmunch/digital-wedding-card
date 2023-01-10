import { type NextPage } from "next";

import { IoIosMailOpen } from "react-icons/io";
import {
  IoPersonSharp,
  IoLocationOutline,
  IoCalendarOutline,
  IoMusicalNotesOutline,
} from "react-icons/io5";

const Home: NextPage = () => {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[400px] shadow-2xl shadow-gray-600/50">
      <TitlePage lelaki="shahrin" perempuan="aimi" />
      <div className="h-screen snap-center">test</div>
      <NavigationBar />
    </div>
  );
};

export default Home;

export const TitlePage = ({
  lelaki,
  perempuan,
}: {
  lelaki: string;
  perempuan: string;
}) => {
  return (
    <div className="flex h-screen snap-center flex-col items-center justify-center gap-5">
      <h6 className="text-sm uppercase">Walimatul Urus</h6>
      <div className="flex flex-col items-center justify-center">
        <h6 className="aetrina text-5xl capitalize text-primary">{lelaki}</h6>
        <h6 className="aetrina text-5xl capitalize">&</h6>
        <h6 className="aetrina text-5xl capitalize text-primary">
          {perempuan}
        </h6>
      </div>
      <h6 className="text-sm uppercase">Ahad, 27 Ogos 2023</h6>
    </div>
  );
};

export const NavigationBar = () => {
  return (
    <div className="btm-nav btm-nav-md mx-auto w-full max-w-[400px]">
      <button className="text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active">
        <IoIosMailOpen />
        <span className="btm-nav-label">RSVP</span>
      </button>
      <button className="text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active">
        <IoPersonSharp />
        <span className="btm-nav-label">Hubungi</span>
      </button>
      <button className="text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active">
        <IoLocationOutline />
        <span className="btm-nav-label">Lokasi</span>
      </button>
      <button className="text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active">
        <IoCalendarOutline />
        <span className="btm-nav-label">Kalendar</span>
      </button>
      <button className="text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active">
        <IoMusicalNotesOutline />
        <span className="btm-nav-label">Musik</span>
      </button>
    </div>
  );
};
