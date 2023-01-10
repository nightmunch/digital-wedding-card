import { type NextPage } from "next";

import { IoIosMailOpen } from "react-icons/io";
import {
  IoPersonSharp,
  IoLocationOutline,
  IoCalendarOutline,
  IoMusicalNotesOutline,
} from "react-icons/io5";

const Home: NextPage = () => {
  const lelaki = "shahrin";
  const perempuan = "aimi";
  const lelaki_full = "Shahrin Amin";
  const perempuan_full = "Aimi Umairah";
  const bapa = "Sharifudin";
  const ibu = "Zurinah";
  const tarikh = "Ahad, 27 Ogos 2023";
  const alamat =
    "80 jalan desiran bayu 1 taman desiran bayu. 53300 Setapak KL WP";

  return (
    <div className="mx-auto min-h-screen w-full max-w-[400px] shadow-2xl shadow-gray-600/50">
      <TitlePage lelaki={lelaki} perempuan={perempuan} tarikh={tarikh} />
      <IntroductionPage
        lelaki={lelaki_full}
        perempuan={perempuan_full}
        bapa={bapa}
        ibu={ibu}
        tarikh={tarikh}
        alamat={alamat}
      />
      <NavigationBar />
    </div>
  );
};

export default Home;

export const TitlePage = ({
  lelaki,
  perempuan,
  tarikh,
}: {
  lelaki: string;
  perempuan: string;
  tarikh: string;
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
      <h6 className="text-sm uppercase">{tarikh}</h6>
    </div>
  );
};

export const IntroductionPage = ({
  lelaki,
  perempuan,
  bapa,
  ibu,
  tarikh,
  alamat,
}: {
  lelaki: string;
  perempuan: string;
  bapa: string;
  ibu: string;
  tarikh: string;
  alamat: string;
}) => {
  return (
    <div className="flex h-screen snap-center flex-col items-center justify-center gap-5 px-10">
      <h6 className="text-sm">Assalamualaikum W.B.T & Salam Sejahtera</h6>
      <div className="flex flex-col items-center justify-center">
        <h6 className="font-serif text-lg">{bapa}</h6>
        <h6 className="font-serif text-lg">&</h6>
        <h6 className="font-serif text-lg">{ibu}</h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h6 className="text-sm">Dengan segala hormatnya kami menjemput</h6>
        <h6 className="text-sm">
          Dato&apos; | Datin | Tuan | Puan | Encik | Cik
        </h6>
        <h6 className="text-sm">hadir ke majlis perkahwinan anakanda kami</h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h6 className="aetrina text-2xl font-medium capitalize text-primary">
          {lelaki}
        </h6>
        <h6 className="aetrina text-2xl font-medium capitalize">&</h6>
        <h6 className="aetrina text-2xl font-medium capitalize text-primary">
          {perempuan}
        </h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h6 className="font-serif text-sm font-semibold uppercase">Tarikh</h6>
        <h6 className="text-sm">{tarikh}</h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h6 className="font-serif text-sm font-semibold uppercase">Tempat</h6>
        <h6 className="text-center text-sm">{alamat}</h6>
      </div>
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
