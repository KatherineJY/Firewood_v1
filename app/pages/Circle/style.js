import { StyleSheet,Dimensions } from 'react-native';
import { PALETTA, SIZE } from '../../style/Common';

const {width,height} = Dimensions.get('window');

var styles = StyleSheet.create({
    section:{
        paddingHorizontal:20,
        paddingVertical:15,
    },
    title: {
        fontSize:SIZE.VITAL_NAV_TITLE,
        color:PALETTA.VITAL_TITLE,
    },
    trends: {
      paddingVertical:15,
      flexDirection:'row',
    },
    trendsHead:{
      width:40,
      height:40,
      borderRadius:20,
      overflow:'hidden',
    },
    trendsRight:{
      flex:1,
      paddingLeft:15,
    },
    trendsTitleBlock:{
      flexDirection:'row',
      alignItems:'center',
    },
    trendsTitleLink: {
      fontSize:SIZE.NORMAL_TITLE,
      color:PALETTA.VITAL_LINK,
    },
    trendsTitleNormal:{
      fontSize:SIZE.NORMAL_TITLE,
      color:PALETTA.NORMAL_666,
      marginLeft:3,
    },
    trendsTime:{
      fontSize:SIZE.LIGHT_TIME,
      color:PALETTA.NORMAL_b2,
      marginTop:3,
    },
    trendsDes:{
      fontSize:SIZE.NORMAL_CONTENT,
      color:PALETTA.VITAL_TITLE,
      marginTop:5,
    },
    trendsShare:{
      flexDirection:'row',
      marginTop:5,
      backgroundColor:PALETTA.LOGHT_SPLIT_BG,
      padding:5,
    },
    trendsShareTitle:{
      fontSize:SIZE.LIGHT_TIP,
      color:PALETTA.VITAL_TITLE,
    },
    trendsShareTip:{
      fontSize:SIZE.LIGHT_SMALL_TIP,
      color:PALETTA.NORMAL_b2,
    },
    trendsToolBlock:{
      flexDirection:'row',
      marginTop:5,
      justifyContent:'flex-end',
    },
    trendToolLi: {
      flexDirection:'row',
      marginLeft:15,
      alignItems:'center',
    },
    trendsTool:{
      fontSize:SIZE.LIGHT_TIP,
      color:PALETTA.NORMAL_666,
      marginLeft:5,
    },
});

export default styles;