import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchRandomMessage } from '../actions/messagesActions';

const Greeting = ({ message, fetchRandomMessage }) => {
  useEffect(() => {
    fetchRandomMessage();
  }, [fetchRandomMessage]);

  console.log(message)

  return (
    <div>
      <h1>{message}</h1>
    </div>
  );
};

const mapStateToProps = state => ({
  message: state.message
});

export default connect(mapStateToProps, { fetchRandomMessage })(Greeting);
