export const bracket = [
  // compass draw 4
  {
    _id: 0,
    eventId: "6544044881951a10a8ae8688",
    ageDivisionId: "c7f3a83b-a2b7-4507-a745-30519be0b71e",
    name: "Golder Compass 4",
    type: "COMPASS_DRAW_4",
    teamCount: 4,
    sourceType: "POOL|DIVISION|TEAM|WINNER", // per game or per bracket?
    poolType: "LETTERS|NUMBERS", // ???
    seedType: "?????", // ???
    consolationGame: {}, // ????

    matches: [
      {
        id: 0,
        group: 0,
        compassDrawPosition: "BASE", // BASE|EAST|WEST|NORTH|SOUTH|NORTHEAST|NORTHWEST|SOUTHEAST|SOUTHWEST
        name: "Game 1",
        status: "UNSET|SET|PLAYING|PLAYED|FINISHED",
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
        group: 1,
        compassDrawPosition: "BASE",
        name: "Game 2",
        status: "PLAYED",
        winner: "opponent2|null",
        opponent1: {
          rosterId: "C|null",
          score: 0,
          result: "loss",
        },
        opponent2: {
          rosterId: "D|null",
          score: 0,
          result: "win",
        },
      },

      {
        id: 2,
        group: 0,
        compassDrawPosition: "EAST",
        name: "FINAL WINNER",
        status: "FINISHED", // FINISHED LAST BRACKET
        winner: "opponent2",
        opponent1: {
          rosterId: "A|null",
          score: 0,
          result: "lose",
        },
        opponent2: {
          rosterId: "D|null",
          score: 0,
          result: "win",
        },
      },

      // LOSERS
      {
        id: 3,
        group: 0,
        compassDrawPosition: "WEST",
        name: "Loser 1",
        status: "FINISHED",
        winner: "opponent1",
        opponent1: {
          rosterId: "B|null",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "C|null",
          score: 0,
          result: "loss",
        },
      },
    ],
  },

  // compass draw 8
  {
    _id: 0,
    eventId: "6544044881951a10a8ae8688",
    ageDivisionId: "c7f3a83b-a2b7-4507-a745-30519be0b71e",
    name: "Golder Compass 8",
    type: "COMPASS_DRAW_8",
    teamCount: 8,
    sourceType: "POOL|DIVISION|TEAM|WINNER", // per game or per bracket?
    poolType: "LETTERS|NUMBERS", // ???
    seedType: "?????", // ???
    consolationGame: {}, // ????

    matches: [
      // BASE GAMES
      {
        id: 0,
        group: 0,
        compassDrawPosition: "BASE",
        name: "Game 1",
        status: "UNSET|SET|PLAYING|PLAYED|FINISHED",
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
        group: 1,
        compassDrawPosition: "BASE",
        name: "Game 2",
        status: "PLAYED",
        winner: "opponent2|null",
        opponent1: {
          rosterId: "C|null",
          score: 0,
          result: "loss",
        },
        opponent2: {
          rosterId: "D|null",
          score: 0,
          result: "win",
        },
      },
      {
        id: 2,
        group: 2,
        compassDrawPosition: "BASE",
        name: "Game 1",
        status: "UNSET|SET|PLAYING|PLAYED|FINISHED",
        winner: "opponent1|null",
        opponent1: {
          rosterId: "E|null",
          score: 0,
          result: "win",
        },
        opponent2: {
          rosterId: "F|null",
          score: 0,
          result: "loss",
        },
      },
      {
        id: 3,
        group: 3,
        compassDrawPosition: "BASE",
        name: "Game 2",
        status: "PLAYED",
        winner: "opponent2|null",
        opponent1: {
          rosterId: "G|null",
          score: 0,
          result: "loss",
        },
        opponent2: {
          rosterId: "H|null",
          score: 0,
          result: "win",
        },
      },

      // EAST GAMES
      {
        id: 4,
        group: 0,
        compassDrawPosition: "EAST",
        name: "Game 7",
        status: "PLAYED",
        winner: "opponent2|null",
        opponent1: {
          rosterId: "A|null",
          score: 0,
          result: "loss",
        },
        opponent2: {
          rosterId: "D|null",
          score: 0,
          result: "win",
        },
      },
      {
        id: 5,
        group: 1,
        compassDrawPosition: "EAST",
        name: "Game 7",
        status: "PLAYED",
        winner: "opponent2|null",
        opponent1: {
          rosterId: "E|null",
          score: 0,
          result: "loss",
        },
        opponent2: {
          rosterId: "H|null",
          score: 0,
          result: "win",
        },
      },
      {
        // FINISHED EAST
        id: 6,
        group: 0,
        compassDrawPosition: "EAST",
        name: "Game 12",
        status: "FINISHED",
        winner: "opponent2|null",
        opponent1: {
          rosterId: "D|null",
          score: 0,
          result: "loss",
        },
        opponent2: {
          rosterId: "H|null",
          score: 0,
          result: "win",
        },
      },

      // SOUTH EAST GAMES
      {
        id: 7,
        group: 0,
        compassDrawPosition: "SOUTHEAST",
        name: "Game 7",
        status: "FINISHED",
        winner: "opponent2|null",
        opponent1: {
          rosterId: "A|null",
          score: 0,
          result: "loss",
        },
        opponent2: {
          rosterId: "E|null",
          score: 0,
          result: "win",
        },
      },

      // WEST GAMES
      {
        id: 8,
        group: 0,
        compassDrawPosition: "WEST",
        name: "Game 5",
        status: "PLAYED",
        winner: "opponent2|null",
        opponent1: {
          rosterId: "B|null",
          score: 0,
          result: "loss",
        },
        opponent2: {
          rosterId: "C|null",
          score: 0,
          result: "win",
        },
      },

      {
        id: 9,
        group: 1,
        compassDrawPosition: "WEST",
        name: "Game 5",
        status: "PLAYED",
        winner: "opponent2|null",
        opponent1: {
          rosterId: "F|null",
          score: 0,
          result: "loss",
        },
        opponent2: {
          rosterId: "G|null",
          score: 0,
          result: "win",
        },
      },

      {
        id: 10,
        group: 1,
        compassDrawPosition: "WEST",
        name: "Game 5",
        status: "FINISHED",
        winner: "opponent2|null",
        opponent1: {
          rosterId: "C|null",
          score: 0,
          result: "loss",
        },
        opponent2: {
          rosterId: "G|null",
          score: 0,
          result: "win",
        },
      },

      // SOUTH WEST GAMES
      {
        id: 10,
        group: 1,
        compassDrawPosition: "WEST",
        name: "Game 5",
        status: "FINISHED",
        winner: "opponent2|null",
        opponent1: {
          rosterId: "B|null",
          score: 0,
          result: "loss",
        },
        opponent2: {
          rosterId: "F|null",
          score: 0,
          result: "win",
        },
      },
    ],
  },
];
