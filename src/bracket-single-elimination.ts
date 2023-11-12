export const bracket = [
  // SINGLE ELIMINATION 2
  {
    _id: 0,
    eventId: "6544044881951a10a8ae8688",
    ageDivisionId: "c7f3a83b-a2b7-4507-a745-30519be0b71e",
    name: "Golder Single 3",
    type: "SINGLE_ELIMINATION_3",
    teamCount: 3,
    sourceType: "POOL|DIVISION|TEAM|WINNER", // per game or per bracket?
    poolType: "LETTERS|NUMBERS", // ???
    seedType: "?????", // ???
    consolationGame: {}, // ????

    matches: [
      {
        id: 0,
        level: 0,
        group: 0,
        name: "Game 1",
        status: "FINISHED",
        winner: "opponent1|null",
        opponent1: {
          rosterId: "A|null",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "B|null",
          score: 0,
          result: "loss",
        },
      },
    ],
  },
  
  // SINGLE ELIMINATION 3
  {
    _id: 0,
    eventId: "6544044881951a10a8ae8688",
    ageDivisionId: "c7f3a83b-a2b7-4507-a745-30519be0b71e",
    name: "Golder Single 3",
    type: "SINGLE_ELIMINATION_3",
    teamCount: 3,
    sourceType: "POOL|DIVISION|TEAM|WINNER", // per game or per bracket?
    poolType: "LETTERS|NUMBERS", // ???
    seedType: "?????", // ???
    consolationGame: {}, // ????

    matches: [
      {
        id: 0,
        level: 0,
        group: 0,
        name: "Game 1",
        status: "PLAYED", // "UNSET|SET|PLAYING|PLAYED|FINISHED",
        opponent1: {
          rosterId: "A|null",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "B|null",
          score: 0,
          result: "loss",
        },
      },
      {
        id: 1,
        level: 1,
        group: 0,
        name: "Game 2",
        status: "FINISHED",
        winner: "opponent1|null",
        opponent1: {
          rosterId: "C|null",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "A",
          score: 0,
          result: "loss",
        },
      },
    ],
  },

  // SINGLE ELIMINATION 4
  {
    _id: 1,
    eventId: "6544044881951a10a8ae8688",
    ageDivisionId: "c7f3a83b-a2b7-4507-a745-30519be0b71e",
    name: "Golder Single 4",
    type: "SINGLE_ELIMINATION_4",
    teamCount: 4,
    sourceType: "POOL|DIVISION|TEAM|WINNER", // per game or per bracket?
    poolType: "LETTERS|NUMBERS", // ???
    seedType: "?????", // ???
    consolationGame: {}, // ????

    matches: [
      {
        id: 0,
        level: 0,
        group: 0,
        name: "Game 1",
        status: "PLAYED", // "UNSET|SET|PLAYING|PLAYED|FINISHED",
        winner: "opponent1|null",
        opponent1: {
          rosterId: "A|null",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "B|null",
          score: 0,
          result: "loss",
        },
      },
      {
        id: 1,
        level: 0,
        group: 1,
        name: "Game 2",
        status: "PLAYED", // "UNSET|SET|PLAYING|PLAYED|FINISHED",
        winner: "opponent1|null",
        opponent1: {
          rosterId: "C|null",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "D|null",
          score: 0,
          result: "loss",
        },
      },
      {
        id: 1,
        level: 1,
        group: 0,
        name: "Game 3",
        status: "FINISHED",
        winner: "opponent1|null",
        opponent1: {
          rosterId: "C",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "D",
          score: 0,
          result: "loss",
        },
      },
    ],
  },

  // SINGLE ELIMINATION 5
  {
    _id: 1,
    eventId: "6544044881951a10a8ae8688",
    ageDivisionId: "c7f3a83b-a2b7-4507-a745-30519be0b71e",
    name: "Golder Single 5",
    type: "SINGLE_ELIMINATION_5",
    teamCount: 4,
    sourceType: "POOL|DIVISION|TEAM|WINNER", // per game or per bracket?
    poolType: "LETTERS|NUMBERS", // ???
    seedType: "?????", // ???
    consolationGame: {}, // ????

    matches: [
      {
        id: 0,
        level: 0,
        group: 0,
        name: "Game 1",
        status: "PLAYED", // "UNSET|SET|PLAYING|PLAYED|FINISHED",
        winner: "opponent1|null",
        opponent1: {
          rosterId: "A|null",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "B|null",
          score: 0,
          result: "loss",
        },
      },
      {
        id: 1,
        level: 1,
        group: 0,
        name: "Game 2",
        status: "PLAYED", // "UNSET|SET|PLAYING|PLAYED|FINISHED",
        winner: "opponent1|null",
        opponent1: {
          rosterId: "A|null",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "C|null",
          score: 0,
          result: "loss",
        },
      },
      {
        id: 2,
        level: 1,
        group: 1,
        name: "Game 3",
        status: "PLAYED", // "UNSET|SET|PLAYING|PLAYED|FINISHED",
        winner: "opponent1|null",
        opponent1: {
          rosterId: "D|null",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "E|null",
          score: 0,
          result: "loss",
        },
      },
      {
        id: 3,
        level: 2,
        group: 0,
        name: "Game 4",
        status: "FINISHED",
        winner: "opponent1|null",
        opponent1: {
          rosterId: "A",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "D",
          score: 0,
          result: "loss",
        },
      },
    ],
  },
];
