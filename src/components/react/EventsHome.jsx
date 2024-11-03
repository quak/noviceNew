import React, { useRef,useState,useCallback } from 'react';
import useFetch from "react-fetch-hook";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination,Navigation } from 'swiper/modules';
import 'swiper/css';

    

export default function EventsHome() {

	const requestOptions = {
		method: 'POST',
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify("")
	  };
	const { isLoading, data, error } = useFetch("https://splet.novice.at/wp-json/nre/v1/events/lastev/",requestOptions);

	const [pagenum, setPagenum] = useState(0);
	const [realIndex, setIndex] = useState(0);
	const swiperx = useSwiper();
	const [isEnd, setIsEnd] = useState(false);

	const [_, setInit] = useState(false)
	const prevRef = useRef(null);
	const nextRef = useRef(null);
	const sliderRef = useRef(null);
		

	const SwiperNav = () => {
		const swiper = useSwiper();

		return (
			<div className="block lg:-mt-8 relative lg:absolute z-10 b-0 w-full ">
				<div className="flex mt-auto w-full ">   
						
					
					<span className={(pagenum === 0 ? 'py-1 px-4 bg-papez-purple text-white mx-1 cursor-pointer ' : 'py-1 px-4 bg-white mx-1 cursor-pointer') + 'controls'} onClick={() => {swiper.slideTo(0);setPagenum(0); }}>1</span>
					<span className={(pagenum === 1 ? 'py-1 px-4 bg-papez-purple text-white mx-1 cursor-pointer ' : 'py-1 px-4 bg-white mx-1 cursor-pointer') + 'controls'} onClick={() => {swiper.slideTo(1);setPagenum(1); }}>2</span>
					<span className={(pagenum === 2 ? 'py-1 px-4 bg-papez-purple text-white mx-1 cursor-pointer ' : 'py-1 px-4 bg-white mx-1 cursor-pointer') + 'controls'} onClick={() => {swiper.slideTo(2);setPagenum(2); }}>3</span>
					<a href="/prireditve" className="py-1 px-6 bg-klopinj-blue text-white ml-auto uppercase tracking-widels">Vse prireditve</a>
					
				</div>
			</div>
		);
	  };
	

	let datax = "";
	try {
		if(data!=undefined){
			datax = JSON.parse(data);
		}
        
    } catch (e) {
		datax = data;
    }	
		
	if(isLoading) return (
		<>
			<div className="flex justify-center h-full items-center">
				<img className='w-16 h-16' src="/tmpimages/loader.gif"/>
			</div>
		</>
		);
	if(error) return "err";
	let pagearr=new Array();
	let pagearrr=new Array();

	const pagination = {
		bulletClass : "swiper-pagination-bulletx",
		clickable: true,
		renderBullet: function (index, className) {
		  return '<span class="' + className + ' py-1 px-4 bg-papez-purple text-white mx-1">' + (index + 1) + '</span>';
		},
	  };

	return (

		
		
			<div className="flex flex-col h-full relative">
				 
				<div className="flex flex-row border-b-2 border-dashed border-jepa-grey border-dashed justify-between items-center mb-2 group">
					<span className="cursor-pointer" ref={prevRef} disabled={realIndex == 0} onClick={() => { setIndex(sliderRef.current?.swiper.realIndex);setIsEnd(sliderRef.current?.swiper.isEnd);setPagenum(sliderRef.current?.swiper.realIndex);}}>
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left group-hover:text-papez-purple group-hover:h-5 group-hover:w-5" viewBox="0 0 16 16"> <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" ></path> </svg>
					</span>
					
					<h2 className="col-span-2 font-light text-4xl text-klopinj-blue uppercase text-center leading-novice">Prireditve</h2>

					<span className="cursor-pointer" ref={nextRef} disabled={isEnd} onClick={() => {setIndex(sliderRef.current?.swiper.realIndex);setPagenum(sliderRef.current?.swiper.realIndex);setIsEnd(sliderRef.current?.swiper.isEnd)}}> 
						<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right group-hover:text-papez-purple group-hover:h-5 group-hover:w-5" viewBox="0 0 16 16" > <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z" ></path> </svg>
					</span>
				</div>
				{isLoading ? <img src="/tmpimages/loader.gif" alt="loading..." /> : null}
				<div className="flex-1">
				<Swiper
					spaceBetween={10}
					className=" w-full gap-2 lg:h-full"
					slidesPerView={1}
					
					modules={[Pagination,Navigation]}
					style={{ }}
					ref={sliderRef}
					onInit={(swiper) => {
						swiper.params.navigation.prevEl = prevRef.current;
						swiper.params.navigation.nextEl = nextRef.current;
						swiper.navigation.init();
						swiper.navigation.update();
          			}}
				>
					
					<div>
					
					{datax.map(function (page,l) {
						
						
						pagearr = Object.values(page);
						return (
							<SwiperSlide key={l} className="w-full">
							

								{pagearr.map(function (day,k) {

									

									var borderclass = "border-b"
									if(k-(pagearr.length-1)==0){
										borderclass = ""
									}
									
									let printdate = day.printdate;
									let printweekday = day.printweekday;
									let events = day.events;


									
									
									return (
										
										<div key={k} className={`flex flex-row py-3 border-jepa-grey gap-6 `+ borderclass}>

											<div className="basis-1/5 flex">
												<div className="w-20">
													<span className="px-2 py-1 flex flex-col border border-black items-center bg-white">
														<span className="text-xs uppercase tracking-widedate mt-1 ml-1.5 uppercase">{printweekday}</span>
														<span className="text-4xl font-bold text-klopinj-blue">{printdate}</span>
													</span>
												</div>
											</div>
											<div className="basis-4/5 flex flex-col gap-4">
												{events.map(function (event,kk) {
													
													let title = event.post_title;
													let slug = event.post_name;
													let place = event.venue;
													let city = "";
													let citysi = "";
													let cityat = "";
													if(event?.acfcity!=false){
														 citysi = event?.acfcity?.slovensko_ime;
														 cityat = event?.acfcity?.nemsko_ime;
													}
													
													let url = '/prireditev/'+slug;
													
													
													return (
														
														<a key={kk} href={url} className=" block bg-white p-2">
															
															<div className="group relative min-h-5">
																<span className='block uppercase px-2 bg-klopinj-blue  text-white tracking-widels text-sm absolute left-0 bottom-0 text-nowrap ease-out duration-700 transition-all opacity-100 group-hover:opacity-0 z-10 '>{citysi}</span>
																<span className='block uppercase px-2 bg-klopinj-blue text-white tracking-widels text-sm absolute left-0 bottom-0 text-nowrap opacity-0 duration-700 transition-all group-hover:opacity-100'>{cityat}</span>
															</div>
															<p className="font-serif line-clamp-2 md:line-clamp-1 lg:line-clamp-2">{title}</p>
														</a>
														
													)}
												)}
											</div>
											
										</div>
									)
								})}
							</SwiperSlide>
						)})
					}</div>

				<SwiperNav className="mt-2"></SwiperNav>
					</Swiper></div>
					
				</div>


		
	);
}
