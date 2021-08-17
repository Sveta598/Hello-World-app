import React from 'react';
import {Text} from 'react-native-elements';
import {View} from 'react-native';

const HeaderTitle = props => {
  const {title, subtitle} = props;
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          fontFamily: 'SFProRounded-Bold',
          fontSize: 16,
          lineHeight: 16,
        }}>
        {title}
      </Text>
      {subtitle && (
        <Text style={{fontSize: 13, lineHeight: 13, marginTop: 5}}>
          {subtitle}
        </Text>
      )}
    </View>
  );
};

export default HeaderTitle;
