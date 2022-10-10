import React, {useEffect} from 'react'
import Layout from '../components/layout'
import { useSession } from "next-auth/react";
import { useRouter } from 'next/router';

const Favorite = () => {
  const{status} = useSession();
  const router = useRouter();

  useEffect(() => {

  if (status !== "authenticated") {
    router.push("/login");
  }
  },[status]
  );


  return (
    <Layout>
      Favorite
    </Layout>
  )
}

export default Favorite
