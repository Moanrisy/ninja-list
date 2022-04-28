import Link from "next/link";

export const getStaticProps = async () => {
  const response = await fetch("http:localhost:3000/person/");
  // const response = await fetch("https:jsonplaceholder.typicode.com/users");
  const data = await response.json();

  return {
    props: { persons: data },
  };
};

const Persons = ({ persons }) => {
  return (
    <div>
      <h1>Persons</h1>
      {persons.map((person) => (
        <div key={person._id}>
          <h3>{person.name}</h3>
          <h3>{person._id}</h3>
        </div>
      ))}
    </div>
  );
};

export default Persons;
