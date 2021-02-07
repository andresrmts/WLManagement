import React from "react";
import Registration from "./Registration/Registration";

const PendingRegistrationList = ({
  acceptedRegistrations,
  approveRemove,
  registrations,
}) => {
  if (registrations) {
    return (
      <div className="pa4">
        <div className="center overflow-auto">
          <table className="f6 w-100 mw8" cellSpacing="0">
            <thead>
              <tr className="stripe-dark">
                <th id="name" className="fw6 pa3 bg-white">
                  Name
                </th>
                <th id="age" className="fw6 pa3 bg-white">
                  Role
                </th>
                <th id="weight" className="fw6 pa3 bg-white">
                  Approve?
                </th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {registrations.map((reg, i) => {
                return (
                  <Registration
                    key={i}
                    name={reg.name}
                    role={reg.role}
                    approveRemove={approveRemove}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  } else if (acceptedRegistrations) {
    return (
      <div className="pa4">
        <div className="center overflow-auto">
          <table className="f6 w-100 mw8" cellSpacing="0">
            <thead>
              <tr className="stripe-dark">
                <th id="name" className="fw6 pa3 bg-white">
                  Name
                </th>
                <th id="age" className="fw6 pa3 bg-white">
                  Role
                </th>
                <th id="weight" className="fw6 pa3 bg-white">
                  Delete?
                </th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              {acceptedRegistrations.map((reg, i) => {
                return <Registration key={i} name={reg.name} role={reg.role} />;
              })}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
};

export default PendingRegistrationList;
