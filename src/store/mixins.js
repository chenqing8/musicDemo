import {
  mapGetters,
  mapActions
} from "vuex";
const MusicMixins = {
  computed: {
    ...mapGetters([
      "searchState",
      "recommentData",
      "userInfoState"
    ]),

  },
  methods: {
    ...mapActions(["SETSEARCHSTATE", "SETRECOMMENTDATA", "SETUSERINFOSTATE"]),
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
