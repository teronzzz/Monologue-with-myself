export default function Timer({ activeTime }) {
  return (
    <p className="timer">
      Время пребывания на сайте: <span>{activeTime}s</span>
    </p>
  );
}
