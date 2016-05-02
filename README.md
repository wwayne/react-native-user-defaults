# react-native-user-defaults
[![Version](http://img.shields.io/npm/v/react-native-user-defaults.svg)](https://www.npmjs.org/package/react-native-user-defaults)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)
[![Circle CI](https://circleci.com/gh/wwayne/react-native-user-defaults/tree/master.svg?style=svg)](https://circleci.com/gh/wwayne/react-native-user-defaults/tree/master)

## When to use UserDefaults
when you want to store some small ,insensitive and permanent information in your app

## Installation

1. `npm install react-native-user-defaults`
2. open xcode, right click on `Libraries`, then click `Add Files...`, select `node_modules -> react-native-user-defaults -> RCTUserDefaults.xcodeproj`
3. still in xcode, select main project file, then `Build Phases -> Link Binary... -> Add items -> libRCTUserDefaults.a`

If you are not clear about the step 2 and 3, you can check react-native [official doc](https://facebook.github.io/react-native/docs/linking-libraries-ios.html#content) , follow the step 1 and 2 in the official doc.

## Usage
In **objective-c** and **swift**, you have to use specific method for specific type, like `setObject` and `stringForKey`. But in **react-native**, I believe that all you need is just `set` and `get`.

Every method supports `callback` and `promise`

```
import userDefaults from 'react-native-user-defaults'
```
#### Set information for a key

```
set({String}, {String, Number, Bool, Object, Array}, [,suiteName] [,callback])

Example:
userDefaults.set("key1", "valueIsString")
 .then(data => console.log(data))   // Save success

userDefaults.set("key2", [1, true], "group.com.company.app", (err, data) => {
 if(!err) console.log(data)         // Save success
})
```

#### Get information of a key

```
get({String} [,suiteName] [,callback])

Example:
userDefaults.get("key1")
 .then(data => console.log(data))   // value for the key1

userDefaults.get("key2", "group.com.company.app", (err, data) => {
 if(!err) console.log(data)         // value for the key2
})
```

#### Remove an item

```
remove({String} [,suiteName] [,callback])

Example:
userDefaults.remove("key1")
 .then(data => console.log(data))   // Remove success
```

#### Empty all items which are not default(APP default settings will be reserved)

```
empty([suiteName] [,callback])

Example:
userDefaults.empty()
 .then(data => console.log(data))   // Empty success
```

## Troubleshooting

1. No tests? I have tested all methods, I promise. I've checked other famous react-native components, they all don't have tests, I think we are all seeking a way of formal tests.
2. Why not swift? I wrote this in swift at the beginning, but I find it's hard for others and even myself to integrate it into an existed project.
3. Type bug? if you `set('key1', '12')`, then `get('key1')`, you will get `12`, not `'12'`, I don't take this as a bug so that we can use this component more conveniently. If you don't think so, tell me.

## License
MIT
