export const uiPackageName = "@dwemerforge/ui";

export const shellAccent = {
  brass: "#c9872f",
  charcoal: "#1d232a",
  verdigris: "#2f8f8b"
} as const;

export type ShellAccentName = keyof typeof shellAccent;
