import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/common/Card'
import SectionTitle from '@/components/common/SectionTitle'
import { getNewsArticles } from '@/lib/content'
import { formatDate } from '@/lib/utils'

export const metadata: Metadata = {
  title: 'News',
  description: 'Stay updated with the latest news, updates, and achievements from Oxford University Racing.',
}

export default function NewsPage() {
  const articles = getNewsArticles()
  const featuredArticles = articles.filter(article => article.featured)
  const regularArticles = articles.filter(article => !article.featured)

  return (
    <div className="py-16 sm:py-24">
      <div className="container-custom">
        <div className="text-center mb-16">
          <SectionTitle
            title="Latest News"
            subtitle="Stay up to date with our latest competitions, achievements, and team updates."
            centered
          />
        </div>

        {/* Featured Articles */}
        {featuredArticles.length > 0 && (
          <div className="mb-16">
            <h2 className="text-2xl font-bold text-oxford-blue mb-8">Featured Stories</h2>
            <div className="grid gap-8 lg:grid-cols-2">
              {featuredArticles.map((article) => (
                <Card key={article.slug} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  {article.featuredImage && (
                    <div className="relative h-64 overflow-hidden">
                      <Image
                        src={article.featuredImage}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-accent-red text-white px-3 py-1 text-sm font-medium rounded">
                          Featured
                        </span>
                      </div>
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <time dateTime={article.date}>{formatDate(article.date)}</time>
                      {article.author && (
                        <>
                          <span>•</span>
                          <span>{article.author}</span>
                        </>
                      )}
                    </div>
                    <CardTitle className="text-2xl">
                      <Link
                        href={`/news/${article.slug}`}
                        className="hover:text-accent-red transition-colors"
                      >
                        {article.title}
                      </Link>
                    </CardTitle>
                    <CardDescription className="text-base">{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {article.tags.map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-2 py-1 text-sm rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Regular Articles */}
        {regularArticles.length > 0 && (
          <div>
            <h2 className="text-2xl font-bold text-oxford-blue mb-8">All Stories</h2>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {regularArticles.map((article) => (
                <Card key={article.slug} className="group overflow-hidden hover:shadow-lg transition-shadow">
                  {article.featuredImage && (
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={article.featuredImage}
                        alt={article.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                  )}
                  <CardHeader>
                    <div className="flex items-center space-x-2 text-sm text-gray-500 mb-2">
                      <time dateTime={article.date}>{formatDate(article.date)}</time>
                      {article.author && (
                        <>
                          <span>•</span>
                          <span>{article.author}</span>
                        </>
                      )}
                    </div>
                    <CardTitle className="text-xl">
                      <Link
                        href={`/news/${article.slug}`}
                        className="hover:text-accent-red transition-colors"
                      >
                        {article.title}
                      </Link>
                    </CardTitle>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    {article.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="bg-gray-100 text-gray-700 px-2 py-1 text-xs rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Empty State */}
        {articles.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold text-gray-600 mb-4">No news articles yet</h3>
            <p className="text-gray-500">Check back soon for updates and announcements.</p>
          </div>
        )}
      </div>
    </div>
  )
}