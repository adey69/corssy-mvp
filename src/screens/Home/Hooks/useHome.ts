import { useEffect, useState } from 'react';
import { useGetGradeSubjectsQuery } from 'src/rtk';

export default () => {
  const { isError, isLoading, data } = useGetGradeSubjectsQuery();

  const [showErrorModal, setShowErrorModal] = useState(false);

  useEffect(() => {
    setShowErrorModal(isError);
  }, [isError]);

  return {
    showErrorModal,
    data,
    isLoading,
    subjects: data?.data,
    setShowErrorModal,
  };
};
