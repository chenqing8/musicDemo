import {
  mapGetters,
  mapActions,
  mapMutations
} from "vuex";
const MusicMixins = {
  computed: {
    ...mapGetters([
      "searchState",
      "recommentData",
      "userInfoState",
      "playState",
      "playList",
      "currenPlayList",
      "playModel",
      "playIndex",
      "songListState",
      "fullScreen",
      "lyricObj",
      "ListIndex",
      "searchKey"
    ]),

  },
  methods: {
    ...mapActions(["SETSEARCHSTATE", "SETRECOMMENTDATA", "SETUSERINFOSTATE","SETPLAYS"]),
    ...mapMutations(["setplayState","setplayList","setcurrenPlayList","setplayModel","setplayIndex","setfullScreen","setsongListState","setlyricObj","setListIndex","setsearchKey"]),
    // 计算播放量
    CountCal(value) {
      let play = "";
      let playlength = 0;
      play = value+'';
      playlength = play.length;
      if (playlength <= 4) {
        return play + "次";
      } else {
        return play.substr(0, playlength - 4) + "万次";
      }
    }
  },
}
export default MusicMixins;
