
import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { lighterWhite } from '../utils/Colors';

const Button = ({ deleteAllItems }) => (
	<TouchableOpacity onPress={deleteAllItems}>
		<MaterialIcons name="delete-sweep" size={24} color={lighterWhite} />
	</TouchableOpacity>
);

export default Button;