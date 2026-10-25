
export default function Avatar({ name, square = false, src }) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  const shape = square ? "rounded-lg" : "rounded-full";

  if (src) {
    return (
      <img
        src={src}
        alt={name}
        className={`h-9 w-9 shrink-0 object-cover ${shape}`}
      />
    );
  }

  return (
    <span
      className={
        "flex h-9 w-9 shrink-0 items-center justify-center bg-navy text-xs font-semibold text-white " +
        shape
      }
    >
      {initials}
    </span>
  );
}