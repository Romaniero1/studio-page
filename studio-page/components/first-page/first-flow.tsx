import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import Logo from '/public/first-flow/logo.png'

export const FirstFlow = () => {
	const { register, handleSubmit } = useForm();
	const onSubmit = (data: any) => console.log(data);

	return (
		<header className="flex justify-center items-center w-screen h-screen overflow-hidden bg-[url('/first-flow/bg.gif')] bg-cover">
				<div className='flex flex-col items-center'>
					<Image src={Logo} width={600} height={348} alt='Logo'/>
					<form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center">
							<input
								{...register('code')}
								className="w-[340px] h-[60px] rounded-[10px] px-4 text-black bg-white bg-no-repeat bg-cover focus:outline-none"
								placeholder="Input your code"
							/>
					<Link href='/main'>
						<button className='outline outline-0 w-[235px] h-[60px] mt-10 rounded-[16px] bg-purple text-white hover:bg-white hover:text-purple active:outline-white active:outline-4'>
							<h2>Let’s go</h2>
						</button>
					</Link>
					</form>
				</div>
		</header>
	);
};
