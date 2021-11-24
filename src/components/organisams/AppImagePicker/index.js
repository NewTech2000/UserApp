import React from "react";
import { Text, View ,PermissionsAndroid} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { Modal, Portal, Title, Paragraph, Button } from "react-native-paper";
import { launchCamera, launchImageLibrary } from "react-native-image-picker";
import * as ImagePicker from "react-native-image-picker";
import styles from "./Styles";
import colors from "../../../constants/colors";
export default function AppImagePicker({modal,setModal,setPicture,...props}) {


  const selectImage = () => {
    var options = {
      title: "Select Image",
      customButtons: [
        {
          name: "customOptionKey",
          title: "Choose file from Custom Option",
        },
      ],
      storageOptions: {
        skipBackup: true,
      },
    };

    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
      } else if (response.error) {
      } else if (response.customButton) {
      } else {
        setPicture(response.assets[0].uri);
        setModal(false);
      }
    });
  };

  const requestCameraPermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.CAMERA,
          {
            title: "Camera Permission",
            message: "App needs camera permission",
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
        return false;
      }
    } else return true;
  };

  const requestExternalWritePermission = async () => {
    if (Platform.OS === "android") {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
          {
            title: "External Storage Write Permission",
            message: "App needs write permission",
          },
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.warn(err);
      }
      return false;
    } else return true;
  };

  const captureImage = async type => {
    let options = {
      quality: 1,
      saveToPhotos: true,
    };
    let isCameraPermitted = await requestCameraPermission();
    let isStoragePermitted = await requestExternalWritePermission();

    if (isCameraPermitted && isStoragePermitted) {
      launchCamera(options, response => {
        if (response.didCancel) {
          return;
        } else if (response.errorCode == "camera_unavailable") {
          return;
        } else if (response.errorCode == "permission") {
          return;
        } else if (response.errorCode == "others") {
          return;
        }

        setProfilePicture(response.assets[0].uri);
        setModal(false);
      });
    }
  };

  return (
    <View>
    
    <Portal>
        <Modal
          visible={modal}
          contentContainerStyle={styles.modalContainerStyle}
          onRequestClose={setModal}>
          <Title style={styles.modalTitle}>Select Option</Title>
          <Button
            icon="camera"
            onPress={() => captureImage()}
            style={styles.modalButtons}
            color={colors.darkGray}
            mode="outlined">
            Take a Photo
          </Button>
          <Button
            icon="image"
            onPress={() => selectImage()}
            style={styles.modalButtons}
            color={colors.darkGray}
            mode="outlined">
            From Gallery
          </Button>
          <Button
            onPress={setModal}
            style={styles.modalButtons}
            color={colors.gray}>
            Close
          </Button>
          <Paragraph style={styles.modalPermissionMessage}></Paragraph>
        </Modal>
      </Portal>
    </View>
  );
}
