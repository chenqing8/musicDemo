/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-16 21:51:49
 * @LastEditTime: 2019-08-19 22:56:07
 * @LastEditors: Please set LastEditors
 */
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
      "searchKey",
      "searchItemName"
    ]),

  },
  methods: {
    ...mapActions(["SETSEARCHSTATE", "SETRECOMMENTDATA", "SETUSERINFOSTATE","SETPLAYS"]),
    ...mapMutations(["setplayState","setplayList","setcurrenPlayList","setplayModel","setplayIndex","setfullScreen","setsongListState","setlyricObj","setListIndex","setsearchKey","setsearchItemName"]),
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
    },
    // 补位0
    add0(nums) {
      let length = nums.toString().length;
      if (length < 2) {
        return `0${nums}`;
      } else {
        return nums;
      }
    },
    // js时间戳格式转换
    jsDateTimeFormat(currentTime) {
      let Datat = new Date(currentTime);
      let min = Datat.getMinutes();
      let sec = Datat.getSeconds();
      return `${this.add0(min)}:${this.add0(sec)}`;
    },
    // audio时间戳格式转换
    timeFormat(currentTime) {
      let min = Math.floor(currentTime / 60) % 60;
      let sec = parseInt(currentTime % 60);
      return `${this.add0(min)}:${this.add0(sec)}`;
    },
  },
}
export default MusicMixins;
