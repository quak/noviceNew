import dotenv from 'dotenv';

dotenv.config();


export async function getChildren() {
                                   
    const response = await fetch("https://sfsn.si/wp-json/nre/v1/getotroci/",
    {
      method: 'GET',
      headers: {
        'Content-Type':'application/json',
        'Cache-Control': 'public, s-maxage=300,stale-while-revalidate=2678400',
        'CDN-Cache-Control': 'public, s-maxage=300,stale-while-revalidate=2678400',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=300,stale-while-revalidate=2678400',
      },
    });


    const avtors = await response.json();

    return avtors;
}
