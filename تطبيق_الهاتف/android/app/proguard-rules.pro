# Bara El-Sandouq Proguard Safety Rules
-keepattributes *Annotation*,Signature,InnerClasses,EnclosingMethod

# Keep WebView Javascript Interfaces safe
-keepclassmembers class * {
    @android.webkit.JavascriptInterface <methods>;
}

# Keep AndroidX WebKit assets loader
-keep class androidx.webkit.** { *; }
