import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_CHARACTERS = gql`
  query {
    characters {
      results {
        id
        name
        image
      }
    }
  }
`;

export default function CharactersList() {
  const { error, data, loading } = useQuery(GET_CHARACTERS);

  console.log({ error, loading, data });
  if (loading) return <div>spinner</div>;
  if (error) return <div>something went wrong</div>;
  return <div></div>;
}
