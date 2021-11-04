import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { Layout } from '@components/Layout'
import { Typography } from '@ui/Typography'
import { Grid } from '@ui/Grid'
import React from 'react'
import { RichText } from '@components/RichText'
import { AuthorCard } from '@components/AuthorCard'
import { getPlant, QueryStatus } from '@api'

export default function PlantEntryPage() {
  const [loading, setLoading] = useState<QueryStatus>('idle')
  const [plant, setPlant] = useState<Plant | null>(null)
  const { query } = useRouter()
  const { slug } = query

  useEffect(() => {
    if (typeof slug !== 'string') {
      return
    }

    setLoading('loading')
    getPlant(slug)
      .then((plant) => {
        setPlant(plant)
        setLoading('success')
      })
      .catch(() => {
        setLoading('error')
      })
  }, [slug])

  if (loading === 'loading' || loading === 'idle') {
    return (
      <Layout>
        <main>Loading awesomeness..</main>
      </Layout>
    )
  }

  if (plant == null || loading === 'error') {
    return (
      <Layout>
        <main>404, my friend</main>
      </Layout>
    )
  }

  return (
    <Layout>
      <Grid container spacing={4}>
        <Grid item xs={12} md={8} lg={9} component="article">
          <figure>
            <img width={952} src={plant.image.url} alt={plant.image.title} />
          </figure>

          <div className="px-12 pt-8">
            <Typography variant="h2">{plant.plantName}</Typography>
          </div>

          <div className="p-10">
            <RichText richText={plant.description} />
          </div>
        </Grid>
        <Grid item xs={12} md={4} lg={3} component="aside">
          <section>
            <Typography variant="h5" component="h3" className="mb-4">
              Recent posts
            </Typography>
          </section>

          <section className="mt-10">
            <Typography variant="h5" component="h3" className="mb-4">
              Categories
            </Typography>
          </section>
        </Grid>
      </Grid>

      <section className="my-4 border-t-2 border-b-2 border-gray-200 pt-12 pb-7">
        <AuthorCard {...plant.author} />
      </section>
    </Layout>
  )
}
