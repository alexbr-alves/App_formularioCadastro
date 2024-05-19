import React from 'react';
import { View } from 'react-native';
import { TextInput, HelperText } from "react-native-paper";

class CustomTextInput extends React.Component {
  render() {
    const { value, label, mode, error, onChangeText, keyboardType, maxLength } = this.props;

    return (
      <View>
        <TextInput
          value={value}
          label={label}
          mode={mode}
          error={error}
          onChangeText={onChangeText}
          keyboardType={keyboardType}
          maxLength={maxLength}
          {...this.props} // Passando outras props diretamente para o componente TextInput
        />
        {error && <HelperText type="error" visible={error}>{Mensagem}</HelperText>}
      </View>
    );
  }
}

export default CustomTextInput;
