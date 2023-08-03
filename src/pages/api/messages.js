import prisma from '@/prisma'
import {deleteHandler, deleteManyHandler, getListHandler, updateHandler} from 'ra-data-simple-prisma'

export default async function handler(req, res) {
    switch (req.body.method) {
        case 'getList':
            await getListHandler(req, res, prisma.message)
            break
        case 'deleteMany':
            await deleteManyHandler(req, res, prisma.message)
            break
        case 'update':
            await updateHandler(
                req,
                res,
                prisma.message
            )
            break
        case 'delete':
            await deleteHandler(req, res, prisma.message)
            break
    }
}
