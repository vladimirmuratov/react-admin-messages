import prisma from '@/prisma'

export default async function handler(req, res) {
    if (req.method === 'POST') {
        const {login, password} = req.body
        const user = await prisma.admin.findFirst({
            where: {
                login
            }
        })
        if (user && user.password === password) {
            res.status(200).json(user.login)
        } else {
            res.status(401).json({error: 'Error! Check your login or password'})
        }
    }
}
