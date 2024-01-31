"use client";
import React from "react";
import { useSelector } from "react-redux";

const Page = ({}) => {
  const organizationState = useSelector((state) => state.organization);
  const members = organizationState.selectedOrganization?.members;
  console.log(members, "members");

  if (!members || members.length === 0) {
    return <div>No organization data available</div>;
  }
  return (
    <div>
      <h1>Team Page</h1>
      <ul>
        {members.map((member, index) => (
          <li key={index}>
            <p>User ID: {member.user_id}</p>
            <p>currency:{member.currency}</p>
            <p>trackable:{member.trackable.toString()}</p>
            <p>Membership Role: {member.membership_role}</p>
            {/* Add more fields as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Page;
