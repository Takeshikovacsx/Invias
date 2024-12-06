import React, { useEffect, useState } from 'react';
import { View, Text, PermissionsAndroid, Platform, StyleSheet } from 'react-native';
import MapboxGL from '@react-native-mapbox-gl/maps';
import Geolocation from '@react-native-community/geolocation';

const MapboxScreen = () => {
  const [coordinate, setCoordinate] = useState(null);

  useEffect(() => {
    if (Platform.OS === 'android') {
      PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION)
        .then(granted => {
          if (granted === PermissionsAndroid.RESULTS.GRANTED) {
            getLocation();
          }
        });
    } else {
      getLocation();
    }
  }, []);

  const getLocation = () => {
    Geolocation.getCurrentPosition(
      position => {
        const { latitude, longitude } = position.coords;
        setCoordinate([longitude, latitude]);
      },
      error => alert('Error getting location'),
      { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 },
    );
  };

  return (
    <View style={styles.container}>
      {coordinate ? (
        <MapboxGL.MapView style={styles.map}>
          <MapboxGL.Camera
            zoomLevel={10}
            centerCoordinate={coordinate}
          />
          <MapboxGL.PointAnnotation coordinate={coordinate}>
            <View style={styles.marker} />
          </MapboxGL.PointAnnotation>
        </MapboxGL.MapView>
      ) : (
        <Text>Cargando mapa...</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    flex: 1,
  },
  marker: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: 'red',
  },
});

export default MapboxScreen;
