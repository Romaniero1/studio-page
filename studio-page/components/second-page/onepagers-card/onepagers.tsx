import Tinyverse from '/public/second-flow/onepager/Tinyverse.png';
import Tinytoken from '/public/second-flow/onepager/Tinytoken.png';
import Tinycolony from '/public/second-flow/onepager/Tinycolony.png';
import PrismaZoom from 'react-prismazoom';
import Popup from 'reactjs-popup';
import Image from 'next/image';
import { createRef, RefObject, useState } from 'react';

import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';
import React from 'react';

export const Onepagers = () => {
    const [openTVop, TVOneP] = useState(false);
    const closeTV = () => TVOneP(false);
    const [open, FPOneP] = useState(false);
    const closeFP = () => FPOneP(false);
    const [openTCop, TCOneP] = useState(false);
    const closeTC = () => TCOneP(false);
    const [openTTop, TTOneP] = useState(false);
    const closeTT = () => TTOneP(false);

    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
    const getFilePluginInstance = getFilePlugin();
    const { DownloadButton } = getFilePluginInstance;

    const refZoom:RefObject<any> = React.createRef();

    const zoomIn = () => {
        if (refZoom && refZoom.current && refZoom.current.zoomIn) {
            refZoom.current.zoomIn(refZoom.current.getZoom() + 1);
        }
    };

    const zoomOut = () => {
        if (refZoom && refZoom.current && refZoom.current.zoomOut) {
            refZoom.current.zoomOut(refZoom.current.getZoom() - 1);
        }
    };


    return (
        <div className='flex flex-col space-y-4 sm:space-y-0 sm:grid sm:grid-cols-2 w-[272px] h-[700px] sm:w-[576px] sm:h-[264px] md:w-[704px] md:h-[340px] lg:w-[580px] lg:h-[264px] xl:w-[740px] xl:h-[340px] rounded-[24px] bg-purple mt-[16px] md:mt-16 lg:mt-6 p-[16px] xl:p-6 sm:gap-6 bg-opacity-60'>
            <div className="flex w-[240px] sm:w-[252px] md:w-[316px] lg:w-[256px] lg:h-[100px] xl:w-[334px] xl:h-[134px] sm:h-[100px] md:h-[134px] rounded-[24px] border-[1px] hover:bg-[url('/second-flow/bg-card/tv_onepager.png')] hover:bg-cover">
                <button className='flex flex-1 rounded-[24px] p-6 sm:p-5 md:p-6 lg:p-5 xl:p-6' onClick={() => TVOneP(o => !o)}>
                    <h1 className='text-left'>Tinyverse <br /> Onepager</h1>
                </button>
                <Popup open={openTVop} closeOnDocumentClick onClose={closeTV}>
                    <div className='flex flex-col items-center'>
                        <a className="flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center" onClick={closeTV} />
                        <PrismaZoom ref={refZoom}>
                            <Image src={Tinyverse} width={510} height={650} alt='Onepager' unoptimized />
                        </PrismaZoom>
                        <div className='fixed bottom-[10vh]'>
                            <button className="w-10 h-10" onClick={zoomIn}>
                                <svg className="App-buttonIcon" viewBox="0 0 24 24" fill='white'>
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z" />
                                </svg>
                            </button>
                            <button className="w-10 h-10" onClick={zoomOut}>
                                <svg className="App-buttonIcon" viewBox="0 0 24 24" fill='white'>
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Popup>
                <div className='flex flex-col h-28 -ml-16 mr-6 my-5 sm:my-[10px] md:my-5 lg:my-[10px] xl:my-5 space-y-[14px]'>
                    <button className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-cover bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" onClick={() => TVOneP(o => !o)} />
                    <a href="https://drive.google.com/uc?export=download&id=1OfemI_uSTZ0nS4_XK_Y-wO-bpOvaLJ2C" className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-cover bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
                </div>
            </div>
            <div className="flex w-[240px] sm:w-[252px] md:w-[316px] xl:w-[334px] xl:h-[134px] sm:h-[100px] md:h-[134px] lg:w-[256px] lg:h-[100px] rounded-[24px] border-[1px] hover:bg-[url('/second-flow/bg-card/fin_onepager.png')] hover:bg-cover">
                <button className='flex flex-1 rounded-[24px] p-6 sm:p-5 md:p-6 lg:p-5 xl:p-6' onClick={() => FPOneP(o => !o)}>
                    <h1 className='text-left'>Financial <br /> Projections</h1>
                </button>
                {open &&
                    <>
                        <div className="flex flex-col fixed  inset-0 z-10 bg-black bg-opacity-80 justify-center items-center" onClick={closeFP} />
                        <div className="flex flex-col fixed top-[10%] z-30 left-[10%] w-[80%] h-[75%] bg-black bg-opacity-80 justify-center items-center">
                            <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.15.349/build/pdf.worker.min.js">
                                <div
                                    className="rpv-core__viewer"
                                    style={{
                                        border: '1px solid rgba(0, 0, 0, 0.3)',
                                        display: 'flex',
                                        flexDirection: 'column',
                                        height: '100%',
                                        width: '100%',
                                    }}>
                                    <div
                                        style={{
                                            alignItems: 'center',
                                            backgroundColor: '#eeeeee',
                                            borderBottom: '1px solid rgba(0, 0, 0, 1)',
                                            display: 'flex',
                                            justifyContent: 'center',
                                            padding: '4px',
                                        }}
                                    >
                                        <ZoomOutButton />
                                        <ZoomPopover />
                                        <ZoomInButton />
                                        <DownloadButton />
                                    </div>
                                    <div
                                        style={{
                                            flex: 1,
                                            overflow: 'hidden',
                                        }}
                                    >
                                        <Viewer fileUrl="financial-deck.pdf" defaultScale={SpecialZoomLevel.PageFit} plugins={[zoomPluginInstance, getFilePluginInstance]} theme="dark" />
                                    </div>
                                </div>
                            </Worker>
                        </div>
                    </>
                }
                <div className='flex flex-col h-28 -ml-16 mr-6 my-5 sm:my-[10px] md:my-5 lg:my-[10px] xl:my-5 space-y-[14px]'>
                    <button className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-cover bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" onClick={() => FPOneP(o => !o)} />
                    <a href="https://drive.google.com/uc?export=download&id=140KRylGBQI_0Ryxv0FL0npuoc9_E2GcD" className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-cover bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
                </div>
            </div>
            <div className="flex w-[240px] sm:w-[252px] md:w-[316px] xl:w-[334px] xl:h-[134px] sm:h-[100px] md:h-[134px] lg:w-[256px] lg:h-[100px] rounded-[24px] border-[1px] hover:bg-[url('/second-flow/bg-card/tc_onepager.png')] hover:bg-cover">
                <button className='flex flex-1 rounded-[24px] p-6 sm:p-5 md:p-6 lg:p-5 xl:p-6' onClick={() => TCOneP(o => !o)}>
                    <h1 className='text-left'>Tiny Colony <br /> Onepager</h1>
                </button>
                <Popup open={openTCop} closeOnDocumentClick onClose={closeTC}>
                    <div className='flex flex-col items-center mx-4 xl:mx-0'>
                        <a className="flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center" onClick={closeTC} />
                        <PrismaZoom ref={refZoom}>
                            <Image src={Tinycolony} width={510} height={650} alt='Onepager' unoptimized />
                        </PrismaZoom>
                        <div className='fixed bottom-[10vh]'>
                            <button className="w-10 h-10" onClick={zoomIn}>
                                <svg className="App-buttonIcon" viewBox="0 0 24 24" fill='white'>
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z" />
                                </svg>
                            </button>
                            <button className="w-10 h-10" onClick={zoomOut}>
                                <svg className="App-buttonIcon" viewBox="0 0 24 24" fill='white'>
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Popup>
                <div className='flex flex-col h-28 -ml-16 mr-6 my-5 sm:my-[10px] md:my-5 lg:my-[10px] xl:my-5 space-y-[14px]'>
                    <button className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-cover bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" onClick={() => TCOneP(o => !o)} />
                    <a href="https://drive.google.com/uc?export=download&id=1rnmS_ZWuz7ryc3CkbEfhcMwqVof5Ic5u" className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-cover bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
                </div>
            </div>
            <div className="flex w-[240px] sm:w-[252px] md:w-[316px] xl:w-[334px] xl:h-[134px] sm:h-[100px] md:h-[134px] lg:w-[256px] lg:h-[100px] rounded-[24px] border-[1px] hover:bg-[url('/second-flow/bg-card/token.png')] hover:bg-cover">
                <button className='flex flex-1 rounded-[24px] p-6 sm:p-5 md:p-6 lg:p-5 xl:p-6' onClick={() => TTOneP(o => !o)}>
                    <h1 className='text-left'>Tiny Token <br /> Onepager</h1>
                </button>
                <Popup open={openTTop} closeOnDocumentClick onClose={closeTT}>
                    <div className='flex flex-col items-center'>
                        <a className="flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center" onClick={closeTT} />
                        <PrismaZoom ref={refZoom}>
                            <Image src={Tinytoken} width={510} height={650} alt='Onepager' unoptimized />
                        </PrismaZoom>
                        <div className='fixed bottom-[10vh]'>
                            <button className="w-10 h-10" onClick={zoomIn}>
                                <svg className="App-buttonIcon" viewBox="0 0 24 24" fill='white'>
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9h-3V8a1 1 0 0 0-2 0v3H8a1 1 0 0 0 0 2h3v3a1 1 0 0 0 2 0v-3h3a1 1 0 0 0 0-2z" />
                                </svg>
                            </button>
                            <button className="w-10 h-10" onClick={zoomOut}>
                                <svg className="App-buttonIcon" viewBox="0 0 24 24" fill='white'>
                                    <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 8-8 8 8 0 0 1-8 8zm4-9H8a1 1 0 0 0 0 2h8a1 1 0 0 0 0-2z" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </Popup>
                <div className='flex flex-col h-28 -ml-16 mr-6 my-5 sm:my-[10px] md:my-5 lg:my-[10px] xl:my-5 space-y-[14px]'>
                    <button className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-cover bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" onClick={() => TTOneP(o => !o)} />
                    <a href="https://drive.google.com/uc?export=download&id=1WWPph0bgJ5cyf-jxC28SZ2NcuzDTF4qR" className="w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-8 lg:h-8 xl:w-10 xl:h-10 bg-cover bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
                </div>
            </div>
        </div>
    )
}