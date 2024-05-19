import React from 'react'

const ModalVidas = ({onClick,open}) => {
	return (
		<React.Fragment>
			<div className="fixed top-0 left-0 w-screen h-screen bg-[#00000060] justify-center items-center z-[1]" style={{ display:open? 'flex' : 'none' }}>
				<div className="relative w-[80%] h-[90%] rounded-[30px] shadow-md bg-white flex-col px-[20px] 2xl:w-[60%] 2xl:h-[60%]">
					<h1 className="absolute top-[18px] right-[3%]" onClick={onClick}>X</h1>
					<div className='flex gap-[20px] items-center h-full md:flex-row flex-col overflow-y-auto md:justify-center justify-start md:pt-[0px] pt-[50px] '>
						<div className="px-[5px] mb-[20px] w-full flex justify-center">
							<div className="group relative shadow-md max-w-[350px] w-full">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-tl-[10px] rounded-tr-[10px] bg-white lg:aspect-none group-hover:opacity-75">
									<img
										src="https://www.elearningclinicalbmxsystems.com/imagen.png"
										alt="Reference"
										className="w-full object-cover object-center h-[244px] lg:w-full"
									/>
								</div>
								<div className="p-4  flex justify-between bg-white">
									<div>
										<h3 className="text-2xl text-[#00427f]">
											<a href={`/cursos/`}>VIDAS®</a>
										</h3>
										<p className="mt-1 text-sm text-gray-500">
											7 modulos
										</p>
									</div>
								</div>

								<div
									className="buttom"
									onClick={() =>
										(window.location.href = `/cursos-forma/vidas`)
									}>
									Adquirir
								</div>
							</div>
						</div>
						<div className="px-[5px] mb-[20px] w-full flex justify-center">
							<div className="group relative shadow-md max-w-[350px] w-full">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-tl-[10px] rounded-tr-[10px] bg-white lg:aspect-none group-hover:opacity-75">
									<img
										src="https://www.elearningclinicalbmxsystems.com/imagen.png"
										alt="Reference"
										className="w-full object-cover object-center h-[244px] lg:w-full"
									/>
								</div>
								<div className="p-4  flex justify-between bg-white">
									<div>
										<h3 className="text-2xl text-[#00427f]">
											<a href={`/cursos/`}>MINIVIDAS®</a>
										</h3>
										<p className="mt-1 text-sm text-gray-500">
											7 modulos
										</p>
									</div>
								</div>

								<div
									className="buttom"
									onClick={() =>
										(window.location.href = `/cursos-forma/minividas`)
									}>
									Adquirir
								</div>
							</div>
						</div>
						<div className="px-[5px] mb-[20px]  w-full flex justify-center">
							<div className="group relative shadow-md max-w-[350px] w-full">
								<div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-tl-[10px] rounded-tr-[10px] bg-white lg:aspect-none group-hover:opacity-75">
									<img
										src="https://www.elearningclinicalbmxsystems.com/imagen.png"
										alt="Reference"
										className="w-full object-cover object-center h-[244px] lg:w-full"
									/>
								</div>
								<div className="p-4  flex justify-between bg-white">
									<div>
										<h3 className="text-2xl text-[#00427f]">
											<a href={`/cursos/`}>VIDAS® 3</a>
										</h3>
										<p className="mt-1 text-sm text-gray-500">
											7 modulos
										</p>
									</div>
								</div>

								<div
									className="buttom"
									onClick={() =>
										(window.location.href = `/cursos-forma/vidas3`)
									}>
									Adquirir
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	)
}

export default ModalVidas
