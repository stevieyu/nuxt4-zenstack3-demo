import { helloWorldTask } from "../../trigger/example";

export default defineEventHandler(async (event) => {
    const handle = await helloWorldTask.trigger({ message: "Hello world!" });
    return {handle}
})