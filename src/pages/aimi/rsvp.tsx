import { type NextPage } from "next";
import { api } from "../../utils/api";

const RSVP: NextPage = () => {
  const getAllRSVP = api.rsvp2.getall.useQuery();
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
      data-theme="aimi"
    >
      <div className="flex flex-col gap-5">
        <div className="flex justify-center">
          <div className="stats shadow">
            <div className="stat place-items-center">
              <div className="stat-title">Total Attending</div>
              <div className="stat-value">{attendingSum}</div>
            </div>
          </div>
        </div>
        <div className="flex flex-col">
          <h1 className="text-center text-2xl font-semibold text-primary">
            RSVP
          </h1>
          <h2 className="text-center text-sm text-base-content">
            Check guest attendance and private message!
          </h2>
        </div>
        <div className="mx-5 h-96 overflow-auto">
          <table className="table-xs table-pin-cols table-pin-rows table-zebra table">
            {/* head */}
            <thead>
              <tr>
                <th>Name</th>
                <td>Attend?</td>
                <td>Inviting</td>
                <td>Message</td>
              </tr>
            </thead>
            <tbody>
              {getAllRSVP.data?.map((rsvp) => (
                <tr key={rsvp.id}>
                  <th>{rsvp.name}</th>
                  <td>
                    {rsvp.attendance ? (
                      <div className="badge-success badge badge-sm gap-2">
                        Yes
                      </div>
                    ) : (
                      <div className="badge-error badge badge-sm gap-2">No</div>
                    )}
                  </td>
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
