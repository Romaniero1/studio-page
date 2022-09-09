import Tinyverse from '/public/second-flow/onepager/Tinyverse.png';
import Tinytoken from '/public/second-flow/onepager/Tinytoken.png';
import Tinycolony from '/public/second-flow/onepager/Tinycolony.png';
import PrismaZoom from 'react-prismazoom';
import Popup from 'reactjs-popup';
import Image from 'next/image';
import { useState } from 'react';

import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/zoom/lib/styles/index.css';

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

    return (
        <div className='grid grid-cols-2 w-[740px] h-[340px] rounded-[24px] bg-purple mt-6 p-6 gap-6 bg-opacity-60'>
            <div className="flex w-[334px] h-[134px] rounded-[24px] border-[1px] hover:bg-[url('/second-flow/bg-card/tv_onepager.png')] hover:bg-cover">
                <button className='flex flex-1 rounded-[24px] p-6' onClick={() => TVOneP(o => !o)}>
                    <h1 className='text-left'>Tinyverse <br /> Onepager</h1>
                </button>
                <Popup open={openTVop} closeOnDocumentClick onClose={closeTV}>
                    <div className='flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center' onClick={closeTV}>
                        <PrismaZoom>
                            <Image src={Tinyverse} width={510} height={650} alt='Onepager' unoptimized />
                        </PrismaZoom>
                    </div>
                </Popup>
                <div className='flex flex-col h-28 -ml-16 mr-6 my-5 space-y-[14px]'>
                    <button className="w-10 h-10 bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" onClick={() => TVOneP(o => !o)}/>
                    <a href="https://www.google.com/" className="w-10 h-10 bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
                </div>
            </div>
            <div className='flex w-[334px] h-[134px] rounded-[24px] border-[1px] hover:bg-purple'>
                <button className='flex flex-1 rounded-[24px] p-6' onClick={() => FPOneP(o => !o)}>
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

								}}
							>
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
								</div>
								<div
									style={{
										flex: 1,
										overflow: 'hidden',
									}}
								>
									<Viewer fileUrl="financial-deck.pdf" defaultScale={SpecialZoomLevel.PageFit} plugins={[zoomPluginInstance]} theme="dark" />
								</div>
							</div>;
						</Worker>
					</div>
				</>
			}
                <div className='flex flex-col w-10 h-28 -ml-16 mr-6 my-5 space-y-[14px]'>
                    <button className="w-10 h-10 bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" onClick={() => FPOneP(o => !o)}/>
                    <a href="https://www.google.com/" className="w-10 h-10 bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
                </div>
            </div>
            <div className="flex w-[334px] h-[134px] rounded-[24px] border-[1px] hover:bg-[url('/second-flow/bg-card/tc_onepager.png')] hover:bg-cover">
                <button className='flex flex-1 rounded-[24px] p-6' onClick={() => TCOneP(o => !o)}>
                    <h1 className='text-left'>Tiny Colony <br /> Onepager</h1>
                </button>
                <Popup open={openTCop} closeOnDocumentClick onClose={closeTC}>
                    <div className='flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center' onClick={closeTC}>
                        <PrismaZoom>
                            <Image src={Tinycolony} width={510} height={650} alt='Onepager' unoptimized />
                        </PrismaZoom>
                    </div>
                </Popup>
                <div className='flex flex-col w-10 h-28 -ml-16 mr-6 my-5 space-y-[14px]'>
                    <button className="w-10 h-10 bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" onClick={() => TCOneP(o => !o)}/>
                    <a href="https://www.google.com/" className="w-10 h-10 bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
                </div>
            </div>
            <div className="flex w-[334px] h-[134px] rounded-[24px] border-[1px] hover:bg-[url('/second-flow/bg-card/token.png')] hover:bg-cover">
                <button className='flex flex-1 rounded-[24px] p-6' onClick={() => TTOneP(o => !o)}>
                    <h1 className='text-left'>Tiny Token <br /> Onepager</h1>
                </button>
                <Popup open={openTTop} closeOnDocumentClick onClose={closeTT}>
                    <div className='flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center' onClick={closeTT}>
                        <PrismaZoom>
                            <Image src={Tinytoken} width={510} height={650} alt='Onepager' unoptimized />
                        </PrismaZoom>
                    </div>
                </Popup>
                <div className='flex flex-col w-10 h-28 -ml-16 mr-6 my-5 space-y-[14px]'>
                    <button className="w-10 h-10 bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" onClick={() => TTOneP(o => !o)}/>
                    <a href="https://www.google.com/" className="w-10 h-10 bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
                </div>
            </div>
        </div>
    )
}