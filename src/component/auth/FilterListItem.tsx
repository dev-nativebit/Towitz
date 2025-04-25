import React from 'react';
import {Pressable, Text} from '@/component';
import {fonts} from '@/style';

export interface FilterListItemProps {
  title: string;
  isSelected: boolean;
  onPress: () => void;
}

export const FilterListItem: React.FC<FilterListItemProps> = ({
  title,
  isSelected,
  onPress,
}: FilterListItemProps) => {
  return (
    <Pressable
      onPress={onPress}
      backgroundColor={isSelected ? 'primary2' : 'white'}
      borderRadius={10}
      width={'45%'}
      flexDirection={'row'}
      marginHorizontal={'s'}
      marginTop={'sr'}
      paddingVertical={'srr'}
      paddingHorizontal={'s'}
      justifyContent={'center'}
      borderWidth={1}
      borderColor={isSelected ? 'primary' : 'gray'}>
      <Text
        fontFamily={fonts.medium}
        fontSize={13}
        fontWeight={'500'}
        lineHeight={16.8}
        color={isSelected ? 'gray' : 'black'}
        textAlign={'center'}>
        {title}
      </Text>
    </Pressable>
  );
};
