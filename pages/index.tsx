import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { NextRouter, useRouter } from "next/router";
import { useEffect } from "react";

const Index = ({}) => {
  const router: NextRouter = useRouter();
  useEffect(() => {
    router.replace("/gallery");
  }, [router]);
  return <></>;
};

export const getServerSideProps: GetServerSideProps = async (context: GetServerSidePropsContext) => {
  const { req } = context;
  const { cookies } = req;
  const { token } = cookies;

  if (!token) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default Index;
