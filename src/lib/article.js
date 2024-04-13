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
        'Cache-Control': 'public, s-maxage=600,stale-while-revalidate=59',
        'CDN-Cache-Control': 'public, s-maxage=600,stale-while-revalidate=59',
        'Vercel-CDN-Cache-Control': 'public, s-maxage=10800,stale-while-revalidate=59',
      },
      body: JSON.stringify(params)
    });


    const article = await response.json();
    /**
     *
     *    id
          title 
          blocks {
            name
            attributesJSON
            dynamicContent
            originalContent
            isDynamic
          }
          excerpt
          content
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
          author {
            node {
              slug
              firstName
              lastName
            }
          }
     * 
     * 
     */
    
    return article;
  }