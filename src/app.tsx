import React from "react";

const membersMock = [
  {
    login: "Nasdan",
    id: 4374977,
    avatar_url: "https://avatars.githubusercontent.com/u/4374977?v=4",
  },
  {
    login: "v-borrego",
    id: 43609530,
    avatar_url: "https://avatars.githubusercontent.com/u/43609530?v=4",
  },
];

export const App = () => {
  const [members] = React.useState(membersMock);

  return (
    <div className="user-list-container">
      <span className="header">Avatar</span>
      <span className="header">Id</span>
      <span className="header">Name</span>
      {members.map((member) => (
        <React.Fragment key={member.id}>
          <img src={member.avatar_url} />
          <span>{member.id}</span>
          <span>{member.login}</span>
        </React.Fragment>
      ))}
    </div>
  );
};