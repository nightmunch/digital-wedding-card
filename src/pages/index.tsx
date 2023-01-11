import { type NextPage } from "next";

import { IoIosMailOpen } from "react-icons/io";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaRegCalendarCheck,
  FaRegCalendarTimes,
  FaWaze,
  FaWhatsapp,
} from "react-icons/fa";
import {
  IoPersonSharp,
  IoLocationOutline,
  IoCalendarOutline,
  IoMusicalNotesOutline,
} from "react-icons/io5";
import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

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
      <TentativePage />
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
        <h6 className="aetrina text-2xl font-medium capitalize ">{lelaki}</h6>
        <h6 className="aetrina text-2xl font-medium capitalize">&</h6>
        <h6 className="aetrina text-2xl font-medium capitalize ">
          {perempuan}
        </h6>
      </div>
      <div className="divider"></div>
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

export const TentativePage = () => {
  return (
    <div className="flex h-screen snap-center flex-col items-center justify-center gap-5 px-10">
      <div className="flex flex-col items-center justify-center gap-5">
        <h6 className="font-serif text-sm font-semibold uppercase">
          Atur Cara Majlis
        </h6>
        <div className="flex flex-col items-center justify-center">
          <h6 className="text-sm">Nikah:</h6>
          <h6 className="text-sm">11:00 AM</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h6 className="text-sm">Jamuan Makan:</h6>
          <h6 className="text-sm">12:00 PM - 4:00 PM</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h6 className="text-sm">Makan Beradab & Potong Kek:</h6>
          <h6 className="text-sm">12:30 PM - 1:00 PM</h6>
        </div>
        <div className="divider"></div>
        <div className="flex flex-col items-center justify-center gap-3">
          <h6 className="font-serif text-sm font-semibold uppercase">
            SOP Covid-19
          </h6>
          <ul className="list-outside list-disc pl-4 text-justify">
            <li>
              Pastikan anda telah lengkap 2 dos vaksinasi untuk hadir ke majlis.
            </li>
            <li>
              Sila patuhi segala SOP yang diarahkan kerajaan: memakai pelitup
              muka (mask), scan MySejahtera, memeriksa suhu dan menggunakan
              &apos;hand sanitizer&apos; sebelum masuk ke pekarangan majlis.
            </li>
            <li>
              Kesihatan semua adalah penting, sila jangan hadirkan diri jika
              anda berhubung rapat dengan pesakit Covid-19 atau menunjukkan
              sebarang gejala.
            </li>
            <li>
              Sila patuhi waktu kehadiran yang telah ditetapkan bagi melancarkan
              perjalanan majlis.
            </li>
          </ul>
          <h6 className="text-justify font-serif text-sm">
            Kerjasama daripada anda amatlah kami hargai. Terima kasih
          </h6>
        </div>
      </div>
    </div>
  );
};

export const NavigationBar = () => {
  type Modal = "" | "RSVP" | "Contact" | "Location" | "Calendar" | "Music";
  const [openModal, setOpenModal] = useState<Modal>("RSVP");
  const [parent] = useAutoAnimate<HTMLDivElement>();
  return (
    <>
      <div ref={parent}>
        {openModal === "RSVP" ? (
          <ModalRSVP />
        ) : openModal === "Contact" ? (
          <ModalContact />
        ) : openModal === "Location" ? (
          <ModalLocation />
        ) : (
          <></>
        )}
      </div>

      <div className="btm-nav btm-nav-md mx-auto w-full max-w-[400px]">
        <button
          className="text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active"
          onClick={() =>
            openModal !== "RSVP" ? setOpenModal("RSVP") : setOpenModal("")
          }
        >
          <IoIosMailOpen />
          <span className="btm-nav-label">RSVP</span>
        </button>
        <button
          className="text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active"
          onClick={() =>
            openModal !== "Contact" ? setOpenModal("Contact") : setOpenModal("")
          }
        >
          <IoPersonSharp />
          <span className="btm-nav-label">Hubungi</span>
        </button>
        <button
          className="text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active"
          onClick={() =>
            openModal !== "Location"
              ? setOpenModal("Location")
              : setOpenModal("")
          }
        >
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
    </>
  );
};

const ModalRSVP = () => {
  return (
    <div className="fixed bottom-16 mx-auto w-full max-w-[400px] bg-primary text-white">
      <div className="flex items-center justify-center gap-5 p-5">
        <div className="btn-ghost flex w-20 cursor-pointer flex-col items-center gap-1 rounded-md border p-2">
          <FaRegCalendarCheck className="text-4xl" />
          <h6 className="text-sm">Hadir</h6>
        </div>
        <div className="btn-ghost flex w-20 cursor-pointer flex-col items-center gap-1 rounded-md border p-2">
          <FaRegCalendarTimes className="text-4xl" />
          <h6 className="text-sm">Tak Hadir</h6>
        </div>
      </div>
    </div>
  );
};

const ModalContact = () => {
  return (
    <div className="fixed bottom-16 mx-auto w-full max-w-[400px] bg-primary text-white">
      <div className="flex flex-col justify-center gap-10 p-5">
        <div className="flex items-center gap-2">
          <h6 className="grow text-sm">Nama (Hubungan)</h6>
          <button className="btn-ghost btn-square btn-sm btn">
            <FaWhatsapp className="text-2xl" />
          </button>
          <button className="btn-ghost btn-square btn-sm btn">
            <FaPhoneAlt className="text-xl" />
          </button>
        </div>
        <div className="flex items-center gap-2">
          <h6 className="grow text-sm">Nama (Hubungan)</h6>
          <button className="btn-ghost btn-square btn-sm btn">
            <FaWhatsapp className="text-2xl" />
          </button>
          <button className="btn-ghost btn-square btn-sm btn">
            <FaPhoneAlt className="text-xl" />
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalLocation = () => {
  return (
    <div className="fixed bottom-16 mx-auto w-full max-w-[400px] bg-primary text-white">
      <div className="flex flex-col justify-center gap-10 p-5">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-2xl" />
          <h6 className="grow text-sm">Google Maps</h6>
          <button className="btn-ghost btn-sm btn uppercase">Buka</button>
        </div>
        <div className="flex items-center gap-3">
          <FaWaze className="text-2xl" />
          <h6 className="grow text-sm">Waze</h6>
          <button className="btn-ghost btn-sm btn uppercase">Buka</button>
        </div>
      </div>
    </div>
  );
};
