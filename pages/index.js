import React, { useState, useEffect } from 'react';
import Head from 'next/head'
import { getData } from '../utils/apiCalls'
import {
  sortByPublishedAsc,
  sortByPublishedDesc,
  sortByUpdatedAsc,
  sortByUpdatedDesc
} from '../utils/utils'
import { Functions } from '../components/Functions'
import { List } from '../components/List'

export const getStaticProps = async () => {
  let section = 'home'
  let fetchedData = await getData(section)

  return {
    props: {
      data: fetchedData.results
    }
  }
}

const Home = ({ data }) => {
  const [articles, setArticles] = useState([])
  const [sorted, setSorted] = useState('')

  useEffect(() => {
    setArticles(sortByPublishedDesc(data))
    setSorted('pubDesc')
  }, [])
  
  const sortArticles = (event) => {
    if (event === 'pubAsc') {
      setArticles(sortByPublishedAsc(articles))
      setSorted('pubAsc')
    }
    if (event === 'pubDesc') {
      setArticles(sortByPublishedDesc(articles))
      setSorted('pubDesc')
    }
    if (event === 'upAsc') {
      setArticles(sortByUpdatedAsc(articles))
      setSorted('upAsc')
    }
    if (event === 'upDesc') {
      setArticles(sortByUpdatedDesc(articles))
      setSorted('upDesc')
    }
  }
  
  return (
    <>
      <Functions sorted={sorted} sortArticles={sortArticles} />
      <List articles={articles} />
    </>
  )
}

export default Home