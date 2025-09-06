import { helloWorldTask } from "../../trigger/example";
import { runs } from "@trigger.dev/sdk";

export default defineEventHandler(async (event) => {
    const handle = await helloWorldTask.trigger({ message: "Hello world!" });

    const run = await runs.retrieve(handle);

    return {handle, run}
})