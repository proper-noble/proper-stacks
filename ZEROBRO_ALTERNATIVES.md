# Top 2 Alternatives to ZeroBro Project

This document provides information about the top 2 GitHub alternatives to the ZeroBro project, based on popularity, features, and community support.

## Overview

ZeroBro is an open-source, cost-effective DIY alternative to the Flipper Zero device, designed for budget-conscious enthusiasts who want similar signal hacking and hardware interfacing capabilities using ESP32 and Arduino Pro Micro boards.

## The Top 2 Alternatives

### 1. ESP32 Marauder
- **GitHub:** https://github.com/justcallmekoko/ESP32Marauder
- **Stars:** 9,430 ⭐
- **Forks:** 1,047
- **Language:** C++

A comprehensive suite of WiFi/Bluetooth offensive and defensive tools for the ESP32. ESP32 Marauder is one of the most popular hardware pentesting platforms, offering extensive capabilities for wireless security testing.

**Key Features:**
- WiFi deauthentication attacks and beacon spam
- Packet capture and sniffing (including EAPOL handshakes)
- Evil Portal attacks (fake access points with phishing portals)
- Bluetooth scanning and flooding
- Wardriving with GPS integration
- Support for Flipper Zero WiFi devboard
- Compatible with various ESP32 boards with TFT displays

### 2. Bruce
- **GitHub:** https://github.com/BruceDevices/firmware
- **Stars:** 4,385 ⭐
- **Forks:** 1,357
- **Language:** C

Predatory ESP32 Firmware designed specifically for penetration testing and offensive security. Bruce is a powerful open-source multitool firmware that supports a wide range of hardware including M5Stack and LilyGo devices.

**Key Features:**
- Advanced WiFi attacks (deauth, Evil Portal, DPWO, wardriving)
- Bluetooth Low Energy (BLE) attacks and HID emulation
- RF jamming and RFID reading/cloning (PN532 support)
- Infrared remote emulation with multiple protocols
- BadUSB functionality for USB HID attacks
- JavaScript scripting engine for custom attacks
- GPS mapping and file manager
- Support for M5Stack Cardputer, StickC, and LilyGo devices

## Quick Comparison

| Feature | ZeroBro | ESP32 Marauder | Bruce |
|---------|---------|----------------|-------|
| GitHub Stars | ~300 | 9,430 | 4,385 |
| Primary Platform | ESP32 + Arduino Micro | ESP32 | ESP32 (M5Stack/LilyGo) |
| WiFi Attacks | ✓ | ✓✓✓ | ✓✓✓ |
| Bluetooth/BLE | Basic | ✓✓ | ✓✓✓ |
| RFID/NFC | ✓✓ | ✗ | ✓✓ |
| Infrared | ✓ | ✗ | ✓✓ |
| BadUSB | ✓✓ | ✗ | ✓✓ |
| Community Size | Small | Very Large | Large |
| Documentation | Good | Excellent | Excellent |

## Conclusion

Both ESP32 Marauder and Bruce are excellent alternatives to ZeroBro, each with their own strengths:

- **Choose ESP32 Marauder** if you're primarily focused on WiFi and Bluetooth pentesting, want the largest community support, or are using it with Flipper Zero.
- **Choose Bruce** if you need a comprehensive multitool with RFID/NFC, infrared, BadUSB capabilities, and prefer M5Stack or LilyGo hardware.
- **Choose ZeroBro** if you want a DIY project that combines multiple boards (ESP32 + Arduino Micro) and are interested in the educational aspect of building your own device.

## Legal Notice

**Important:** These tools are intended for ethical hacking, security research, and educational purposes only. Use them only on networks and devices you own or have explicit permission to test. Unauthorized use is illegal and can result in severe penalties.

## Accessing the Web Page

To view the interactive comparison page, navigate to `/zerobro-alternatives` in the application.
