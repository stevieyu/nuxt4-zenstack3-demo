import { helloWorldTask } from "../../trigger/example";
// 注 vercel 构建后无法显示
export default defineEventHandler(async (event) => {
    let handle = null;
    if(!process.env.VERCEL){
        handle = await helloWorldTask.trigger({ message: "Hello world!" });
    }

    return {handle}
})