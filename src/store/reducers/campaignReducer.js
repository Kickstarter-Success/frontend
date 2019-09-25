import {
  ADD_CAMPAIGN_START,  
  ADD_CAMPAIGN_SUCCESS,
  ADD_CAMPAIGN_FAILURE, 
  DELETE_CAMPAIGN_START, 
  DELETE_CAMPAIGN_SUCCESS,
  DELETE_CAMPAIGN_FAILURE,
  EDIT_CAMPAIGN_START,
  EDIT_CAMPAIGN_SUCCESS, 
  EDIT_CAMPAIGN_FAILURE, 
  GET_CAMPAIGN_START, 
  GET_CAMPAIGN_SUCCESS, 
  GET_CAMPAIGN_FAILURE, 
} from '../actions/campaignAction'

const initalState = {
  campaigns: [],
  error: '',
  isLoading: false,
  activeCampaign: null,
  user: ''
}

const campaignReducer = ( state = initalState, action) => {
  switch(action.type) {
    case ADD_CAMPAIGN_START:
      return {
        ...state,
        isLoading: true
      }
    case ADD_CAMPAIGN_SUCCESS:
      return {
        ...state,
        campaigns: action.payload,
        isLoading: false
      }
    case ADD_CAMPAIGN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    case GET_CAMPAIGN_START: 
      return {
        ...state,
        isLoading: true
      }
    case GET_CAMPAIGN_SUCCESS:
      return {
        ...state,
        campaigns: action.payload,
        isLoading: false
      }
    case GET_CAMPAIGN_FAILURE:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      }
    default:
      return state;
  }
}

export default campaignReducer;

