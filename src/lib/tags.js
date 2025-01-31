
import dotenv from 'dotenv';

dotenv.config();

export async function getArticlesWithTag(slug) {
        
    var params = {
        tag: slug
    };

    const response = await fetch("https://sfsn.si/wp-json/nre/v1/getarticleswithtag/",
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'public, s-maxage=3600,stale-while-revalidate=2678400',
        'CDN-Cache-Control': 'public, s-maxage=3600,stale-while-revalidate=2678400',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=3600,stale-while-revalidate=2678400',
      },
      body: JSON.stringify(params)
    });


    const avtor = await response.json();
    
    return avtor;
  }
