import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, connect } from "react-redux";
import get from 'lodash/get';
import isEmpty from 'lodash/isEmpty';
import { toMinutes } from '../../helpers/utils';

import fetchStops from '../../store/actions/stopsActions';

import Modal from 'react-responsive-modal';

import { Button, Table, Text, Heading, Icon } from 'pcln-design-system';
import { ContentStop } from './styles';
import "react-responsive-modal/styles.css";

const ModalBox = ({ tripId, stopInfo }) => {

  const dispatch = useDispatch();

  const loadingSucess = useSelector(state => state.stopTrip.success);
  const stopInfoData = useSelector(state => state.stopTrip.stopTrip);

  const [open, setOpen] = useState(false);
  const [loadData, setLoadData] = useState(false);
  const [infoData, setInfoData] = useState(null);

  function onOpenModal() {
    setOpen(true);
    dispatch(fetchStops(tripId));
  };

  function onCloseModal() {
    setOpen(false);
  };

  useEffect(() => {
    const stopInfoDATA = get(stopInfo, 'stopTrip');
    if (stopInfoDATA ) {
      setInfoData(stopInfoDATA);
      setLoadData(true);
    }
  },[loadingSucess, stopInfo]);

    return (
      <div>
        <Button onClick={onOpenModal}>Open modal</Button>
        <Modal open={open} onClose={onCloseModal} little>
          <Heading.h2>Datos parada</Heading.h2>

          {loadData && 
            <ContentStop>
                <table cellspacing="0">
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
                    <td>{infoData.userName}</td>
                    <td>{infoData.address}</td>
                    <td>{infoData.paid ? <Icon name='Coupon' color='green'/>: <Icon name='Coupon' color='red'/>}</td>
                    <td>{toMinutes(infoData.stopTime)}</td>
                  </tr>
                </tbody>
              </table>
            </ContentStop>
          }

        </Modal>
      </div>
    );
}

ModalBox.propTypes = {
  tripId: PropTypes.number.isRequired,
  stopInfo: PropTypes.instanceOf(Object),
};


const mapStateToProps = state => {
  console.log('state', state);
  return ({
    stopInfo: state.stopTrip,
  });
};

export default connect(mapStateToProps)(ModalBox);