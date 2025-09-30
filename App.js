import { StyleSheet, Text, View, Image, SectionList } from 'react-native';

const Header = (props) => {
  return <Text style={styles.header}> {props.name} </Text>;
};

const Cell = (props) => {
  const randomNumber = Math.floor(Math.random() * 100 + 50);
  return (
    <View style={styles.profContainer}>
      <Image
        style={styles.profImage}
        source={{
          uri: `https://picsum.photos/${randomNumber}`,
          width: 100,
          height: 100,
        }}
      />
      <Text> Hello, I am {props.name}</Text>
    </View>
  );
};

const DATA = [
  {
    title: 'Profesores',
    data: [
      { id: 1, name: 'Mario' },
      { id: 2, name: 'Edgar' },
      { id: 3, name: 'Sasha' },
    ],
  },
  {
    title: 'Estudiantes',
    data: [
      { id: 4, name: 'Diana' },
      { id: 5, name: 'Libia' },
      { id: 6, name: 'Carlos' },
    ],
  },
];

export default App = () => {
  return (
    <SectionList
      sections={DATA}
      renderItem={({ item }) => <Cell name={item.name} />}
      renderSectionHeader={({ section: { title } }) => <Header name={title} />}
      keyExtractor={(item) => item.id}
    />
  );
};

const styles = StyleSheet.create({
  profContainer: {
    flexDirection: 'row',
    padding: 10,
    margin: 10,
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
  profImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    padding: 10,
  },
});
