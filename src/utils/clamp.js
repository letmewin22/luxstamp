export const clamp = (num, a, b) => {
  return Math.max(Math.min(num, Math.max(a, b)), Math.min(a, b))
}