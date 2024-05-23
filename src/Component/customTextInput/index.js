import React from 'react';
import { View } from 'react-native';
import { HelperText, TextInput } from "react-native-paper";

class CustomTextInput extends React.Component {
  render() {
    const { value, label, mode, error, onChangeText, keyboardType, maxLength, mensagem, editable, style } = this.props;

    return (
      <View>
        <TextInput
          value={value}
          label={label}
          mode={mode}
          error={error}
          style={style}
          editable={editable}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          {...this.props}
        />
        {error && <HelperText type="error" visible={error}>{mensagem}</HelperText>}
      </View>
    );
  }
}

export default CustomTextInput;
