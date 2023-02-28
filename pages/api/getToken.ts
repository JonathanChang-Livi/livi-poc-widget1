import { withIronSessionApiRoute } from "iron-session/next";
import { NextApiRequest, NextApiResponse } from "next";
import { ironOptions } from "../../lib/iron-config";

export default withIronSessionApiRoute(loginRoute, ironOptions);

async function loginRoute(
    req: NextApiRequest,
    res: NextApiResponse) {
    const newTkn = "asodioiajsodi"
    req.session.token = newTkn
    await req.session.save()
    res.send({token: req.session.token})
}