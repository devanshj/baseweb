/*
Copyright (c) 2018-2020 Uber Technologies, Inc.

This source code is licensed under the MIT license found in the
LICENSE file in the root directory of this source tree.
*/
// @flow

import * as React from 'react';

import {
  Unstable_StatefulDataTable,
  BooleanColumn,
  CategoricalColumn,
} from '../index.js';

type RowDataT = [boolean, string];

export default function Scenario() {
  const columns = [
    BooleanColumn({
      title: 'first',
      mapDataToValue: (data: RowDataT) => data[0],
    }),
    CategoricalColumn({
      title: 'second',
      mapDataToValue: (data: RowDataT) => data[1],
    }),
  ];

  return (
    <React.Fragment>
      <div style={{height: '200px', width: '800px'}}>
        <Unstable_StatefulDataTable loading columns={columns} rows={[]} />
      </div>
      <div style={{height: '200px', width: '800px'}}>
        <Unstable_StatefulDataTable
          loading
          loadingMessage="string loading message"
          columns={columns}
          rows={[]}
        />
      </div>
      <div style={{height: '200px', width: '800px'}}>
        <Unstable_StatefulDataTable
          loading
          loadingMessage={() => <h1>component loading message</h1>}
          columns={columns}
          rows={[]}
        />
      </div>
    </React.Fragment>
  );
}
