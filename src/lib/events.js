import dotenv from 'dotenv';

dotenv.config();

const API_URL = process.env.WP_URL



export async function getEventBySlug(slug) {
        
    var params = {
        slug: slug
    };

    const response = await fetch("https://splet.novice.at/wp-json/nre/v1/events/geteventbyslug/",
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


  export async function getEventsOverview(searchparam) {
        
    var params = {
        slug: searchparam
    };

    const response = await fetch("https://splet.novice.at/wp-json/nre/v1/events/overview/",
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