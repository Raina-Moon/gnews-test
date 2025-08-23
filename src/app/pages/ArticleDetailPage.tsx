import React from 'react'
import { useArticleByIdQuery } from '../../entities/article/hooks'
import { useParams } from 'react-router-dom'

const ArticleDetailPage = () => {
    const {id} = useParams()
    const {data} = useArticleByIdQuery(String(id))
  return (
    <div>
        <h1>{data?.title}</h1>
        {data?.image && <img src={data.image} alt={data.title} style={{width: '100%', objectFit: 'cover'}} />}
        <p>{data?.content}</p>
        <a href={data?.url} target="_blank" rel="noopener noreferrer">Read full article</a>
    </div>
  )
}

export default ArticleDetailPage