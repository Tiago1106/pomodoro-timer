export const getFlashClass = (time: string, isEditing: boolean) => {
  const [h, m, s] = time.split(":").map(Number);
  const total = h * 3600 + m * 60 + s;

  if (total > 10 || isEditing) return "bg-(--color-background) text-(--color-primary)";

  return total % 2 === 0
    && "bg-(--color-primary) text-(--color-background)";
};