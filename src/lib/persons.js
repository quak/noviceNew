import dotenv from 'dotenv';

dotenv.config();



export async function getPotw() {
                                   
  const response = await fetch("https://sfsn.si/wp-json/nre/v1/getpotw/",
  {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
      'Cache-Control': 'public, s-maxage=300,stale-while-revalidate=2678400',
      'CDN-Cache-Control': 'public, s-maxage=300,stale-while-revalidate=2678400',
      'Vercel-CDN-Cache-Control': 'public, s-maxage=300,stale-while-revalidate=2678400',
    }
  });


  const potw = await response.json();

  return potw;
}