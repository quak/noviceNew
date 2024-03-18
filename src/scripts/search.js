
document.addEventListener('astro:page-load', () => {

    const searchmenu = document.getElementById("searchmenu");
    const searchopenbutton = document.getElementById("searchopenbutton");

    const searchclosebutton = document.getElementById("searchclosebutton");
    if(searchopenbutton!=null){
        searchopenbutton.addEventListener("click", () => {
            searchmenu.classList.toggle("-translate-y-full");

            document.getElementById("searchfield").focus();
            document.getElementById("searchfield").select();
        });
    }
    if(searchclosebutton!=null){
        searchclosebutton.addEventListener("click", () => {
            searchmenu.classList.toggle("-translate-y-full");
        });
    }

    const sf = document.getElementById("searchfield");
    let searchterm = "";
    let res;
    let posts;
    if(sf){
        sf.addEventListener ("keyup", function () {
            searchterm = sf.value;
            
            document.getElementById("searchtermrepeat").innerHTML=searchterm;
            
            if(searchterm.length>2){
                getData(searchterm);
            }
        });
        sf.addEventListener ("paste", function () {
            searchterm = sf.value;
            
            document.getElementById("searchtermrepeat").innerHTML=searchterm;
    
            if(searchterm.length>2){
                getData(searchterm);
            }
        });
        sf.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                searchterm = sf.value;
                getData(searchterm);
            }
        });
    }
    

    const magsearch = document.getElementById("magsearch");
    if(sf){
        magsearch.addEventListener ("click", function () {
            searchterm = sf.value;
            document.getElementById("searchtermrepeat").innerHTML=searchterm;
    
            getData(searchterm);
            
        });
    }
    


});


async function getData(searchterm) {
    try {

        //let response = await fetch("https://sfsn.si/wp-json/wp/v2/search/?search="+searchterm);
        //let data = await response.json();


        const datag = await getDataG(searchterm);
        
    
        
        document.getElementById("searchresults").innerHTML="";
        document.getElementById("searchresultswrapper").classList.remove("hidden");
        let articlehtml = "";

        {datag.map(function (article,k) {
                    
            
            articlehtml += `
                    <a href="`+article?.node?.uri+`" class=" mb-6 pb-2 inline-block animate-in fade-in zoom-in">
                        <article class=" flex gap-4 border-b pb-4 border-iskanje-dark-pes">
                            <div class="overflow-hidden basis-1/3">
                                <img class="ease-out duration-4000 transition-all hover:scale-103" src=""`+article.node?.featuredImage?.node?.sourceUrl+`" srcset="`+article?.node?.featuredImage?.node?.srcSet+`"/>
                            </div>
                            <div class="basis-2/3">
                                <div class="flex flex-wrap gap-2">
                                    <span class="uppercase px-2 bg-papez-purple text-white text-xl tracking-widels">Glasba</span>
                                    <span class="uppercase px-2 bg-klopinj-blue text-white text-xl tracking-widels">Šentprimož</span>
                                </div>
                                <span class="text-papez-purple uppercase text-lg inline-block mb-1 tracking-widedate hidden">`+article.node?.categories?.nodes[0].slug+`</span>
                                <h2 class="mt-4 text-4xl font-bold line-clamp-2 text-ellipsis">`+article?.node?.title+`</h2>	
                                <div class=" text-lg mt-2 line-clamp-2 text-ellipsis font-serif">`+article?.node?.excerpt+`</div>
                            </div>
                        
                        </article>
                    </a>
                    `;
                                    
        })}
        document.getElementById("searchresults").innerHTML = articlehtml;

        /**
         * 
         * 
         * {data.map(function (article,k) {
                    
            
            articlehtml += `
                    <a href="`+article.url+`" class=" mb-6 pb-2 inline-block animate-in fade-in zoom-in">
                        <article class=" flex gap-4 border-b pb-4 border-iskanje-dark-pes">
                            <div class="overflow-hidden basis-1/3">
                                <img class="ease-out duration-4000 transition-all hover:scale-103"/>
                            </div>
                            <div class="basis-2/3">
                                <span class="text-papez-purple uppercase text-lg inline-block mb-1 tracking-widedate">TEST</span>
                                <h2 class=" text-3xl  font-bold line-clamp-2 text-ellipsis">`+article.title+`</h2>	
                                <p class=" text-base mt-2 font-serif line-clamp-2 text-ellipsis">asdasd</p>
                            </div>
                        
                        </article>
                    </a>
                    `;
                                    
        })}
        document.getElementById("searchresults").innerHTML = articlehtml;
         */
        

        //return data;
    } catch(error) {
        throw Error(`error:${error}`);
    }
}

async function getDataG(searchterm){
    const response = await fetch("https://sfsn.si/graphql",
            {
                method: 'POST',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                query: `    {
                    contentNodes(where: {search: "${searchterm}"}) {
                    edges {
                        node {
                        link
                        slug
                        ... on Post {
                            id
                            title
                            blocks {
                            name
                            attributesJSON
                            dynamicContent
                            originalContent
                            isDynamic
                            }
                            title
                            excerpt
                            content
                            categories {
                                nodes {
                                    slug
                                    name
                                }
                            }
                            featuredImage {
                                node {
                                    link
                                    mediaItemUrl
                                    altText
                                    description
                                    title
                                    srcSet(size: IMG33)
                                    sourceUrl(size: IMG33)
                                }
                            }
                            uri
                        }
                        }
                    }
                    }
                }`,
                }),
            }).then(data=>data.json())

            
            const posts = response?.data?.contentNodes?.edges;
            return posts;
}