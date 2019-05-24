import {addNewTask, updateTask} from "./server";

(async function testDatabase() {
  await addNewTask( {
    name: "My Task",
    id: 123456
  });

  await updateTask({
    id: 12345,
    isComplete: true,
    group: "G5",
    name: "Kevin"
  });
})();
