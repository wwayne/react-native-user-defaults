#import "RCTUserDefaults.h"

@implementation RCTUserDefaults

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(setObject:(NSString *)key value:(NSString *)value callback:(RCTResponseSenderBlock)cb) {
  NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
  [userDefaults setObject:value forKey:key];
  cb(@[[NSNull null] ,@"Save success"]);
}

RCT_EXPORT_METHOD(getObject:(NSString *)key callback:(RCTResponseSenderBlock)cb) {
  NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
  NSString *result = [userDefaults stringForKey:key];
  if (result) {
    cb(@[[NSNull null], result]);
  } else {
    cb(@[@YES]);
  }
}

RCT_EXPORT_METHOD(removeObject:(NSString *)key callback:(RCTResponseSenderBlock)cb) {
  NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
  [userDefaults removeObjectForKey:key];
  cb(@[[NSNull null] ,@"Remove success"]);
}

RCT_EXPORT_METHOD(empty:(RCTResponseSenderBlock)cb) {
  
  NSArray *defaultSetting = @[@"RCTDevMenu", @"ApplePasscodeKeyboards", @"AddingEmojiKeybordHandled",
                              @"MSVLoggingMasterSwitchEnabledKey", @"AppleITunesStoreItemKinds",
                              @"NSInterfaceStyle", @"AppleLanguagesDidMigrate", @"AppleLanguages",
                              @"NSLanguages", @"AppleKeyboardsExpanded", @"AppleKeyboards", @"AppleLocale"];
  
  NSUserDefaults *userDefaults = [NSUserDefaults standardUserDefaults];
  NSDictionary *defaultsDict = [userDefaults dictionaryRepresentation];
  for (NSString *key in [defaultsDict allKeys]) {
    NSInteger index = [defaultSetting indexOfObject:key];
    if (index == NSNotFound) {
      [userDefaults removeObjectForKey:key];
    }
  }

  cb(@[[NSNull null] ,@"Empty success"]);
}

@end
