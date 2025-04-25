export const formatTime = (t: string) => {
  const [h, m, s] = t.split(":").map(Number);
  const total = h * 3600 + m * 60 + s;

  return total <= 10 ? `${s}` : t;
};