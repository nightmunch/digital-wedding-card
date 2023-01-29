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
  IoLogoGoogle,
  IoLogoApple,
} from "react-icons/io5";
import { Dispatch, SetStateAction, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

import { api } from "../utils/api";

type Modal =
  | ""
  | "RSVP"
  | "Contact"
  | "Location"
  | "Calendar"
  | "Music"
  | "RSVPYes"
  | "RSVPNo";

const Home: NextPage = () => {
  const lelaki = "shahrin";
  const perempuan = "aimi";
  const lelaki_full = "Shahrin Amin";
  const perempuan_full = "Aimi Umairah";
  const bapa = "Sharifudin bin Ghazalli";
  const ibu = "Zurinah binti Jaa'far";
  const tarikh = "Ahad, 27 Ogos 2023";
  const alamat =
    "80 jalan desiran bayu 1 taman desiran bayu. 53300 Setapak KL WP";

  return (
    <>
      <Toaster />
      <div className="mx-auto min-h-screen w-full max-w-[400px] scroll-smooth shadow-2xl shadow-gray-600/50">
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
    </>
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
        <button
          className={`text-xl transition delay-100 ease-in-out hover:-translate-y-1 hover:text-primary hover:active ${
            openModal === "Music" ? "text-primary" : ""
          }`}
          onClick={() =>
            openModal !== "Music" ? setOpenModal("Music") : setOpenModal("")
          }
        >
          <IoMusicalNotesOutline />
          <span className="btm-nav-label">Musik</span>
        </button>
      </div>
      <ModalRSVP isOpen={openModal === "RSVP"} setIsOpen={setOpenModal} />
      <ModalRSVPYes isOpen={openModal === "RSVPYes"} setIsOpen={setOpenModal} />
      <ModalRSVPNo isOpen={openModal === "RSVPNo"} setIsOpen={setOpenModal} />
      <ModalContact isOpen={openModal === "Contact"} />
      <ModalLocation isOpen={openModal === "Location"} />
      <ModalCalendar isOpen={openModal === "Calendar"} />
      <ModalMusic isOpen={openModal === "Music"} />
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
      className={`fixed bottom-16 mx-auto w-full max-w-[400px] bg-primary bg-opacity-90 text-base-content backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
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
  const sendRSVP = api.rsvp.sendrsvp.useMutation({});
  const [name, setName] = useState("");
  const [inviting, setInviting] = useState(1);
  const [message, setMessage] = useState("");
  return (
    <div
      className={`fixed bottom-16 mx-auto w-full max-w-[400px] bg-primary bg-opacity-90 backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
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
  const sendRSVP = api.rsvp.sendrsvp.useMutation({});
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  return (
    <div
      className={`fixed bottom-16 mx-auto w-full max-w-[400px] bg-primary bg-opacity-90 backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
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
  return (
    <div
      className={`fixed bottom-16 mx-auto w-full max-w-[400px] bg-primary bg-opacity-90 text-base-content backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
        isOpen ? "" : "translate-y-40"
      }`}
    >
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

const ModalLocation = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`fixed bottom-16 mx-auto w-full max-w-[400px] bg-primary bg-opacity-90 text-base-content backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
        isOpen ? "" : "translate-y-40"
      }`}
    >
      <div className="flex flex-col justify-center gap-10 p-5">
        <div className="flex items-center gap-3">
          <FaMapMarkerAlt className="text-2xl" />
          <h6 className="grow text-sm">Google Maps</h6>
          <button className="btn-ghost btn-sm btn border border-base-content uppercase">
            Buka
          </button>
        </div>
        <div className="flex items-center gap-3">
          <FaWaze className="text-2xl" />
          <h6 className="grow text-sm">Waze</h6>
          <button className="btn-ghost btn-sm btn border border-base-content uppercase">
            Buka
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalCalendar = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`fixed bottom-16 mx-auto w-full max-w-[400px] bg-primary bg-opacity-90 text-base-content backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
        isOpen ? "" : "translate-y-40"
      }`}
    >
      <div className="flex flex-col justify-center gap-10 p-5">
        <div className="flex items-center gap-3">
          <IoLogoGoogle className="text-2xl" />
          <h6 className="grow text-sm">Google Calendar</h6>
          <button className="btn-ghost btn-sm btn border border-base-content uppercase ">
            Simpan
          </button>
        </div>
        <div className="flex items-center gap-3">
          <IoLogoApple className="text-2xl" />
          <h6 className="grow text-sm">Apple Calendar</h6>
          <button className="btn-ghost btn-sm btn border border-base-content uppercase">
            Simpan
          </button>
        </div>
      </div>
    </div>
  );
};

const ModalMusic = ({ isOpen }: { isOpen: boolean }) => {
  return (
    <div
      className={`fixed bottom-16 mx-auto w-full max-w-[400px] bg-primary bg-opacity-90 text-base-content backdrop-blur-[2px] transition delay-150 duration-300 ease-in-out ${
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
