import React, {useEffect, useState} from 'react';
import {
  hideFullScreenProgress,
  Screen,
  showFullScreenProgress,
  StatusBarType,
  Text,
} from '@/component';
import {useTheme} from '@shopify/restyle';
import {Theme} from '@/style';
import {
  Camera,
  useCameraDevice,
  useCodeScanner,
} from 'react-native-vision-camera';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {goBack, navigate, Routes} from '@/navigation/AppNavigation';
import {GetQrCodeDetailApiParams} from '@/api';
import {actions} from '@/redux/root.store';


export const QRScannerScreen:React.FC = () => {
  const {colors} =useTheme<Theme>()
  const [hasPermission, setHasPermission] = useState(false);
  const [refresh, setRefresh] = useState(false);
  const device = useCameraDevice("back");
  const [qrValue, setQrValue] = useState('');

  const codeScanner = useCodeScanner({
    codeTypes: ["qr"],
    onCodeScanned: (codes,frame) => {
      setQrValue(codes[0].value ?? '')
      if (qrValue !== codes[0].value && codes[0].value) {
        callQrDetailApi(codes[0].value)
      }
    },
  });

  const callQrDetailApi = (value:string) =>{
    const params:GetQrCodeDetailApiParams ={
      qr_value:value
    }
    showFullScreenProgress()
    actions.qrCodeDetailApiThunkCallActions(params).then(response => {
      hideFullScreenProgress()
      setQrValue('')
      if (response.isSuccess) {
        //Navigate to Detail Screen
        navigate({
          screenName:Routes.QrDetail
        })
      }
    })
  }
  useEffect(() => {
    // exception case
    setRefresh(!refresh);
  }, [device, hasPermission]);

  useEffect(() => {
    const requestCameraPermission = async () => {
      const permission = await Camera.requestCameraPermission();
      console.log("Camera.requestCameraPermission ", permission);
      setHasPermission(permission === "granted");
    };

    requestCameraPermission();

    //if it is idle for 15 secs, it will be closed
    setTimeout(() => {
      // props.onRead(null);
    }, 15 * 1000);
  }, []);

  if (device == null || !hasPermission) {
    return (
      <View style={styles.page2}>
        <Text style={{ backgroundColor: "white" }}>
          Camera not available or not permitted
        </Text>
      </View>
    );
  }



  return(
    <Screen
      backgroundColor={'antiFlashWhite2'}
      statusBarColor={colors.primary}
      statusBarType={StatusBarType.Dark}>

      <View style={styles.page2}>
        <Camera
          codeScanner={codeScanner}
          style={StyleSheet.absoluteFill}
          device={device}
          isActive={true}
        />
        <View style={styles.footer}>
          <TouchableOpacity
            style={{
              paddingVertical: 8,
              paddingHorizontal: 10,
              borderWidth: 1,
              borderRadius: 5,
              borderColor: "snow",
              alignItems: "center",
            }}
            onPress={() => {
             goBack()
            }}
          >
            <Text style={{ color: "snow", fontSize: 14 }}>Close</Text>
          </TouchableOpacity>
        </View>
      </View>

    </Screen>
  )
}

const styles = StyleSheet.create({
  page2: {
    flex: 1,
    position: "absolute",
    top: 0,
    height: "100%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  backHeader: {
    backgroundColor: "#00000090",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    padding: "2%",
    height: "5%",
    width: "100%",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  footer: {
    backgroundColor: "#00000090",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "10%",
    height: "20%",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
});
