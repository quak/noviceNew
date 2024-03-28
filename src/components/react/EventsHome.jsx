import React, { useRef,useState,useEffect } from 'react';
import useFetch from "react-fetch-hook";
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';

    

export default function EventsHome() {

	const { isLoading, data, error } = useFetch("https://sfsn.si/wp-json/nre/v1/events/last/");

	const [pagenum, setPagenum] = useState(0);

	const SwiperNav = () => {
		const swiper = useSwiper();

		
		return (
			<div className="block -mt-8 absolute z-10 b-0 w-full">
				<div className="flex mt-auto w-full ">   
						
					
					<span className={(pagenum === 0 ? 'py-1 px-4 bg-papez-purple text-white mx-1 cursor-pointer ' : 'py-1 px-4 bg-white mx-1 cursor-pointer') + 'controls'} onClick={() => {swiper.slideTo(0);setPagenum(0); }}>1</span>
					<span className={(pagenum === 1 ? 'py-1 px-4 bg-papez-purple text-white mx-1 cursor-pointer ' : 'py-1 px-4 bg-white mx-1 cursor-pointer') + 'controls'} onClick={() => {swiper.slideTo(1);setPagenum(1); }}>2</span>
					<span className={(pagenum === 2 ? 'py-1 px-4 bg-papez-purple text-white mx-1 cursor-pointer ' : 'py-1 px-4 bg-white mx-1 cursor-pointer') + 'controls'} onClick={() => {swiper.slideTo(2);setPagenum(2); }}>3</span>
					<a href="/prireditve" className="py-1 px-6 bg-klopinj-blue text-white mx-1 ml-auto uppercase tracking-widels">Vse </a>
					
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
		
	if(isLoading) return "";
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

		
		<>
			<div className="block h-full">

			<Swiper
				spaceBetween={0}
				className="eventSwiper w-full"
				slidesPerView={1}
				onSlideChange={() => console.log('')}
				onSwiper={(swiper) => console.log("")}
				
				modules={[Pagination]}
				style={{ height: '100%'}}
				>
				{datax.map(function (page,l) {
					
					
					pagearr = Object.values(page);
					return (
						<SwiperSlide key={l} className="mr-px">
						

							{pagearr.map(function (day,k) {

								

								var borderclass = "border-b"
								if(k-(pagearr.length-1)==0){
									borderclass = ""
								}
								
								let printdate = day.printdate;
								let printweekday = day.printweekday;
								let events = day.events;


								
								
								return (
									
									<div key={k} className={`flex flex-row py-4 border-jepa-grey gap-6 `+ borderclass}>

										<div className="basis-1/5 flex">
											<div className="w-20">
												<span className="px-2 py-1 flex flex-col border border-black items-center">
													<span className="text-xs uppercase tracking-widedate mt-1 ml-1.5 uppercase">{printweekday}</span>
													<span className="text-4xl font-bold text-klopinj-blue">{printdate}</span>
												</span>
											</div>
										</div>
										<div className="basis-4/5">
											{events.map(function (event,kk) {
												
												let title = event.post_title;
												let slug = event.post_name;
												let place = event.venue;
												let city = event.city;
												let url = '/prireditev/'+slug;
												
												return (
													
													<a key={kk} href={url} className="mb-4 block">
														<p className="text-papez-purple tracking-widedate uppercase font-bold text-lg">{city}</p>
														<p className="font-serif">{title}</p>
													</a>
													
												)}
											)}
										</div>
										
									</div>
								)
							})}
						</SwiperSlide>
					)
				
			})}

			<SwiperNav></SwiperNav>
				</Swiper>
				
				</div>


		</>
	);
}
