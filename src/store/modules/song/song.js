/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-08-19 22:55:26
 * @LastEditors: Please set LastEditors
 */
const song = {
  state: {
    playState: false,
    playList: [],
    currenPlayList: [],
    /* 0:顺序播放，1：单曲循环；2：随机播放 */
    playModel: 0,
    playIndex:-1,
    fullScreen:false,
    songListState:false,
    lyricObj:null,
    ListIndex:0,
    searchKey:'',
    searchItemName:''
  },
  mutations: {
    'setplayState'(state, data) {
      state.playState = data;
    },
    'setplayList'(state, data) {
      state.playList = data;
    },
    'setcurrenPlayList'(state, data) {
      state.currenPlayList = data;
    },
    'setplayModel'(state, data) {
      state.playModel = data;
    },
    'setfullScreen'(state, data) {
      state.fullScreen = data;
    },
    'setplayIndex'(state, data) {
      state.playIndex = data;
    },
    'setsongListState'(state, data) {
      state.songListState = data;
    },
    'setlyricObj'(state, data) {
      state.lyricObj = data;
    },
    'setListIndex'(state, data) {
      state.ListIndex = data;
    },
    'setsearchKey'(state, data) {
      state.searchKey = data;
    },
    'setsearchItemName'(state, data) {
      state.searchItemName = data;
    }
  },
  actions: {
    'SETPLAYS'({
      commit,
      state
    }, {
      list,
      pstate,
      pmodel
    }) {
      commit('setplayState', pstate);
      commit('setplayList', list);
      commit('setcurrenPlayList', list);
      commit('setplayModel', pmodel);
    }
  },
  getters: {
    playState: (state) => state.playState,
    playList: (state) => state.playList,
    currenPlayList: (state) => state.currenPlayList,
    playModel: (state) => state.playModel,
    playIndex: (state) => state.playIndex,
    fullScreen: (state) => state.fullScreen,
    songListState: (state) => state.songListState,
    lyricObj: (state) => state.lyricObj,
    ListIndex: (state) => state.ListIndex,
    searchKey: (state) => state.searchKey,
    searchItemName: (state) => state.searchItemName,
  }
}
export default song;
