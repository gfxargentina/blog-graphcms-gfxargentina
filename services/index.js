import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

//trae todos los posts
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            createdAt
            slug
            title
            excerpt
            featuredImage {
              url
            }
            id
            author {
              name
              id
              image {
                url
              }
            }
          }
        }
      }
    }
  `
  const results = await request(graphqlAPI, query)

  return results.postsConnection.edges
}

//trae los posts mas recientes
export const getRecentPosts = async () => {
  const query = gql`
    query GetPostDetails() {
      postsConnection(orderBy: createdAt_DESC last: 4) {
        edges {
          node {
            title
            createdAt
            slug
            featuredImage {
              url
            }
          }
    }
  }
    }
  `
  const results = await request(graphqlAPI, query)

  return results.postsConnection.edges
}

//trae todos los posts similares por categoria
//linea 65: "no mostrar el post seleccionado pero si algunos posts que incluyan la misma categoria"
export const getSimilarPosts = async () => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      postsConnection( where: { slug_not: $slug, AND: { categories_some: { slug_in: $categories}}
       last: 3) {
        edges {
          node {
            title
            createdAt
            slug
            featuredImage {
              url
            }
          }
    }
  }
    }
  `

  const results = await request(graphqlAPI, query)

  return results.postsConnection.edges
}

//trae todas las categorias
export const getCategories = async () => {
  const query = gql`
    query GetCategories {
      postsConnection {
        edges {
          node {
            categories {
              id
              name
              slug
            }
          }
        }
      }
    }
  `
  const results = await request(graphqlAPI, query)

  return results.postsConnection.edges
}
