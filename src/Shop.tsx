import * as React from 'react';
import { RouteComponentProps } from 'react-router';
import * as qs from 'qs';
import { Option } from 'catling';
import { Link } from 'react-router-dom';
import gql from 'graphql-tag';
import { DataProps, graphql } from 'react-apollo';

const allProducts = gql`
  query {
    products {
      items {
        id
        name
        price
        slug
      }
    }
  }
`;

interface ProductsQuery {
  products: any;
}

type Props = RouteComponentProps<{}> & DataProps<ProductsQuery, {}>;

const Shop = (props: Props) => {
  const location = props.location;
  const page = Option(qs.parse(location.search, { ignoreQueryPrefix: true }))
    .flatMap(query => Option<string>(query.page))
    .map(p => parseInt(p, 10))
    .filter(p => !isNaN(p) && Number.isFinite(p))
    .getOrElse(1);

  return (
    <div>
      <h1>Shop</h1>
      <p>Page {page}</p>
      {page > 1 && (
        <Link to={{ pathname: '/shop', search: `?page=${page - 1}` }}>
          Previous
        </Link>
      )}
      <Link to={{ pathname: '/shop', search: `?page=${page + 1}` }}>Next</Link>
      <ul>
        {props.data.products &&
          props.data.products.items &&
          props.data.products.items.map((item: any) => (
            <li key={item.id}>{item.name}</li>
          ))}
      </ul>
    </div>
  );
};

export default graphql<any>(allProducts)(Shop);
