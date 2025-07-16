# 📅 React Native Date-Formatting Showcase

Lightweight **date-fns (+ date-fns-tz)** demo project built with **React Native CLI + TypeScript**.  
Shows multiple real‑world patterns: locale formatting, time‑zones, relative time, live clocks and add/subtract helpers.

![Platform](https://img.shields.io/badge/platform-React%20Native-blue)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Installation

```bash
git clone https://github.com/Enver-Onur-Cogalan/react-native-date-formatting.git
cd dateTest
yarn install
# iOS
yarn ios
# Android
yarn android
```

---

## 📂 Project Structure

```
src/
  ├─ utils/            # formatDate, formatInTZ, timeAgo...
  ├─ components/       # LiveClock, LiveTZClock, TimeAgo...
  ├─ screens/
  │   └─ DemoScreen.tsx
  └─ App.tsx
__tests__/             # Jest + RTL tests
```

---

## 🛠️ Key Features

| Component / Util | API | Explanation |
|------------------|-----|----------|
| `formatDate` | `format()` | Generic pattern formatter |
| `formatInTZ` | `formatInTimeZone()` | IANA time‑zone helper |
| `timeAgo` | `formatDistanceToNow()` | *x minutes ago* |
| `LiveClock` | `setInterval` + `format()` | Device live clock |
| `LiveTZClock` | `formatInTimeZone()` | Live clock in any TZ |
| `AddSubtractExample` | `addDays`, `subHours` | Date math demo |

---

## 🧪 Tests

```bash
yarn test
```

