import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.WP_URL



export async function getImageForId(id) {
        
    var params = {
        id: id
    };

    const response = await fetch("https://sfsn.si/wp-json/nre/v1/getImageForId/",
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'public, s-maxage=300,stale-while-revalidate=2678400',
        'CDN-Cache-Control': 'public, s-maxage=300,stale-while-revalidate=2678400',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=300,stale-while-revalidate=2678400',
      },
      body: JSON.stringify(params)
    });


    const data = await response.json();

    return data;
}

