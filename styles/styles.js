const { StyleSheet } = require('react-native');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  fruitCard: {
    backgroundColor: '#ffffff',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
    width: '100%',
  },
  fruitImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
  },
  fruitName: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
  },
  fruitDescription: {
    fontSize: 16,
    textAlign: 'center',
    color: '#555',
  },
});

module.exports = styles;