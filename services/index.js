import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

//trae todos los posts
export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection(orderBy: createdAt_DESC) {
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
              description
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
      posts(
        orderBy: createdAt_DESC
        last: 6
      ) {
        title
        featuredImage {
          url
        }
        excerpt
        author {
              name
              id
              description
              image {
                url
              }
            }
        createdAt
        slug
        categories {
        name        
      }
      }
    }
  `
  const result = await request(graphqlAPI, query)

  return result.posts
}

//trae todos los posts similares por categoria
//linea 66: "no mostrar el post seleccionado pero si algunos posts que incluyan la misma categoria"
export const getSimilarPosts = async (categories, slug) => {
  const query = gql`
    query GetPostDetails($slug: String!, $categories: [String!]) {
      posts(
        where: {
          slug_not: $slug
          AND: { categories_some: { slug_in: $categories } }
        }
        orderBy: createdAt_DESC
        last: 3
      ) {
        title
        featuredImage {
          url
        }
        createdAt
        slug
      }
    }
  `
  const result = await request(graphqlAPI, query, { slug, categories })

  return result.posts
}

//trae todas las categorias
export const getCategories = async () => {
  const query = gql`
    query GetGategories {
      categories {
        name
        slug
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.categories
}

//trae todos los detalles del post
export const getPostDetails = async (slug) => {
  const query = gql`
    query GetPostDetails($slug: String!) {
      post(where: { slug: $slug }) {
        title
        excerpt
        featuredImage {
          url
        }
        author {
          name
          description
          image {
            url
          }
        }
        createdAt
        slug
        content {
          raw
        }
        categories {
          name
          slug
        }
        content {
          raw
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.post
}

//Post - enviar comentario
export const submitComment = async (obj) => {
  const result = await fetch('/api/comments', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(obj),
  })

  return result.json()
}

//trae todos los comentarios
export const getComments = async (slug) => {
  const query = gql`
    query GetComments($slug: String!) {
      comments(where: { post: { slug: $slug } }) {
        name
        comment
        createdAt
      }
    }
  `

  const result = await request(graphqlAPI, query, { slug })

  return result.comments
}

//trae todas los proyectos del portfolio
export const getPortfolio = async () => {
  const query = gql`
    query Projects {
      portfoliosConnection(orderBy: createdAt_DESC, last: 6) {
        edges {
          node {
            titulo
            categoria
            createdAt
            deploy
            github
            imagen {
              url
            }
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query)

  return result.portfoliosConnection.edges
}
