import client from "../zenstack"

export default defineEventHandler(async (event) => {
    const cTag = client.tag
    if (!await cTag.findFirst({ where: { name: 'Alex1' } })) {
        const tag = await cTag.create({
            data: {
                name: 'Alex1',
            },
        });
        await cTag.create({
            data: {
                name: 'Alex12',
                parent: {
                    connect: {
                        id: tag.id,
                    }
                }
            },
            include: {
                parent: true,
            },
        });
    }

    return await cTag.findFirst({
        where: {
            pid: null,
        },
        include: {
            children: true,
        },
    })
})
