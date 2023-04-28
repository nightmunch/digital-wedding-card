import { type NextPage } from "next";
import Head from "next/head";

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
  IoLogoGoogle,
  IoLogoApple,
} from "react-icons/io5";
import { useEffect } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { api } from "../utils/api";
import Countdown from "../components/Countdown";

import { atom, useAtom } from "jotai";

type Modal =
  | ""
  | "RSVP"
  | "Contact"
  | "Location"
  | "Calendar"
  | "Music"
  | "RSVPYes"
  | "RSVPNo";

const fetchRSVPAtom = atom<boolean>(false);

const Home: NextPage = () => {
  const pasangan1 = "Aimi";
  const pasangan2 = "Shahrin";
  const pasangan3 = "Danial";
  const pasangan4 = "Amalin";
  const pasangan1_full = "Aimi Umairah";
  const pasangan2_full = "Shahrin Amin";
  const pasangan3_full = "Ahmad Danial";
  const pasangan4_full = "Najihah Amalin";
  const bapa = "Dr. Azfizan Bin Aziz";
  const ibu = "Siti Rohaya Binti Embong";
  const tarikh = "Sabtu, 17 Jun 2023";
  const alamat =
    "Raia Hotel Penang Lot 5789 & 5790, Kompleks Tabung Haji, Jalan Dato Ismail Hashim, 11900 Bayan Lepas, Penang";

  return (
    <>
      <Head>
        <title>{`Walimatulurus - ${pasangan1} x ${pasangan2} dan ${pasangan3} x ${pasangan4} | ${tarikh}`}</title>
        <meta name="description" content="Tekan link untuk lebih lanjut." />
        <link rel="icon" href="white-heart.gif" />
        <meta
          property="og:image"
          content="https://wedding.nightmunch.com/api/aimi"
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=1"
        />
      </Head>
      <Toaster />

      <div
        className="mx-auto min-h-screen w-full max-w-[400px] scroll-smooth shadow-2xl shadow-gray-600/50"
        data-theme="aimi"
      >
        <TitlePage
          pasangan1={pasangan1}
          pasangan2={pasangan2}
          pasangan3={pasangan3}
          pasangan4={pasangan4}
          tarikh={tarikh}
        />
        <IntroductionPage
          pasangan1={pasangan1_full}
          pasangan2={pasangan2_full}
          pasangan3={pasangan3_full}
          pasangan4={pasangan4_full}
          bapa={bapa}
          ibu={ibu}
          tarikh={tarikh}
          alamat={alamat}
        />
        <TentativePage />
        <WishesPage />
      </div>
      <NavigationBar />
    </>
  );
};

export default Home;

const TitlePage = ({
  pasangan1,
  pasangan2,
  pasangan3,
  pasangan4,
  tarikh,
}: {
  pasangan1: string;
  pasangan2: string;
  pasangan3: string;
  pasangan4: string;
  tarikh: string;
}) => {
  return (
    <div className="flex h-screen snap-center flex-col items-center justify-center gap-5 bg-[url('/aimi-bg.png')] bg-cover bg-center pb-16">
      <h6 className="text-sm uppercase">Walimatulurus</h6>
      <div className="flex flex-col items-center justify-center">
        <h6 className="aetrina text-5xl capitalize text-primary">
          {pasangan1}
        </h6>
        <h6 className="aetrina text-5xl capitalize">&</h6>
        <h6 className="aetrina text-5xl capitalize text-primary">
          {pasangan2}
        </h6>
      </div>
      <div className="divider mx-10"></div>
      <div className="flex flex-col items-center justify-center">
        <h6 className="aetrina text-5xl capitalize text-primary">
          {pasangan3}
        </h6>
        <h6 className="aetrina text-5xl capitalize">&</h6>
        <h6 className="aetrina text-5xl capitalize text-primary">
          {pasangan4}
        </h6>
      </div>
      <h6 className="text-sm uppercase">{tarikh}</h6>
    </div>
  );
};

export const IntroductionPage = ({
  pasangan1,
  pasangan2,
  pasangan3,
  pasangan4,
  bapa,
  ibu,
  tarikh,
  alamat,
}: {
  pasangan1: string;
  pasangan2: string;
  pasangan3: string;
  pasangan4: string;
  bapa: string;
  ibu: string;
  tarikh: string;
  alamat: string;
}) => {
  return (
    <div className="flex h-screen snap-center flex-col items-center justify-center gap-1 px-10 pb-16 sm:gap-5">
      <h6 className="text-sm">Assalamualaikum W.B.T & Salam Sejahtera</h6>
      <div className="flex flex-col items-center justify-center">
        <h6 className="font-serif text-lg uppercase">{bapa}</h6>
        <h6 className="font-serif text-lg uppercase">&</h6>
        <h6 className="font-serif text-lg uppercase">{ibu}</h6>
      </div>
      <div className="flex flex-col items-center justify-center">
        <h6 className="text-center text-sm">
          Dengan segala hormatnya kami menjemput
        </h6>
        <h6 className="text-center text-sm">
          Dato&apos; | Datin | Tuan | Puan | Encik | Cik
        </h6>
        <h6 className="text-center text-sm">
          hadir ke majlis perkahwinan anakanda kami
        </h6>
      </div>
      <div className="flex text-center">
        <div className="flex flex-col items-center justify-center">
          <h6 className="aetrina text-2xl font-medium capitalize text-[#5f7534]">
            {pasangan1}
          </h6>
          <h6 className="aetrina text-2xl font-medium capitalize text-[#5f7534]">
            &
          </h6>
          <h6 className="aetrina text-2xl font-medium capitalize text-[#5f7534]">
            {pasangan2}
          </h6>
        </div>
        <div className="aetrina divider divider-horizontal my-5">dan</div>
        <div className="flex flex-col items-center justify-center">
          <h6 className="aetrina text-2xl font-medium capitalize text-[#5f7534]">
            {pasangan3}
          </h6>
          <h6 className="aetrina text-2xl font-medium capitalize text-[#5f7534]">
            &
          </h6>
          <h6 className="aetrina text-2xl font-medium capitalize text-[#5f7534]">
            {pasangan4}
          </h6>
        </div>
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

const TentativePage = () => {
  return (
    <div className="flex h-screen snap-center flex-col items-center justify-center px-10 pb-16">
      <div className="flex flex-col items-center justify-center gap-3">
        <h6 className="font-serif text-sm font-semibold uppercase">
          Atur Cara Majlis
        </h6>
        <div className="flex flex-col items-center justify-center">
          <h6 className="text-sm">Majlis Bermula:</h6>
          <h6 className="text-sm">12:00 PM</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h6 className="text-sm">Ketibaan Pasangan Pengantin:</h6>
          <h6 className="text-sm">02:00 PM</h6>
        </div>
        <div className="flex flex-col items-center justify-center">
          <h6 className="text-sm">Majlis Bersurai:</h6>
          <h6 className="text-sm">4:00 PM</h6>
        </div>
        <div className="divider my-0"></div>
        <div className="flex flex-col items-center justify-center gap-5 text-xs sm:text-sm">
          <h6 className="font-serif text-2xl font-semibold">
            بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
          </h6>
          <h6 className="text-md text-center italic">
            &quot;Ya Allah, Satukanlah hati pasangan pengantin ini seperti
            Engkau satukan hati Adam dan Hawa, Yusuf dan Zulaikha dan seperti
            Engkau satukan hati Muhammad SAW dan Siti Khadijah. Semoga Allah
            memberkati dan menghimpunkan mereka kebaikan dan keberkatan di Dunia
            dan Akhirat&quot;
          </h6>
          <h6 className="text-md text-center italic">
            Semoga Kehadiran Para Jemputan Akan Menyerikan lagi Majlis Kami
            Serta Diberkati Allah SWT. Insyaa Allah.
          </h6>
        </div>
      </div>
    </div>
  );
};

const WishesPage = () => {
  const [fetchRSVP, setFetchRSVP] = useAtom(fetchRSVPAtom);
  const getAllRSVP = api.rsvp2.getall.useQuery();

  useEffect(() => {
    if (fetchRSVP) {
      getAllRSVP
        .refetch()
        .then(() => setFetchRSVP(false))
        .catch((e) => console.log(e));
    }
  }, [fetchRSVP, getAllRSVP, setFetchRSVP]);

  return (
    <div className="flex h-screen snap-center flex-col items-center justify-center gap-5 px-10 pb-16">
      <div className="flex flex-col items-center gap-2">
        <h1 className="font-serif text-sm font-semibold uppercase">
          Countdown
        </h1>
        <Countdown targetDate="2023-06-17T10:30:00" />
      </div>
      <div className="flex w-full flex-col items-center gap-2">
        <h1 className="font-serif text-sm font-semibold uppercase">Ucapan</h1>
        <div className="h-[calc(100vh/2)] w-full overflow-y-auto border border-slate-200 p-5">
          {getAllRSVP.data?.map((rsvp) => (
            <div className="chat chat-start" key={rsvp.id}>
              <div className="chat-header">
                {rsvp.name}
                <time className="text-xs opacity-50">
                  {" "}
                  -{" "}
                  {rsvp.created_at.toLocaleString("en-GB", {
                    timeZone: "Asia/Kuala_Lumpur",
                  })}
                </time>
              </div>
              <div className="chat-bubble chat-bubble-primary min-h-0 text-sm">
                {rsvp.message}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const NavigationBar = () => {
  const [openModal, setOpenModal] = useState<Modal>("");
  return (
    <>
      <div className="btm-nav btm-nav-md z-10 mx-auto w-full max-w-[400px] border border-t-gray-300">
        <button
          className={`text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active ${
            openModal === "RSVP" ? "text-primary" : ""
          }`}
          onClick={() =>
            openModal !== "RSVP" ? setOpenModal("RSVP") : setOpenModal("")
          }
        >
          <IoIosMailOpen />
          <span className="btm-nav-label">RSVP</span>
        </button>
        <button
          className={`text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active ${
            openModal === "Contact" ? "text-primary" : ""
          }`}
          onClick={() =>
            openModal !== "Contact" ? setOpenModal("Contact") : setOpenModal("")
          }
        >
          <IoPersonSharp />
          <span className="btm-nav-label">Hubungi</span>
        </button>
        <button
          className={`text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active ${
            openModal === "Location" ? "text-primary" : ""
          }`}
          onClick={() =>
            openModal !== "Location"
              ? setOpenModal("Location")
              : setOpenModal("")
          }
        >
          <IoLocationOutline />
          <span className="btm-nav-label">Lokasi</span>
        </button>
        <button
          className={`text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active ${
            openModal === "Calendar" ? "text-primary" : ""
          }`}
          onClick={() =>
            openModal !== "Calendar"
              ? setOpenModal("Calendar")
              : setOpenModal("")
          }
        >
          <IoCalendarOutline />
          <span className="btm-nav-label">Kalendar</span>
        </button>
        {/* <button
          className={`text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active ${
            openModal === "Music" ? "text-primary" : ""
          }`}
          onClick={() =>
            openModal !== "Music" ? setOpenModal("Music") : setOpenModal("")
          }
        >
          <IoMusicalNotesOutline />
          <span className="btm-nav-label">Musik</span>
        </button> */}
      </div>
      <ModalRSVP isOpen={openModal === "RSVP"} setIsOpen={setOpenModal} />
      <ModalRSVPYes isOpen={openModal === "RSVPYes"} setIsOpen={setOpenModal} />
      <ModalRSVPNo isOpen={openModal === "RSVPNo"} setIsOpen={setOpenModal} />
      <ModalContact isOpen={openModal === "Contact"} />
      <ModalLocation isOpen={openModal === "Location"} />
      <ModalCalendar isOpen={openModal === "Calendar"} />
      {/* <ModalMusic isOpen={openModal === "Music"} /> */}
    </>
  );
};

const ModalRSVP = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<Modal>>;
}) => {
  return (
    <div
      className={`fixed left-1/2 bottom-16 mx-auto w-full max-w-[400px] -translate-x-1/2 bg-secondary bg-opacity-90 text-base-content backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
        isOpen ? "" : "translate-y-40"
      }`}
    >
      <div className="flex items-center justify-center gap-5 p-5">
        <button
          className="btn-ghost flex w-20 cursor-pointer flex-col items-center gap-1 rounded-md border p-2"
          onClick={() => setIsOpen("RSVPYes")}
        >
          <FaRegCalendarCheck className="text-4xl" />
          <h6 className="text-sm">Hadir</h6>
        </button>
        <button
          className="btn-ghost flex w-20 cursor-pointer flex-col items-center gap-1 rounded-md border p-2"
          onClick={() => setIsOpen("RSVPNo")}
        >
          <FaRegCalendarTimes className="text-4xl" />
          <h6 className="text-sm">Tak Hadir</h6>
        </button>
      </div>
    </div>
  );
};

const ModalRSVPYes = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<Modal>>;
}) => {
  const sendRSVP = api.rsvp2.sendrsvp.useMutation({});
  const [name, setName] = useState("");
  const [inviting, setInviting] = useState(1);
  const [message, setMessage] = useState("");

  const [, setFetchRSVP] = useAtom(fetchRSVPAtom);
  return (
    <div
      className={`fixed left-1/2 bottom-16 mx-auto w-full max-w-[400px] -translate-x-1/2 bg-secondary bg-opacity-90 backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
        isOpen ? "" : "translate-y-[30rem]"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-5">
        <h1 className="text-md font-semibold text-base-content">Hadir</h1>
        <div className="divider my-0 px-5"></div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-base-content">Nama</span>
          </label>
          <input
            type="text"
            placeholder="eg: Shahrin"
            className="input-bordered input input-sm w-full max-w-xs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-base-content">
              Jumlah Kehadiran
            </span>
          </label>
          <select
            className="select-bordered select select-sm w-full max-w-xs"
            value={inviting}
            onChange={(e) => setInviting(Number(e.target.value))}
          >
            {Array.from(Array(10).keys()).map((num) => (
              <option key={num + 1} value={num + 1}>
                {num + 1} orang
              </option>
            ))}
          </select>
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-base-content">Ucapan</span>
          </label>
          <textarea
            className="textarea-bordered textarea h-24"
            placeholder="eg: Semoga berbahagia!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex gap-2 pt-5">
          <button
            className="btn-ghost btn-md btn border border-base-content text-base-content"
            onClick={() => {
              sendRSVP
                .mutateAsync({
                  attendance: true,
                  name: name,
                  inviting: inviting,
                  message: message,
                })
                .then(() => {
                  setName("");
                  setInviting(1);
                  setMessage("");
                  setFetchRSVP(true);
                })
                .catch((e) => {
                  console.log(e);
                });
              setIsOpen("");
              toast.success("Terima kasih atas maklum balas 😊");
            }}
          >
            Hantar
          </button>
          <button
            className="btn-ghost btn-md btn border border-base-content text-base-content"
            onClick={() => {
              setIsOpen("");
            }}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalRSVPNo = ({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<Modal>>;
}) => {
  const sendRSVP = api.rsvp2.sendrsvp.useMutation({});
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const [, setFetchRSVP] = useAtom(fetchRSVPAtom);
  return (
    <div
      className={`fixed left-1/2 bottom-16 mx-auto w-full max-w-[400px] -translate-x-1/2 bg-secondary bg-opacity-90 backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
        isOpen ? "" : "translate-y-[30rem]"
      }`}
    >
      <div className="flex flex-col items-center justify-center gap-2 p-5">
        <h1 className="text-md font-semibold text-base-content">Tidak Hadir</h1>
        <div className="divider my-0 px-5"></div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-base-content">Nama</span>
          </label>
          <input
            type="text"
            placeholder="eg: Shahrin"
            className="input-bordered input input-sm w-full max-w-xs"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="form-control w-full max-w-xs">
          <label className="label">
            <span className="label-text text-base-content">Ucapan</span>
          </label>
          <textarea
            className="textarea-bordered textarea h-24"
            placeholder="eg: Semoga berbahagia!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="flex gap-2 pt-5">
          <button
            className="btn-ghost btn-md btn border border-base-content text-base-content"
            onClick={() => {
              sendRSVP
                .mutateAsync({
                  attendance: false,
                  name: name,
                  message: message,
                })
                .then(() => {
                  setName("");
                  setMessage("");
                  setFetchRSVP(true);
                })
                .catch((e) => {
                  console.log(e);
                });
              setIsOpen("");
              toast.success("Terima kasih atas maklum balas 😊");
            }}
          >
            Hantar
          </button>
          <button
            className="btn-ghost btn-md btn border border-base-content text-base-content"
            onClick={() => {
              setIsOpen("");
            }}
          >
            Batal
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalContact = ({ isOpen }: { isOpen: boolean }) => {
  const contactList = [
    {
      name: "Dr. Azfizan",
      relation: "Bapa",
      phone_num: "60194700657",
    },
    {
      name: "Siti Rohaya",
      relation: "Ibu",
      phone_num: "60194800657",
    },
  ];
  return (
    <div
      className={`fixed left-1/2 bottom-16 mx-auto w-full max-w-[400px] -translate-x-1/2 bg-secondary bg-opacity-90 text-base-content backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
        isOpen ? "" : "translate-y-40"
      }`}
    >
      <div className="flex flex-col justify-center gap-10 p-5">
        {contactList.map((contact) => (
          <div className="flex items-center gap-2" key={contact.name}>
            <h6 className="grow text-sm">
              {contact.name} ({contact.relation})
            </h6>
            <button className="btn-ghost btn-square btn-sm btn">
              <a
                href={`https://api.whatsapp.com/send?phone=${contact.phone_num}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaWhatsapp className="text-2xl" />
              </a>
            </button>
            <button className="btn-ghost btn-square btn-sm btn">
              <a
                href={`tel:${contact.phone_num}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaPhoneAlt className="text-xl" />
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const ModalLocation = ({ isOpen }: { isOpen: boolean }) => {
  const googleMaps = "https://goo.gl/maps/7vnFUYKQdsXzBe9E8";
  const waze =
    "https://www.waze.com/en/live-map/directions/raia-inn-penang-bayan-lepas?place=w.65732661.657064466.8708057";
  return (
    <div
      className={`fixed left-1/2 bottom-16 mx-auto w-full max-w-[400px] -translate-x-1/2 bg-secondary bg-opacity-90 text-base-content backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
        isOpen ? "" : "translate-y-40"
      }`}
    >
      <div className="flex flex-col justify-center gap-10 p-5">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-2xl" />
          <h6 className="grow text-sm">Google Maps</h6>
          <button className="btn-ghost btn-sm btn border border-base-content uppercase">
            <a href={googleMaps} target="_blank" rel="noreferrer">
              Buka
            </a>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <FaWaze className="text-2xl" />
          <h6 className="grow text-sm">Waze</h6>
          <button className="btn-ghost btn-sm btn border border-base-content uppercase">
            <a href={waze} target="_blank" rel="noreferrer">
              Buka
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalCalendar = ({ isOpen }: { isOpen: boolean }) => {
  const googleCalendar =
    "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid=NTB0N25xN2NkMGlyODRyaDVnbWFiZDQ4NWogMGRmZTMwNTE3ODExY2JiZDcxNzNkODc3MjNjYTNlYmFiY2M4Yzc1NzEzNWIwMDhmZDZmZWJlMTk3ZWZmMDYxNEBn&tmsrc=0dfe30517811cbbd7173d87723ca3ebabcc8c757135b008fd6febe197eff0614%40group.calendar.google.com";
  //https://ical.marudot.com/
  const appleCalendar = "17june2023.ics";
  return (
    <div
      className={`fixed left-1/2 bottom-16 mx-auto w-full max-w-[400px] -translate-x-1/2 bg-secondary bg-opacity-90 text-base-content backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
        isOpen ? "" : "translate-y-40"
      }`}
    >
      <div className="flex flex-col justify-center gap-10 p-5">
        <div className="flex items-center gap-3">
          <IoLogoGoogle className="text-2xl" />
          <h6 className="grow text-sm">Google Calendar</h6>
          <button className="btn-ghost btn-sm btn border border-base-content uppercase ">
            <a href={googleCalendar} target="_blank" rel="noreferrer">
              Simpan
            </a>
          </button>
        </div>
        <div className="flex items-center gap-3">
          <IoLogoApple className="text-2xl" />
          <h6 className="grow text-sm">Apple Calendar</h6>
          <button className="btn-ghost btn-sm btn border border-base-content uppercase">
            <a href={appleCalendar} target="_blank" rel="noreferrer">
              Simpan
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalMusic = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`fixed left-1/2 bottom-16 mx-auto w-full max-w-[400px] -translate-x-1/2 bg-secondary bg-opacity-90 text-base-content backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
        isOpen ? "" : "translate-y-[240px]"
      }`}
    >
      <div className="p-5">
        <iframe
          src="https://www.youtube.com/embed/YAJ-NrRc8v4?autoplay=1&mute=1&loop=1"
          title="YouTube video player"
          allow="autoplay"
          width={"100%"}
          height={"200px"}
        ></iframe>
      </div>
    </div>
  );
};
