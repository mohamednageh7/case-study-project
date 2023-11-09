import feedbackService from '../../services/feedback.service';
import { FeedbackFormInput } from '../../types/feedback';
import { errorHandling } from '../../utils/errorHandler';
import { SEND_FEEDBACK, LOADING, STOP_LOADING } from './types';

export const sendFeedback =
  (data: FeedbackFormInput) => async (dispatch: any) => {
    try {
      const res = await feedbackService.createFeedback(data);
      return dispatch({
        type: SEND_FEEDBACK,
        payload: res,
      });
    } catch (e: any) {
      return errorHandling(e, dispatch, 'error.create_feedback_error');
    }
  };

export const loading = () => (dispatch: any) => {
  return dispatch({
    type: LOADING,
  });
};

export const stopLoading = () => (dispatch: any) => {
  return dispatch({
    type: STOP_LOADING,
  });
};
