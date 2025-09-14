export default defineEventHandler(async (event) => {
    return { env: process.env }
})