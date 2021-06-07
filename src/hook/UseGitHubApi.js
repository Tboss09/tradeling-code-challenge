import { gql } from '@urql/core'
import React, { useState } from 'react'
import { useQuery } from 'urql'

// When the Users option is checked, this runs
const USER_QUERY = gql`
 query MyQuery2($filter: String!) {
  search(query: $filter, type: USER, first: 30) {
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
  search(query: $filter, type: REPOSITORY, first: 30) {
   edges {
    node {
     ... on Repository {
      id
      nameWithOwner
      shortDescriptionHTML(limit: 80)
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
 const [request, setRequest] = useState(false)

 const handleTyping = e => setFilter(e.target.value)
 const handleRequest = () => setRequest(!request)

 const [result] = useQuery({
  query: request ? REPO_QUERY : USER_QUERY, //if user should select (user) send USER_QUERY else Repo_query
  variables: { filter },
  //   Only fetch the data when something is typed in
  pause: filter.trim().length > 0 ? false : true,
 })

 console.log(result)

 return {
  handleTyping,
  result,
  handleRequest,
  request,
 }
}

export default UseGitHubApi
