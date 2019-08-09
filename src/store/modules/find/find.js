const find = {
  state: {
    searchState: false,
    recommentData:[],
    userInfoState:false,
  },
  mutations: {
    'setsearchState'(state, data) {
      state.searchState = data
    },
    'setrecommentData'(state, data) {
      state.recommentData = data
    },
    'setuserInfoState'(state, data) {
      state.userInfoState = data
    }
  },
  actions:{
    'SETSEARCHSTATE'(context, data) {
      context.commit('setsearchState',data)
    },
    'SETRECOMMENTDATA'(context, data) {
      context.commit('setrecommentData',data)
    },
    'SETUSERINFOSTATE'(context, data) {
      context.commit('setuserInfoState',data)
    }
  },
  getters:{
    searchState:state=>{
      return state.searchState
    },
    recommentData:state=>{
      return state.recommentData
    },
    userInfoState:state=>{
      return state.userInfoState
    }
  }
}
export default find;




