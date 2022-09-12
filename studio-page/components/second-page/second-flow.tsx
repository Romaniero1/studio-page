import { faDiscord, faTwitter, faInstagram, faMediumM, faYoutube, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import "react-slideshow-image/dist/styles.css";
import Logo from '/public/second-flow/logo.svg';
import { Onepagers } from './onepagers-card/onepagers';
import { Slider } from './slide-card';
import { useState } from 'react';
import Popup from 'reactjs-popup';
import Telegram from '/public/second-flow/telegram.svg';
import Mail from '/public/second-flow/mail.svg';
import Web from '/public/second-flow/website.svg';


export const SecondFlow = () => {
	const [openMM, setMM] = useState(false);
	const closeMM = () => setMM(false);
	const [openGP, setGP] = useState(false);
	const closeGP = () => setGP(false);
	return (
		<header className="w-screen lg:h-[1024px] bg-[url('/first-flow/bg.gif')] bg-scroll sm:bg-cover">
			<div className='flex flex-col items-center mx-[120px]'>
				<div className='flex flex-col md:flex-row  items-center md:items-start lg:items-center md:space-x-[120px] xl:space-x-[340px] pt-[30px]'>
					<div className='flex w-[240px] md:w-[340px] xl:w-full'>
						<Image src={Logo} width={349} height={29} alt='Logo' layout='fixed' />
					</div>
					<div className='flex flex-col sm:flex-row md:flex-col lg:flex-row mt-[50px] sm:mt-8 md:mt-0 sm:space-x-12 md:space-x-0 md:space-y-3 lg:space-y-3'>
						<a href="https://calendly.com/tinyverse-studios/tvs-pitch">
							<button className='w-[235px] h-[60px] bg-purple rounded-[16px]'>
								<h2>Book a meeting</h2>
							</button>
						</a>
						<Popup
							trigger={
								<button className='w-[235px] h-[60px] border-white border-[1px] rounded-[16px] mt-4 sm:mt-0 xl:ml-8 hover:text-purple hover:border-0 hover:bg-white'>
									<h2>Contact us</h2>
								</button>
							}
							position="bottom center"
							closeOnDocumentClick
						>
							<div className='w-[235px] h-[135px] bg-white rounded-[24px] p-5 text-purple'>
								<h4 className=''>Arshia Navabi - CEO</h4>
								<div className='flex flex-col pt-3 space-y-1'>
									<div className='flex items-center space-x-3'>
										<Image src={Mail} width={24} height={24} layout='fixed' alt="image" />
										<a href='mailto:arshia@tinycolony.io'><h5>arshia@tinycolony.io</h5></a>
									</div>
									<div className='flex items-center space-x-3'>
										<Image src={Telegram} width={24} height={24} layout='fixed' alt="image" />
										<a href='https://t.me/metavabi'><h5>@metavabi</h5></a>
									</div>
								</div>
							</div>
						</Popup>
					</div>
				</div>
				<div className='flex flex-col lg:flex-row mt-10 sm:mt-8 xl:mt-[30px]'>
					<div className='flex flex-col items-center '>
						<Slider />
						<Onepagers />
					</div>
					<div className='flex flex-col sm:flex-row lg:flex-col ml-0 xl:ml-4 mt-[30px] sm:mt-8 xl:mt-0 items-center sm:space-x-[28px] lg:space-x-0 sm:pb-10 lg:pb-0'>
						<div className='flex flex-col w-[272px] md:w-[336px] xl:w-[436px] h-[220px] sm:h-[290px] xl:h-[314px] rounded-[24px] bg-purple bg-opacity-60'>
							<button className="flex w-[272px] md:w-[336px] xl:w-[436px] h-[200px] xl:h-[314px] rounded-[24px] sm:rounded-b-none lg:rounded-[24px] bg-center bg-[url('/second-flow/gameplay(1).gif')] bg-contain sm:bg-cover bg-no-repeat pt-20 justify-center" onClick={() => setGP(o => !o)}>
							</button>
							<Popup open={openGP} closeOnDocumentClick onClose={closeGP}>
								<div className='flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center' onClick={closeGP}>
									<iframe
										className="flex h-fit sm:h-[360px] md:h-[420px] xl:h-[463px] w-[272px] sm:w-[576px] md:w-[704px] xl:w-[760px]"
										src="https://www.youtube.com/embed/DGDHQNufgwY?controls=0&modestbranding=1&showinfo=0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</div>
							</Popup>
							<div className='flex justify-between px-4 xl:px-10 items-baseline space-x-6 xl:space-x-10 -mt-8 sm:mt-[28px] xl:-mt-12'>
								<a
									href='https://discord.com/invite/VjCHsa3WXm'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faDiscord} className='h-7 w-7' />
								</a>
								<a
									href='https://twitter.com/TinyColonyGame'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faTwitter} className='h-7 w-7' />
								</a>
								<a
									href='https://www.instagram.com/tinycolonygame/'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faInstagram} className='h-7 w-7' />
								</a>
								<a
									href='https://medium.com/@TinyColonyGame'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faMediumM} className='h-7 w-7' />
								</a>
								<a
									href='https://tinycolony.io'
									target='_blank'
									rel='noreferrer'
								>
									<Image src={Web} width={24} height={24} layout='fixed' alt="logo" />
								</a>
							</div>
						</div>
						<div className='flex flex-col pb-10 sm:pb-0'>
							<button className="flex flex-col w-[272px] md:w-[336px] xl:w-[436px] h-[200px] xl:h-[240px] rounded-[24px] bg-[url('/second-flow/mayhem(1).gif')] bg-cover bg-center mt-6 sm:mt-0 lg:mt-6 justify-center text-center" onClick={() => setMM(o => !o)}>
							</button>
							<Popup open={openMM} closeOnDocumentClick onClose={closeMM}>
								<div className='flex flex-col fixed inset-0 w-screen h-screen bg-black bg-opacity-80 justify-center items-center' onClick={closeMM}>
									<iframe
										className="flex h-fit sm:h-[360px] md:h-[420px] xl:h-[463px] w-[272px] sm:w-[576px] md:w-[704px] xl:w-[760px]"
										src="https://www.youtube.com/embed/DGDHQNufgwY?controls=0&modestbranding=1&showinfo=0"
										allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
										allowFullScreen
									></iframe>
								</div>
							</Popup>
							<div className='w-[272px] xl:w-[436px] h-[170px] sm:h-[86px] md:w-[336px] lg:h-[182px] rounded-[24px] bg-purple mt-6 sm:mt-1 lg:mt-6 bg-opacity-60'>
								<div className='flex items-center w-[240px] sm:w-[248px] md:w-[312px] xl:w-[388px] h-[134px] sm:h-[62px] lg:h-[134px] m-[16px] sm:m-3 xl:m-6 px-6 rounded-[24px] border-[1px] hover:bg-purple'>
									<a href="https://www.youtube.com/channel/UC8c545SX_PGCD7jqPTEU_yQ/videos" className='flex flex-1 rounded-[24px]'>
										<div className='flex flex-col sm:flex-row space-x-2'>
											<h1>More</h1>
											<h1>videos</h1>
										</div>
										
									</a>
									<a href="https://www.youtube.com/channel/UC8c545SX_PGCD7jqPTEU_yQ/videos" className="flex w-10 h-10 sm:w-8 sm:h-8 md:w-10 md:h-10 bg-cover bg-[url('/second-flow/video_button_UA.svg')] hover:bg-[url('/second-flow/video_button_A.svg')]" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};