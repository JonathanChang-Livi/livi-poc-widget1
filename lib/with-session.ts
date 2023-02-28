import { NextApiHandler, GetServerSidePropsContext, GetServerSidePropsResult } from "next";
import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";
import { ironOptions } from "./iron-config";

declare module "iron-session" {
    interface IronSessionData {
      token: string | undefined
    }
  }
  
  
  export function withSessionRoute(handler: NextApiHandler) {
    return withIronSessionApiRoute(handler, ironOptions);
  }
  
  // Theses types are compatible with InferGetStaticPropsType https://nextjs.org/docs/basic-features/data-fetching#typescript-use-getstaticprops
  export function withSessionSsr<
    P extends { [key: string]: unknown } = { [key: string]: unknown },
  >(
    handler: (
      context: GetServerSidePropsContext,
    ) => GetServerSidePropsResult<P> | Promise<GetServerSidePropsResult<P>>,
  ) {
    return withIronSessionSsr(handler, ironOptions);
  }