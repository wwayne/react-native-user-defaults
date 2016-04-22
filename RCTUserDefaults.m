#import "RCTUserDefaults.h"

@implementation RCTUserDefaults

-(NSUserDefaults*)userDefaultsForSuiteName:(NSString *)suiteName {
    if (suiteName && ![suiteName isEqualToString:@""]) {
        return [[NSUserDefaults alloc] initWithSuiteName:suiteName];
    }
    return [NSUserDefaults standardUserDefaults];
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(setObject:(NSString *)key value:(NSString *)value suiteName:(NSString *)suiteName callback:(RCTResponseSenderBlock)cb) {
  NSUserDefaults *userDefaults = [self userDefaultsForSuiteName:suiteName];
  [userDefaults setObject:value forKey:key];
  cb(@[[NSNull null] ,@"Save success"]);
}

RCT_EXPORT_METHOD(getObject:(NSString *)key suiteName:(NSString *)suiteName callback:(RCTResponseSenderBlock)cb) {
  NSUserDefaults *userDefaults = [self userDefaultsForSuiteName:suiteName];
  NSString *result = [userDefaults stringForKey:key];
  if (result) {
    cb(@[[NSNull null], result]);
  } else {
    cb(@[@YES]);
  }
}

RCT_EXPORT_METHOD(removeObject:(NSString *)key suiteName:(NSString *)suiteName callback:(RCTResponseSenderBlock)cb) {
  NSUserDefaults *userDefaults = [self userDefaultsForSuiteName:suiteName];
  [userDefaults removeObjectForKey:key];
  cb(@[[NSNull null] ,@"Remove success"]);
}

RCT_EXPORT_METHOD(empty:(NSString *)suiteName callback:(RCTResponseSenderBlock)cb) {

  NSArray *defaultSetting = @[@"RCTDevMenu", @"ApplePasscodeKeyboards", @"AddingEmojiKeybordHandled",
                              @"MSVLoggingMasterSwitchEnabledKey", @"AppleITunesStoreItemKinds",
                              @"NSInterfaceStyle", @"AppleLanguagesDidMigrate", @"AppleLanguages",
                              @"NSLanguages", @"AppleKeyboardsExpanded", @"AppleKeyboards", @"AppleLocale"];

  NSUserDefaults *userDefaults = [self userDefaultsForSuiteName:suiteName];
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
