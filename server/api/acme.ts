import HandyAcme from "handyacme"

interface HandyAcmeModule {
    default: typeof HandyAcme
}

export default defineEventHandler(async (event) => {
    const le = await (HandyAcme as unknown as HandyAcmeModule).default.create("LetsEncrypt", 'staging')
    await le.createAccount('a@a.cn')
    const account = await le.exportAccount()

    await le.importAccount(account)
    return { account }
})