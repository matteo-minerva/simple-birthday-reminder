import Person from "./Person";

const ListOfPeople = ({ people }) => {
  const listOfPeople = [];
  people.map((person) => {
    return listOfPeople.push(<Person person={person} key={person.name} />);
  });

  return <>{listOfPeople}</>;
};

export default ListOfPeople;
