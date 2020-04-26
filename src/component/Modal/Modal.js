import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch, connect } from "react-redux";
import get from 'lodash/get';

import fetchStops from '../../store/actions/stopsActions';

import Modal from 'react-responsive-modal';
import ContentStop from '../ContentStop';

import { Button, Heading } from 'pcln-design-system';
import "react-responsive-modal/styles.css";
import Skeleton from 'react-loading-skeleton';

const ModalBox = ({ tripId, stopInfo }) => {

  const dispatch = useDispatch();

  const loadingSuccess = useSelector(state => state.stopTrip.success);

  const [open, setOpen] = useState(false);

  const [infoData, setInfoData] = useState(null);

  function onOpenModal() {
    setOpen(true);
    dispatch(fetchStops(tripId));
  }

  function onCloseModal() {
    setOpen(false);
  }

  useEffect(() => {
    const stopInfoDATA = get(stopInfo, 'stopTrip');
    if (stopInfoDATA ) {
      setInfoData(stopInfoDATA);
    }
  },[loadingSuccess, stopInfo]);

  return (
    <div>
      <Button size='small' onClick={onOpenModal}>{`More Info ${tripId}`}</Button>
      <Modal open={open} onClose={onCloseModal}>
        <Heading.h2>Information Stop</Heading.h2>

      { !loadingSuccess
        ? <Skeleton width="659px" height="125px" color="#202020" highlightColor="#444" count={2} />
        : <ContentStop {...infoData} />
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
  return ({
    stopInfo: state.stopTrip,
  });
};

export default connect(mapStateToProps)(ModalBox);