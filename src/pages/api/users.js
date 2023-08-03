import prisma from '@/prisma'
import {getListHandler} from 'ra-data-simple-prisma'

export default async function handler(req, res) {
    switch (req.body.method) {
        case 'getList':
            await getListHandler(req, res, prisma.user, {
                select: {
                    id: true,
                    name: true,
                    email: true,
                    image: true
                }
            })
            break
    }
}
