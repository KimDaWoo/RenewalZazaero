import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  
  alignItemsCenter: {alignItems: 'center'},
  alignItemsFlexStart: {alignItems: 'flex-start'},

  mainContainer_1: { // padding을 주어 양 옆을 비웁니다. 
    flex: 1,
    flexDirection: 'column', 
    padding: 24,
    backgroundColor: '#ffffff', 
  },
  mainContainer_2: { // 가로 직선을 그어야 하는 경우, 상위 View 컴포넌트에 사용한 후, 하위 View 컴포넌트에서 가장자리 간격을 조정합니다.
    flex: 1,
    flexDirection: 'column', 
    backgroundColor: '#ffffff', 
  },
  sectionContainer_1: {
    flexDirection: 'column', 
    alignItems: 'center',
    width: "100%"
  },
  sectionContainer_2: {
    flexDirection: 'column', 
    width: "100%"
  },
  sectionContainer_3: { // mainContainer_2을 사용하는 경우 하위 View에서 해당 스타일을 사용합니다
    flexDirection: 'column', 
    width: "100%",
    padding: 24,
  },

  horizontalAlignment: { //여러 컴포넌트를 가로 일렬 정렬 시, View Style로 사용 가능
    flexDirection: 'row',
    alignItems: 'center',
  },

  mgTB14 : {
    marginTop : 14,
    marginBottom : 14,
  },

  w100: { width: "100%" },
  justifyCntCneter : {justifyContent: 'center'},
  
});

export default styles;