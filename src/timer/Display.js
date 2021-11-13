export function Display({ millis }) {
  const minutes = Math.floor(millis / 60000);
  const remainingMillis = millis % 60000;
  const seconds = Math.floor(remainingMillis / 1000);
  return (
    <div>
      {minutes > 9 ? minutes : "0" + String(minutes)}:
      {seconds > 9 ? seconds : "0" + String(seconds)}
    </div>
  );
}
