import React, { Fragment, useContext, useEffect } from 'react';
import { connect } from 'react-redux';

import { DataServiceContext } from '../../services';
import { fetchData } from '../../actions';

import { PageHeader } from '../../components/page-header';
import { PageFooter } from '../../components/page-footer';

import { ErrorIndicator } from '../../components/error-indicator';
import { Spinner } from '../../components/spinner';

import './app.scss';

const App = ({ loading, error, fetchData }) => {
  const { getData } = useContext(DataServiceContext);

  useEffect(() => {
    fetchData(getData);
  }, []);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator error={error} />;
  }

  return (
    <Fragment>
      <PageHeader />
      <PageFooter />
    </Fragment>
  );
};

const mapStateToProps = ({ loading, error }) => {
  return {
    loading,
    error,
  };
};

const mapDispatchToProps = {
  fetchData,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

