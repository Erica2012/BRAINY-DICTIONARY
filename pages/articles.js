import { useSession } from 'next-auth/react';
import Image from 'next/image'
import { useRouter } from 'next/router';
import React, { useEffect } from 'react'
import Button from '../components/button'
import Layout from '../components/Layout'
import { Bounce } from 'react-reveal';

export default function Articles() {
    const { status } = useSession();
    const router = useRouter();

    useEffect(
        () => {
            if (status !== "authenticated") {
                router.push("/login");
            }
        },
        [status],
        router
    );
    return (
        <Layout title={'Articles'}>
            <link rel="stylesheet" href="https://cdn.tailgrids.com/tailgrids-fallback.css" />
            <div className='md:mx-20'>
                <section className="pt-20 lg:pt-[120px] pb-10 lg:pb-20 bg-[#F3F4F6] dark:bg-regal-blue">
                    <div className="container">
                        <div className="flex flex-wrap -mx-4">
                            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                                <div className="bg-white rounded-xl shadow-xl shadow-pink-500 overflow-hidden mb-10">
                                    <Bounce top>
                                        <Image
                                            src='/images/art.jpg'
                                            width={500}
                                            height={300}
                                            alt="image"
                                            className=""
                                        />
                                    </Bounce>

                                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                        <h3>
                                            <a
                                                href="javascript:void(0)"
                                                className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                                            >
                                                Article-1
                                            </a>
                                        </h3>

                                        <Button
                                        >
                                            Read
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                                <div className="bg-white rounded-xl shadow-xl shadow-pink-500 overflow-hidden mb-10">
                                    <Bounce clear>
                                        <Image
                                            src='/images/art1.jpg'
                                            width={500}
                                            height={300}
                                            alt="image"
                                            className=""
                                        />
                                    </Bounce>

                                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                        <h3>
                                            <a
                                                href="javascript:void(0)"
                                                className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                                            >
                                                Article-2                                        </a>
                                        </h3>
                                        <Button
                                        >
                                            Read
                                        </Button>
                                    </div>
                                </div>
                            </div>
                            <div className="w-full md:w-1/2 xl:w-1/3 px-4">
                                <div className="bg-white rounded-xl shadow-xl shadow-pink-500 overflow-hidden mb-10">
                                    <Bounce top>
                                        <Image
                                            src='/images/Newbg1.jpg'
                                            width={500}
                                            height={300}
                                            alt="image"
                                            className=""
                                        />
                                    </Bounce>

                                    <div className="p-8 sm:p-9 md:p-7 xl:p-9 text-center">
                                        <h3>
                                            <a
                                                href="javascript:void(0)"
                                                className="
                        font-semibold
                        text-dark text-xl
                        sm:text-[22px]
                        md:text-xl
                        lg:text-[22px]
                        xl:text-xl
                        2xl:text-[22px]
                        mb-4
                        block
                        hover:text-primary
                        "
                                            >
                                                Article-3                                        </a>
                                        </h3>

                                        <Button

                                        >
                                            Read
                                        </Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </Layout>
    )
}
