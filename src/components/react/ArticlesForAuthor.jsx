import React, { useState } from 'react';
import useFetch from "react-fetch-hook";

export default function ArticlesForAuthor(avtorslug) {
	
   

	const requestOptions = {
		method: 'POST',
		headers: {"Content-Type": "application/json"},
		body: JSON.stringify(avtorslug)
	  };

	  //cache: 1000 * 60 * 5,
	const { isLoading, data, error } = useFetch("https://sfsn.si/wp-json/nre/v1/getpostsforauthor",requestOptions);
	
	let datax = "";
	let featured = "";
	let events = "";
	let days = "";
	let actevents = "";
	
	try {
		if(data!=undefined){
			
			datax = JSON.parse(data);
		}
    } catch (e) {
		datax =  ""
    }	
		
	if(isLoading) return "";
	if(error) return "err";

	return (		
		<>
<div className="mx-auto lg:max-w-screen-lg max-w-7xl 2xl:max-w-nov-width grid grid-cols-2 md:grid-cols-3 grid-rows-2 md:grid-rows-1 gap-12">
					{data.map(function (post,k) {
						let url = '/'+post?.cat?.slug+'/'+post?.post_name;
						
							return (
								<a key={k} href={url} className="h-full flex col-span-1 relative self-start  overflow-hidden" rel="">
									<article className="border-b border-black flex flex-col justify-between">
										<div>
											<img className="ease-out duration-4000 transition-all hover:scale-101"   src={post?.imageurl} />
											<div className="flex flex-wrap gap-2 justify-start mt-2">
												<span className="uppercase px-2 bg-papez-purple text-white text-xl tracking-widels">{post?.cat?.name}</span>
												<span className="uppercase px-2 bg-klopinj-blue text-white text-xl tracking-widels">Šentprimož</span>
											</div>

											<h2 className="text-2xl my-2 text-ellipsis line-clamp-3 font-bold">{post.post_title}</h2>						
											<p  className="text-base hidden sm:block line-clamp-2 font-serif mb-4"></p>
										</div>
										<div className="flex flex-col sm:flex-row gap-1 justify-between mb-2">
											<span className="uppercase flex flex-row items-center text-klopinj-blue tracking-widels">
												<img className="" src="/tmpimages/svgs/bookmark.svg"/>
												{post.actdate}
											</span>

											<span className="uppercase hidden sm:flex items-center tracking-widels">
												<img className=" max-h-6" src="/tmpimages/svgs/open.svg"/>
											</span>
										</div>
									</article>
								</a>
							);
						
					})}
				
				</div>
			


		</>
	);
}
