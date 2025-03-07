// Import necessary modules
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { BlurView } from 'expo-blur';
import { StyleSheet } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

// Define the BlurTabBarBackground component
export default function BlurTabBarBackground() {
  return (
    <BlurView
      // System chrome material automatically adapts to the system's theme
      // and matches the native tab bar appearance on iOS.
      tint="systemChromeMaterial"
      intensity={100}
      style={StyleSheet.absoluteFill}
    />
  );
}

// Define the useBottomTabOverflow hook
export function useBottomTabOverflow() {
  // Get the tab bar height
  const tabHeight = useBottomTabBarHeight();
  // Get the bottom safe area inset
  const { bottom } = useSafeAreaInsets();
  // Return the tab bar overflow
  return tabHeight - bottom;
}
