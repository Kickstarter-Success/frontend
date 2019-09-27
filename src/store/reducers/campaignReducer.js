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
  GRAB_CAMPAIGN, 
  GET_CAMPAIGN_START, 
  GET_CAMPAIGN_SUCCESS, 
  GET_CAMPAIGN_FAILURE,
  GET_DATAURL_START,
  GET_DATAURL_SUCCESS,
  GET_DATAURL_FAILURE,
} from '../actions/campaignAction'

const initalState = {
  campaigns: [],
  error: '',
  isLoading: false,
  activeCampaign: null,
  user: '',
  url:''
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
        campaigns: action.payload,
        isLoading: false
      }
    case DELETE_CAMPAIGN_START:
      return {
        ...state,
        isLoading: true
      }
    case DELETE_CAMPAIGN_SUCCESS:
      const newArr = state.campaigns.filter(campaign => campaign.id === action.payload)
      return {
        ...state,
        campaigns: newArr,
        isLoading: false
      }
      case DELETE_CAMPAIGN_FAILURE:
        return {
          ...state,
          error: action.payload,
          isLoading: false
        }
      case GRAB_CAMPAIGN:
        return {
          ...state,
          isLoading: false,
          activeCampaign: action.payload
        }
      case EDIT_CAMPAIGN_START:
        return {
          ...state,
          isLoading: true
        }
      case EDIT_CAMPAIGN_SUCCESS:
        return {
          ...state,
          error: '',
          isLoading: false,
          activeCampaign: null
        }
      case EDIT_CAMPAIGN_FAILURE:
        return {
          ...state,
          isLoading: false,
          error: action.payload
        }
      case GET_DATAURL_START:
        return {
          ...state,
          isLoading: true
        }
      case GET_DATAURL_SUCCESS:
        return {
          ...state,
          url: action.payload,
          isLoading: false
        }
      case GET_DATAURL_FAILURE:
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

