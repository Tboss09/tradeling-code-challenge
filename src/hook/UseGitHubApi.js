import { gql } from '@urql/core'
import React from 'react'
import { useQuery } from 'urql'

// When the Users option is checked, this runs
const USER_QUERY = gql`
 query MyQuery2($filter: String!) {
  search(query: $filter, type: USER, first: 10) {
   edges {
    node {
     ... on User {
      id
      name
      login
      avatarUrl(size: 80)
      location
      url
      bio
      twitterUsername
      followers(first: 10) {
       totalCount
      }

      following(first: 10) {
       totalCount
      }
      repositories(first: 10) {
       totalCount
      }
     }
    }
   }
  }
 }
`

const REPO_QUERY = gql`
 query RepoSearchQuery($filter: String!) {
  search(query: $filter, type: REPOSITORY, first: 12) {
   edges {
    node {
     ... on Repository {
      id
      nameWithOwner
      owner {
       id
       login
       avatarUrl(size: 30)
      }
      languages(first: 1, orderBy: { field: SIZE, direction: DESC }) {
       nodes {
        name
        id
        color
       }
      }
      description
      stargazers {
       totalCount
      }
      issues {
       totalCount
      }
     }
    }
   }
  }
 }
`

const UseGitHubApi = () => {
 const [filter, setFilter] = React.useState('')
 const handleTyping = e => setFilter(e.target.value)

 const [result] = useQuery({
  query: USER_QUERY,
  variables: { filter },
  pause: !filter,
 })

 return {
  handleTyping,
  result,
 }
}

export default UseGitHubApi
