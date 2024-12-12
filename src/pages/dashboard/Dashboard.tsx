import React from 'react';
import { View, Text, TextInput, FlatList, TouchableOpacity, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './styles';

const data = [
  {
    id: '1',
    name: 'Amazon',
    email: 'adimaelbr@gmail.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg',
  },
  {
    id: '2',
    name: 'Apple',
    email: 'adimaelbr@gmail.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
  },
  {
    id: '3',
    name: 'Airbnb',
    phone: '+55 73 999738916',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a6/Airbnb_Logo_B%C3%A9lo.svg',
  },
  {
    id: '4',
    name: 'Adobe',
    email: 'adimaelbr@gmail.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/6/6a/Adobe_Acrobat_DC_logo.png',
  },
];

export default function Dashboard() {
  const renderItem = ({ item }: any) => (
    <View style={styles.itemContainer}>
      <Image source={{ uri: item.logo }} style={styles.logo} />
      <View style={styles.details}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.subtitle}>{item.email || item.phone}</Text>
      </View>
      <TouchableOpacity style={styles.moreButton}>
        <Icon name="ellipsis-horizontal" size={20} color="#000" />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>WizeLock</Text>
      <View style={styles.searchContainer}>
        <Icon name="search" size={20} color="#aaa" style={styles.searchIcon} />
        <TextInput placeholder="Search Password" style={styles.searchInput} />
        <TouchableOpacity style={styles.addButton}>
          <Icon name="add-circle" size={30} color="#007BFF" />
        </TouchableOpacity>
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        style={styles.list}
      />
    </View>
  );
}
