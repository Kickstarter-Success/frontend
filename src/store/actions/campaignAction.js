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
export const GET_CAMPAIGN_START ='GET_CAMPAIGN_START';
export const GET_CAMPAIGN_SUCCESS ='GET_CAMPAIGN_SUCCESS';
export const GET_CAMPAIGN_FAILURE ='GET_CAMPAIGN_FAILURE';

//add campaign
export const addCampaign = (campaign, history, user_id) => dispatch => {
  dispatch({ type: ADD_CAMPAIGN_START });
  campaign.user_id = parseInt(user_id, 10)
  console.log(campaign.user_id)
  console.log(user_id)
  user_id = parseInt(user_id, 10)
  if (user_id == campaign.user_id){
    console.log('it should work')
  } else {
    console.log ('we found the problem')
  }
  axiosWithAuth()
    .post(`/kickstarter/user/${user_id}`)
    .then(res => {
      console.log(campaign)
      dispatch({ type: ADD_CAMPAIGN_SUCCESS, payload: campaign })
      history.push('/dashboard')
    })
    .catch(err => {
      console.log(campaign)
      dispatch({ type: ADD_CAMPAIGN_FAILURE, payload: err.response })
    })
}

// delete campaign
export const deleteCampaign = (id, history) => dispatch => {
  dispatch({ type: DELETE_CAMPAIGN_START })
  axiosWithAuth()
    .delete(`/kickstarter/${id}`)
    .then(res => {
      dispatch({ DELETE_CAMPAIGN_SUCCESS, payload: id })
      history.push('/dashboard')
    })
    .catch(err => {
      dispatch({ DELETE_CAMPAIGN_FAILURE, payload: err.response })
    })
}

// edit campaign
export const editCampaign = (campaign, history, id) => dispatch => {
  dispatch({ type: EDIT_CAMPAIGN_START })
  axiosWithAuth()
    .put(`/kickstarter/${id}`, campaign)
    .then(res => {
      dispatch({ EDIT_CAMPAIGN_SUCCESS, payload: res.data })
      history.push('/dashboard')
    })
    .catch(err => {
      dispatch({ type: EDIT_CAMPAIGN_FAILURE, payload: err.response })
    })
}

// get campaigns

export const getCampaigns = (user_id, history) => dispatch => {
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