import React from 'react'
import { Dimensions, FlatList, Image, TouchableOpacity } from 'react-native'

import { formatPhotoUri } from '../api/api'


export default function PhotoGrid({ photos, numColumns, onEndReached, navigation }) {
  const { width } = Dimensions.get('window')

  const size = width / numColumns

  return (
    <FlatList
      data={photos}
      keyExtractor={(item) => item.id}
      numColumns={numColumns}
      onEndReached={onEndReached}
      renderItem={({ item }) => (
        <TouchableOpacity
            onPress={() => navigation.navigate('Details', {
              item : item
            }) }
        >
            <Image
              source={{
                width: size,
                height: size,
                uri: formatPhotoUri(item.id, size, size),
              }}
            />
        </TouchableOpacity>
      )}
    />
  )
}
