import Person from "./Person";

const PeopleList = ({ peoples }) => {
  return (
    <section>
      <h3>{peoples.length} Birthdays today</h3>
      {peoples.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
      {/* <Person peoples={peoples} /> */}
    </section>
  );
};
export default PeopleList;
