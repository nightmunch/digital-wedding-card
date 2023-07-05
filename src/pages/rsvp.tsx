import { type NextPage } from "next";
import { api } from "../utils/api";

const RSVP: NextPage = () => {
  const getAllRSVP = api.rsvp.getall.useQuery();
  const attendingList = getAllRSVP.data?.filter((rsvp) => rsvp.attendance);
  const attendingSum = attendingList?.reduce((accumulator, currentValue) => {
    if (currentValue.inviting != null) {
      return accumulator + currentValue.inviting;
    }
    return accumulator;
  }, 0);
  return (
    <div
      className="mx-auto min-h-screen w-full max-w-[600px] scroll-smooth pt-10 shadow-2xl shadow-gray-600/50"
      data-theme="shahrin"
    >
      <div className="flex flex-col text-center font-semibold">
        <h1>Total Attending</h1>
        <h1 className="text-4xl text-primary">{attendingSum}</h1>
      </div>
      <div className="flex flex-col gap-5 pt-12">
        <h1 className="text-center font-semibold">RSVP✨</h1>
        <div className="mx-5 h-96 overflow-auto">
          <table className="table-zebra table w-full">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Attend?</th>
                <th>Inviting</th>
                <th>Message</th>
              </tr>
            </thead>
            <tbody>
              {getAllRSVP.data?.map((rsvp, index) => (
                <tr key={rsvp.id}>
                  <th>{index + 1}</th>
                  <td>{rsvp.name}</td>
                  <td>{rsvp.attendance ? "Yes" : "No"}</td>
                  <td>{rsvp.inviting}</td>
                  <td>{rsvp.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default RSVP;
