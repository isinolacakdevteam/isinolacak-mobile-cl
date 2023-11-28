require "json"

package = JSON.parse(File.read(File.join(__dir__, "package.json")))

Pod::Spec.new do |s|
  s.name         = package["name"]
  s.version      = package["version"]
  s.summary      = package["description"]
  s.homepage     = package["homepage"]
  s.license      = package["license"]
  s.authors      = package["author"]

  s.platforms    = { :ios => "10.0" }
  s.source       = { :git => "#{package["repository"]}.git", :tag => "v#{s.version}" }

  s.ios.resource_bundle = { 'IOCoreMobileFonts' => 'src/assets/fonts/*' }
  s.info_plist = {
    'UIAppFonts' => [
      'Inter-Black.ttf',
      'Inter-Bold.ttf',
      'Inter-ExtraBold.ttf',
      'Inter-ExtraLight.ttf',
      'Inter-Light.ttf',
      'Inter-Medium.ttf',
      'Inter-Regular.ttf',
      'Inter-SemiBold.ttf',
      'Inter-Thin.ttf',
    ]
  }
end
