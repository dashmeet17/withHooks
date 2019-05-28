import Link from 'next/link';
import { useMappedState } from 'redux-react-hook';
import { useCallback, useEffect } from 'react';
import axios from 'axios'
import config from "../config";
import TodoInput from "../components/todo";
import Table from "../components/table";

const ENDPOINT = config['dev'].ENDPOINT;

export default () => {
  // Declare your memoized mapState function
  const mapState = useCallback(
    state => ({
      page: state.page,
    }),
    []
  );

  // useEffect(async () => {
  //     //alert("use effect called");
  //     axios.get(ENDPOINT.CUSTOMER_TRANSACTIONS)
  //       .then(res => {
  //         console.log(res);
  //     });
  // });

  // Get data from and subscribe to the store
  const { page } = useMappedState(mapState);

  console.log(page);

  return (
    <div>
<Table/>
    <TodoInput/>
      Hello World!{' '}
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};
