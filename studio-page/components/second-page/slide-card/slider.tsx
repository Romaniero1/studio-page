import { Slide } from 'react-slideshow-image';
import Image from 'next/image';
import { useState } from 'react';
import { Worker } from '@react-pdf-viewer/core';
import { Viewer, SpecialZoomLevel } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import { zoomPlugin } from '@react-pdf-viewer/zoom';
import '@react-pdf-viewer/zoom/lib/styles/index.css';
import { getFilePlugin } from '@react-pdf-viewer/get-file';



import Picture1 from '/public/second-flow/slider/1.png';
import Picture2 from '/public/second-flow/slider/2.png';
import Picture3 from '/public/second-flow/slider/3.png';
import Picture4 from '/public/second-flow/slider/4.png';
import Picture5 from '/public/second-flow/slider/5.png';
import Picture6 from '/public/second-flow/slider/6.png';
import Picture7 from '/public/second-flow/slider/7.png';
import Picture8 from '/public/second-flow/slider/8.png';
import Picture9 from '/public/second-flow/slider/9.png';
import Picture10 from '/public/second-flow/slider/10.png';
import Picture11 from '/public/second-flow/slider/11.png';
import Picture12 from '/public/second-flow/slider/12.png';
import Picture13 from '/public/second-flow/slider/13.png';
import Picture14 from '/public/second-flow/slider/14.png';
import Picture15 from '/public/second-flow/slider/15.png';
import Picture16 from '/public/second-flow/slider/16.png';
import Picture17 from '/public/second-flow/slider/17.png';
import Picture18 from '/public/second-flow/slider/18.png';
import Picture19 from '/public/second-flow/slider/19.png';
import Picture20 from '/public/second-flow/slider/20.png';
import Picture21 from '/public/second-flow/slider/21.png';
import Picture22 from '/public/second-flow/slider/22.png';
import Picture23 from '/public/second-flow/slider/23.png';
import Picture24 from '/public/second-flow/slider/24.png';
import Picture25 from '/public/second-flow/slider/25.png';
import Picture26 from '/public/second-flow/slider/26.png';
import Picture27 from '/public/second-flow/slider/27.png';
import Picture28 from '/public/second-flow/slider/28.png';
import Picture29 from '/public/second-flow/slider/29.png';
import Picture30 from '/public/second-flow/slider/30.png';
import Picture31 from '/public/second-flow/slider/31.png';

export const Slider = () => {
	const slideImages = [Picture1, Picture2, Picture3, Picture4, Picture5, Picture6, Picture7, Picture8, Picture9, Picture10,
		Picture11, Picture12, Picture13, Picture14, Picture15, Picture16, Picture17, Picture18, Picture19, Picture20, Picture21,
		Picture22, Picture23, Picture24, Picture25, Picture26, Picture27, Picture28, Picture29, Picture30, Picture31
	];
	const buttonStyle = {
		width: "15px",
		background: 'none',
		border: '0px',
		fill: "white",
		margin: '10px',
	};
	const properties = {
		duration: 2000,
		autoplay: true,
		transitionDuration: 800,
		arrows: true,
		infinite: true,
		easing: "ease",
		nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14"> <path d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" /></svg></button>,
		prevArrow: <button className='rotate-180' style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14"> <path d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z" /></svg></button>
	};
	const closeModal = () => setOpen(false);
	const [open, setOpen] = useState(false);

    const zoomPluginInstance = zoomPlugin();
    const { ZoomInButton, ZoomOutButton, ZoomPopover } = zoomPluginInstance;
    const getFilePluginInstance = getFilePlugin();
    const { DownloadButton } = getFilePluginInstance;

	return (
		<div className='w-[272px] h-[180px] sm:w-[576px] sm:h-[360px] md:w-[704px] xl:w-[740px] xl:h-[420px] rounded-[24px}'>
			<Slide {...properties}>
				{slideImages.map((each, index) => (
					<button key={index} className="each-slide" onClick={() => setOpen(o => !o)}>
						<Image src={each} width={740} height={420} alt="sample" className='rounded-[24px] lazy' />
					</button>
				))}
			</Slide>
			{open &&
				<>
					<div className="flex flex-col fixed  inset-0 z-10 bg-black bg-opacity-80 justify-center items-center" onClick={closeModal} />
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
									<DownloadButton />
								</div>
								<div
									style={{
										flex: 1,
										overflow: 'hidden',
									}}
								>
									<Viewer fileUrl="deck.pdf" defaultScale={SpecialZoomLevel.PageFit} plugins={[zoomPluginInstance,getFilePluginInstance]} theme="dark" />
								</div>
							</div>
						</Worker>
					</div>
				</>
			}
		</div>
	)
}