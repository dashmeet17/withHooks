import React, {useState, useEffect} from 'react';
import {useDispatch} from 'redux-react-hook';
import ReactTable from 'react-table'
import '../css/table.css';
import { css } from '@emotion/core';
import config from "../config";
import axios from 'axios';
import 'react-table/react-table.css';

const ENDPOINT = config['dev'].ENDPOINT;

const columns = [
  {
    Header: 'Transaction ID',
    accessor: 'transactionID'
  },
  {
    Header: 'User Name',
    accessor: 'username'
  },
  {
    Header: 'Payment Mode',
    accessor: 'paymentMode'
  },
  {
    Header: 'Amount',
    accessor: 'amount'
  }
]

export default function Table() {
  const [transactions, setTransactions] = useState([]);
  const dispatch = useDispatch();

  // useEffect(async () => {
  //     //alert("use effect called");
  //     axios.get(ENDPOINT.CUSTOMER_TRANSACTIONS)
  //       .then(res => {
  //         debugger;
  //         setTransactions(res.data);
  //     });
  // });

  async function fetchMyAPI() {
      let response = await axios.get(ENDPOINT.CUSTOMER_TRANSACTIONS);
      //response = await response.json()
      console.log(response);
      setTransactions(response.data);
    }

    useEffect(() => {
      fetchMyAPI();
    }, []);

  return (
    <ReactTable
      className="container jumbotron trxnTable table-bordered"
      data={transactions}
      columns={columns}
      defaultPageSize={10}
    />
  );
}
