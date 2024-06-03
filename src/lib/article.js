import dotenv from 'dotenv';

dotenv.config();

export async function getArticleBySlugAPI(slug) {
        
    var params = {
        articleslug: slug
    };

    const response = await fetch("https://sfsn.si/wp-json/nre/v1/getarticlebyslug/",
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'public, s-maxage=10800,stale-while-revalidate=59',
        'CDN-Cache-Control': 'public, s-maxage=10800,stale-while-revalidate=59',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=10800,stale-while-revalidate=59',
      },
      body: JSON.stringify(params)
    });


    const article = await response.json();
    
    
    return article;
  }



  export async function getLastArticles() {
        
    var params = {
    };
                                  
    const response = await fetch("https://sfsn.si/wp-json/nre/v1/getlastarticles/",
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'public, s-maxage=60,stale-while-revalidate=59',
        'CDN-Cache-Control': 'public, s-maxage=60,stale-while-revalidate=59',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=60,stale-while-revalidate=59',
      }
    });


    const avtors = await response.json();

    return avtors;
  }

  export async function getRelatedArticles() {
        
    var params = {
    };
                   
    const response = await fetch("https://sfsn.si/wp-json/nre/v1/getrelatedarticles/",
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'public, s-maxage=60,stale-while-revalidate=59',
        'CDN-Cache-Control': 'public, s-maxage=60,stale-while-revalidate=59',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=60,stale-while-revalidate=59',
      }
    });


    const avtors = await response.json();

    return avtors;
  }



  export async function getStrips() {
        
    var params = {
    };

    const response = await fetch("https://sfsn.si/wp-json/nre/v1/getstrips/",
    {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'public, s-maxage=10800,stale-while-revalidate=59',
        'CDN-Cache-Control': 'public, s-maxage=10800,stale-while-revalidate=59',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=10800,stale-while-revalidate=59',
      }
    });


    const avtors = await response.json();

    return avtors;
  }



  export async function getPostsByCategoryId(slug,count) {
        
    var params = {
      slug: slug,
      count: count
  };
                   
    const response = await fetch("https://sfsn.si/wp-json/nre/v1/getpostsbycategoryid/",
    {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        // 'Content-Type': 'application/x-www-form-urlencoded',
        'Cache-Control': 'public, s-maxage=60,stale-while-revalidate=59',
        'CDN-Cache-Control': 'public, s-maxage=60,stale-while-revalidate=59',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=60,stale-while-revalidate=59',
      },
      body: JSON.stringify(params)
    });


    const posts = await response.json();

    return posts;
  }