import axios from "axios";

export const fetchNewsItems = async (params: { category?: string; language?: string; q?: string }) => {
  try {

    let query = `https://task-sifu.onrender.com/retrieve/news`
    const { data } = await axios.get(query, { params });

    // Map and select only the required properties
    let articles = data.data.articles.map((article: { author: string; content: string; title: string; publishedAt: Date; urlToImage: string; url: string }) => {
      const { author, content, title, publishedAt, urlToImage, url } = article
      return { author, content, title, date: publishedAt, image: urlToImage, url }
    })

    // Only show the articles that has all the properties
    articles = articles.filter((article: { author: string; content: string; title: string; date: Date; image: string; url: string }) => {
      const { author, content, title, date, image, url } = article
      return author && content && title && date && image && url
    })
    return { articles }
  } catch (e: any) {
    console.log(e)
    return { error: e.message }
  }
}

