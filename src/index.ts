import { BracketsManager } from "brackets-manager";
import { JsonDatabase } from "brackets-json-db";

const storage = new JsonDatabase();
const manager = new BracketsManager(storage);


const doIt = async () => {
  // Create an elimination stage for tournament `3`.
  //   await manager.create.stage({
  //     tournamentId: 3,
  //     name: "Elimination stage",
  //     type: "double_elimination",
  //     seeding: ["Team 1", "Team 2", "Team 3", "Team 4"],
  //     settings: { grandFinal: "double" },
  //   });
  //   await manager.update.match({
  //     id: 0, // First match of winner bracket (round 1)
  //     opponent1: { score: 16, result: "win" },
  //     opponent2: { score: 12 },
  //   });
  // 1
  // await manager.create({
  //   name: "Example stage",
  //   tournamentId: 0, //
  //   type: "single_elimination",
  //   seeding: [
  //     "Team 1",
  //     "Team 2",
  //     "Team 3",
  //     "Team 4",
  //     // "Team 5",
  //     // "Team 6",
  //     // "Team 7",
  //     // "Team 8",
  //   ],
  // });
  // 2
    // await manager.update.match({
    //   id: 2, // First match of winner bracket (round 1)
    //   opponent1: { score: 10, result: "win" },
    //   opponent2: { score: 5 },
    // });
    // await manager.update.match({
    //   id: 1, // First match of winner bracket (round 1)
    //   opponent1: { score: 16, result: "win" },
    //   opponent2: { score: 12 },
    // });
};


doIt()


/*
  Compass draws 4 teams
  Single elimination 2 teams
  Compass draw 8 teams
  Single elimination 3 teams
  Single elimination 4 teams
  Single elimination 5 teams
*/