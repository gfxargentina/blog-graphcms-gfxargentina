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
        orderBy: createdAt_ASC
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
// export const getCategories = async () => {
//   const query = gql`
//     query GetCategories {
//       postsConnection {
//         edges {
//           node {
//             categories {
//               id
//               name
//               slug
//             }
//           }
//         }
//       }
//     }
//   `
//   const results = await request(graphqlAPI, query)

//   return results.postsConnection.edges
// }

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
