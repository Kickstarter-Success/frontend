import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const ADD_CAMPAIGN_START ='ADD_CAMPAIGN_START';
export const ADD_CAMPAIGN_SUCCESS ='ADD_CAMPAIGN_SUCCESS';
export const ADD_CAMPAIGN_FAILURE ='ADD_CAMPAIGN_FAILURE';
export const DELETE_CAMPAIGN_START ='DELETE_CAMPAIGN_START';
export const DELETE_CAMPAIGN_SUCCESS ='DELETE_CAMPAIGN_SUCCESS';
export const DELETE_CAMPAIGN_FAILURE ='DELETE_CAMPAIGN_FAILURE';
export const EDIT_CAMPAIGN_START ='EDIT_CAMPAIGN_START';
export const EDIT_CAMPAIGN_SUCCESS ='EDIT_CAMPAIGN_SUCCESS';
export const EDIT_CAMPAIGN_FAILURE ='EDIT_CAMPAIGN_FAILURE';
export const GRAB_CAMPAIGN ='GRAB_CAMPAIGN';
export const GET_CAMPAIGN_START ='GET_CAMPAIGN_START';
export const GET_CAMPAIGN_SUCCESS ='GET_CAMPAIGN_SUCCESS';
export const GET_CAMPAIGN_FAILURE ='GET_CAMPAIGN_FAILURE';

//add campaign
export const addCampaign = (campaign, history, user_id) => dispatch => {
  dispatch({ type: ADD_CAMPAIGN_START });
  campaign.user_id = parseInt(user_id, 10)
  
  axiosWithAuth()
    .post(`/kickstarter/user/${user_id}`, campaign)
    .then(res => {
      dispatch({ type: ADD_CAMPAIGN_SUCCESS, payload: res.data })
      history.push('/dashboard')
    })
    .catch(err => {
      dispatch({ type: ADD_CAMPAIGN_FAILURE, payload: err.response })
    })
}

// delete campaign
export const deleteCampaign = (id, history) => dispatch => {
  dispatch({ type: DELETE_CAMPAIGN_START })
  axiosWithAuth()
    .delete(`/kickstarter/${id}`)
    .then(res => {
      dispatch({ type: DELETE_CAMPAIGN_SUCCESS, payload: id })
      history.push('/dashboard')
    })
    .catch(err => {
      dispatch({ type: DELETE_CAMPAIGN_FAILURE, payload: err.response })
    })
}

// edit campaign
export const grabCampaign = (campaign, history) =>  dispatch => {
  dispatch ({ type: GRAB_CAMPAIGN, payload: campaign})
  history.push('/dashboard/campaignform')
  };

export const editCampaign = (campaign, history, id) => dispatch => {
  dispatch({ type: EDIT_CAMPAIGN_START })
  axiosWithAuth()
    .put(`/kickstarter/${id}`, campaign)
    .then(res => {
      dispatch({ type: EDIT_CAMPAIGN_SUCCESS, payload: res.data })
      history.push('/dashboard')
    })
    .catch(err => {
      dispatch({ type: EDIT_CAMPAIGN_FAILURE, payload: err.response })
    })
}

// get campaigns

export const getCampaigns = (user_id) => dispatch => {
  dispatch({ type: GET_CAMPAIGN_START })
  axiosWithAuth()
    .get(`/kickstarter/user/${user_id}`)
    .then(res => {
      dispatch({ type: GET_CAMPAIGN_SUCCESS, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: GET_CAMPAIGN_FAILURE, payload: err.response })
    })
}