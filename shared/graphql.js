import gql from 'graphql-tag'

export const GET_POKEMONS = gql`
    query pokemons($limit: Int, $offset: Int) {
        pokemons(limit: $limit, offset: $offset) {
            count
            next
            previous
            nextOffset
            prevOffset
            status
            message
            results {
                id
                url
                name
                image
                artwork
                dreamworld
            }
        }
    }
`

export const GET_POKEMON_DETAIL = gql`
    query pokemon($name: String!) {
  pokemon(name: $name) {
    id
    abilities {
      ability {
        name
      }
    }
    base_experience
    height 
    moves {
      move {
        name
      }
    }
    name
    sprites {
      back_default
      back_female
      front_default
      front_female
    }
    stats {
      base_stat
      effort
      stat {
        name
      }
    }
    types {
      type {
        name
      }
    }
    weight
  }
}
`