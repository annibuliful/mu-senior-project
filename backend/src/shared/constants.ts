export type APPOINTMENT_STATUS =
  | 'in-progress'
  | 'vaccinated'
  | 'vaccinating'
  | 'overdue';

// type BuildPowersOf2LengthArrays<
//   N extends number,
//   R extends never[][]
// > = R[0][N] extends never
//   ? R
//   : BuildPowersOf2LengthArrays<N, [[...R[0], ...R[0]], ...R]>;

// type ConcatLargestUntilDone<
//   N extends number,
//   R extends never[][],
//   B extends never[]
// > = B['length'] extends N
//   ? B
//   : [...R[0], ...B][N] extends never
//   ? ConcatLargestUntilDone<
//       N,
//       R extends [R[0], ...(infer U)]
//         ? U extends never[][]
//           ? U
//           : never
//         : never,
//       B
//     >
//   : ConcatLargestUntilDone<
//       N,
//       R extends [R[0], ...(infer U)]
//         ? U extends never[][]
//           ? U
//           : never
//         : never,
//       [...R[0], ...B]
//     >;

// type Replace<R extends any[], T> = { [K in keyof R]: T };

// type TupleOf<T, N extends number> = number extends N
//   ? T[]
//   : {
//       [K in N]: BuildPowersOf2LengthArrays<K, [[never]]> extends infer U
//         ? U extends never[][]
//           ? Replace<ConcatLargestUntilDone<K, U, []>, T>
//           : never
//         : never;
//     }[N];

// type RangeOf<N extends number> = Partial<TupleOf<unknown, N>>['length'];

// type RangeOf2<From extends number, To extends number> =
//   | Exclude<RangeOf<To>, RangeOf<From>>
//   | From;

// // type baseTen = 0 | 1|2|3|4|5|6|7|8|9
// // type baseTwo = 0| 1|2
// // type baseThree = 0| 1| 2 | 3
// // type baseFive = 0 | 1 | 2 |3 |4 | 5

// type baseTen = RangeOf2<0, 9>;
// type baseTwo = RangeOf2<0, 2>;
// type baseFour = RangeOf2<0, 3>;
// type baseSix = RangeOf2<0, 5>;

// // export type RecordTime = `${baseTwo}${baseFour}:${baseSix}${baseTen}`
