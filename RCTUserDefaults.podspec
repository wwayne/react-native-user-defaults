require 'json'
version = JSON.parse(File.read('package.json'))["version"]

Pod::Spec.new do |s|

  s.name           = "RCTUserDefaults"
  s.version        = version
  s.summary        = "React Native User Defaults"
  s.homepage       = "https://github.com/wwayne/react-native-user-defaults"
  s.license        = "MIT"
  s.author         = "wwayne"
  s.platform       = :ios, "7.0"
  s.source         = { :git => "https://github.com/wwayne/react-native-user-defaults", :tag => "v#{s.version}" }
  s.source_files   = '*.{h,m}'
  s.preserve_paths = "**/*.js"
  s.dependency 'React'

end
