import React from 'react';

const membersMock = [
  {
    login: "Nasdan",
    id: 4374977,
    avatar_url: "https://avatars.githubusercontent.com/u/4374977?v4",
  },
  {
    login: "v-borrego",
    id: 43609530,
    avatar_url: "https://avatars.githubusercontent.com/u/43609530?v4",
  },
]

const renderMember = (member) => (
  <span key={member.id}>{member.login}</span>
);

export const App = () => {
  const [members] = React.useState(membersMock);
  return (
    <>
      {members.map((member) => ( <span key={member.id}>{member.login}</span> ))}
    </>
  );
}
