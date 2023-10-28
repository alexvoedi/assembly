export type MakeNullable<T, K extends keyof T> = {
  [P in keyof T]: P extends K ? T[P] | null : T[P]
}
