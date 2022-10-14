import Image from 'next/image'
import React from 'react'
import Layout from '../components/Layout'
import Jump from 'react-reveal/Jump';
import Spin from 'react-reveal/Spin';


export default function About() {
    return (
        <Layout title={'About'}>
            <div>


                <section className="relative  bg-blueGray-50">
                    <div className="relative pt-16 pb-32 flex content-center items-center justify-center min-h-screen-75">
                        <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        >
                            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
                        </div>
                        <div className="container relative mx-auto">
                            <div className="items-center flex flex-wrap">
                                <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                                    <div className="pr-12">
                                        <h1 className="text-white font-semibold text-5xl">
                                            Explore Words With Us
                                        </h1>
                                        <p className="mt-4  font-[serrif] text-5xl shadow-lg">
                                            Brainy Dictionary
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px" >
                            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                                <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                            </svg>
                        </div>
                    </div>
                    <section className="pb-10 bg-blueGray-200 -mt-24">
                        <div className="container mx-auto px-4">
                            <div className="flex flex-wrap text-gray-500">
                                <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <Jump >
                                            <div className="px-4 py-5 flex-auto">
                                                <Image
                                                    src="/images/Erica.jpg"
                                                    width={150}
                                                    height={150}
                                                    alt="Erica"
                                                    className='rounded-full'
                                                />
                                                <h6 className="text-xl font-semibold text-gray-700">Erica Boahemaa</h6>
                                                <p className="mt-2 mb-4 text-blueGray-500">
                                                    I enjoy cheering up others. I hate giving up, especially when I haven't tried my hardest. I'm humble, diligent, and responsible. In order to affect change in society and the globe at large, I want to be one of the select few. I am aspiring  to become one of the few great Full Stack developers around the globe.
                                                </p>
                                            </div>
                                        </Jump>

                                    </div>
                                </div>
                                <div className="w-full md:w-4/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <div className="px-4 py-5 flex-auto">
                                            <Spin>
                                                <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-purple-600">

                                                    <i className="fas fa-fingerprint"></i>
                                                </div>
                                            </Spin>

                                            <h6 className="text-3xl font-semibold text-gray-700">About Us</h6>

                                        </div>
                                    </div>
                                </div>
                                <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                                    <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                                        <Jump>
                                            <div className="px-4 py-5 flex-auto">
                                                <Image
                                                    src="/images/Matthew.jpg"
                                                    width={150}
                                                    height={150}
                                                    alt="matthew"
                                                    className='rounded-full'
                                                />
                                                <h6 className="text-xl font-semibold text-gray-700">Domi  Matthew</h6>
                                                <p className="mt-2 mb-4 text-blueGray-500">
                                                    I am an interpersonal being who learns better by having discussions, reading and writing. I represent the new breed of resilient leaders rising across Africa. We will change the phase, history and narrative of the continent. Visionary and purpose driven change maker for positive impact. I am aspiring  to become one of the few great Full Stack developers around the globe.
                                                </p>
                                            </div>
                                        </Jump>

                                    </div>
                                </div>
                            </div>

                        </div>
                    </section>
                </section>
            </div>
        </Layout>
    )
}
