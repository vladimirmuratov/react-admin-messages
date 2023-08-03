import { defaultHandler } from "ra-data-simple-prisma";
import prisma from '@/prisma'

export default async function handler(req, res) {
    await defaultHandler(req, res, prisma);
}
