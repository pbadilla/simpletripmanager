import React from 'react';

import isEmpty from 'lodash/isEmpty';
import { toMinutes } from '../../helpers/utils';

import { Icon } from 'pcln-design-system';
import { Mapa } from './styles';
import Skeleton from 'react-loading-skeleton';

const ContentStop = props => {

  const { userName, address, paid, stopTime } = props;
  const loaded = isEmpty(props) ? false : true;

  if (loaded) {
    return (
      <Mapa>
        <table cellSpacing="0">
          <thead>
            <tr>
              <th>Username</th>
              <th>Address</th>
              <th>Paid?</th>
              <th>StopTime</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{userName}</td>
              <td>{address}</td>
              <td>{paid ? <Icon name='Coupon' color='green'/>: <Icon name='Coupon' color='red'/>}</td>
              <td>{toMinutes(stopTime)}</td>
            </tr>
          </tbody>
        </table>
      </Mapa >
    )
  }

  return <Skeleton height="100%" color="#202020" highlightColor="#444" / >
}

export default ContentStop;
