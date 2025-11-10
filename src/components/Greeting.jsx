export function Greeting(props) {
  const {
    morningMessage,
    morningRange,
    afternoonMessage,
    afternoonRange,
    eveningMessage,
    eveningRange,
    nightMessage,
    nightRange,
  } = props;
  const currentHour = new Date().getHours();

  const isMorning =
    currentHour >= morningRange[0] && currentHour < morningRange[1];
  const isAfternoon =
    currentHour >= afternoonRange[0] && currentHour < afternoonRange[1];
  const isEvening =
    currentHour >= eveningRange[0] && currentHour < eveningRange[1];
  const isNight = currentHour >= nightRange[0] && currentHour < nightRange[1];

  return (
    <>
      {isMorning && <h1>{morningMessage}</h1>}
      {isAfternoon && <h1>{afternoonMessage}</h1>}
      {isEvening && <h1>{eveningMessage}</h1>}
      {isNight && <h1>{nightMessage}</h1>}
    </>
  );
}
