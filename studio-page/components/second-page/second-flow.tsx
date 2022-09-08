import { faDiscord, faTwitter, faInstagram, faMediumM, faYoutube, faTiktok, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import { Slide } from 'react-slideshow-image';
import "react-slideshow-image/dist/styles.css";
import Logo from '/public/second-flow/logo.svg';
import Picture from '/public/second-flow/bg-card/tv_onepager.png';
import PictureT from '/public/second-flow/bg-card/tc_onepager.png';


export const SecondFlow = () => {
	const slideImages = [Picture, PictureT
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
		nextArrow: <button style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14"> <path d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z"/></svg></button>,
		prevArrow: <button className='rotate-180' style={{ ...buttonStyle }}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 14"> <path d="M6.660,8.922 L6.660,8.922 L2.350,13.408 L0.503,11.486 L4.813,7.000 L0.503,2.515 L2.350,0.592 L8.507,7.000 L6.660,8.922 Z"/></svg></button>
	};
	return (
		<header className="w-screen h-[1024px] bg-[url('/first-flow/bg.gif')] bg-cover">
			<div className='flex flex-col items-center mx-[120px]'>
				<div className='flex items-center space-x-[340px] pt-[30px]'>
					<div className='flex'>
						<Image src={Logo} width={349} height={29} alt='Logo' layout='fixed' />
					</div>
					<div className='flex flex-row'>
						<a href="/">
							<button className='w-[235px] h-[60px] bg-purple rounded-[16px]'>
								<h2>Book a meeting</h2>
							</button>
						</a>
						<a href="">
							<button className='w-[235px] h-[60px] border-white border-[1px] rounded-[16px] ml-8'>
								<h2>Contact us</h2>
							</button>
						</a>
					</div>
				</div>
				<div className='flex flex-row mt-[30px]'>
					<div>
						<div className='w-[740px] h-[420px] rounded-[24px}'>
							<Slide {...properties}>
								{slideImages.map((each, index) => (
									<div key={index} className="each-slide">
										<Image src={each} width={740} height={420} alt="sample" className='rounded-[24px] lazy' />
									</div>
								))}
							</Slide>
						</div>
						<div className='grid grid-cols-2 w-[740px] h-[340px] rounded-[24px] bg-purple mt-6 p-6 gap-6 bg-opacity-60'>
							<div className="flex w-[334px] h-[134px] rounded-[24px] border-[1px] hover:bg-[url('/second-flow/bg-card/tv_onepager.png')] hover:bg-cover">
								<a href="/" className='flex flex-1 rounded-[24px] p-6'>
									<h1>Tinyverse <br /> Onepager</h1>
								</a>
								<div className='flex flex-col h-28 -ml-16 mr-6 my-5 space-y-[14px]'>
									<a href="/" className="w-10 h-10 bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" />
									<a href="/" className="w-10 h-10 bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
								</div>
							</div>
							<div className='flex w-[334px] h-[134px] rounded-[24px] border-[1px] hover:bg-purple'>
								<a href="/" className='flex flex-1 rounded-[24px] p-6'>
									<h1>Financial <br /> Projections</h1>
								</a>
								<div className='flex flex-col w-10 h-28 -ml-16 mr-6 my-5 space-y-[14px]'>
									<a href="/" className="w-10 h-10 bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" />
									<a href="/" className="w-10 h-10 bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
								</div>
							</div>
							<div className="flex w-[334px] h-[134px] rounded-[24px] border-[1px] hover:bg-[url('/second-flow/bg-card/tc_onepager.png')] hover:bg-cover">
								<a href="/" className='flex flex-1 rounded-[24px] p-6'>
									<h1>Tiny Colony <br /> Onepager</h1>
								</a>
								<div className='flex flex-col w-10 h-28 -ml-16 mr-6 my-5 space-y-[14px]'>
									<a href="/" className="w-10 h-10 bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" />
									<a href="/" className="w-10 h-10 bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
								</div>
							</div>
							<div className="flex w-[334px] h-[134px] rounded-[24px] border-[1px] hover:bg-[url('/second-flow/bg-card/token.png')] hover:bg-cover">
								<a href="/" className='flex flex-1 rounded-[24px] p-6'>
									<h1>Tiny Token <br /> Onepager</h1>
								</a>
								<div className='flex flex-col w-10 h-28 -ml-16 mr-6 my-5 space-y-[14px]'>
									<a href="/" className="w-10 h-10 bg-[url('/second-flow/open_button_UA.svg')] hover:bg-[url('/second-flow/open_button_A.svg')]" />
									<a href="/" className="w-10 h-10 bg-[url('/second-flow/download_button_UA.svg')] hover:bg-[url('/second-flow/download_button_A.svg')]" />
								</div>
							</div>
						</div>
					</div>
					<div className='flex flex-col ml-4'>
						<div className='flex flex-col w-[436px] h-[314px] rounded-[24px] bg-purple'>
							<a href="/" className="flex w-[436px] h-[314px] rounded-[24px] bg-[url('/second-flow/gameplay.gif')] bg-contain bg-no-repeat pt-16 justify-center">
								<p className='uppercase gif-text text-center'>
									Tiny Colony <br /> gameplay
								</p>
							</a>
							<div className='flex justify-between px-10 items-baseline -mt-12'>
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
									href='https://www.linkedin.com/company/tiny-colony'
									target='_blank'
									rel='noreferrer'
								>
									<FontAwesomeIcon icon={faLinkedin} className='h-7 w-7' />
								</a>
							</div>
						</div>
						<div className='flex flex-col'>
							<a href="/" className="flex flex-col w-[436px] h-[240px] rounded-[24px] bg-[url('/second-flow/mayhem.gif')] bg-cover mt-6 justify-center">
								<p className='uppercase gif-text text-center mt-4'>
									Mechnized mayhem
								</p>
								<p className='gif-text text-center uppercase text-[30px]'>
									teaser
								</p>
							</a>
							<div className='w-[436px] h-[182px] rounded-[24px] bg-purple mt-6 bg-opacity-60'>
								<div className='flex items-center w-[388px] h-[134px] m-6 px-6 rounded-[24px] border-[1px] hover:bg-purple'>
									<a href="/" className='flex flex-1 rounded-[24px]'>
										<h1>More <br /> videos</h1>
									</a>
									<a href="/" className="flex w-10 h-10 bg-[url('/second-flow/video_button_UA.svg')] hover:bg-[url('/second-flow/video_button_A.svg')]" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</header>
	);
};