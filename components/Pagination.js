import { useQuery } from "@apollo/client";
import Head from "next/head";
import Link from "next/link";
import gql from 'graphql-tag';

export const PAGINATION_QUERY = gql`
  query PAGINATION_QUERY {
    games(limit: 20) {
      name,
      description
    }
  }
`;

export default function Pagination({ page }) {
  const { error, loading, data } = useQuery(PAGINATION_QUERY);
  if (error) return console.error(error)
  if (loading) return 'Loading...'
  const { count } = data
  console.log(data);
//   const pageCount = Math.ceil(count / perPage);
  return (
    <div>
      <Head>
        <title>
          Some Fit? - Page {page} of {pageCount}
        </title>
      </Head>
      <Link href={`/products/${page - 1}`}>
        <a aria-disabled={page <= 1}>⬅️ Prev</a>
      </Link>
      {/* {page !== 1 && <Link href={`/products/${page - 1}`}>⬅️ Prev</Link>} */}
      <p>
        Page {page} of {pageCount}
      </p>
      <p>{count} Items Total</p>
      <Link href={`/products/${page + 1}`}>
        <a aria-disabled={page >= pageCount}>Next ➡️</a>
      </Link>
    </div>
  );
}
